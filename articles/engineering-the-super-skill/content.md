# 手把手带你工程化一个超级 Skill——以 Testone 平台接口测试 Skill 为例

> 本文是《[当我把 AI 变成一个"算法"：Skill 工程化设计的心路历程](#/article/skill-design-sharing)》的续篇。前置文章讲"道"——CLI 是什么、Workflow 是什么、Gate 门禁和步进式披露的设计哲学。本文讲"术"——在一个真实的、总计上万行的 Skill 工程项目中，这些哲学是怎么落地的。
>
> 读者预期：你已经读过前置文章，对 CLI/Workflow/Gate/状态持久化有基本概念。不熟悉也没关系，本文会在关键处给出简要解释和原文链接。

---

## 一、痛点：一台没有说明书的复苏呼吸机

### 1.1 Testone 是什么

Testone 是公司内部的接口测试平台。你可以把它理解为"公司版 Postman"，但面向 tRPC 微服务体系做了深度定制：支持多节点 trace 链路编排、认证节点自动签名、Java 脚本节点做数据提取和过滤、Redis 节点做前置数据准备——功能非常完整。

但功能完整不等于好用。实际情况是：**使用门槛极高，人用不明白，Agent 更用不明白。**

### 1.2 手工配一次接口测试有多痛

让我用一个真实场景还原。假设你要测一个"获取用户列表"的 tRPC 接口，以下是你需要手动搞定的事：

**前置依赖收集**——接口的 proto 定义在哪个仓库？服务的 `polarisDiscover.serviceName` 是什么？命名空间是 Development 还是 Production？这些信息散落在 `trpc_go.yaml`、北极星平台、123 平台三个地方。

**认证链路设计**——这个接口有没有签名校验？如果有，是太湖签名（SHA256 + Redis token + 特定 header 组合）还是盘古签名（MD5 + 不同的 key 格式）？Redis 的 key pattern 是 `auth:token:{uid}` 还是 `session:{uid}:info`？签名结果放哪个 header 字段？ 这些答案藏在项目的 `filter/` 目录里，你得读代码才知道。

**上下游依赖编排**——接口 B 的请求参数里有个 `resource_id`，它来自接口 A 的响应。接口 A 又需要先往 Redis 里塞一条 mock 数据。这就是 trace 链路设计——你得想清楚节点顺序、节点间的数据传递关系、每个节点的 extract 变量命名。

**参数真实值获取**——`redis_server` 是 `11.185.xx.xxx:6379` 还是 `9.134.xxx.xxx:6379`？`gateway_domain` 是带 `/abc` 后缀还是带 `/mcp` 后缀？这些值不能用占位符（平台不解析 `${variable}` 语法，写了直接报 NullPointerException 级联失败）。

**JSON 结构规范**——一个合法的 testcase JSON 动辄上百行。`checkList` 里的 `key` 字段在断言 HTTP 状态码时必须填空字符串 `""`，而不是你直觉里的 `"code"` 或 `"statusCode"`——填错了不报语法错误，只会在运行时静默跳过断言，你的测试等于没测。

把这些加在一起：一次完整的接口测试配置，熟练的人需要 1-2 小时，不熟练的人可能一天都配不对。

> 这就是"拿着一堆没有说明书的零件拼复苏呼吸机"——零件都有，功能都全，但不看着图纸拼，你根本拼不出能跑的东西。

### 1.3 让 Agent 来做呢？

"那接入 MCP，让 Agent 自己调平台 API 不就行了？"

不行。即便给 Agent 接入了 Testone 的全套 API，Agent 面对的局面是：

- 一堆没有使用说明的工具（API 文档只说参数格式，不说业务含义）
- 不知道调用顺序（先 scaffold 还是先 upload？认证节点放在 trace 的哪个位置？）
- 不知道认证怎么配置（太湖签名的 Java 脚本模板长什么样？哪些字段是必填的？）
- 不知道 trace 该怎么设计（哪些接口可以合并到一条链路？什么时候该拆分？）

Agent 自行规划一条完整的测试链路，无异于让一个刚入职的实习生在没有任何文档的情况下，独立完成一个从未接触过的平台的全流程配置。结果是确定的：要么幻觉乱填，要么反复试错耗尽上下文窗口。

**所以我做了这个 Skill。**

不是给 Agent 更多工具，而是给它一套**完整的工作流程 + 每一步的精确指令 + 固化在 CLI 里的确定性操作**。Agent 不需要"想明白该怎么做"，它只需要"按指令执行当前这一步"。

![Agent 的两种处境：混乱 vs. 流水线](articles/engineering-the-super-skill/images/fig1_pain_vs_pipeline.png)

---

## 二、成果预览：全自动、全链路、零手写 JSON

> 注：这个 Skill 暂时还没有开放获取途径

在讲怎么构建之前，先看看这个 Skill 能做到什么。

### 2.1 一句话触发，九步自动完成

用户只需要说一句"帮我测一下这个接口"，Skill 就启动一条完整的工作流水线：

| 步骤 | 做什么 | 谁在干活 |
|------|--------|---------|
| ① 环境检查 | 自动检测 Go 环境、Token 有效性、CLI 可用性、`trpc_go.yaml` 存在性 | CLI（全自动） |
| ② Proto 提取 | 从 GOMODCACHE 自动提取接口的 proto 定义文件 | CLI（全自动） |
| ③ 接口确认 | Agent 读代码理解项目，列出可测接口，用户确认或调整 | Agent + 用户 |
| ④ 框架配置 | 自动从 123 平台查询 serviceName、namespace 等运行时配置 | CLI（全自动） |
| ⑤ **用例规划** | 读代码理解业务，设计 trace 链路方案，输出结构化方案表 | Agent |
| ⑥ **用例生成** | CLI 驱动逐节点生成循环：scaffold 骨架 → Agent 填参数 → 实时校验 | Agent + CLI 协作 |
| ⑦ 上传 | 将生成的 testcase JSON 上传到优测平台 | CLI（全自动） |
| ⑧ 执行测试 | 触发测试任务，等待平台返回结果 | CLI + Agent 解读 |
| ⑨ 报告归因 | Agent 解读测试结果，定位失败原因，给出修复建议 | Agent |

注意"谁在干活"这一列——Agent 只在需要"理解"和"判断"的步骤出场（③⑤⑥⑧⑨），纯确定性的操作全部由 CLI 在幕后完成。这就是前置文章里讲的"Agent 是大脑，CLI 是手脚"在这个项目里的具体体现。

### 2.2 用户全程不需要做什么

- 不需要知道 proto 文件在哪——CLI 自动从 GOMODCACHE 定位
- 不需要配置认证方式——CLI 读项目代码中的 filter，自动识别签名类型
- 不需要手写 JSON——scaffold 生成骨架，python3 逐节点填充
- 不需要记忆平台规范——validate 命令实时校验，规范固化在代码里
- 不需要手动上传——CLI 直接调用平台 API

用户唯一需要做的：确认"测哪几个接口"。其他全自动。

### 2.3 Before / After

**Before**（手工方式）：
- 1-2 小时配置时间
- 需要同时打开 4 个平台查信息
- 写 JSON 时反复试错（格式对了语义可能不对）
- 认证配错了运行时才发现

**After**（Skill 方式）：
- 一句话触发，全程 < 10 分钟
- 零平台切换（CLI 封装了所有查询）
- 每个节点生成后立即 validate，错误当场修正
- 认证链路由 scaffold 从配置文件读取，不靠 Agent 记忆

> 这不是"AI 帮你写代码"，而是"一整套工程化体系让 AI 在严格的轨道上执行确定性流程"。AI 只负责它擅长的事：读代码、理解业务、判断参数值。剩下的全交给 CLI。

---

## 三、架构全景：Skill 里有什么

在动手构建之前，先把整体空间感建立起来。

### 3.1 目录结构

```
utest-skill/
├── skill.md                    ← Agent 的唯一入口（模式判断 + 核心规则）
├── utest-cli.sh                ← 所有确定性操作的执行层（4000+ 行 Bash）
├── workflows/
│   └── interface-test/
│       ├── WorkFlow.md         ← 工作流元信息（名称、描述、步骤列表）
│       └── references/         ← 9 个步骤文件，每步一份指令文档
│           ├── 01-env-check.md
│           ├── 02-proto-extract.md
│           ├── ...
│           └── 09-report.md
├── references/                 ← 按需加载的参考文档（Skill 级 RAG）
│   ├── testcase-format.md      ← testcase JSON 完整规范
│   ├── auth-patterns.md        ← 认证模式决策树
│   ├── chain-design-patterns.md← trace 聚合策略
│   ├── troubleshooting.md      ← 错误排查速查表
│   ├── mutation-test-rules.md  ← 增删改测试安全规则
│   └── testcase-quickref.md    ← 快速参考（validate 失败时用）
├── scripts/                    ← 辅助脚本（全部由 CLI 内部调用）
│   ├── extract_proto.sh        ← proto 提取
│   ├── framework_cfg.py        ← 123 平台配置查询
│   └── templates/              ← Java/JSON 节点模板（参数化）
├── bin/                        ← 平台 CLI 二进制（darwin_amd64/arm64, linux_amd64）
└── cache/                      ← 运行时状态持久化
    ├── workflows/
    │   └── interface-test.state← 工作流状态快照（checkpoints + 步骤进度）
    └── .cli-context.json       ← CLI 运行时上下文（CLI 自动读写，Agent 不感知）
```

每个目录都有明确的职责边界：

- **skill.md**：Agent 读到这个文件后就知道"我是谁、我能做什么、我该怎么做"。它定义了模式判断规则（全链路 vs 单步操作）和核心行为约束。
- **utest-cli.sh**：一切确定性操作的唯一入口。Agent 永远不直接接触底层脚本、二进制或 API——只通过这一个 CLI。
- **workflows/**：工作流定义。WorkFlow.md 声明有哪些步骤，references/ 下每步一个文件描述具体指令。
- **references/**：知识库。不全量注入，而是"索引注入 + 按需读取"——Agent 看到轻量索引头（一行 trigger 描述），自行判断需要哪个 section，再调 CLI 按行号读取对应片段。完整设计见 §4.4。
- **scripts/** 和 **bin/**：工具层。Agent 不感知它们的存在，CLI 在幕后调用。
- **cache/.cli-context.json**：CLI 自身的运行时上下文文件。存储 CLI 在工作流推进过程中需要跨步骤记忆的运营数据（如 `output_dir`、`upload_batch_id`），由 CLI 在 `--start` 时创建、`--abort` 时清除、各步骤中自动填充。Agent 完全不感知这个文件的存在——它不读、不写、不提交。这是三层数据模型中"CLI-Context"层的物理载体，与 `.state` 文件中的 checkpoint 数据形成明确的职责分离。详见 §5.3。

### 3.2 `.utest-project.yaml`：Skill 与项目之间的边界

这个文件不在 Skill 目录里，而在**目标项目的 testcase 输出目录下**（通常是 `test/testone/`）。它是整个架构中最重要的设计决策之一。

**为什么需要它？** Skill 代码是通用的——同一份 `utest-cli.sh` 可以服务于任何 tRPC-Go 项目。但每个项目有自己的 Redis 地址、网关域名、执行组 ID、认证方式。如果把这些硬编码在 CLI 里，Skill 就和具体项目绑死了。

`.utest-project.yaml` 承载所有项目专有配置：

```yaml
project:
  app: xxx          # 项目名
  server: xxxxx     # 服务名
utest:
  execution_group: 61             # 优测平台执行组
auth:
  type: taihu                     # 认证类型（taihu/pangu/none）
  gateway_domain: "http://demo.xxx.woa.com/cgi"
  redis:
    server: "11.185.xx.xxx:6379"
    password: "xxx"
extra_args:                       # testcase 中的全局变量
  mcp_test_url: "http://..."
java_templates:                   # Java 脚本模板的参数化配置
  select_first_item:
    extract_var: "item_id"
    json_path: "$.data.items[0].id"
```

**CLI 启动时做什么**：`load_project_config()` 函数自动向上查找这个 YAML 文件，解析后将配置值注入到后续所有命令中。scaffold 生成的 testcase 骨架里，Redis 地址、签名密钥、网关域名——全部从这个文件读取真实值，不靠 Agent 记忆，不靠 Agent 填写。

**新项目接入**：复制 Skill → 创建此文件 → 填写配置 → 运行 `env-check`。零代码修改。

### 3.3 CLI 如何串联一切

一句话概括 CLI 在这个 Skill 中的角色：**它是所有确定性操作的唯一通道。**

![CLI 如何串联一切](articles/engineering-the-super-skill/images/fig3_cli_orchestration.png)

Agent 不知道 Redis 密码写在哪——CLI 知道。Agent 不知道签名算法用 SHA256 还是 MD5——CLI 知道。Agent 不知道二进制文件该用 darwin_arm64 还是 linux_amd64——CLI 自动检测。所有这些"确定性但繁琐"的事，全部被 CLI 吞掉，Agent 只看到一个干净的命令接口。

这就是前置文章里"Agent 做大脑，CLI 做手脚"在 Bash 里的具体实现。

![Skill 分层架构](articles/engineering-the-super-skill/images/fig2_layered_architecture.png)

---

## 四、构建 CLI：命令分类与设计哲学

CLI 是这个 Skill 的脊柱。4000+ 行 Bash，不是因为"写多了"，而是因为它吞掉了所有 Agent 不该操心的事。这一章讲清楚命令体系的分类逻辑和每类命令的设计考量。

### 4.1 第一层分类：谁在调用？

CLI 里的命令，按**调用方**分为两类：

**Agent 直接调用的命令**——Agent 知道它们的存在，在合适的时机主动发起调用。

**CLI 内部自动执行的命令**——Agent 完全不感知，由 CLI 在工作流推进时内部串联。

为什么这个区分重要？因为它划定了一条核心边界：**Agent 的认知负担有多大**。Agent 只需要记住十来个"我能调什么"，而不需要知道幕后还有多少脚本在跑。

### 4.2 Agent 直接调用的命令

按功能层次，再分三类：

#### 流程控制层——workflow 子命令族

这组命令是状态机的遥控器，本身不做任何业务操作：

| 子命令 | 时机 | 作用 |
|--------|------|------|
| `--start` | 工作流开始时 | 初始化状态，返回第一步指令 |
| `--current` | 已有进行中工作流时 | 断点恢复，返回当前步骤 |
| `--gate-info` | 每次 advance 之前 | 返回当前步骤的三层 schema（gate / checkpoint / CLI-context） |
| `--advance --gate-data '{...}'` | 当前步骤完成时 | 分拣数据、验证门禁、持久化 checkpoint、推进 |
| `--abort` | 用户要求中止时 | 清除所有状态，允许重新开始 |

这里有一个设计值得单独讲：**`--gate-info` 为什么是一个独立命令？**

虽然在后续的 Workflow 章节会看到，我用了非常多的手段严格的控制 Agent 的上下文，使其难以因为上下文过长而出现各种问题，但是当你把事情交给概率，哪怕极小，那么偶然也会变成必然。如果 Agent 凭记忆拼 gate-data，偶尔会出现字段名写错（`selected_interfaces` 写成 `interfaces`）、缺少必填字段等问题，导致流程无法推进，这个时候 Agent 就会为所欲为，按照自己的幻觉自由发挥。

解决方案不是"让 Agent 记得更好"，而是**让它不需要记**。每次 advance 之前强制查一次 gate-info，CLI 实时返回当前步骤需要的字段列表和类型约束。这消除了记忆偏差这个不确定性因素——不是靠 Agent 的记忆力，而是靠 CLI 的即时反馈。

在后续迭代中，`--gate-info` 还承担了另一个重要职责：**向 Agent 展示三层数据分离的边界**。它返回的不是一个扁平的字段列表，而是三个独立的 schema：gate 部分（CLI 验证用）、checkpoint 部分（给下一步 subagent 的信息）、cli-context 部分（CLI 自己的运行时数据）。Agent 只需要按照这个结构组织提交的 JSON，CLI 自动完成数据分拣——gate 部分验证后丢弃，checkpoint 部分写入 `.state`，cli-context 部分写入 `.cli-context.json`。对于 cli-context 中的部分字段，CLI 也可能从环境中自动获取而不依赖 Agent 提供。参见 §5.3。

#### 生成与校验层——testcase 生命周期命令

这组命令专门服务于测试用例的创建和验证：

| 命令 | 功能 | 关键设计点 |
|------|------|-----------|
| `scaffold` | 生成 testcase 骨架 | 从 `.utest-project.yaml` 读真实配置值，认证链路从一开始就正确 |
| `testcase-generator` | 驱动逐节点生成 | CLI 做主控，Agent 做填空——详见 §6.2 |
| `validate` | 语义校验 | 不只是 JSON 格式，还校验认证链路完整性、寻址方式、args 真实值 |

#### 执行层——平台操作命令

直接与优测平台交互的命令：

| 命令 | 作用 |
|------|------|
| `upload --path` | 上传 testcase 到平台 |
| `run --path --env-name` | 触发测试执行 |
| `debug --file` | 单用例调试 |
| `env-check` | 环境预检 |
| `proto-extract` | Proto 提取 |

注意最后两个命令的**双重身份**：它们既是 Agent 在单步模式下可以直接调的命令，也是工作流 automated 步骤里 CLI 内部自动执行的命令。这不是冗余设计——是"单步操作"和"全链路工作流"两种模式共享底层能力的自然结果。

### 4.3 CLI 内部自动执行的命令

当 Agent 调用 `--advance` 推进工作流时，CLI 内部可能连续执行多个 automated 步骤（CLI 内部自动执行的命令）。

举个例子：步骤 3（confirm-interfaces）是 interactive 类型，Agent 收集到用户确认后 advance。CLI 收到 gate-data 后：

1. 验证门禁通过
2. 自动执行步骤 4（config-query，类型为 automated）—— 调用 `framework_cfg.py` 查询 123 平台
3. 步骤 4 完成，继续检查步骤 5 的类型——是 interactive，停下
4. 将步骤 5 的 instructions 返回给 Agent

Agent 感知到的是："我提交了步骤 3 的结果，CLI 返回了步骤 5 的指令"。步骤 4 在中间悄悄完成了，Agent 完全不知道。

这就是前置文章里讲的"automated 步骤协奏"（参见前置文章 §4.9）。在步骤文件的 YAML front matter 里看一眼就明白了：

```yaml
# 02-proto-extract.md 头部
---
type: automated
command: proto-extract
---
```

### 4.4 工具依赖的内化策略

最后讲一个贯穿整个 CLI 设计的架构原则：**所有工具依赖，全部内化进 Skill 目录。**

**外部工具**（平台 CLI 二进制、extract_proto.sh、framework_cfg.py、Java 模板）——全部放在 Skill 目录内，通过 `utest-cli.sh` 封装调用。Agent 不知道底层有 python3 在跑，不知道有个 Bash 脚本在 grep proto 文件，不知道 `bin/` 下有三个不同架构的二进制。

**为什么要这样？** 每多一个 Agent 需要直接调用的外部工具，就多一个"参数格式怎么传""错误怎么处理""路径怎么拼"的不确定性。内化之后，不确定性归零——Agent 只看到 CLI 的语义命令：`scaffold`、`validate`、`upload`。

**工具文档的加载方式——Skill 级 RAG**：references/ 下的知识文档不是启动时全量注入 Agent 上下文，而是**索引注入 + 按需读取**。

核心思路：Agent 本身就有语义理解能力，让它做"检索判断"这件事，CLI 只负责"按行号返回内容"这个确定性操作。

具体设计：给每份文档加一个轻量的索引头（YAML front matter），每个 section 用自然语言描述"什么情况下需要读这一段"：

```yaml
# references/testcase-format.md 顶部索引
sections:
  - id: global-args
    trigger: "需要了解全局参数（args）的格式、extra_args 的用法、redis_server 等全局变量怎么填"
    lines: [1, 45]
  - id: redis-node
    trigger: "正在填充 Redis 节点、需要知道 key_pattern / db_index / extract_var 的规范"
    lines: [46, 95]
  - id: java-node
    trigger: "正在填充 Java 脚本节点、签名生成模板、变量提取脚本的写法"
    lines: [96, 160]
  - id: http-node
    trigger: "正在填充 HTTP 请求节点、callee 寻址方式、checkList 断言格式"
    lines: [161, 230]
```

```yaml
# references/troubleshooting.md 顶部索引
sections:
  - id: auth-failed
    trigger: "retCode:41、签名校验失败、auth failed、认证不通过"
    lines: [1, 35]
  - id: redis-npe
    trigger: "NullPointerException、Redis 节点报错、redis_server 为空"
    lines: [36, 68]
  - id: checklist-key
    trigger: "checkList 断言不生效、key 字段填什么、状态码断言无效"
    lines: [69, 95]
```

**工作流程**：

1. 步骤指令里写明"读取 `testcase-format.md` 的索引头"——只有索引头（十几行 YAML），不是全文
2. Agent 看到 trigger 描述，结合当前任务（比如"我正在填 Redis 节点"），自行判断需要 `redis-node` section
3. Agent 调用 CLI 读取对应片段：

```bash
bash $SKILL_DIR/utest-cli.sh doc-section --doc testcase-format --section redis-node
# CLI 只做一件确定性的事：读 testcase-format.md 的第 46-95 行，原样返回
```

上下文里只出现 20 行精准相关的内容，而不是 600 行全文。**匹配逻辑在 Agent 的大脑里完成（它本来就擅长这个），CLI 只做无脑的按行读取。**

这个设计的精妙之处在于：索引头本身很短（每份文档十几行），注入成本极低。但它给了 Agent 一份"目录"，让 Agent 能精准定位需要的片段，避免读整个文件。相当于**用十几行索引的 token 成本，换掉了几百行全文注入的 token 成本**。

### 4.5 输出协议：JSON only

一个容易被忽略但极其重要的设计约定：**CLI 的 stdout 只输出 JSON。**

所有人类可读的调试信息走 stderr，stdout 保证是可被 Agent 直接 `JSON.parse` 的结构化数据。这个约定看似微小，但它消除了 Agent "从一段混合输出中提取有用信息"的不确定性。Agent 不需要做文本解析——拿到的就是结构化数据。

退出码约定也配套设计：
- `0` = 成功，stdout 是结果 JSON
- `1` = 系统错误（网络/文件/依赖缺失）
- `2` = 业务错误（平台返回错误/参数不合法）

Agent 的错误处理逻辑因此变得极其简单：看退出码 → 解析 JSON 里的 error 字段 → 采取对应行动。

---

## 五、Workflow 推进：上下文切割与 Token 降本

前置文章讲了 Workflow 的"步进式披露"机制——每步只给 Agent 看当前步骤的指令，不提前暴露后续步骤。这一章讲的是**为什么**在这个项目里，这个机制不是锦上添花，而是生死攸关。

### 5.1 问题的规模

量化一下这个 Skill 面对的上下文压力：

一次完整的接口测试流程中，Agent 需要接触的内容包括——
- Proto 文件：数千甚至数万行的接口定义
- 项目代码：controller/、service/、filter/ 目录下的 Go 源文件
- 参考文档：testcase-format.md（~2000 行规范）、auth-patterns.md（认证决策树）、chain-design-patterns.md（聚合策略）
- 生成产物：每个 testcase JSON 远远超过 15000 字符（15000 字符会直接被 CodeBuddy IDE 截断，这是初代 Skill 不做拆分直接生成 testcase 遇到最头疼的问题之一）
- 平台返回：测试结果、错误信息、报告数据

如果把这些全部塞进一个上下文窗口——**灾难**。不是"可能会出问题"，是"必然会出问题"：

- 早期读入的 proto 信息被挤到窗口尾部，产生注意力衰减
- 生成步骤的大量 JSON 输出稀释了规范文档的权重
- Agent 开始"幻觉性简化"：该填 `redis_server` 的地方填了 `${redis_server}`，因为它已经记不清格式规范里说"不能用占位符"

### 5.2 三种方案的 Token 消耗模型

我评估了三种架构方案：

| | 无隔离（单窗口） | 脚本流水线（claude -p） | Subagent + Workflow |
|---|---|---|---|
| 每步 input | **全量累积**——每步都背着前面所有步骤的历史 | 步指令 + 工具输出 | 步指令 + 工具输出 + checkpoint |
| 代码读入 | 前面读的代码永远留在窗口里 | 每步独立，前步消失 | 每步独立，前步消失 |
| 主控开销 | — | 0（Bash 脚本，无 token） | 极轻（主 Agent 只做推进 + 门禁判断） |
| 隔离机制 | 无 | 操作系统进程 | 主 Agent 手动切换 subagent |
| 流程灵活性 | 低 | 低（脚本硬编码，不能处理异常） | 高（Agent 可做语义判断和异常处理） |

**无隔离方案**的 Token 增长是**二次方的**：第 N 步的 input = 第 1 步到第 N-1 步所有内容的累积。到第 5-6 步（用例规划与生成），上下文窗口里已经有 proto 文件、项目代码、框架配置结果、三份参考文档……Agent 的有效注意力被严重稀释。

**脚本流水线**解决了隔离问题，但失去了灵活性。如果步骤 6 生成的 testcase 校验失败，脚本只能"重试一次"或"终止"，不能像 Agent 那样读错误信息、理解原因、做针对性修正。

**Subagent 方案**两全：每步一个独立的 subagent 窗口，上下文互不污染；主 Agent 作为流程控制者保留语义判断能力，能处理异常、跳步、回退等需要"理解"的场景。

### 5.2.1 一个反常识的 Token 账本：Subagent 反而更省

直觉上，"多一个主 Agent 维护流程"意味着额外开销。但实际算一笔账，结论恰好相反——**Subagent 方案的 Token 总消耗比脚本流水线更低。**

先明确每一步执行时需要注入的三类内容：

| 符号 | 含义 | 典型规模 |
|------|------|---------|
| **A** | 全局命令（Skill 规则、工具说明、输出格式约束） | ~2000-4000 token，每步必须注入 |
| **B** | 当前步骤命令（本步的具体指令和工作要求） | ~500-1500 token |
| **C** | 当前步骤必读素材（代码片段、参考文档、checkpoint 数据） | 变化大，~1000-8000 token |

**脚本流水线**（方案二）：每步清空上下文，启动一个全新进程。因此每一步都必须完整注入全局命令 A + 当前步骤命令 B + 当前步骤素材 C。

$$\text{脚本流水线 input} = (A + B + C) \times N_{steps}$$

**Subagent + Workflow**（方案三）：分为两个窗口——主 Agent 窗口只持有全局命令 A 加上极轻量的 agent 通讯消息（门禁交互、步骤推进指令，记为 $\epsilon$，通常 < 200 token/步）；每步的 subagent 窗口只需要注入当前步骤命令 B 和素材 C（全局命令不需要重复注入，因为 subagent 的 system prompt 更轻量）。

$$\text{Subagent input} = A + N_{steps} \times \epsilon + (B + C) \times N_{steps}$$

整理对比：

$$\text{脚本流水线} - \text{Subagent} = (A - \epsilon) \times (N_{steps} - 1)$$

当步骤数 $N_{steps} = 9$，全局命令 $A \approx 3000$ token 时，Subagent 方案在 input token 上少约 **$(3000 - 200) \times 8 \approx 22400$ token**——超过 20K 的 input 节省。而 output token 两者差异不大（Agent 在每步的实际产出取决于任务本身，与架构方案无关）。

![脚本流水线 vs. Subagent 的 Token 消耗对比](articles/engineering-the-super-skill/images/fig4_token_comparison.png)

更重要的是，这还没算 **checkpoint 带来的 C 项压缩收益**。在脚本流水线中，每步启动后对前序步骤的产出一无所知——如果步骤 5 需要步骤 3 的认证分析结果，它只能重新读整个 `filter/auth.go` 再分析一遍，C 的消耗是完整的代码量。而在 Subagent 方案中，`.state` 中的 checkpoint 已经把前序产出压缩成了结构化摘要（文件路径 + 行号范围 + 一句话结论），步骤 5 只需要精准读取 47 行代码——**C 被大幅压缩**。

综合来看：Subagent 方案不仅在流程灵活性、异常处理能力上完胜脚本流水线，**在 Token 成本上也更优**——这是一个反常识但经得起计算的结论。

### 5.3 三层数据模型：Gate / Checkpoint / CLI-Context

上一步完成了，下一步需要用到上一步的结果——但两步在不同的上下文窗口里。怎么传递信息？早期设计用两层（Gate 验证 + Checkpoint 传递）就够了。但随着项目复杂度增长，我们发现了一个被忽视的第三方：**CLI 自己也需要跨步骤记忆**。

#### 为什么是三层，不是两层

考虑这个场景：步骤 3 中 Agent 确认了 testcase 的输出目录 `output_dir`。这个值后续谁需要？

- Agent（步骤 5/6 的 subagent）？——不需要。subagent 只管"填什么参数值"，不关心文件最终写到哪里。
- CLI？——**需要**。步骤 7 的 `upload` 命令需要知道去哪个目录找 JSON 文件。

如果把 `output_dir` 放进 checkpoint（给 subagent 看的），就是在给 subagent 注入它不需要的信息，浪费上下文空间。如果不持久化，CLI 在步骤 7 就不知道文件在哪。

答案是引入第三层：**CLI-Context**——CLI 自己的运行时上下文，Agent 不知道它的存在。

三层各司其职：

| 层 | 谁产生 | 谁消费 | 持久化位置 | 生命周期 |
|---|---|---|---|---|
| **Gate** | Agent 提交 | CLI 验证后**丢弃** | 不持久化 | 当次 advance 调用内 |
| **Checkpoint** | Agent 提交 | 下一步 subagent 读取 | `.state` → `checkpoints` 键 | 工作流存续期间 |
| **CLI-Context** | Agent 提交或 CLI 自动获取 | CLI 后续命令读取 | `.cli-context.json` | `--start` 创建，`--abort` 清除 |

#### 解耦原则：能从配置文件推导的，不存任何地方

这是三层模型之上更高层的设计原则：**如果一个值可以从固定配置文件（Makefile、`.utest-project.yaml`、`trpc_go.yaml`、`go.mod`）中按确定性逻辑读取，那它不写入 `.state`，也不写入 `.cli-context.json`——CLI 在需要时即时读取。**

为什么？因为配置文件可能被用户修改。如果我们在步骤 1 把 `app=pangu-admin` 缓存下来，用户在步骤 4 修改了 Makefile 里的 APP 变量，后续步骤用的就是过时的值。即时读取 = 永远是最新值。

具体来说：
- `app`（项目名）：从 Makefile 的 `APP=` 行解析 → **不存**
- `server`（服务名）：从 Makefile 的 `SERVER=` 行解析 → **不存**
- `auth.type`（认证类型）：从 `.utest-project.yaml` 读取 → **不存**
- `service_name`（北极星名称）：从 123 平台 API 查询，无配置文件可推导 → **存入 checkpoint**（subagent 需要）
- `output_dir`（输出目录）：从 `.utest-project.yaml` 所在位置推导 → **存入 cli-context**（CLI 需要，但推导逻辑涉及向上查找，结果缓存可提高效率）

#### 具体示例：步骤 3 的三层提交

步骤 3（confirm-interfaces）完成后，Agent 提交的 gate-data 结构：

```json
{
  "gate": {
    "validated": true,
    "selected_interfaces": ["GetUserList", "CreateUser", "DeleteUser"]
  },
  "checkpoint": {
    "interface_code_refs": {
      "GetUserList": {"file": "controller/user.go", "lines": [42, 89]},
      "CreateUser": {"file": "controller/user.go", "lines": [91, 145]},
      "DeleteUser": {"file": "controller/user.go", "lines": [147, 180]}
    },
    "filter_names": ["panguSignChecker", "operateLog"]
  },
  "cli-context": {
    "output_dir": "/path/to/test/testone"
  }
}
```

CLI 收到后自动分拣：
1. **Gate 部分**：验证 `validated == true`、`selected_interfaces` 非空 → 验证通过后**丢弃**（不写入任何文件）
2. **Checkpoint 部分**：`interface_code_refs` 和 `filter_names` 写入 `.state` 的 `checkpoints.step3` → 下一步 subagent 启动时注入
3. **CLI-Context 部分**：`output_dir` 写入 `.cli-context.json` → 步骤 7 的 upload 命令读取

注意 `selected_interfaces` 是 **gate 而非 checkpoint**——为什么？因为后续 subagent 不需要一个字符串列表来知道"测哪些接口"，它需要的是 `interface_code_refs`（代码位置）。`selected_interfaces` 的唯一作用是让 CLI 验证"用户确实做了选择"——验证完就可以丢弃。

#### CLI-Context 的生命周期

```
--start    → 创建空的 .cli-context.json（清除上一轮残留）
步骤推进   → CLI 按需写入字段（如 output_dir、upload_batch_id、last_run_id）
--abort    → 删除 .cli-context.json
工作流完成 → 保留（可用于诊断）
```

Agent 永远不需要、也不应该读取 `.cli-context.json`。它的内容对 Agent 是不可见的——不在 gate-info 的返回中出现（gate-info 只展示 Agent 需要填写的 schema），不在步骤指令中被引用。

#### Checkpoint 层的三条设计原则（继承自早期设计）

以下三条原则，在三层模型中专门约束 **checkpoint 层**（即写入 `.state` 给 subagent 消费的数据）：

**1. 只传路径，不传内容。** 步骤 6 生成了一份 15000 字符的 testcase JSON——不把 JSON 全文塞进 `.state`，只传文件路径。下一步（upload）的 CLI 需要它时，自己去读文件。Subagent 的上下文里永远不出现大文件内容。

**2. 只传结构化摘要，不传原始数据。** 步骤 3 读了项目代码发现认证方式是"太湖签名"——不把整个 filter/auth.go 传给后续步骤，只在 `.state` 中写入代码引用：`{"file": "filter/auth.go", "lines": [42, 89]}`。下一步 subagent 需要认证细节时，按这个引用精准读取 47 行。

**3. 校验由 CLI 做，不由 Agent 做。** checkpoint 数据的格式合法性、文件路径是否存在、必填字段是否完整——全部在 `--advance` 的门禁逻辑里自动验证。主 Agent 不需要"打开 `.state` 文件检查一下是否合法"。

#### 一个类比

把三层想象成一个工厂的交接班：
- **Gate** = 上一班的"签退确认"——你签了字证明活干完了，保安看一眼就撕掉了，不归档
- **Checkpoint** = 交接班记录本——写给下一班的同事看的，告诉他"我做到哪了、有什么需要注意的"
- **CLI-Context** = 车间主任的笔记本——主任自己记的调度信息，工人不看，但主任靠它调度一切

### 5.4 重复读代码的 Token 权衡

一个常见疑问：每个 subagent 都是全新窗口，有些代码（比如 filter/ 下的认证实现）可能步骤 3、步骤 5 都需要读。拆成独立窗口后不是要重复读吗？

是的。但这是**有意为之的权衡**：

- **重复读的成本是线性的**：步骤 3 读一次 47 行，步骤 5 再读一次 47 行。总计 94 行 ≈ 2000 token。
- **上下文累积的成本是二次方的**：不拆分的话，步骤 5 的 input 里不仅有这 47 行，还有步骤 1-4 的所有历史——可能 50000+ token。
- **而且**：通过 `.state` 中 checkpoint 里的代码引用（文件路径 + 行号范围 + 一句话摘要），下一步的 subagent 不需要搜索或猜测该读什么——直接 `read_file(filter/auth.go, offset=42, limit=47)` 即可。

每步独立 = 每步互不干扰 = 每步都以最佳状态工作。这比省两千 token 重要得多。

---

## 六、逐步骤解析：工作流的推进全貌

理论讲完了，现在走一遍实际的 9 步工作流。前 4 步和后 3 步一笔带过，重点放在步骤 5-6（测试用例的规划与生成）——这是整个 Skill 最复杂、最有工程价值的部分。

### 6.1 步骤 1-4：环境准备阶段

这四步的主题是"把项目信息搜集齐"，为步骤 5-6 的用例规划与生成准备所有前置数据。

**步骤 1：env-check（automated）**

CLI 自动检查：Go 环境是否可用、CLI 二进制是否有执行权限、`AUTHORIZATION_03_TOKEN` 等环境变量Token是否设置（没有设置 CLI 会自动输出信息引导用户获取）、项目根目录下是否有 `trpc_go.yaml`（没有则 CLI 会去 03 平台自己搞一份回来用）。

数据产出：
- **Gate**：`env_ready: true`（环境检查全部通过的证明）
- **Checkpoint**：无——`app`（项目名）和 `server`（服务名）均可从 Makefile 即时解析，遵循解耦原则不作持久化
- **CLI-Context**：`login_name`（当前登录用户，CLI 后续 API 调用需要）

注意：早期版本将 `app`、`server` 存入 checkpoint。三层模型重构后，所有能从 Makefile 确定性推导的值一律不存——CLI 在需要时即时读取，永远拿到最新值。

**步骤 2：proto-extract（automated）**

从 `GOMODCACHE` 目录自动定位并提取接口的 `.proto` 文件。

为什么不用工蜂 API？因为工蜂的 API 认证和项目代码的认证是两套体系。让 Agent 去调工蜂 API，需要额外的 token 配置和错误处理。而 `GOMODCACHE` 里已经有了编译过的 proto 依赖——直接从本地文件系统读，零网络依赖，零认证问题。

数据产出：
- **Gate**：`proto_extracted: true`（proto 文件成功提取的证明）
- **Checkpoint**：`proto_files`（提取出的 proto 文件路径列表）——subagent 需要读这些文件来理解接口定义
- **CLI-Context**：无

**步骤 3：confirm-interfaces（interactive）**

这是第一个需要用户参与的步骤。Agent 读取 proto 文件和项目代码，理解有哪些接口可以测试，然后列出建议的接口列表，等用户确认或调整。

这步的数据产出跨越三层，是理解三层分离的最佳示例：
- **Gate**：`selected_interfaces`（用户选定的接口名列表）——证明用户确实做了选择。验证后丢弃，因为后续 subagent 需要的不是接口名列表，而是代码位置引用
- **Checkpoint**：`interface_code_refs`（每个接口的代码文件路径 + 行号范围）、`filter_names`（项目使用的 filter 列表，用于推断认证方式）——这些是下一步 subagent 需要且无法从配置文件推导的信息
- **CLI-Context**：`output_dir`（testcase 输出目录）——CLI 的 upload、scaffold 等命令需要知道文件写在哪里，但 subagent 不需要关心这个路径

**步骤 4：config-query（automated）**

调用 `framework_cfg.py` 查询 123 平台，获取 `serviceName`（北极星服务发现名称）和 `namespace`（命名空间）。

为什么不让 Agent 猜？因为 serviceName 的拼接规则因项目而异（有的是 `trpc.app.server`，有的带额外前缀），namespace 有 Development/Production/Formal 等多种值。猜错了直接导致后续测试路由到错误的服务实例——这种错误在运行时才暴露，排查成本极高。

数据产出：
- **Gate**：`config_resolved: true`（配置查询成功的证明）
- **Checkpoint**：`service_name`、`namespace`——从 123 平台 API 查询，无配置文件可推导，subagent 在生成 testcase 时需要这两个值填入 `callee` 字段
- **CLI-Context**：无

到这一步结束，步骤 5-6 需要的所有前置数据都已就绪。

<!-- [图片占位：一个简洁的 4 步流程图，每步标注类型（automated/interactive）和关键输出。用管道风格，强调"信息逐步积累，最终汇聚到步骤 5-6"。] -->

### 6.2 步骤 5-6：测试用例的规划与生成（重头戏）

这是整个 Skill 的核心——也是最能体现"CLI 做主控、Agent 做填空"设计哲学的地方。

#### 6.2.1 为什么需要拆成两步（步骤 5 + 步骤 6）

直觉上，"生成测试用例"是一个任务。但在工程实践中，这个"一个任务"实际包含两个性质完全不同的子任务：

| | 规划（设计测试方案） | 生成（填写 JSON） |
|---|---|---|
| 需要读的代码 | 大量：filter/、controller/、service/ | 少量：每个节点对应的一小段代码 |
| 需要读的参考文档 | 少：只需理解认证类型和链路模式 | 多：testcase-format + auth-patterns + chain-design-patterns |
| 产出 | 结构化的"测试方案表"（文本） | 多个 testcase JSON 文件（每个可多达 15000 字符以上） |
| 迭代次数 | 1 次（想清楚就行） | 多次（scaffold → 填充 → validate → 修正循环） |
| 上下文压力 | 代码量大，但不需要反复工具调用 | 代码量小，但需要频繁的 CLI 交互 |

如果让一个 subagent 同时做这两件事，它的上下文窗口里会同时出现：大量项目代码 + 三份参考文档 + scaffold 输出的 JSON 骨架 + validate 返回的错误信息 + 修正后的 JSON……窗口撑不住，质量必然下降。

拆分后，两个 subagent 各自的上下文**干净且专注**：
- 规划 subagent：只有代码，只做"想"
- 生成 subagent：只有规范和当前节点任务，只做"填"

#### 6.2.2 阶段一：规划 subagent——画图纸

**任务**：理解业务代码，设计测试链路的全局方案。

**输入**（来自前面步骤的 checkpoint）：
- `selected_interfaces`：用户选定的接口列表
- `request_fields`：每个接口的请求参数
- `filter_names`：项目用了哪些 filter（用于推断认证方式）
- `output_dir`：输出目录

**这个 subagent 做什么**：

1. 读项目代码（controller → service → filter），理解每个接口的业务逻辑
2. 分析接口之间的依赖关系（接口 B 需要接口 A 的返回值？）
3. 根据依赖关系决定 trace 聚合策略（独立接口各一条链 vs 有依赖的接口合并到一条链）
4. 根据 filter_names 确定认证方式（太湖签名？盘古签名？无认证？）
5. 为每条链路的每个节点确定类型（redis/java/http）和任务

**这个 subagent 不做什么**：

不生成任何 JSON。不调用 scaffold。不调用 validate。它只输出一份结构化的"测试方案表"：

```markdown
## 方案表

### Trace 1: 用户认证链路
- 全局参数：gateway_domain, redis_server, redis_password, ...
- 认证方式：taihu（SHA256 签名）
- 节点序列：
  1. [redis] 写入 mock token → extract: user_token
  2. [java] 生成签名 → extract: signature, timestamp  
  3. [http] 调用 /user/list → 断言: retCode=0, extract: user_id
  4. [java] 从响应提取第一个用户ID → extract: target_user_id
  5. [http] 调用 /user/detail → 断言: retCode=0, extract: user_info

### Trace 2: 资源管理链路
- ...
```

这份方案表以文件形式写入 `output_dir`，路径作为 checkpoint 写入 `.state`。

**三层数据产出**（步骤 5 → 步骤 6 的衔接）：

- **Gate**：`plan_file_exists: true` + `plan_file_path`——证明规划完成、方案文件已写入。CLI 验证文件确实存在且格式合法后丢弃
- **Checkpoint**：`plan_file_path`（方案表文件路径）——步骤 6 的 `testcase-generator` CLI 需要解析这个文件来驱动逐节点生成循环。注意这里遵循"只传路径不传内容"原则——方案表可能有数十行，不塞进 `.state`
- **CLI-Context**：无（output_dir 已在步骤 3 写入）

主 Agent 不打开方案文件看内容——它只知道"文件在 X 路径、格式合法"。内容由步骤 6 的 CLI 自行加载解析。

#### 6.2.3 步骤 6：testcase-generator CLI + 生成 subagent——按图施工

这里有这个 Skill 最关键的设计变化：**生成过程的控制权从 Agent 转移到 CLI。**

传统做法是 Agent 自己规划循环："先生成第一个节点，再生成第二个，再生成第三个……"。问题是，Agent 需要自己维护"做到哪了""下一个是什么""前面做的对不对"这些状态——这些全是确定性的事务，Agent 做这些就是在浪费上下文空间。

最佳实践：**`testcase-generator` CLI 做循环的主控，Agent 只在被"叫到"的时候干活。**

整个流程如下图所示：

![testcase-generator：CLI 做主控，Agent 做填空](articles/engineering-the-super-skill/images/fig5_generator_loop.png)

**这个设计的精髓**：

和整个 Skill 的哲学完全一致——**确定性的事交给 CLI，不确定性的事交给 Agent**。

- 节点顺序是确定的（方案表已经写好了）→ CLI 管
- 写入 JSON 的位置是确定的（scaffold 骨架已经生成了）→ CLI 管
- 校验逻辑是确定的（validate 规则已经写死了）→ CLI 管
- 但"这个 Redis 节点的 key_pattern 是什么"——这需要读代码才知道 → Agent 做

Agent 在这个循环里的角色就像流水线上的工人：工头（CLI）递来一张工单说"填这几个格子"，工人（Agent）填好交回去，工头负责贴上去、检验质量、然后递下一张工单。工人不需要知道总共有几张工单，不需要记住前面填了什么，只需要专注眼前这一张。

**这个 subagent 的上下文因此极轻**：
- 不需要记住方案表全文——CLI 已经解析好了，每次只告诉它当前节点的任务
- 不需要记住前面节点的内容——CLI 管理状态
- 只需要：当前节点的任务描述 + 对应的一小段代码

**三层数据产出**（步骤 6 → 步骤 7 的衔接）：
- **Gate**：`validated: true`（所有 testcase 文件通过 validate 校验的证明）+ `testcase_files`（文件路径列表，供 CLI 验证文件确实存在）
- **Checkpoint**：`testcase_files`（文件路径列表）——步骤 7 的 upload 命令需要知道上传哪些文件。遵循"只传路径不传内容"
- **CLI-Context**：无（output_dir 已在步骤 3 写入，CLI 也可从中推导文件列表）

> 类比：阶段一是"建筑师"画图纸，阶段二是"施工队按图纸建楼"。但施工队里有一个工头（CLI）在指挥工人（Agent）干活——建筑师不施工，工人不设计，工头不读图纸也不搬砖，只负责调度。三方各司其职。

#### 6.2.4 scaffold + python3：为什么不直接写文件

一个自然的疑问：为什么要 scaffold 生成骨架 + python3 逐节点修改，而不是让 Agent 用 Write 工具直接写完整 JSON？

**历史教训**：在 `testcase-generator` CLI 主控方案之前，早期版本让 Agent 自己管理整个生成循环——Agent 决定生成顺序、自己写 JSON 文件、自己记住进度。那个版本需要 scaffold 按 2-4 个接口"分批调用"，因为一个 testcase JSON 可达 15000 字符，Agent 一次输出这么长的结构化内容极易截断或格式错误。分批是一种妥协——本质上是用多次调用来规避 Agent 单次输出能力的上限。

现在的 `testcase-generator` CLI 主控方案**彻底消除了这个问题**：Agent 根本不需要输出完整 JSON，它只需要返回几个字段值（`key_pattern="auth:token:{uid}"`, `db_index=0`）。JSON 文件的创建和修改全部由 CLI + python3 在后台完成。所以"分批"不再需要，"截断"也不再是问题。

但 scaffold + python3 本身仍然保留，原因是：

**1. 认证链路的确定性。** scaffold 生成骨架时，Redis 地址、签名密钥、网关域名——全部从 `.utest-project.yaml` 读取真实值。这是确定性操作，不需要 Agent 介入。如果让 Agent 自己写，它可能填错密码格式、漏掉某个必填 header、用了占位符而不是真实值。

**2. 外科手术式修改。** python3 操作 JSON 是精确的——修改 `nodes[2].args.key_pattern` 不会影响 `nodes[0]` 的任何内容。而 Agent 用 Write 工具写文件是"覆盖式"的——如果 Agent 对之前写入的内容有任何"记忆偏差"，整个文件就废了。

**3. validate 的实时反馈。** 每修改一个节点就 validate 一次。如果这个节点有问题，立刻修正，不需要等全部写完再检查——那时候出错了，回溯成本更高。

> 简而言之：早期方案是"Agent 写文件，CLI 分批保护"——Agent 仍然承担了不该承担的确定性工作。现在的方案是"CLI 写文件，Agent 只给数据"——确定性操作归 CLI，不确定性判断归 Agent。分批调用作为保护机制，因为根因消除而自然退役。

#### 6.2.5 validate：规范固化在代码里

validate 在这个 Skill 里不是"可选的质量检查"，而是**每个节点生成后的强制门禁**。

它做的不只是 JSON 语法校验。`cmd_validate_internal` 函数内部实现了完整的语义校验：

- **认证链路完整性**：如果 auth_type 是 taihu，检查是否有对应的 redis 节点 + java 签名节点
- **寻址方式正确性**：检查 `callee` 字段的格式是否符合 tRPC 寻址规范
- **args 真实值校验**：检查 `redis_server`、`redis_password` 等字段是否填了真实值（而非占位符）
- **checkList 规范**：检查断言状态码时 `key` 字段是否为空字符串（这是平台的反直觉设计）
- **节点间依赖**：检查 extract 的变量名是否在后续节点的 args 中被正确引用

为什么这些校验不写在文档里让 Agent 自己遵守？因为 Agent 会忘、会简化、会幻觉。**把规范固化在 validate 命令的代码逻辑里**，Agent 不需要记住规范——它只需要看 validate 的输出：通过就继续，失败就按错误提示修正。

### 6.3 步骤 7-9：测试执行阶段

用例生成完毕后，后面三步相对简单：

**步骤 7：upload（automated）**

CLI 从 `.cli-context.json` 读取 `output_dir`，将该目录下所有通过 validate 的 JSON 文件上传到优测平台。

数据产出：
- **Gate**：`upload_success: true`
- **Checkpoint**：`case_ids`（平台返回的用例 ID 列表）——步骤 8 的 run 命令需要
- **CLI-Context**：`upload_batch_id`（本次上传的批次 ID，CLI 用于后续状态查询）

**步骤 8：run-test（interactive）**

Agent 触发测试执行，等待平台返回结果。这步是 interactive 的原因：可能需要用户确认执行环境（测试环境 vs 预发环境），或者测试耗时较长需要等待。

**步骤 9：report（interactive）**

Agent 解读测试报告，对失败用例做归因分析。这一步会参考 `references/troubleshooting.md` 里的错误速查表——比如 `retCode:41` 通常意味着签名校验失败，需要检查 Redis 节点是否正确写入了 token，或者 Java 签名节点的时间戳是否过期。

---

## 七、增删改测试的安全机制

接口测试不只是"读"。如果待测接口涉及"创建资源""修改状态""删除数据"——在错误的环境执行，后果严重。`mutation-test-rules.md` 定义了一套三阶段确认机制：

1. **Planner 阶段**：规划 subagent 在方案表中标注哪些操作是增删改，预估影响范围
2. **Reviewer 阶段**：Gate 门禁要求用户显式确认"我知道这些测试会修改数据"
3. **Execution 阶段**：CLI 在执行前再次校验环境（测试环境 vs 生产环境）

这和 Gate 门禁机制是天然配合的：三阶段确认中的每次"确认"都是一次 Gate 推进，由 CLI 在门禁逻辑中强制执行。Agent 跳不过去——它想跳过确认直接 advance，门禁会拒绝。

---

## 八、写在最后：确定性是工程化的核心

回顾整篇文章，有一条线贯穿始终：**把确定性的事从 Agent 手中拿走。**

- 配置值从哪里读？→ CLI 读配置文件，Agent 不操心
- JSON 写入哪个位置？→ CLI 定位，Agent 不操心
- 下一个该填什么节点？→ CLI 调度，Agent 不操心
- 格式对不对？→ CLI validate，Agent 不操心
- 认证链路完整不完整？→ CLI scaffold 保证，Agent 不操心

Agent 只做一件事：**读代码，理解业务，给出判断。** 这是它的核心能力，也是唯一需要它做的事。

这不是"限制 Agent 的能力"，而是"让 Agent 在它擅长的事情上做到最好"。当 Agent 不需要操心格式、不需要记忆配置、不需要管理循环状态时，它所有的注意力都可以集中在真正需要智能的地方——理解 `filter/auth.go` 的第 42-89 行到底在做什么签名逻辑。

这就是"工程化一个超级 Skill"的本质：不是给 Agent 更多能力，而是给它**更少的负担**和**更清晰的轨道**。

![工程化的本质：把确定性的事从 Agent 手中拿走](articles/engineering-the-super-skill/images/fig6_summary.png)
