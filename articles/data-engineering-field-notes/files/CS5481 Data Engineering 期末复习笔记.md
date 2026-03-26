# CS5481 Data Engineering 期末复习笔记

> **余沛翰 72510479**

***

# **数据工程课程大纲**

## **Lecture 1: 数据工程简介与生态系统 / Introduction & Data Ecosystem**

*   课程组织 / Course Organization
*   数据工程生态系统概述 / Overview of the Data Engineering Ecosystem
*   数据类型 / Types of Data
*   数据专业人员使用的语言和工具 / Languages and Tools for Data Professionals

**Lecture 2: 数据获取 / Data Acquisition**

*   数据来源 / Data Sources
*   网络爬取 / Web Scraping
*   从网络爬取到网络爬虫 / From Web Scraping to Web Crawling

**Lecture 3: 数据预处理 / Data Preprocessing**

*   为什么需要数据预处理 / Why Data Preprocessing
*   数据清理 / Data Cleaning
*   数据集成 / Data Integration
*   数据转换 / Data Transformation
*   数据约简 / Data Reduction
*   数据离散化 / Data Discretization

**Lecture 4: 数据可视化 / Data Visualization**

*   数据可视化简介 / Introduction to Data Visualization
*   常见可视化图表 / Conventional Visualizations
*   数据可视化技巧 / Data Visualization Skills
*   注意事项与常见误区 / Tips and Tricks
*   可视化与仪表盘软件 / Visualization and Dashboard Software

**Lecture 5: 数据索引 / Data Indexing**

*   数据存储 / Data Storage
*   记录与文件 / Records and Files
*   哈希文件 / Hashed Files
*   索引技术 / Indexing Techniques
*   树形数据结构 / Tree Data Structure

**Lecture 6: 数据查询 / Data Querying**

*   数据查询概述 / Overview of Data Querying
*   关系代数与 SQL 查询 / Relational Algebra and SQL Querying
*   NoSQL 查询 / NoSQL Querying

**Lecture 7 & 8: 数据驱动应用 / Data Driven Applications**

*   信息检索 / Information Retrieval
*   推荐系统 / Recommendations
*   社交网络分析 / Social Network Analysis
*   异常检测 / Anomaly Detection

**Lecture 9: 数据管理 / Data Management**

*   什么是数据管理 / What is Data Management
*   数据质量 / Data Quality
*   数据安全 / Data Security
*   数据隐私 / Data Privacy

**Lecture 10: 高级主题与前沿趋势 / Advanced Topics and Recent Trends**

*   表示学习与多模态学习 / Representation Learning and Multimodal Learning
*   数据偏差问题 / Data Bias Issues
*   模型可解释性 / Explainability

**Lecture 11: 课程复习 / Course Review**

*   期末考试说明 / Final Exam Information
*   课程内容回顾 / Course Review

**Lecture 12: 练习与习题 / Exercises**

*   B+ 树练习题 / B+ Tree Exercises
*   正则表达式练习 / Regular Expression Exercises
*   动态哈希练习 / Dynamic Hashing Exercises

***

# **Lecture 11: 课程复习 / Course Review**

## **1. 期末考试 / Final Exam**

*   **考试形式：闭卷，不允许携带任何材料和电子设备。**
*   **考试范围涵盖所有讲座、教程和作业。**
*   **考试重点在于理解基本概念、原理、基础技术、分析不同技术的优缺点，以及针对具体问题提出解决方案。**
*   **考试共5道题，包含约50%的概念简答题和约50%的设计、分析、计算或编程题。**
*   **考试前一周将安排在线答疑环节。**

## **2. 课程回顾 / Course Review**

### **Lecture 1: 引言**

*   **数据工程是设计和构建用于大规模收集、存储和分析数据的系统的实践。**

    *   Data engineering is the practice of designing and building systems for collecting, storing, and analyzing data at scale.

*   **数据工程的目标是为机器学习模型和数据分析提供有组织、标准化的数据流。**

    *   The Goal of Data Engineering is to provide organized, standard data flow to enable data-driven models such as machine learning models, data analysis.

*   **数据类型主要分为结构化、半结构化和非结构化数据。**

    *   Types of data include Structured, Semi-structured and Unstructured data.

*   **数据专业人员使用的语言包括查询语言（如SQL）、编程语言（如Python）以及脚本语言。**

    *   Languages for data professionals include Query Languages (e.g., SQL), Programming Languages (e.g., Python), and Shell and Scripting Languages.

### **Lecture 2: 数据获取**

*   **数据来源包括关系数据库、平面文件、XML数据集、API和网络服务。**

    *   Sources of data include Relational databases, Flat files and XML datasets, APIs and web services.

*   **网络爬取是从网络上自动下载、解析和组织数据的过程。**

    *   Web scraping is the construction of an agent to download, parse, and organize data from the web in an automated manner.

*   **网络爬虫用于读取、复制和存储网站内容以进行存档或索引。**

    *   Web Crawling uses tools to read, copy and store the content of the websites for archiving or indexing purposes.

    > ## Web Scraping (L2)
    >
    > *   **HTML is a standard markup language for creating web pages.**
    >
    >     *   HTML 是一种用于创建网页的标准标记语言。
    >
    > *   **HTML provides the building blocks to provide structure and formatting to documents.**
    >
    >     *   HTML 提供了为文档提供结构和格式的基本构建块。
    >
    > *   **Python ‘requests’ library could get the html content from a webpage.**
    >
    >     *   Python 的 `requests` 库可以从网页获取 HTML 内容。

### **Lecture 3: 数据预处理**

*   **现实世界的数据是“脏”的，存在不完整、有噪声、不一致或故意错误等问题。**

    *   Data in the real world is dirty: incomplete, noisy, inconsistent, or intentional.

*   **数据预处理的主要任务包括数据清理、数据集成、数据转换、数据约简和数据离散化。**

    *   Major tasks in data preprocessing are Data cleaning, Data integration, Data transformation, Data reduction, and Data discretization.

*   **处理缺失数据的方法包括忽略元组、手动填充、使用全局常量填充、使用属性均值填充等。**

    *   Methods for handling missing data include ignoring the tuple, fill in manually, use a global constant, use the attribute mean, etc.

*   **处理噪声数据的方法包括分箱、聚类、半自动化方法和回归。**

    *   Methods for handling noisy data include binning, clustering, semi-automated method, and regression.

*   **正则表达式是一种用于指定文本搜索模式的字符序列。**

    *   A regular expression is a sequence of characters that specifies a search pattern in text.

    > ## Regular Expressions (Regex) Examples (L3)
    >
    > *   **.at matches any three-character string ending with "at", including "hat", "cat", "bat", "4at", and " at" (starting with a space).**
    >
    >     *   `.at` 匹配任何以 "at" 结尾的三字符字符串，包括 "hat"、"cat"、"bat"、"4at" 和 " at"（以空格开头）。
    >
    > *   **\[hc]at matches "hat" and "cat".**
    >
    >     *   `[hc]at` 匹配 "hat" 和 "cat"。
    >
    > *   **\[^b]at matches all strings matched by .at except "bat".**
    >
    >     *   `[^b]at` 匹配 `.at` 能匹配的所有字符串，除了 "bat"。
    >
    > *   **\[^hc]at matches all strings matched by .at other than "hat" and "cat".**
    >
    >     *   `[^hc]at` 匹配除 "hat" 和 "cat" 外 `.at` 能匹配的所有字符串。
    >
    > *   **^\[hc]at matches "hat" and "cat", but only at the beginning of the string or line.**
    >
    >     *   `^[hc]at` 匹配 "hat" 和 "cat"，但仅在字符串或行的开头。
    >
    > *   **\[hc]at\$ matches "hat" and "cat", but only at the end of the string or line.**
    >
    >     *   `[hc]at$` 匹配 "hat" 和 "cat"，但仅在字符串或行的结尾。
    >
    > *   **\\\[.\\] matches any single character surrounded by "\[" and "]" since the brackets are escaped.**
    >
    >     *   `\[.\]` 匹配被 "\[" 和 "]" 包围的任何单个字符（因为括号被转义了）。
    >
    > *   ***s. matches s followed by zero or more characters.*\***
    >
    >     *   `s.*` 匹配以 s 开头，后跟零个或多个字符的字符串。
    >
    > ***
    >
    > ## Data Cleaning – Handling Missing Data (L3)
    >
    > *   **Ignore the tuple: usually done when class label is missing (assuming the task is classification—not effective in certain cases).**
    >
    >     *   忽略元组：通常在类别标签缺失时使用（假设任务是分类——在某些情况下无效）
    >
    > *   **Use a global constant to fill in the missing value: e.g., “unknown”, a new class.**
    >
    >     *   使用全局常量填充缺失值：例如，“unknown”，视为一个新类别
    >
    > *   **Use the attribute mean to fill in the missing value.**
    >
    >     *   使用该属性的平均值填充缺失值。
    >
    > *   **Use the attribute mean for all samples of the same class to fill in the missing value: smarter.**
    >
    >     *   使用同一类别所有样本的该属性平均值填充缺失值：更智能的方法。
    >
    > *   **Use the most probable value to fill in the missing value: inference-based such as regression, Bayesian formula, decision tree.**
    >
    >     *   使用最可能的值填充缺失值：基于推理的方法，如回归、贝叶斯公式、决策树。
    >
    > ***
    >
    > ## Data Transformation (L3)
    >
    > *   **Normalization: scaled to fall within a small, specified range.**
    >
    >     *   标准化：缩放到一个小的、指定的范围内。
    >
    >     *   ➤ **min-max normalization**
    >
    >         *   最小-最大标准化
    >
    >     *   ➤ **z-score normalization**
    >
    >         *   Z分数标准化
    >
    >     *   ➤ **normalization by decimal scaling**
    >
    >         *   小数定标标准化
    >
    > ***
    >
    > ## Data Reduction – Feature Selection (L3)
    >
    > *   **Feature selection (i.e., attribute subset selection):**
    >
    >     *   特征选择（即属性子集选择）：
    >
    >     *   **Select a minimum set of features such that the probability distribution of different classes given the values for those features is as close as possible to the original distribution given the values of all features.**
    >
    >         *   选择一组最小的特征，使得在这些特征值条件下不同类别的概率分布尽可能接近在所有特征值条件下的原始分布。
    >
    >     *   **Nice side-effect: reduces # of attributes in the discovered patterns, easier to understand.**
    >
    >         *   良好的副作用：减少了已发现模式中的属性数量，更容易理解。
    >
    > ***
    >
    > ## Data Discretization Methods (L3)
    >
    > *   **Hierarchical and recursive decomposition using:**
    >
    >     *   使用以下方法进行层次化和递归分解：
    >
    >     *   ➢ **Binning (data smoothing)**
    >
    >         *   分箱（数据平滑）
    >
    >     *   ➢ **Histogram analysis (numerosity reduction)**
    >
    >         *   直方图分析（数量约简）
    >
    >     *   ➢ **Clustering analysis (numerosity reduction)**
    >
    >         *   聚类分析（数量约简）
    >
    > *   **Entropy-based discretization**
    >
    >     *   基于熵的离散化
    >
    > *   **Segmentation by natural partitioning**
    >
    >     *   通过自然划分进行分段

### **Lecture 4: 数据可视化**

*   **数据可视化是通过图形、图表、地图等视觉元素传达信息的研究。**

    *   Data visualization is the study of communicating information through the use of visual elements such as graphs, charts, and maps.

*   **制作图表通常有六个目的：比较、展示分布、解释部分与整体、展示时间趋势、发现偏差和理解关系。**

    *   There are usually 6 reasons to make a chart: to compare, to show the distribution, to explain parts of the whole, to tell the trend over time, to find out the deviations, and to understand the relationship.

*   **可视化设计中需要考虑信息量与可读性之间的权衡，以及数据中心与观众中心之间的权衡。**

    *   Two tradeoffs in visualization are Informativeness vs. readability, and Data-centric vs. viewer-centric.

    > ## Conventional Visualizations (L4)
    >
    > *   **Column Histogram**
    >
    >     *   柱状直方图
    >
    > *   **Pie Chart**
    >
    >     *   饼图
    >
    > *   **Stacked 100% Column Chart**
    >
    >     *   堆叠式100%柱形图
    >
    > *   **Venn diagram**
    >
    >     *   维恩图
    >
    > *   **Scatter Chart**
    >
    >     *   散点图
    >
    > *   **Line Chart**
    >
    >     *   折线图
    >
    > *   **Heatmap**
    >
    >     *   热力图
    >
    > *   **Bubble Chart**
    >
    >     *   气泡图
    >
    > *   **Table or Table with Embedded Charts**
    >
    >     *   表格或嵌入图表的表格

### **Lecture 5: 数据索引**

*   **关系数据库基于关系模型，并使用SQL进行查询和维护。**

    *   A relational database is based on the relational model of data and uses SQL for querying and maintaining.

*   **NoSQL数据库是为管理大型、多样化和频繁更新的数据集而设计的，不遵循严格的关系模式。**

    *   NoSQL databases are geared toward managing large sets of varied and frequently updated data, avoiding rigid schemas.

*   **数据库索引是一种通过额外写入和存储空间来提高数据检索速度的数据结构。**

    *   A database index is a data structure that improves the speed of data retrieval operations at the cost of additional writes and storage space.

*   **B+树是最常用的动态多级索引数据结构，其数据指针仅存储在叶节点中。**

    *   B+ tree is the most common data structure for dynamic multilevel index, where data pointers are stored only at the leaf nodes.

    > ## B+ Tree Index Details (L5)
    >
    > *   **In a B+-tree, data pointers are stored only at the leaf nodes of the tree.**
    >
    >     *   在 B+ 树中，数据指针仅存储在树的叶节点中。
    >
    >     *   **The pointers in internal nodes are tree pointers to blocks that are tree nodes.**
    >
    >         *   内部节点中的指针是指向作为树节点的块的树指针。
    >
    >     *   **The pointers in leaf nodes are data pointers to the data file records.**
    >
    >         *   叶节点中的指针是指向数据文件记录的数据指针。
    >
    > *   **Because entries in the internal nodes of a B+-tree does not include data pointers, more entries (tree pointers) can be packed into an internal node and thus fewer levels (higher capacity).**
    >
    >     *   由于 B+ 树内部节点中的条目不包括数据指针，可以将更多条目（树指针）打包到一个内部节点中，从而减少层数（提高容量）。
    >
    > *   **The leaf nodes of a B+-tree are usually linked to provide ordered access on the search field to the records.**
    >
    >     *   B+ 树的叶节点通常是链接的，以便在搜索字段上提供对记录的有序访问。

### **Lecture 6: 数据查询**

*   **数据查询分为检索数据的**选择查询**和对数据进行操作（插入、更新、删除）的**操作查询**。**

    *   A data query is either a **select query** that retrieves data or an **action query** that asks for operations like insertion, updating, deleting.

*   **关系代数的基本运算符包括选择 (σ)、投影 (Π)、并集 (∪)、差集 (−)、笛卡尔积 (×) 和重命名 (ρ)。**

    *   The six basic operators of relational algebra are select: σ, project: Π, union: ∪, set difference: −, Cartesian product: x, rename: ρ.

*   **SQL的SELECT语句结构包括SELECT、FROM、WHERE、GROUP BY、HAVING和ORDER BY子句。**

    *   SQL - Select statement structure: Select ... From ... Where ... Group By ... Having ... Order By ...

*   **NoSQL查询（以MongoDB为例）使用特定的查询语言，针对文档集合，可以指定条件、投影、排序等。**

    *   NoSQL querying (e.g., MongoDB) uses a query language that targets a collection, specifies criteria, may include a projection, sort, etc.

    > ## SQL SELECT Statement Structure (L6)
    >
    > *   **Select \<List of Columns and expressions (usually involving columns)>**
    >
    >     *   选择 <列和表达式（通常涉及列）的列表>
    >
    > *   **From \<List of Tables & Join Operators>**
    >
    >     *   来自 <表和连接操作符的列表>
    >
    > *   **Where \<List of Row conditions joined together by And, Or, Not>**
    >
    >     *   条件 <由 And、Or、Not 连接的行条件列表>
    >
    > *   **Group By**
    >
    >     *   分组依据 <分组列的列表>
    >
    > *   **Having \<list of group conditions connected by And, Or, Not >**
    >
    >     *   筛选 <由 And、Or、Not 连接的组条件列表>
    >
    > *   **Order By**
    >
    >     *   排序依据 <排序规范的列表>

### **Lecture 7 & 8: 数据驱动应用**

*   **信息检索的关键问题包括信息需求（查询）、相关性（索引和搜索算法）和评估（排序、精确率-召回率）。**

    *   Key issues in information retrieval include Information need (query), Relevance (indexing and search algorithm), and Evaluation (ranking, precision-recall).

*   **推荐系统是信息过滤系统的一个子类，为用户提供最相关的项目建议**

    *   Recommender systems are a subclass of information filtering system that provide suggestions for items that are most pertinent to a particular user.

*   **协同过滤方法包括基于项目/用户的协同过滤和矩阵分解**

    *   Collaborative filtering methods include Item/User based collaborative filtering and Matrix factorization.

*   **社交网络分析是对群体中人际关系模式进行诊断性收集和分析数据的方法**

    *   Social Network Analysis (SNA) is a diagnostic method for collecting and analysing data about the patterns of relationships among people in groups.

*   **异常检测是识别与大多数数据显著偏离且不符合正常行为定义的罕见项目、事件或观察结果**

    *   Anomaly detection is the identification of rare items, events or observations which deviate significantly from the majority of the data and do not conform to a well defined notion of normal behavior.

*   **异常的类型包括点异常、上下文异常和集体异常**

    *   Structure of anomalies includes Point anomalies, Contextual anomalies, and Collective anomalies.

*   **根据数据标签的可用性，异常检测可分为监督式、半监督式和无监督式**

    *   Data labels for anomaly detection lead to Supervised, Semi-supervised, and Unsupervised anomaly detection.

    > ## Information Retrieval Process (L7\&L8)
    >
    > *   **Query Processing**
    >
    >     *   查询处理
    >
    > *   **Search (vector space or probabilistic)**
    >
    >     *   搜索（向量空间或概率模型）
    >
    > *   **Indexing**
    >
    >     *   索引
    >
    > *   **Ranked Documents**
    >
    >     *   排序后的文档

### **Lecture 9: 数据管理**

*   **数据管理是安全、高效、经济地收集、保存和使用数据的实践**

    *   Data management is the practice of collecting, keeping, and using data securely, efficiently, and cost-effectively.

*   **数据质量的六个主要维度是：准确性、完整性、一致性、有效性、唯一性和及时性**

    *   Six main dimensions of data quality are: Accuracy, Completeness, Consistency, Validity, Uniqueness, and Timeliness.

*   **数据安全是在整个生命周期中保护数字信息免受损坏、盗窃或未经授权访问的过程**

    *   Data security is the process of safeguarding digital information throughout its entire life cycle to protect it from corruption, theft, or unauthorized access.

*   **数据隐私通常指个人自行决定何时、如何以及在何种程度上共享或使用其个人信息的能力。**

    *   Data privacy generally means the ability of a person to determine for themselves when, how, and to what extent personal information about them is shared with or communicated to others, or being used.

    > ## Data Security Risks Example (L9)
    >
    > *   **Phishing Attacks**
    >
    >     *   网络钓鱼攻击
    >
    >     *   **In a phishing attack, a cyber criminal sends messages, typically via email, SMS, or instant messaging, that appear to be from a trusted sender.**
    >
    >         *   在网络钓鱼攻击中，网络犯罪分子发送看起来来自可信发件人的消息，通常通过电子邮件、短信或即时通讯工具。
    >
    >     *   **Messages include malicious links or attachments that lead recipients to either download malware or visit a spoofed website.**
    >
    >         *   消息包含恶意链接或附件，导致收件人下载恶意软件或访问假冒网站。
    >
    > *   **Malware**
    >
    >     *   恶意软件
    >
    >     *   **Malicious software is typically spread through email- and web-based attacks.**
    >
    >         *   恶意软件通常通过基于电子邮件和网络的攻击传播。
    >
    >     *   **Attackers use malware to infect computers and corporate networks by exploiting vulnerabilities in their software.**
    >
    >         *   攻击者利用软件中的漏洞，使用恶意软件感染计算机和企业网络。
    >
    >     *   **Malware can lead to serious data security events like data theft, extortion, and network damage.**
    >
    >         *   恶意软件可能导致严重的数据安全事件，如数据盗窃、勒索和网络损坏。

### **Lecture 10: 高级主题与前沿趋势**

*   **表示学习是一组让系统自动从原始数据中发现特征检测、聚类或分类等所需表示的技术**

    *   Representation learning is a set of techniques that allows a system to automatically discover the representations needed for feature detection, clustering, or classification from raw data.

*   **深度学习通过人工神经网络将图像、文本、语音等映射到表示空间中的向量**

    *   Deep learning maps images, texts, speeches, etc. into vectors in representation spaces.

*   **多模态机器学习旨在构建能够处理和关联来自多种模态信息的模型**

    *   Multimodal machine learning aims to build models that can process and relate information from multiple modalities.

*   **多模态学习的核心技术包括表示、对齐、融合、翻译和共同学习**

    *   Core technical parts of multimodal learning are Representation, Alignment, Fusion, Translation, and Co-learning.

*   **数据偏差可能导致歧视，且偏差存在于数据工程管道的各个环节**

    *   Data bias may result in discrimination and bias is across the data engineering pipeline.

*   **公平性之所以重要，既是基本社会原则，也受法律保护**

    *   We should care about fairness because it’s a basic social principle and required by Law Against Discrimination.

*   **可解释性被定义为“理解模型如何得出其结果”，有助于建立用户信任并形成用户到开发交互的积极反馈循环**

    *   Explainability can be defined as to “understand how a model arrives at its result”, which allows for a positive feedback loop from user to development interactions.

*   **可解释性技术包括特征重要性分析和代理模型（如LIME）**

    *   Explainability techniques include feature importance and surrogate model (e.g., LIME).

> ## Deep Learning for Representation Learning (L10)
>
> *   **Input layer L1**
>
>     *   输入层 L1
>
> *   **Hidden layer L2, L3, L4**
>
>     *   隐藏层 L2、L3、L4
>
> *   **Output layer L5**
>
>     *   输出层 L5
>
> *   **Weight matrices W^{(0)}, W^{(1)}, W^{(2)}, W^{(3)}**
>
>     *   权重矩阵  $W^{(0)}$ 、 $W^{(1)}$ 、 $W^{(2)}$ 、 $W^{(3)}$
>
> *   **Deep learning maps images, texts, speeches, etc. into vectors in representation spaces.**
>
>     *   深度学习将图像、文本、语音等映射到表示空间中的向量
>
> *   **If downstream tasks are trained together, then it is end-to-end.**
>
>     *   如果下游任务一起训练，那么它就是端到端的
>
> ***
>
> ## Multiple Modalities (L10)
>
> *   **Natural language (both spoken or written)**
>
>     *   自然语言（口语或书面语）
>
> *   **Visual (from images or videos)**
>
>     *   视觉（来自图像或视频）
>
> *   **Auditory (including voice, sounds and music)**
>
>     *   听觉（包括语音、声音和音乐）
>
> *   **Haptics / touch**
>
>     *   触觉
>
> *   **Smell, taste and self-motion**
>
>     *   嗅觉、味觉和自我运动
>
> *   **Physiological signals (Electrocardiogram (ECG), skin conductance)**
>
>     *   生理信号（心电图、皮肤电导）
>
> *   **Other modalities (Infrared images, depth images, fMRI)**
>
>     *   其他模态（红外图像、深度图像、功能磁共振成像）
>
> ***
>
> ## Core Technical Parts of Multimodal Learning (L10)
>
> *   **Representation**
>
>     *   表示
>
> *   **Alignment**
>
>     *   对齐
>
> *   **Fusion**
>
>     *   融合
>
> *   **Translation**
>
>     *   翻译
>
> *   **Co-learning**
>
>     *   共同学习
>
> ***
>
> ## Assessment Structure
>
> *   **Continuous assessment (60%)**
>
>     *   持续评估（60%）
>
>     *   **2 individual homework assignments (each 15%)**
>
>         *   2 次个人作业（每次 15%）
>
>     *   **1 group project with presentations (30%)**
>
>         *   1 次小组项目及展示（30%）
>
> *   **Final exam (40%)**
>
>     *   期末考试（40%）

***

# **Lecture 12 练习课内容分析**

## **第一部分：B+树练习**

### **主要考点：**

1.  **B+树的搜索算法**

    *   从根节点开始，通过键值比较找到叶子节点
    *   查找特定键值（如5*，15*）
    *   范围查询（如查找所有≥24\*的条目）

2.  **B+树的插入操作**

    *   找到正确的叶子节点
    *   处理节点分裂（叶子节点分裂 vs. 索引节点分裂）
    *   区分"copy-up"（复制到父节点）和"push-up"（推送到父节点）
    *   根节点分裂导致树高度增加

3.  **B+树的删除操作**

    *   删除后保持最小填充度要求
    *   重新分配（从兄弟节点借用条目）
    *   合并节点（当重新分配失败时）
    *   删除可能传播到根节点，导致高度降低

4.  **B+树的构造与维护**

    *   按顺序插入键值构建B+树
    *   执行一系列插入和删除操作
    *   维护节点度数的限制

### **通俗解法讲解：**

**B+树就像一本多级索引的词典：**

1.  **搜索时**：先从目录（根节点）查，比较要找的词在哪个范围，然后翻到对应的章节（子节点），继续比较，直到找到具体的页面（叶子节点）

2.  **插入时**：

    *   先找到这个词应该放在哪一页（叶子节点）
    *   如果这一页已经满了，就把这页撕成两半（分裂）
    *   把中间的那个词写在目录里作为新的分界点
    *   如果目录也满了，就把目录也撕成两半，可能需要增加一级目录（树长高）

3.  **删除时**：

    *   从页面中划掉这个词
    *   如果这一页的词太少，看看隔壁页能不能匀几个词过来（重新分配）
    *   如果隔壁页也不富裕，就把两页合并成一页
    *   合并后目录里的分界点可能需要调整，如果目录变得太空，可能减少一级目录（树变矮）

**记忆技巧**：

*   叶子分裂：**复制**中间键到父节点（中间键还在叶子中）
*   索引分裂：**推送**中间键到父节点（中间键离开原节点）

***

## **第二部分：正则表达式练习**

### **主要考点：**

1.  **基本元字符和量词**

    *   重复符：`*`（0次或多次），`+`（1次或多次），`{n}`（n次）
    *   通配符：`.`（任意单个字符）
    *   可选符：`?`（0次或1次）

2.  **位置锚点**

    *   `^`：字符串开头
    *   `$`：字符串结尾

3.  **字符类和转义**

    *   预定义字符类：`\d`（数字），`\w`（单词字符），`\s`（空白字符）
    *   自定义字符类：`[abc]`，`[a-z]`
    *   转义字符：`\`（用于匹配特殊字符本身）

4.  **分组和选择**

    *   `()`：分组
    *   `|`：或运算

5.  **实际应用分析**

    *   分析复杂正则表达式的含义（如电子邮件地址验证）

### **通俗解法讲解：**

**正则表达式就像是一套"文字筛子"或"通配符高级版"：**

1.  **基本规则**：

    *   `a*` = a可以出现任意次（包括0次） → "aaaa", "", "a"都匹配
    *   `a+` = a至少出现1次 → "a", "aaa"匹配，但""不匹配
    *   `a?` = a可能出现也可能不出现 → "a"或""匹配
    *   `a{2,4}` = a出现2到4次 → "aa", "aaa", "aaaa"匹配

2.  **字符筛选**：

    *   `[abc]` = 匹配a、b、c中的**任意一个**
    *   `[^abc]` = 匹配**除了**a、b、c的任意字符
    *   `[a-z]` = 匹配任意小写字母

3.  **位置控制**：

    *   `^abc` = 字符串必须以abc开头
    *   `xyz$` = 字符串必须以xyz结尾
    *   `^abc$` = 整个字符串就是"abc"

4.  **实际例子分析**（课件中的电子邮件正则表达式）：

    ```
    ^([a-zA-Z0-9_\.-]+)@([a-zA-Z0-9_\.-]+)\.([a-zA-Z]{2,5})$
    ```



    *   `^`：从开头开始
    *   `([a-zA-Z0-9_\.-]+)`：用户名部分，允许字母、数字、下划线、点、连字符，至少1个
    *   `@`：必须有个@符号
    *   `([a-zA-Z0-9_\.-]+)`：域名部分，同上
    *   `\.`：必须有个点
    *   `([a-zA-Z]{2,5})`：顶级域名，2-5个字母
    *   `$`：到此结束

**记忆口诀**：

*   `*` = 可有可无，多多益善
*   `+` = 至少一个，多多益善
*   `?` = 可有可无，最多一个
*   `^` = 开头锚定
*   `$` = 结尾锚定
*   `{}` = 出现次数
*   `[]` = 选一个
*   `()` = 当一组

***

## **第三部分：动态哈希练习**

### **主要考点：**

1.  **动态哈希的基本原理**

    *   哈希函数返回键值的二进制前缀
    *   桶（bucket）有固定容量
    *   目录（directory）存储指向桶的指针

2.  **插入操作与溢出处理**

    *   根据哈希值的前缀找到对应桶
    *   桶满时发生溢出，需要分裂
    *   分裂时增加前缀位数，重新分配记录
    *   可能需要扩展目录大小

3.  **目录扩展机制**

    *   全局深度 vs. 局部深度
    *   目录大小随前缀位数增加而翻倍

4.  **实际插入过程模拟**

    *   给定键值序列和桶大小
    *   逐步插入并画出哈希结构变化

### **通俗解法讲解：**

**动态哈希就像一个可以自动扩容的"智能储物柜"系统：**

1.  **初始状态**：

    *   储物柜只有2个格子（桶），用1位二进制编号（0和1）
    *   根据物品编号（键值）的最后1位决定放哪个格子

2.  **插入过程**：

    *   来了一个物品，看它的二进制最后1位是0还是1
    *   放到对应的格子里
    *   如果格子满了（超出容量），就把这个格子分成2个新格子

3.  **格子分裂的细节**：

    *   原来用1位编号不够了，现在用2位编号
    *   原格子0分成00和01，原格子1分成10和11
    *   把原来格子里的物品重新检查：看它们的二进制前2位，分配到新的对应格子
    *   目录（柜门标签）从2个变成4个

4.  **渐进扩容**：

    *   不是一次性把所有格子都分裂，而是哪个满就分裂哪个
    *   可能出现不同格子使用不同位数编号的情况
    *   目录大小总是2的全局深度次方

**实例理解**（课件中的数字例子）：

*   数字1的二进制是0001，最后1位是1 → 放格子1

*   数字2的二进制是0010，最后1位是0 → 放格子0

*   如果格子0满了（容量为3），就把它分裂：

    *   现在用2位编号：00和01
    *   重新检查格子0里所有物品的二进制前2位
    *   00开头的放新格子00，01开头的放新格子01

**关键点**：

*   动态哈希是"按需分裂"，不是预先分配
*   查找时：计算哈希值，取前几位（全局深度），查目录找到桶
*   插入时：桶满就分裂，可能增加目录大小
*   好处：随着数据增加，性能不会急剧下降

***

## **总结三种题型的解题策略**

| **题型**    | **核心思想** | **解题步骤**                                              | **常见陷阱**             |
| --------- | -------- | ----------------------------------------------------- | -------------------- |
| **B+树**   | 平衡多路搜索树  | 1. 按规则插入/删除 2. 检查节点是否满/半空 3. 分裂/合并/重新分配 4. 向上传播调整     | 混淆叶子分裂和索引分裂的规则       |
| **正则表达式** | 模式匹配语言   | 1. 分解表达式各部分 2. 理解每个元字符含义 3. 从简单到复杂组合理解 4. 测试边界情况      | 忘记转义特殊字符；混淆贪婪/非贪婪匹配  |
| **动态哈希**  | 可扩展哈希表   | 1. 计算键值哈希（二进制） 2. 取当前全局深度的前缀 3. 找到对应桶插入 4. 桶满则分裂，增加深度 | 忘记更新目录指针；混淆局部深度和全局深度 |


**通用建议**：

1.  **B+树**：多画图，一步一步来，注意节点容量限制
2.  **正则表达式**：从内向外分析，先理解小单元再组合
3.  **动态哈希**：跟踪每个桶的内容和深度，注意分裂是局部的
