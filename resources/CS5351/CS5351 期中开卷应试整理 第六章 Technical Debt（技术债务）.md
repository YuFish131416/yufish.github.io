# CS5351 期中开卷应试整理 第六章 Technical Debt（技术债务）

## <技术债务基础>

*   Technical debt (TD)\ <span style="color: rgb(126, 131, 134)">技术债务</span>

    *   is a metaphor originally proposed in 1992. The metaphor is that <span style="color: rgb(255, 32, 32)">doing things</span> in a “<span style="color: rgb(255, 32, 32)">quick and dirty</span>” way <span style="color: rgb(255, 32, 32)">creates a technical debt</span> (TD).<span style="color: rgb(126, 131, 134)"><br>是一个隐喻，最初于1992年提出。该隐喻是指：用"快速而肮脏"的方式做事会产生技术债务。</span>

    *   is a design or construction approach that is expedient in the short term but that creates a technical context in which the** same work will cost more to do later than it would cost to do now** (including increased cost over time)<span style="color: rgb(126, 131, 134)"><br>是一种在短期内容易实现的设计或构建方法，但这种方法会创造一个技术背景，使得以后完成相同工作的成本将高于现在的成本（包括随时间增加的成本）。</span>

> ```
> 技术债务的“利息支付”示例
> ```
>
> *   例如，遗留代码缺乏单元测试，导致新开发、测试和调试需要更长时间。
> *   例如，过于简单的设计不能很好地适应环境变化，看似简单的环境变更需要大量的代码重写。
> *   例如，漏洞百出的系统导致高昂的产品支持成本（非软件形式的利息支付）。
> *   例如，系统脆弱意味着每个错误修复都会引入意外的副作用（例如，新的错误），因此每个错误修复都变成一个多重错误修复项目。
> *   例如，错误报告非常频繁，以至于花在生产系统上修复错误的时间阻碍了任何新功能的开发工作。
> *   例如，由于开发环境不佳，导致编辑-编译-调试周期过长（技术债务的非代码原因）。
>
> <!---->
>
> ```
> 技术债务的反例
> ```
>
> *   Many kinds of delayed or incomplete work are not technical debt:\ <span style="color: rgb(126, 131, 134)">许多类型的延迟或未完成的工作并不属于技术债务：</span>> 功能待办列表、延迟的功能、被削减的功能。
>
> *   In general, if “the same (development) work will not cost more to do later than it would cost to do now”, then it is not a technical debt.\ <span style="color: rgb(126, 131, 134)">一般来说，如果“相同的（开发）工作在以后完成并不会比现在完成成本更高”，那么它就不是技术债务。</span>

### 实践中的技术债务

*   <span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)">Ernst 等人对 1831 名软件工程师和架构师的调查发现：</span></span>

    *   31% stated TD as an implicit part of their backlog<span style="color: rgb(126, 131, 134)"><br>31% 的人表示技术债务是其待办列表的隐含部分。</span>

    *   25% stated TD as an explicit part of their backlog<span style="color: rgb(126, 131, 134)"><br>25% 的人表示技术债务是其待办列表的明确部分。</span>

*   TD items commonly are not present in the official sprint backlog; they are often documented in quite ad-hoc managed shadow backlogs (i.e., “unofficial”, e.g., private notes of the team or a member, comments in source code commits).<span style="color: rgb(126, 131, 134)"><br>技术债务项通常不会出现在官方的冲刺待办列表中；它们通常记录在管理相当随意的影子待办列表中（即，“非官方的”，例如团队或成员的私人笔记、源代码提交中的注释）。</span>

*   A sprint backlog includes a mix of different items (e.g., new features, bugs/defects, and improvements). TD is often grouped as Improvements.<span style="color: rgb(126, 131, 134)"><br>一个 Sprint 待办列表包含多种不同的项（例如，新功能、错误/缺陷和改进）。技术债务通常被归类为改进。</span>

*   When TD is present in the software, **the only significantly effective way of reducing TD is to refactor the software.**<span style="color: rgb(126, 131, 134)"><br>当软件中存在技术债务时，显著有效的减少技术债务的方法是重构软件。</span>

### 影响

*   In some large organizations, development time dedicated to managing Technical Debt is substantial (an average of 25% of the overall development. Some said 40%-50%)\
    在一些大型组织中，用于管理技术债务的开发时间相当可观（平均占总体开发时间的 25%。有些人说是 40%-50%）。

> ```
> 公司视角
> ```
>
> *   Many companies tend to trade\ <span style="color: rgb(126, 131, 134)">许多公司倾向于用：</span>
>
>     *   their longer-term ability to produce new releases frequently, with high quality, quick feedback and small effort<span style="color: rgb(126, 131, 134)"><br>他们长期内能够频繁发布新版本、高质量、快速反馈且付出较小努力的能力</span>
>
>     in exchange for<span style="color: rgb(126, 131, 134)"><br>来交换</span>
>
>     *   short-term features that might quickly fix them but slow them down in the long run.<span style="color: rgb(126, 131, 134)"><br>短期功能，这些功能可能快速解决问题，但从长远来看会拖慢他们的速度。</span>
>
> *   This strategy makes these companies vulnerable to their competitors<span style="color: rgb(126, 131, 134)"><br>这种策略使这些公司容易受到竞争对手的攻击。</span>
>
> <!---->
>
> ```
> 公司内部——业务与技术视角对比
> ```
>
> *   Business View\ <span style="color: rgb(126, 131, 134)">商业视角</span>
>
>     *   Shorten time to market<span style="color: rgb(126, 131, 134)"><br>缩短上市时间</span>
>
>     *   Preserve startup investment<span style="color: rgb(126, 131, 134)"><br>保全启动投资</span>
>
>     *   Delay development expense<span style="color: rgb(126, 131, 134)"><br>延迟开发支出</span>
>
> *   Technical View<span style="color: rgb(126, 131, 134)"><br>技术视角</span>![\<img alt="" data-attachment-key="VCLI5LLP" width="885" height="350" src="attachments/VCLI5LLP.png" ztype="zimage"> | 885](attachments/VCLI5LLP.png)> *   Business staff tend to be optimistic about the benefit and the costs. These attitudes are often unconscious.\ <span style="color: rgb(126, 131, 134)">商务人员往往对收益和成本持</span>**<span style="color: rgb(126, 131, 134)">乐观态度</span>**<span style="color: rgb(126, 131, 134)">。这些态度常常是</span>**<span style="color: rgb(126, 131, 134)">无意识的</span>**<span style="color: rgb(126, 131, 134)">。</span>
>     >
>     > *   Technical staff tends to be pessimistic about the benefit and the costs. These attitudes are often unconscious.<span style="color: rgb(126, 131, 134)"><br>技术人员往往对收益和成本持</span>**<span style="color: rgb(126, 131, 134)">悲观态度</span>**<span style="color: rgb(126, 131, 134)">。这些态度常常是</span>**<span style="color: rgb(126, 131, 134)">无意识的</span>**<span style="color: rgb(126, 131, 134)">。</span>

## <识别技术债务>

### 技术债务的维度

技术债务已按以下维度进行分类：

1.  类型（例如，设计、测试或文档债务），
2.  故意性（故意或无意），
3.  时间范围（短期或长期）
4.  关注程度。

> ```
> 维度 1：技术债务的类型 “Types of Technical Debt” 
> ```
>
> *   Technical Debt is not just a coding problem.\ <span style="color: rgb(126, 131, 134)">技术债务不仅仅是编程问题。</span>
>
> *   Refactoring out the code smells **cannot** solve them all.<span style="color: rgb(126, 131, 134)"><br>通过重构消除代码异味无法解决所有技术债务。</span>
>
> ![\<img alt="" data-attachment-key="M48BBPC9" width="1267" height="462" src="attachments/M48BBPC9.png" ztype="zimage"> | 1267](attachments/M48BBPC9.png)
>
> ```
> 维度 2：技术债务的故意性 “Intentionality of Technical Debt” 
> ```
>
> *   Intentional Technical Debt**<span style="color: rgb(126, 131, 134)">有意技术债务</span>**
>
>     *   Debt incurred by intention (we intend to commit to do it)<span style="color: rgb(126, 131, 134)"><br>故意产生的债务（我们有意决定这么做）。</span>> *   例如："如果我们无法完成这个版本，就不会有第二个版本了。让我们专注于编码，只做最少的测试。不写文档。在版本发布后的头几天与用户一起操作系统，而不是提前培训他们。"
>         > *   例如："我们没有时间构建对多平台的通用支持。我们现在先支持 iOS，以后再增加对 Android 等的支持。代码只需要在 iOS 应用上运行良好即可。"
>         > *   例如："尽管我们知道项目采用了测试驱动开发方法，但在过去两个月里，我们还是没有时间为所有编写的代码编写单元测试。我们将在软件发布后补写这些测试。"
>
> <!---->
>
> *   Unintentional Technical Debt**<span style="color: rgb(126, 131, 134)"><br>无意技术债务</span>**
>
>     *   Debt incurred unintentionally due to low-quality work.<span style="color: rgb(126, 131, 134)"><br>由于低质量工作而无意中产生的债务。</span>> *   例如：初级程序员编写了糟糕的代码。
>         > *   例如：新成员/合同工编写的代码不符合编码规范。
>         > *   例如：一个重大的设计策略（例如，决定使用模型-视图-控制器架构来连接软件中的所有主要模块）结果效果很差。
>         > *   例如：一次全面的重构任务出了岔子。
>         > *   例如：诚实的错误。"真希望我们早知道 Framework 2.1 会比 Framework 2.0 好这么多。"
>         > *   例如：粗心的错误。"设计？什么设计？硬件设计？"
>
> <!---->
>
> ```
> 维度 3：时间范围 “Time Horizon” 
> ```
>
> *   Short-Term Debt**<span style="color: rgb(126, 131, 134)"><br>短期债务</span>**
>
>     *   Usually incurred reactively and actions are done in a short time<span style="color: rgb(126, 131, 134)"><br>通常是被动产生，并且在短时间内采取行动。</span>> *   例如：为发布版本而跳过某些集成测试。
>         > *   例如："我们没有时间用正确的方式实现这个功能；先临时硬编码进去，等发布后再修复。"
>         > *   例如：为紧急部署关键补丁而违反编码标准。
>
> *   Long-Term Debt**<span style="color: rgb(126, 131, 134)"><br>长期债务</span>**
>
>     *   Usually incurred proactively, for strategic reasons<span style="color: rgb(126, 131, 134)"><br>通常是出于战略原因主动产生。</span>> *   例如："我们认为至少3年内不需要支持第二个平台，所以我们的设计只支持一个平台。"
>         > *   例如：核心部分使用 COBOL 语言已40年。这个模块应继续使用 COBOL 作为编程语言。
>
> <!---->
>
> ```
> 维度 4：关注程度 “Degree of Focus” 
> ```
>
> *   Focused Short-Term Debt**<span style="color: rgb(126, 131, 134)"><br>聚焦型短期债务</span>**
>
>     *   Individually identifiable shortcuts (e.g., partial implementation of a class)<span style="color: rgb(126, 131, 134)"><br>可单独识别的快捷方式（例如，某个类的部分实现）。</span>
>
> *   Unfocused Short-Term Debt**<span style="color: rgb(126, 131, 134)"><br>扩散型短期债务</span>**
>
>     *   Numerous tiny shortcuts (e.g., not following the coding standard frequently or loose documentation)<span style="color: rgb(126, 131, 134)"><br>大量微小的快捷方式（例如，频繁不遵守编码规范或文档松散）。</span>
>
> *   Focused Long-Term Debt**<span style="color: rgb(126, 131, 134)"><br>聚焦型长期债务</span>**> 例如："我们认为至少3年内不需要支持第二个平台，所以我们的设计只支持一个平台。"
>
> *   Unfocused Long-Term Debt**<span style="color: rgb(126, 131, 134)"><br>扩散型长期债务</span>**> 例如：让我们使用最高效的语言和框架来实现各个功能特性。

### 增加技术债务的模式

<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)">在软件开发中，有一些众所周知的模式会</span></span>**<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)">增加</span></span>**<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)">技术债务：</span></span>

1.  **<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)">进度压力</span></span>**
2.  **<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)">代码重复</span></span>**
3.  **<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)">第一次就做“对”</span></span>**

> ```
> 增加技术债务的模式 1：进度压力 “Schedule Pressure” 
> ```
>
> *   When a team is held to a commitment that is unreasonable, they are bound to cut corners to meet management expectations.<span style="color: rgb(126, 131, 134)"><br>当团队被要求履行不合理的承诺时，他们必然会为了满足管理层的期望而走捷径。</span>> 例如：新功能范围蔓延、团队组成变更、集成延迟。
>
> *   **解决方案**
>
>     *   Use a more flexible planning approach\ <span style="color: rgb(126, 131, 134)">采用更灵活的规划方法。</span>
>
> <!---->
>
> ```
> 增加技术债务的模式 2：代码重复 “Duplication of Code” 
> ```
>
> *   Many reasons for code duplications\ <span style="color: rgb(126, 131, 134)">代码重复的多种原因</span>> *   Lack of experience on the part of the team members<span style="color: rgb(126, 131, 134)"><br>团队成员缺乏经验</span>
>     >
>     > *   Copy-and-paste programming practice<span style="color: rgb(126, 131, 134)"><br>复制粘贴的编程习惯</span>
>     >
>     > *   Conform to the poor design of existing software<span style="color: rgb(126, 131, 134)"><br>迁就现有软件的糟糕设计</span>
>     >
>     > *   Pressure to deliver; guess a schedule<span style="color: rgb(126, 131, 134)"><br>交付压力；盲目预估进度</span>
>
> *   **解决方案**
>
>     *   Use static analysis tool for assistance (see Code for Quality slides)\ <span style="color: rgb(126, 131, 134)">使用静态分析工具辅助（参见“代码质量”章节）</span>
>
>     *   Pair programming<span style="color: rgb(126, 131, 134)"><br>结对编程</span>
>
>         *   To spread the knowledge and improve the competence of team members<span style="color: rgb(126, 131, 134)"><br>以传播知识并提高团队成员的能力</span>
>
>     *   Either (a) Repay debts now or (b) Track it if replay later,<span style="color: rgb(126, 131, 134)"><br>要么 (a) 立即偿还债务，要么 (b) 若稍后偿还则跟踪它，</span>
>
>         *   (1) fix it now, (2) add a runtime exception to the location of technical debts and fix it a few minutes later, (3) add the debt (location, description, potential cost of not fixing it) to the project backlog<span style="color: rgb(126, 131, 134)"><br>(1) 立即修复，(2) 在技术债务的位置添加一个运行时异常并稍后（例如几分钟后）修复，(3) 将债务（位置、描述、不修复的潜在成本）添加到项目待办列表中。</span>
>
> <!---->
>
> ```
> 增加技术债务的模式 3：第一次就做“对”
> ```
>
> *   Opposite of duplication – create a lot of powerful design up-front.<span style="color: rgb(126, 131, 134)"><br>与重复相反——前期进行大量复杂的设计。</span>
>
>     *   We have over-engineered and over-generalized our intended product.<span style="color: rgb(126, 131, 134)"><br>我们过度设计和过度泛化了我们的目标产品。</span>
>
> *   Costs associated with fixing keep growing<span style="color: rgb(126, 131, 134)"><br>与之相关的修复成本不断增长。</span>

## <管理技术债务>

### 必要性

*   If we can’t avoid technical debt, we must manage it.<span style="color: rgb(126, 131, 134)"><br>如果我们无法避免技术债务，就必须管理它。</span>

*   This means recognizing it, tracking it, making reasoned decisions about it, and preventing its worst consequences.<span style="color: rgb(126, 131, 134)"><br>这意味着识别它、跟踪它、就此做出合理的决策，并预防其最严重的后果。</span>

### 管理技术债务的方法

```
跟踪技术债务
```

*   Tracking technical debts (TD) is necessary to manage them.\ <span style="color: rgb(126, 131, 134)">跟踪技术债务是管理它们的必要条件。</span>> *   All “good debt” can be tracked (at least by definition)<span style="color: rgb(126, 131, 134)"><br>所有“良性债务”都应该是可跟踪的（至少从定义上讲）</span>
    >
    > *   Log as defects<span style="color: rgb(126, 131, 134)"><br>作为缺陷记录</span>
    >
    > *   Include in product backlogs<span style="color: rgb(126, 131, 134)"><br>纳入产品待办列表</span>
    >
    > *   Monitor project velocity<span style="color: rgb(126, 131, 134)"><br>监控项目速度</span>
    >
    > *   Monitor the amount of rework<span style="color: rgb(126, 131, 134)"><br>监控返工量</span>

*   Ways to Measure Debt<span style="color: rgb(126, 131, 134)"><br>衡量债务的方法</span>> *   Total debt in the product backlog<span style="color: rgb(126, 131, 134)"><br>产品待办列表中的债务总量</span>
    >
    > *   Maintenance budget (or fraction of maintenance budget)<span style="color: rgb(126, 131, 134)"><br>维护预算（或维护预算的占比）</span>
    >
    > *   Measure debt in money, not features, e.g., “50% of the R\&D budget is nonproductive maintenance work”<span style="color: rgb(126, 131, 134)"><br>用金钱而非功能来衡量债务，例如，“研发预算的50%用于非生产性的维护工作”</span>

*   Tracking Technical Debts Visually\ <span style="color: rgb(126, 131, 134)">可视化跟踪技术债务</span>

    *   Visualize the technical debts on task boards. The lower section includes three refactoring tasks (i.e., instances of technical debts) to be addressed in a project: one is under code review, another one is “in progress”, and the last one has not been handled at all.<span style="color: rgb(126, 131, 134)"><br>在任务看板上可视化技术债务。下方部分包含项目中需要解决的三个重构任务（即技术债务实例）：一个正在代码审查中，另一个“进行中”，最后一个尚未处理。</span>

    *   Visualize the technical debts on Kanban board.<span style="color: rgb(126, 131, 134)"><br>在看板上可视化技术债务。</span>![\<img alt="" data-attachment-key="946DGI8G" width="1267" height="603" src="attachments/946DGI8G.png" ztype="zimage"> | 1267](attachments/946DGI8G.png)> *   **Legend** – This shows the types of cards (by color) that can be on the board, these include New features, Tech debt, Defects, Investigations (support) and External Issues (e.g. new servers). The purpose of this is to clearly visualize the type of work that is being processed**图例** – 显示看板上可能存在的卡片类型（通过颜色区分），包括新功能、技术债务、缺陷、调查（支持）和外部问题（例如新服务器）。其目的是清晰可视化正在处理的工作类型。
        > *   **Limits** – Each pending and work in progress column has a limit to control the amount of work that can be taken on. These limits are set based on resource levels and other bottlenecks, and are intended to encourage the PULLING of work when capacity exists rather than continuing to force more work onto a bottleneck.**限制** – 每个“待办”和“进行中”列都有限制，以控制可承担的工作量。这些限制是基于资源水平和其他瓶颈设置的，旨在鼓励在有容量时拉动工作，而不是持续将更多工作强加给瓶颈。
        > *   **Avatar** – Each team member has ONE avatar to place on the item they are on, this tells other team members that this card is being worked upon and should be progressing. As we pair on most development, there will often be more than one avatar on each Dev task.**头像** – 每个团队成员有一个头像，放在他们正在处理的项目上，这告诉其他团队成员该卡片正在处理中并应有进展。由于我们在大多数开发中结对，因此每个开发任务上通常会有多个头像。
        > *   **Arrows** – Indicate movement of tasks since the last standup, again this is part of the visualization of the process. These cards are often ignored at the standup, as we want to focus on the items that are not progressing, such as...**箭头** – 表示自上次站会以来任务的移动，这也是过程可视化的一部分。这些卡片在站会上通常被忽略，因为我们希望关注那些没有进展的项目，例如……
        > *   **Blockers** – We want to minimize blockers as they cause more bottlenecks in the system, so we clearly indicate these items with blocked avatar. An additional requirement to blocking a card is to add the details of WHO and WHY the item is unable to proceed.**阻塞项** – 我们希望最小化阻塞项，因为它们会在系统中造成更多瓶颈，因此我们用阻塞头像清晰标示这些项目。阻塞一张卡片的附加要求是详细说明谁以及为什么导致该项目无法继续进行。
        > *   **Waste** – Tasks can be abandoned at any stage in the process, we collect these and review at the weekly retrospective.**浪费** – 任务在流程的任何阶段都可能被放弃，我们收集这些并在每周的复盘会议上进行审查。
        > *   **Continuous Improvements** – Also, at the weekly retrospective we decide upon three improvement points that we want to tackle for the following week. These are summarized on the board and recalled at the beginning of the morning standup, if we fail to make any progress on an improvement then it may be rolled over to the next week.**持续改进** – 同样，在每周的复盘会议上，我们决定接下来一周要解决的三个改进点。这些改进点被总结在看板上，并在每日站会开始时回顾，如果我们在某个改进点上未能取得任何进展，它可能会被滚动到下一周。

<!---->

```
偿还技术债务
```

*   An effective tactic is to periodically reserve a timeslot to deal with technical debt.<span style="color: rgb(126, 131, 134)"><br>一个有效的策略是定期预留专门的时间段来处理技术债务。</span>

*   Longer time for refactoring to trade for a smaller number of refactoring cycles, and vice versa.<span style="color: rgb(126, 131, 134)"><br>用更长的重构时间来换取更少的重构周期，反之亦然。</span>

    *   Prioritize refactoring tasks to address the critical areas first.<span style="color: rgb(126, 131, 134)"><br>优先处理重构任务，先解决关键区域。</span>

    *   Involve product owners and stakeholders to get their perspectives<span style="color: rgb(126, 131, 134)"><br>让产品负责人和利益相关者参与进来，获取他们的视角。</span>

<!---->

```
讨论技术债务
```

*   Educate technical staff about business decision-making involved in the project<span style="color: rgb(126, 131, 134)"><br>对技术人员进行关于项目中涉及的业务决策的教育。</span>

    *   Fit developers into the business context<span style="color: rgb(126, 131, 134)"><br>让开发人员融入业务背景。</span>

*   Educate business staff about technical decision-making<span style="color: rgb(126, 131, 134)"><br>对业务人员进行关于技术决策的教育。</span>

    *   Also serve as an aspect of the inputs to their business or operational decisions<span style="color: rgb(126, 131, 134)"><br>这也可作为他们业务或运营决策的输入之一。</span>

*   Raises awareness/transparency of important issues that are often covered up<span style="color: rgb(126, 131, 134)"><br>提高经常被掩盖的重要问题的意识/透明度。</span>

    *   As a risk aversion measure<span style="color: rgb(126, 131, 134)"><br>作为一种风险规避措施。</span>

*   Allows TDs to be managed more explicitly and visually<span style="color: rgb(126, 131, 134)"><br>允许技术债务得到更明确和可视化的管理。</span>

    *   As a starting point for a project to resolve them individually.<span style="color: rgb(126, 131, 134)"><br>作为项目逐个解决它们的起点。</span>

### 实践中的技术债务管理

*   Although developers may have a desire for better ways of doing all these things, and yet they do not do it.\ <span style="color: rgb(126, 131, 134)">尽管开发人员可能期望有更好的方法来处理所有这些事情，但他们往往并没有这样做。</span>

*   工作场所的策略（来自对26家公司的调查）：> 1.  不作为——“没坏就别修”——因为债务可能永远不会对客户可见。
    > 2.  使用风险管理方法来评估技术债务的成本和价值并确定其优先级。例如，将每个发布周期的5%到10% 的时间用于解决技术债务。
    > 3.  通过让客户和非技术利益相关者成为平等的伙伴，并就债务的影响进行公开对话，来管理他们的期望。
    > 4.  与开发团队一起进行审计，使技术债务可见和明确；使用待办列表/任务板对其进行跟踪。

*   总结

    *   \[Effective] Backlogs, static analyzers and “lint” programs all increase the tracking level, but we cannot see a big difference (although static code analyzers seem to contribute better to the participants’ awareness). They are also the ones with the least overhead. They therefore seem to be considered the best practices at the moment to track TD.**<span style="color: rgb(15, 17, 21)"><br></span><span style="color: rgb(126, 131, 134)">[有效] 待办列表、静态分析器和“Lint”类程序</span>**<span style="color: rgb(126, 131, 134)">都能提高跟踪水平，但我们看不到巨大差异（尽管静态代码分析器似乎对参与者的意识提升贡献更大）。它们也是</span>**<span style="color: rgb(126, 131, 134)">开销最小</span>**<span style="color: rgb(126, 131, 134)">的工具。因此，它们目前似乎被认为是</span>**<span style="color: rgb(126, 131, 134)">跟踪技术债务的最佳实践</span>**<span style="color: rgb(126, 131, 134)">。</span>

        *   \[Effective] Backlogs are the most used tool among the participants. In particular, the most used backlog tools are Jira, Hansoft, and Excel.**<span style="color: rgb(15, 17, 21)"><br></span><span style="color: rgb(126, 131, 134)">[有效] 待办列表</span>**<span style="color: rgb(126, 131, 134)">是参与者中</span>**<span style="color: rgb(126, 131, 134)">最常用</span>**<span style="color: rgb(126, 131, 134)">的工具。特别是，最常用的待办列表工具是 Jira、Hansoft 和 Excel。</span>

    *   \[Ineffective] Comments in the code help awareness, but they are not considered tracking, and they are used by just 1% of the respondents. This is probably because they are not used in a document that can be monitored by the team outside the code.**<span style="color: rgb(15, 17, 21)"><br></span><span style="color: rgb(126, 131, 134)">[低效] 代码中的注释</span>**<span style="color: rgb(126, 131, 134)">有助于提高意识，但它们</span>**<span style="color: rgb(126, 131, 134)">不被视为跟踪</span>**<span style="color: rgb(126, 131, 134)">，并且只有</span>**<span style="color: rgb(126, 131, 134)">1%</span>**<span style="color: rgb(126, 131, 134)"> 的受访者使用。这可能是因为它们没有被用在团队可以在代码之外监控的文档中。</span>

    *   \[Ineffective] Documentation increases TD awareness, but it is not considered as a high level of tracking, and it has the highest overhead. The main tools used here were Microsoft Excel or Word. We can infer that this practice is not recommendable in comparison with the other ones.**<span style="color: rgb(15, 17, 21)"><br></span><span style="color: rgb(126, 131, 134)">[低效] 文档</span>**<span style="color: rgb(126, 131, 134)">提高了技术债务意识，但它</span>**<span style="color: rgb(126, 131, 134)">不被认为是高水平的跟踪</span>**<span style="color: rgb(126, 131, 134)">，并且它的</span>**<span style="color: rgb(126, 131, 134)">开销最高</span>**<span style="color: rgb(126, 131, 134)">。这里使用的主要工具是 Microsoft Excel 或 Word。我们可以推断，与其他方法相比，</span>**<span style="color: rgb(126, 131, 134)">不推荐</span>**<span style="color: rgb(126, 131, 134)">这种做法。</span>

    *   \[Ineffective] Using a bug system for tracking TD is not considered as contributing to a better level of awareness or tracking compared to the other techniques, and it has a slightly higher overhead. We would infer that this is also not the best way of tracking TD.**<span style="color: rgb(15, 17, 21)"><br></span><span style="color: rgb(126, 131, 134)">[低效] 使用缺陷系统</span>**<span style="color: rgb(126, 131, 134)">来跟踪技术债务，与其他技术相比，</span>**<span style="color: rgb(126, 131, 134)">并未被认为</span>**<span style="color: rgb(126, 131, 134)">有助于提高意识或跟踪水平，并且它具有</span>**<span style="color: rgb(126, 131, 134)">稍高的开销</span>**<span style="color: rgb(126, 131, 134)">。我们推断这</span>**<span style="color: rgb(126, 131, 134)">也不是跟踪技术债务的最佳方式</span>**<span style="color: rgb(126, 131, 134)">。</span>

    *   \[Ineffective] Test coverage does not seem to contribute too much to the awareness and tracking level, although it does not involve much overhead. This might be because test coverage is related to only a small part of TD.**<span style="color: rgb(15, 17, 21)"><br></span><span style="color: rgb(126, 131, 134)">[低效] 测试覆盖率</span>**<span style="color: rgb(126, 131, 134)">似乎对</span>**<span style="color: rgb(126, 131, 134)">意识和跟踪水平的贡献不大</span>**<span style="color: rgb(126, 131, 134)">，尽管它不涉及太多开销。这可能是因为测试覆盖率只与技术债务的一小部分相关。</span>
