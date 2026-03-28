# CS5187计算题：特征值的计算方法详解

## 一、基本概念

### 什么是特征值？

设 $A$ 是一个 $n \times n$ 的方阵，若存在非零向量 $\mathbf{v}$ 和标量 $\lambda$，使得：

$$A\mathbf{v} = \lambda\mathbf{v}$$

则称 $\lambda$ 为矩阵 $A$ 的**特征值**（Eigenvalue），$\mathbf{v}$ 为对应于 $\lambda$ 的**特征向量**（Eigenvector）。

**几何意义**：矩阵 $A$ 对特征向量 $\mathbf{v}$ 的线性变换，仅仅是将 $\mathbf{v}$ 沿其方向缩放了 $\lambda$ 倍，方向不变（或反向）。

---

## 二、计算特征值的核心公式

### 特征方程（Characteristic Equation）

由 $A\mathbf{v} = \lambda\mathbf{v}$ 变形：

$$A\mathbf{v} - \lambda\mathbf{v} = \mathbf{0}$$
$$(A - \lambda I)\mathbf{v} = \mathbf{0}$$

要使非零解 $\mathbf{v}$ 存在，矩阵 $(A - \lambda I)$ 必须是**奇异矩阵**，即：

$$\det(A - \lambda I) = 0$$

这个方程称为矩阵 $A$ 的**特征多项式方程**，其解即为所有特征值。

---

## 三、计算步骤总览

1. 构造矩阵 $(A - \lambda I)$
2. 计算行列式 $\det(A - \lambda I)$，得到关于 $\lambda$ 的多项式
3. 令该多项式为零，求解 $\lambda$
4. 将每个 $\lambda$ 代入 $(A - \lambda I)\mathbf{v} = \mathbf{0}$，求解对应的特征向量

---

## 四、例题详解

---

### 【例题一】$2 \times 2$ 矩阵（实数特征值）

$$A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$$

#### 第一步：构造 $(A - \lambda I)$

$$A - \lambda I = \begin{pmatrix} 4 - \lambda & 1 \\ 2 & 3 - \lambda \end{pmatrix}$$

#### 第二步：计算行列式

$$\det(A - \lambda I) = (4 - \lambda)(3 - \lambda) - (1)(2)$$

展开：

$$= 12 - 4\lambda - 3\lambda + \lambda^2 - 2$$
$$= \lambda^2 - 7\lambda + 10$$

#### 第三步：求解特征方程

$$\lambda^2 - 7\lambda + 10 = 0$$
$$(\lambda - 5)(\lambda - 2) = 0$$

$$\boxed{\lambda_1 = 5, \quad \lambda_2 = 2}$$

#### 第四步：求特征向量

**对于 $\lambda_1 = 5$：**

$$(A - 5I)\mathbf{v} = \begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \mathbf{0}$$

由第一行：$-v_1 + v_2 = 0 \Rightarrow v_1 = v_2$

特征向量：$\mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$

**对于 $\lambda_2 = 2$：**

$$(A - 2I)\mathbf{v} = \begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \mathbf{0}$$

由第一行：$2v_1 + v_2 = 0 \Rightarrow v_2 = -2v_1$

特征向量：$\mathbf{v}_2 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}$

---

### 【例题二】$2 \times 2$ 矩阵（重复特征值）

$$B = \begin{pmatrix} 3 & 1 \\ 0 & 3 \end{pmatrix}$$

#### 第一步：构造 $(B - \lambda I)$

$$B - \lambda I = \begin{pmatrix} 3 - \lambda & 1 \\ 0 & 3 - \lambda \end{pmatrix}$$

#### 第二步：计算行列式

$$\det(B - \lambda I) = (3 - \lambda)^2 - 0 = (3 - \lambda)^2$$

#### 第三步：求解特征方程

$$(3 - \lambda)^2 = 0$$

$$\boxed{\lambda = 3 \text{（二重特征值）}}$$

#### 第四步：求特征向量

$$(B - 3I)\mathbf{v} = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \mathbf{0}$$

由第一行：$v_2 = 0$，$v_1$ 自由

特征向量：$\mathbf{v} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$

> ⚠️ **注意**：此矩阵为上三角矩阵，虽然特征值为二重，但**特征空间是一维的**，矩阵不可对角化，这类矩阵称为**亏损矩阵（Defective Matrix）**。

---

### 【例题三】$3 \times 3$ 矩阵

$$C = \begin{pmatrix} 2 & 0 & 0 \\ 1 & 3 & 0 \\ 0 & 1 & 4 \end{pmatrix}$$

#### 第一步：构造 $(C - \lambda I)$

$$C - \lambda I = \begin{pmatrix} 2-\lambda & 0 & 0 \\ 1 & 3-\lambda & 0 \\ 0 & 1 & 4-\lambda \end{pmatrix}$$

#### 第二步：计算行列式（下三角矩阵，行列式为对角线之积）

$$\det(C - \lambda I) = (2-\lambda)(3-\lambda)(4-\lambda)$$

#### 第三步：求解特征方程

$$(2-\lambda)(3-\lambda)(4-\lambda) = 0$$

$$\boxed{\lambda_1 = 2, \quad \lambda_2 = 3, \quad \lambda_3 = 4}$$

#### 第四步：求特征向量

**对于 $\lambda_1 = 2$：**

$$(C - 2I) = \begin{pmatrix} 0 & 0 & 0 \\ 1 & 1 & 0 \\ 0 & 1 & 2 \end{pmatrix}$$

由第二行：$v_1 + v_2 = 0 \Rightarrow v_1 = -v_2$

由第三行：$v_2 + 2v_3 = 0 \Rightarrow v_2 = -2v_3$

令 $v_3 = 1$：$v_2 = -2$，$v_1 = 2$

特征向量：$\mathbf{v}_1 = \begin{pmatrix} 2 \\ -2 \\ 1 \end{pmatrix}$

**对于 $\lambda_2 = 3$：**

$$(C - 3I) = \begin{pmatrix} -1 & 0 & 0 \\ 1 & 0 & 0 \\ 0 & 1 & 1 \end{pmatrix}$$

由第一行：$v_1 = 0$

由第三行：$v_2 + v_3 = 0 \Rightarrow v_2 = -v_3$

令 $v_3 = 1$：$v_2 = -1$，$v_1 = 0$

特征向量：$\mathbf{v}_2 = \begin{pmatrix} 0 \\ -1 \\ 1 \end{pmatrix}$

**对于 $\lambda_3 = 4$：**

$$(C - 4I) = \begin{pmatrix} -2 & 0 & 0 \\ 1 & -1 & 0 \\ 0 & 1 & 0 \end{pmatrix}$$

由第一行：$v_1 = 0$

由第三行：$v_2 = 0$

$v_3$ 自由，令 $v_3 = 1$

特征向量：$\mathbf{v}_3 = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$

---

### 【例题四】$2 \times 2$ 矩阵（复数特征值）

$$D = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$$

此矩阵表示平面上的旋转变换（旋转 $90°$）。

#### 第一步：构造 $(D - \lambda I)$

$$D - \lambda I = \begin{pmatrix} -\lambda & -1 \\ 1 & -\lambda \end{pmatrix}$$

#### 第二步：计算行列式

$$\det(D - \lambda I) = (-\lambda)(-\lambda) - (-1)(1) = \lambda^2 + 1$$

#### 第三步：求解特征方程

$$\lambda^2 + 1 = 0$$
$$\lambda^2 = -1$$

$$\boxed{\lambda_1 = i, \quad \lambda_2 = -i}$$

> 💡 **结论**：旋转矩阵没有实数特征值，因为旋转操作不存在方向不变的实向量。在复数域中，特征值成共轭对出现。

---

### 【例题五】$3 \times 3$ 对称矩阵

$$E = \begin{pmatrix} 4 & 2 & 2 \\ 2 & 4 & 2 \\ 2 & 2 & 4 \end{pmatrix}$$

#### 第一步：构造 $(E - \lambda I)$

$$E - \lambda I = \begin{pmatrix} 4-\lambda & 2 & 2 \\ 2 & 4-\lambda & 2 \\ 2 & 2 & 4-\lambda \end{pmatrix}$$

#### 第二步：计算行列式（按第一行展开）

令 $\mu = 4 - \lambda$：

$$\det = \mu(\mu^2 - 4) - 2(2\mu - 4) + 2(4 - 2\mu)$$
$$= \mu^3 - 4\mu - 4\mu + 8 + 8 - 4\mu$$
$$= \mu^3 - 12\mu + 16$$

代回 $\mu = 4 - \lambda$：

$$= -(\lambda^3 - 12\lambda^2 + 36\lambda - 32)$$
$$= -(\lambda - 2)^2(\lambda - 8)$$

#### 第三步：求解特征方程

$$(\lambda - 2)^2(\lambda - 8) = 0$$

$$\boxed{\lambda_1 = \lambda_2 = 2 \text{（二重）}, \quad \lambda_3 = 8}$$

#### 第四步：求特征向量

**对于 $\lambda_{1,2} = 2$：**

$$(E - 2I) = \begin{pmatrix} 2 & 2 & 2 \\ 2 & 2 & 2 \\ 2 & 2 & 2 \end{pmatrix} \rightarrow \begin{pmatrix} 1 & 1 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$

约束条件：$v_1 + v_2 + v_3 = 0$，有两个自由变量。

令 $v_2 = 1, v_3 = 0$：$v_1 = -1$，得 $\mathbf{v}_1 = \begin{pmatrix} -1 \\ 1 \\ 0 \end{pmatrix}$

令 $v_2 = 0, v_3 = 1$：$v_1 = -1$，得 $\mathbf{v}_2 = \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix}$

> 特征空间是二维的，$\lambda = 2$ 的特征空间由以上两个向量张成。

**对于 $\lambda_3 = 8$：**

$$(E - 8I) = \begin{pmatrix} -4 & 2 & 2 \\ 2 & -4 & 2 \\ 2 & 2 & -4 \end{pmatrix} \rightarrow \begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & -1 \\ 0 & 0 & 0 \end{pmatrix}$$

由：$v_1 = v_3$，$v_2 = v_3$，令 $v_3 = 1$

特征向量：$\mathbf{v}_3 = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$

---

## 五、重要性质总结

| 性质 | 说明 |
|------|------|
| **迹与特征值** | $\text{tr}(A) = \lambda_1 + \lambda_2 + \cdots + \lambda_n$ |
| **行列式与特征值** | $\det(A) = \lambda_1 \cdot \lambda_2 \cdots \lambda_n$ |
| **实对称矩阵** | 特征值全为实数，不同特征值对应的特征向量互相正交 |
| **上/下三角矩阵** | 特征值就是对角线上的元素 |
| **幂运算** | 若 $\lambda$ 是 $A$ 的特征值，则 $\lambda^k$ 是 $A^k$ 的特征值 |
| **逆矩阵** | 若 $A$ 可逆，$\lambda^{-1}$ 是 $A^{-1}$ 的特征值 |
| **代数重数 vs 几何重数** | 代数重数 ≥ 几何重数；等号成立时矩阵可对角化 |

---

## 六、特殊矩阵的特征值快速判断

- **单位矩阵** $I$：所有特征值均为 $1$
- **零矩阵** $O$：所有特征值均为 $0$
- **对角矩阵** $\text{diag}(d_1, d_2, \ldots, d_n)$：特征值为 $d_1, d_2, \ldots, d_n$
- **正交矩阵** $Q$：特征值模长均为 $1$（即 $|\lambda| = 1$）
- **正定矩阵**：所有特征值均为正实数

---

## 七、数值方法简介（针对大型矩阵）

对于高维矩阵，手算行列式不现实，常用数值方法：

- **幂迭代法（Power Iteration）**：迭代求最大特征值
- **QR 算法**：将矩阵分解为正交矩阵 $Q$ 与上三角矩阵 $R$ 的乘积，反复迭代收敛至特征值
- **Lanczos 算法**：适用于大型稀疏对称矩阵

---

*本文档涵盖了线性代数中特征值计算的核心理论与五个典型例题，包含实数特征值、重复特征值、下三角矩阵、复数特征值与对称矩阵等各类情形。*
