# CS5187: Vision & Image — 术语表（中英对照）

> 香港城市大学（东莞）｜覆盖范围：Lec00 ~ Lec14
>
> 按 Lecture 顺序排列，每个术语给出**中文名称、英文名称、简要解释**。

---

## Lec00：课程导论

| 中文 | English | 解释 |
|------|---------|------|
| 计算机视觉 | Computer Vision (CV) | 让机器从图像/视频中感知并理解世界的学科 |
| 视点变化 | Viewpoint Variation | 同一物体从不同角度拍摄时外观完全不同 |
| 光照变化 | Illumination Variation | 不同光照条件下同一场景外观差异巨大 |
| 尺度变化 | Scale Variation | 远近不同导致物体在图像中大小不同 |
| 类内变化 | Intra-class Variation | 同一类别的不同个体外观差异大（如各种椅子） |
| 遮挡 | Occlusion | 物体的一部分被其他物体遮挡，信息丢失 |
| 语义鸿沟 | Semantic Gap | 人类看到的"含义"与计算机看到的"数字矩阵"之间的鸿沟 |

---

## Lec01：图像与滤波

| 中文 | English | 解释 |
|------|---------|------|
| 像素 | Pixel | 图像的最小组成单元，存储亮度/颜色值 |
| 采样 | Sampling | 将连续函数在离散位置取值，得到数字信号 |
| 量化 | Quantization | 将像素的连续亮度值映射到有限离散级别（如 0–255） |
| 滤波 | Filtering | 根据局部邻域信息计算新的像素值，生成新图像 |
| 卷积 | Convolution | 核先翻转 180°，再与图像做滑动加权求和的运算 |
| 互相关 | Cross-Correlation | 核不翻转，直接与图像做滑动加权求和（模板匹配视角） |
| 卷积核 / 滤波器 | Kernel / Filter / Mask | 定义滤波权重的小矩阵 |
| 高斯滤波 | Gaussian Filter | 权重按高斯分布的平滑滤波器，σ 控制模糊程度 |
| 均值滤波 | Box / Mean Filter | 所有权重相等的平滑滤波器 |
| 低通滤波器 | Low-pass Filter | 去除高频成分（噪声、细节），保留低频（整体结构） |
| 高通滤波器 | High-pass Filter | 去除低频成分，保留高频（边缘、细节） |
| 锐化 | Sharpening | 增强图像细节，等价于原图 + α × 高频成分 |
| 阈值化 | Thresholding | 像素值大于阈值变白、否则变黑——一种非线性操作 |
| 边界填充 | Padding | 核滑到图像边缘时处理超出部分的策略（补零 / 镜像 / 循环等） |

---

## Lec02：边缘检测

| 中文 | English | 解释 |
|------|---------|------|
| 边缘 | Edge | 图像中亮度急剧变化的位置 |
| 梯度 | Gradient | 图像亮度函数的一阶导数，方向指向亮度增大最快方向 |
| 梯度幅值 | Gradient Magnitude | 梯度向量的长度，表示边缘的"强度" |
| 梯度方向 | Gradient Direction | 梯度向量的朝向，垂直于边缘方向 |
| 有限差分 | Finite Difference | 用相邻像素差值近似连续导数的离散方法 |
| 高斯导数 | Derivative of Gaussian (DoG) | 高斯函数的导数，同时实现平滑和求导 |
| Sobel 算子 | Sobel Operator | 一种 3×3 的梯度近似算子，比简单差分更鲁棒 |
| Canny 边缘检测 | Canny Edge Detector | 经典四步边缘检测：平滑→梯度→NMS→双阈值 |
| 非极大值抑制 | Non-Maximum Suppression (NMS) | 沿梯度方向仅保留局部最大值，将粗边缘细化为单像素宽 |
| 双阈值 | Hysteresis Thresholding | 设高/低两个阈值：强边缘直接保留，弱边缘仅在与强边缘相连时保留 |
| 尺度空间 | Scale Space | 用不同 σ 的高斯平滑得到多尺度图像表示，σ 大→粗尺度 |

---

## Lec03：重采样与多尺度

| 中文 | English | 解释 |
|------|---------|------|
| 下采样 | Downsampling / Subsampling | 降低图像分辨率（缩小图像） |
| 上采样 | Upsampling | 提高图像分辨率（放大图像） |
| 混叠 | Aliasing | 采样率不足时高频信号"伪装"成低频的失真现象 |
| 奈奎斯特频率 | Nyquist Frequency | 能被正确采样的最高频率 = 采样率的一半 |
| 奈奎斯特采样定理 | Nyquist Sampling Theorem | 采样率必须 ≥ 信号最高频率的 2 倍才能无失真重建 |
| 反混叠 | Anti-aliasing | 在下采样前用低通滤波去除高频，防止混叠 |
| 高斯金字塔 | Gaussian Pyramid | 反复"高斯模糊 + 2× 下采样"得到的多尺度图像序列 |
| 拉普拉斯金字塔 | Laplacian Pyramid | 高斯金字塔相邻层的差分，保留带通（细节）信息 |
| 插值 | Interpolation | 从离散采样点推算未知位置值的方法 |
| 最近邻插值 | Nearest Neighbor Interpolation | 取最近像素值，结果块状有锯齿 |
| 双线性插值 | Bilinear Interpolation | 用周围 4 个像素加权平均，结果平滑但略模糊 |
| 双三次插值 | Bicubic Interpolation | 考虑周围 16 个像素的三次加权，结果更锐利 |
| sinc 函数 | Sinc Function | 理论最优的重建滤波器核，实际中无法精确实现 |
| Mipmap | Mipmap | 图形学中的纹理金字塔，用于高效纹理映射 |

---

## Lec04：Harris 角点检测

| 中文 | English | 解释 |
|------|---------|------|
| 局部特征 | Local Feature | 图像中可定位、可描述、可匹配的局部区域 |
| 兴趣点 / 关键点 | Interest Point / Keypoint | 图像中适合做匹配的特殊位置（如角点） |
| 角点 | Corner | 两个方向上都有显著亮度变化的点，可唯一定位 |
| 平坦区域 | Flat Region | 各方向变化都很小的区域，无法定位 |
| 二阶矩矩阵 | Second Moment Matrix (H) | 由局部梯度外积加权求和得到的 2×2 矩阵，编码局部变化信息 |
| 特征值 | Eigenvalue | 矩阵的特征标量，H 的两个特征值判断角点/边缘/平坦 |
| 特征向量 | Eigenvector | 特征值对应的方向向量，表示变化的主方向 |
| Harris 响应函数 | Harris Response Function | $R = \det(H) - k \cdot \text{tr}(H)^2$，不需显式求特征值即可判断角点 |
| 行列式 | Determinant (det) | 方阵的标量值，$\det(H) = \lambda_1 \lambda_2$ |
| 迹 | Trace (tr) | 方阵对角线元素之和，$\text{tr}(H) = \lambda_1 + \lambda_2$ |

---

## Lec05：特征不变性与尺度

| 中文 | English | 解释 |
|------|---------|------|
| 不变性 | Invariance | 图像变换后输出不变（如描述子对旋转不变） |
| 等变性 | Equivariance / Covariance | 图像变换后输出做同样变换（如检测位置随平移移动） |
| 尺度不变检测 | Scale-Invariant Detection | 在 (x, y, scale) 三维空间中找极值，检测结果不受尺度影响 |
| 特征尺度 | Characteristic Scale | 响应函数在该尺度下取最大值，与特征大小匹配 |
| 高斯拉普拉斯 | Laplacian of Gaussian (LoG) | 高斯平滑后求二阶导数，用作斑点检测器 |
| 高斯差分 | Difference of Gaussians (DoG) | 两个不同 σ 高斯之差，LoG 的高效近似 |
| 斑点 | Blob | 图像中与周围对比明显的圆形区域 |

---

## Lec06：特征描述子与匹配

| 中文 | English | 解释 |
|------|---------|------|
| 特征描述子 | Feature Descriptor | 对关键点邻域外观的向量化表示（"身份证"） |
| 主方向 | Dominant Orientation | 关键点邻域中梯度最强的方向，用于实现旋转不变 |
| SIFT | Scale-Invariant Feature Transform | 128 维描述子：16×16 窗口 → 4×4 网格 × 8 方向直方图 |
| MOPS | Multi-scale Oriented Patches | 简单块描述子：40×40 窗口降采样到 8×8 + 归一化 |
| HOG | Histogram of Oriented Gradients | 密集网格的梯度方向直方图，经典行人检测特征 |
| ORB | Oriented FAST and Rotated BRIEF | 二进制描述子（256 位），适合实时应用 |
| LIFT | Learned Invariant Feature Transform | 端到端学习的深度特征检测 + 描述 |
| 比率距离 | Ratio Distance | 最佳匹配距离 / 第二佳匹配距离，越小表示匹配越可靠 |
| 真阳性 | True Positive (TP) | 正确保留的匹配 |
| 假阳性 | False Positive (FP) | 错误保留的匹配 |
| 真阳性率 | True Positive Rate (TPR) | TP / 所有实际正确匹配数 |
| 假阳性率 | False Positive Rate (FPR) | FP / 所有实际错误匹配数 |
| ROC 曲线 | Receiver Operating Characteristic Curve | (FPR, TPR) 曲线，越靠左上角性能越好 |
| AUC | Area Under Curve | ROC 曲线下面积，越接近 1 越好 |
| 主成分分析 | Principal Component Analysis (PCA) | 利用协方差矩阵特征值/特征向量做降维 |

---

## Lec07：图像变换

| 中文 | English | 解释 |
|------|---------|------|
| 变形 / 扭曲 | Warping | 改变像素的位置（旋转、拉伸、扭曲图像） |
| 齐次坐标 | Homogeneous Coordinates | 增加一维使平移也能用矩阵乘法表示：$(x,y) \to (x,y,1)$ |
| 线性变换 | Linear Transformation | 2×2 矩阵可表示的变换（缩放、旋转、剪切），原点不动 |
| 仿射变换 | Affine Transformation | 6 自由度，保持直线和平行线，包含平移 |
| 单应性 / 投影变换 | Homography / Projective Transformation | 8 自由度，保持直线但不保持平行线，可表示透视效果 |
| 自由度 | Degrees of Freedom (DOF) | 变换中独立参数的个数 |
| 前向映射 | Forward Warping | 从源像素计算目标位置，可能产生空洞 |
| 逆向映射 | Inverse Warping | 从目标像素反查源位置再插值，不会有空洞 |

---

## Lec08：图像对齐与最小二乘

| 中文 | English | 解释 |
|------|---------|------|
| 图像对齐 | Image Alignment | 找到使两幅图对齐的几何变换 |
| 最小二乘法 | Least Squares | 最小化残差平方和来拟合模型参数 |
| 超定方程组 | Overdetermined System | 方程数 > 未知数个数的方程组，通常无精确解 |
| 正则方程 | Normal Equations | 最小二乘的解析解：$\mathbf{p} = (A^TA)^{-1}A^T\mathbf{b}$ |
| 奇异值分解 | Singular Value Decomposition (SVD) | 矩阵分解 $A = U\Sigma V^T$，用于求解齐次最小二乘 |
| 离群点 | Outlier | 严重偏离真实模型的错误数据点 |
| 内点 | Inlier | 符合正确模型的数据点 |

---

## Lec09：RANSAC

| 中文 | English | 解释 |
|------|---------|------|
| RANSAC | Random Sample Consensus | 随机采样一致性算法，对 outlier 鲁棒的模型估计方法 |
| 假设-验证 | Hypothesize-and-Verify | RANSAC 的核心策略：随机样本拟合模型→验证其他点是否支持 |
| 最小样本集 | Minimum Sample Set | 拟合模型所需的最少数据点（如单应性需 4 对） |
| 内点阈值 | Inlier Threshold (ε) | 残差小于此值的点被视为 inlier |
| 全景拼接 | Panorama Stitching | 多张图通过特征匹配 + 单应性变换拼接成全景图 |

---

## Lec10：相机模型

| 中文 | English | 解释 |
|------|---------|------|
| 针孔相机模型 | Pinhole Camera Model | 所有光线通过一个小孔投影到像面的理想化模型 |
| 透视投影 | Perspective Projection | $x' = fx/z$，除以深度 z 产生近大远小效果 |
| 正交投影 | Orthographic Projection | 直接丢弃 z 坐标，无透视效果，适用于远距近似 |
| 焦距 | Focal Length (f) | 针孔到像面的距离，控制视野宽窄（望远 vs 广角） |
| 内参 | Intrinsics / Intrinsic Parameters | 相机自身光学属性（焦距、主点等），最多 5 个参数 |
| 外参 | Extrinsics / Extrinsic Parameters | 相机在世界中的位姿（旋转 R + 平移 t），6 个参数 |
| 内参矩阵 | Intrinsic Matrix (K) | 3×3 上三角矩阵，包含 $f, c_x, c_y$ 等参数 |
| 主点 | Principal Point $(c_x, c_y)$ | 光轴与图像平面的交点，通常接近图像中心 |
| 旋转矩阵 | Rotation Matrix (R) | 3×3 正交矩阵，描述相机朝向，3 个参数 |
| 平移向量 | Translation Vector (t) | 描述相机在世界坐标系中的位置 |
| 投影矩阵 | Projection Matrix (P) | 3×4 矩阵 $P = K[R \mid t]$，完成 3D→2D 投影 |
| 消失点 | Vanishing Point | 三维平行线在透视投影下汇聚的图像点 |
| 径向畸变 | Radial Distortion | 真实镜头偏离理想模型产生的畸变 |
| 桶形畸变 | Barrel Distortion | 图像向外膨胀的畸变（常见于广角镜头） |
| 枕形畸变 | Pincushion Distortion | 图像向内收缩的畸变 |
| 相机标定 | Camera Calibration | 确定相机内参和外参的过程 |

---

## Lec13：双目立体视觉

| 中文 | English | 解释 |
|------|---------|------|
| 双目立体视觉 | Binocular / Two-View Stereo | 用两个视点的图像通过三角测量恢复深度 |
| 对极几何 | Epipolar Geometry | 描述两个相机之间几何关系的理论框架 |
| 对极线 | Epipolar Line | 一个点在另一幅图中的对应搜索范围——一条线而非全图 |
| 校正 | Rectification | 变换立体图像对使对极线变为水平扫描线 |
| 视差 | Disparity | 同一 3D 点在左右图中水平像素位置的差值 |
| 视差图 | Disparity Map | 每个像素对应一个视差值的图像，可转换为深度图 |
| 深度图 | Depth Map | 每个像素存储到相机距离的图像 |
| 基线 | Baseline (B) | 两个相机光心之间的距离 |
| 三角测量 | Triangulation | 从两条已知射线的交点推算 3D 点位置 |
| 立体匹配 | Stereo Matching | 在左右图之间找到同一 3D 点的像素对应关系 |
| 亮度一致性假设 | Brightness Constancy Assumption | 假设同一 3D 点在两幅图中出现相同亮度 |
| SSD | Sum of Squared Differences | 差的平方和，最基本的窗口匹配代价 |
| SAD | Sum of Absolute Differences | 差的绝对值和，计算量更小的匹配代价 |
| ZNCC | Zero-mean Normalized Cross Correlation | 零均值归一化互相关，对光照变化鲁棒 |
| 匹配代价 | Data Term / Match Cost | 能量函数中衡量每个像素匹配质量的项 |
| 平滑代价 | Smoothness Term | 能量函数中鼓励相邻像素视差相近的正则化项 |
| 能量最小化 | Energy Minimization | 同时优化匹配代价和平滑代价的立体匹配框架 |
| Potts 模型 | Potts Model | 平滑代价的一种：只惩罚视差有无跳变，不管跳多少 |
| 视差空间图像 | Disparity Space Image (DSI) | 每行对应一条扫描线的匹配代价三维矩阵 |
| 结构光 | Structured Light | 主动投射已知图案以简化匹配问题的深度感知方法 |
| 飞行时间 | Time-of-Flight (ToF) | 测量光脉冲往返时间来估计深度的主动方法 |
| 激光雷达 | LiDAR (Light Detection and Ranging) | 利用激光三角测量获取 3D 点云的设备 |

---

## Lec14：多视图立体

| 中文 | English | 解释 |
|------|---------|------|
| 多视图立体 | Multi-View Stereo (MVS) | 用多幅已标定图像重建完整 3D 模型 |
| 多基线立体 | Multi-baseline Stereo | 同时使用多个基线累加 SSD（SSSD）以提高匹配鲁棒性 |
| SSSD | Sum of SSD | 多个立体对的 SSD 之和，多基线立体的核心操作 |
| 平面扫描立体 | Plane-Sweep Stereo | 在参考相机前方扫描深度平面，将邻居图像重投影后比较一致性 |
| 代价体积 | Cost Volume | $H \times W \times D$ 的三维张量，存储每个像素在每个深度假设下的匹配代价 |
| 照片一致性 | Photo-consistency | 重投影后多幅图像间外观一致，说明深度假设正确 |
| 深度图融合 | Depth Map Fusion | 将多张单视图深度图合并为完整 3D 模型 |
| 置信传播 | Belief Propagation (BP) | 一种图模型推理算法，用于从代价体积求解最优深度图 |
| 图割 | Graph Cuts | 一种能量最小化求解算法，用于立体匹配和分割 |
| NeRF | Neural Radiance Fields | 用神经网络将场景表示为 $(x,y,z,\theta,\phi) \to (\text{RGB}, \sigma)$，可合成新视角图像 |
| 体积渲染 | Volume Rendering | 沿相机射线积累颜色和密度以合成图像的渲染方法 |

---

## 跨 Lecture 通用术语

| 中文 | English | 解释 |
|------|---------|------|
| 鲁棒性 | Robustness | 算法在噪声、异常值或变化条件下仍能良好工作的能力 |
| 可区分性 | Discriminability | 特征能有效区分不同物体/位置的能力 |
| 卷积结合律 | Associativity of Convolution | $f * (g * h) = (f * g) * h$，可预先合并多个核 |
| 可分离性 | Separability | 2D 核可拆为两个 1D 核依次卷积（如高斯），降低计算量 |
| 特征方程 | Characteristic Equation | $\det(A - \lambda I) = 0$，求解矩阵特征值的方程 |
| 齐次线性方程组 | Homogeneous Linear System | $A\mathbf{x} = \mathbf{0}$ 形式的方程组 |
| 正交矩阵 | Orthogonal Matrix | $R^T R = I$ 的矩阵，旋转矩阵即为正交矩阵 |
