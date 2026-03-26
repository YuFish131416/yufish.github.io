# CS5351 期中开卷应试整理 第五章 Design Principles and Framework（设计原则与框架）

## <软件架构基础与核心概念>

### 程序结构风格 <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FB5BXM4R9%22%2C%22pageLabel%22%3A%224%22%2C%22position%22%3A%7B%22pageIndex%22%3A3%2C%22rects%22%3A%5B%5B39.8%2C436.50293701171876%2C638.7964749999999%2C476.054175%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%224%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/B5BXM4R9?page=4">“the Styles of Program Structure”</a></span>

*   At a higher level, we refer to the software architecture (or system architecture), enterprise patterns, architectural patterns<span style="color: rgb(126, 131, 134)"><br>在较高层次上，我们指的是软件架构（或系统架构）、企业模式、架构模式</span>

    *   The *<span style="color: rgb(5, 162, 239)">big picture </span>*of how a software application is organized<span style="color: rgb(126, 131, 134)"><br>软件应用程序如何组织的整体蓝图</span>

*   At a lower level, we refer to coding idiom, coding principle, design patterns<span style="color: rgb(126, 131, 134)"><br>在较低层次上，我们指的是编码习惯用语、编码原则、设计模式</span>

### 软件架构

Architecture is the **fundamental concepts or properties** of a system in its environment embodied in its <span style="color: rgb(78, 179, 28)">elements</span>, <span style="color: rgb(5, 162, 239)">relationships</span>, and in the <span style="color: rgb(255, 32, 32)">principles of its design and evolution</span>.\ <span style="color: rgb(126, 131, 134)">架构是系统在其环境中所体现的</span>**<span style="color: rgb(126, 131, 134)">基本概念或属性</span>**<span style="color: rgb(126, 131, 134)">，具体化于其元素、关系以及其设计和演化的原则中</span>

> ```
> 概述（一些答题可以用的表述）
> ```
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FB5BXM4R9%22%2C%22pageLabel%22%3A%226%22%2C%22position%22%3A%7B%22pageIndex%22%3A5%2C%22rects%22%3A%5B%5B71.25%2C371.19202880859376%2C335.8896750000001%2C396.47585%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%226%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/B5BXM4R9?page=6">The basis is Modularity</a></span><span style="color: rgb(126, 131, 134)">基础是模块化</span>> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FB5BXM4R9%22%2C%22pageLabel%22%3A%226%22%2C%22position%22%3A%7B%22pageIndex%22%3A5%2C%22rects%22%3A%5B%5B107.8%2C336.7231860351563%2C732.320325%2C358.569325%5D%2C%5B107.8%2C307.43318603515627%2C189.12462499999998%2C329.279325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%226%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/B5BXM4R9?page=6">i.e., the style to decompose a module into a set of connected submodules</a></span>\ <span style="color: rgb(126, 131, 134)">即，将模块分解为一组相互连接的子模块的风格</span>
>     >
>     > 例如：计算机网络中 OSI 模型的分层风格
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FB5BXM4R9%22%2C%22pageLabel%22%3A%226%22%2C%22position%22%3A%7B%22pageIndex%22%3A5%2C%22rects%22%3A%5B%5B71.25%2C233.04202880859376%2C742.1949500000001%2C258.298075%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%226%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/B5BXM4R9?page=6">Our purpose is to use styles to address non-functional needs</a></span>\ <span style="color: rgb(126, 131, 134)">我们的目的是利用这些风格来解决非功能性需求</span>> 例如：如何在初始化软件\[功能需求]时处理"快速启动时间"\[非功能需求]？
>     >
>     > *   Separate the UI code from the program state initialization code\ <span style="color: rgb(126, 131, 134)">将用户界面代码与程序状态初始化代码分离</span>\
>     >     \=> Use the Model-View-Controller pattern to decompose a given module into three lower-level modules (Model, View, Controller)\ <span style="color: rgb(126, 131, 134)">=> 使用模型-视图-控制器模式将给定模块分解为三个较低层次的模块（模型、视图、控制器）</span>
>     >
>     > *   Initialize the part of the program state that affects the UI first\ <span style="color: rgb(126, 131, 134)">首先初始化影响用户界面的那部分程序状态</span>\
>     >     \=> Divide the Model module into a UI-related sub-module, a UIunrelated sub-module, and a submodule to maintain the model integrity\ <span style="color: rgb(126, 131, 134)">=> 将模型模块分解为与用户界面相关的子模块、与用户界面无关的子模块，以及一个维护模型完整性的子模块</span>
>     >
>     > *   Initialize a lower-quality, faster-initialization core and transit to a higher-quality, full core.\ <span style="color: rgb(126, 131, 134)">初始化一个较低质量、初始化更快的核心，并过渡到一个更高质量、功能完整的核心。</span>\
>     >     \=> The UI-related sub-module (in Model) should support extensibility and compatibility between submodels. Controller should interoperate between models without affecting the View module\ <span style="color: rgb(126, 131, 134)">=> 模型中的用户界面相关子模块应支持子模型之间的可扩展性和兼容性。控制器应在不影响视图模块的情况下实现模型之间的互操作。</span>
>
> <!---->
>
> ```
> 特性
> ```
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FB5BXM4R9%22%2C%22pageLabel%22%3A%2211%22%2C%22position%22%3A%7B%22pageIndex%22%3A10%2C%22rects%22%3A%5B%5B66.825%2C371.19202880859376%2C362.00107500000007%2C396.47585%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2211%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/B5BXM4R9?page=11">Architecture is <strong>conceptual</strong></a></span><span style="color: rgb(126, 131, 134)"><br>架构是概念性的。</span>> 例如：我们为不同模块赋予含义，以便它们的交互能够讲述功能需求及其相关质量关切将如何被满足的故事
>
> *   Architecture is about fundamental (important) things<span style="color: rgb(126, 131, 134)"><br>架构关乎根本的（重要的） 事物。</span>
>
> *   Architecture exists in some context<span style="color: rgb(126, 131, 134)"><br>架构存在于某种上下文之中。</span>> 例如：我们的"软件初始化"架构如果用于一个基于服务器的批处理模型应用程序，可能就没有意义。
>     >
>     > Any non-trivial software system has an architecture. The context dictates whether the architecture is what the system needs.\ <span style="color: rgb(126, 131, 134)">任何非平凡的软件系统都拥有一个架构。上下文决定了该架构是否是该系统所需的。</span>
>
> <!---->
>
> ```
> 重要性
> ```
>
> *   Architecture is the vehicle for stakeholder communication<span style="color: rgb(126, 131, 134)"><br>架构是利益相关者之间沟通的载体</span>
>
> *   Architecture manifests the **earliest set of design decisions**<span style="color: rgb(126, 131, 134)"><br>架构体现了</span>**<span style="color: rgb(126, 131, 134)">最早期的设计决策集合</span>**> **最早期的设计决策集合**
>     >
>     > *   Constraints on implementation<span style="color: rgb(126, 131, 134)"><br>对实现施加约束</span>
>     >
>     > <!---->
>     >
>     > *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FB5BXM4R9%22%2C%22pageLabel%22%3A%2225%22%2C%22position%22%3A%7B%22pageIndex%22%3A24%2C%22rects%22%3A%5B%5B98.375%2C236.85318603515626%2C409.93119999999976%2C258.699325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2225%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/B5BXM4R9?page=25">Dictates organizational structure</a></span><span style="color: rgb(126, 131, 134)"><br>决定组织结构</span>
>     >
>     > *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FB5BXM4R9%22%2C%22pageLabel%22%3A%2225%22%2C%22position%22%3A%7B%22pageIndex%22%3A24%2C%22rects%22%3A%5B%5B98.375%2C205.32318603515625%2C434.0282749999996%2C227.16932500000001%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2225%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/B5BXM4R9?page=25">Inhibits or enable quality attributes</a></span><span style="color: rgb(126, 131, 134)"><br>抑制或赋能质量属性</span>
>
> <!---->
>
> ```
> 最佳实践
> ```
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FB5BXM4R9%22%2C%22pageLabel%22%3A%228%22%2C%22position%22%3A%7B%22pageIndex%22%3A7%2C%22rects%22%3A%5B%5B23.525%2C387.39202880859375%2C275.22204999999997%2C412.64807499999995%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%228%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/B5BXM4R9?page=8">In architecting, we do:</a></span>\ <span style="color: rgb(126, 131, 134)">在架构设计中，我们这样做：</span>
>
>     1.  <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FB5BXM4R9%22%2C%22pageLabel%22%3A%228%22%2C%22position%22%3A%7B%22pageIndex%22%3A7%2C%22rects%22%3A%5B%5B64.075%2C341.5920288085938%2C709.126625%2C366.87585%5D%2C%5B64.075%2C307.81662109375%2C680.7274%2C333.0954%5D%2C%5B64.075%2C274.01202880859375%2C666.3758750000001%2C299.26807499999995%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%228%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/B5BXM4R9?page=8">Recursively decompose a module into a set of interacting sub-modules. Assign functional responsibility to submodules to meet the “picked” functional requirement.</a></span><span style="color: rgb(126, 131, 134)"><br>递归地将一个模块分解为一组交互的子模块。将功能职责分配给子模块以满足"选定的"功能需求。</span>> 例如：用于不同模型和模型完整性的子模块
>
>     2.  <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FB5BXM4R9%22%2C%22pageLabel%22%3A%228%22%2C%22position%22%3A%7B%22pageIndex%22%3A7%2C%22rects%22%3A%5B%5B64.075%2C198.94202880859373%2C705.125275%2C224.198075%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%228%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/B5BXM4R9?page=8">Assign non-functional quality attributes to sub-models</a></span><span style="color: rgb(126, 131, 134)"><br>将非功能性质量属性分配给子模型</span>> 例如：视图负责可用性，子模型负责可扩展性，控制器负责互操作性
>
>     3.  <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FB5BXM4R9%22%2C%22pageLabel%22%3A%228%22%2C%22position%22%3A%7B%22pageIndex%22%3A7%2C%22rects%22%3A%5B%5B64.075%2C95.33662109375%2C649.9336000000002%2C120.6154%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%228%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/B5BXM4R9?page=8">Assign non-functional constraints on sub-modules</a></span><span style="color: rgb(126, 131, 134)"><br>对子模块施加非功能性约束</span>> 例如：控制器互操作不同模型时不应影响视图模块
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FB5BXM4R9%22%2C%22pageLabel%22%3A%229%22%2C%22position%22%3A%7B%22pageIndex%22%3A8%2C%22rects%22%3A%5B%5B71.25%2C371.19202880859376%2C650.7830250000001%2C396.44807499999996%5D%2C%5B71.25%2C337.40662109375%2C187.64860000000004%2C362.6854%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%229%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/B5BXM4R9?page=9">In architecting, we neither work out nor decide the following:</a></span>\ <span style="color: rgb(126, 131, 134)">在架构设计中，我们既不制定也不决定以下内容：</span>
>
>     1.  <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FB5BXM4R9%22%2C%22pageLabel%22%3A%229%22%2C%22position%22%3A%7B%22pageIndex%22%3A8%2C%22rects%22%3A%5B%5B71.25%2C257.07202880859376%2C665.5794500000003%2C282.32807499999996%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%229%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/B5BXM4R9?page=9">How the functional requirement will be implemented</a></span><span style="color: rgb(126, 131, 134)"><br>功能需求将如何被实现</span>> 例如，无需关心软件初始化或维护模型完整性的具体算法。
>
>     2.  <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FB5BXM4R9%22%2C%22pageLabel%22%3A%229%22%2C%22position%22%3A%7B%22pageIndex%22%3A8%2C%22rects%22%3A%5B%5B71.25%2C152.72202880859373%2C717.1786000000002%2C177.978075%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%229%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/B5BXM4R9?page=9">How the non-functional requirement will be implemented</a></span><span style="color: rgb(126, 131, 134)"><br>非功能性需求将如何被实现</span>> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FB5BXM4R9%22%2C%22pageLabel%22%3A%229%22%2C%22position%22%3A%7B%22pageIndex%22%3A8%2C%22rects%22%3A%5B%5B107.8%2C118.23318603515625%2C647.2615000000001%2C140.079325%5D%2C%5B107.8%2C89.70318603515625%2C722.6718250000001%2C111.54932500000001%5D%2C%5B107.8%2C60.42818603515625%2C730.3955250000001%2C82.274325%5D%2C%5B107.8%2C27.2676025390625%2C229.19832499999995%2C53.749325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%229%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/B5BXM4R9?page=9">We only assign the quality attributes and non-functional constraints with explanation/documentation to explain why they are necessary for the implementation to fulfill the non-functional requirement.</a></span><span style="color: rgb(126, 131, 134)"><br>我们仅分配质量属性和非功能性约束，并通过说明/文档来解释为何这些分配对于实现满足非功能性需求是必要的。</span>
>
> <!---->
>
> *   A System for Sorting Data (with “vague” design requirements)\ <span style="color: rgb(126, 131, 134)">数据排序系统（具有"模糊的"设计需求）</span>
>
>     *   系统应：
>
>         *   respond to users’ click and press quickly<span style="color: rgb(126, 131, 134)"><br>快速响应用户的点击和按压</span>
>
>         *   run efficiently with a small local memory footprint<span style="color: rgb(126, 131, 134)"><br>高效运行，且占用较小的本地内存空间</span>
>
>         *   keep sorting results persistently and efficiently<span style="color: rgb(126, 131, 134)"><br>持久且高效地保存排序结果</span>
>
>     *   More design requirements are identified during the design<span style="color: rgb(126, 131, 134)"><br>在设计过程中识别出更多的设计需求：</span>
>
>         *   Lower-level, within user interface: high security => authenticate users<span style="color: rgb(126, 131, 134)"><br>较低层次，在用户界面内：高安全性 => 认证用户</span>
>
>         *   Lower-level, within the data layer: availability => active redundancy<span style="color: rgb(126, 131, 134)"><br>较低层次，在数据层内：高可用性 => 主动冗余</span>
>
>     *   We may gradually explore more and more “design requirements” and refine our system to meet each design requirement<span style="color: rgb(126, 131, 134)"><br>我们可以逐步探索越来越多的"设计需求"，并改进我们的系统以满足每个设计需求。</span>
>
>     ![\<img alt="" data-attachment-key="GY8VDF6N" width="1279" height="479" src="attachments/GY8VDF6N.png" ztype="zimage"> | 1279](attachments/GY8VDF6N.png)> <span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)">文字说明：</span></span>
>     >
>     > *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FB5BXM4R9%22%2C%22pageLabel%22%3A%2213%22%2C%22position%22%3A%7B%22pageIndex%22%3A12%2C%22rects%22%3A%5B%5B18.925%2C35.86434326171875%2C164.03317499999994%2C54.300574999999995%5D%2C%5B18.925%2C11.839343261718753%2C188.36317499999998%2C30.275575%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2213%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/B5BXM4R9?page=13">Separate the UI to provide fast response</a></span><span style="color: rgb(126, 131, 134)"><br>分离用户界面以提供快速响应</span>
>     >
>     > *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FB5BXM4R9%22%2C%22pageLabel%22%3A%2213%22%2C%22position%22%3A%7B%22pageIndex%22%3A12%2C%22rects%22%3A%5B%5B435.75%2C262.8443432617188%2C748.0600750000002%2C281.280575%5D%2C%5B435.75%2C238.81434326171873%2C711.5102750000003%2C257.25057499999997%5D%2C%5B435.75%2C214.79434326171875%2C550.3848499999999%2C233.23057500000002%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2213%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/B5BXM4R9?page=13">Choose runtime- and memory-efficient algorithms (models) based on data characteristics</a></span><span style="color: rgb(126, 131, 134)"><br>根据数据特征选择运行时和内存高效的排序算法（模型）</span>
>     >
>     > *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FB5BXM4R9%22%2C%22pageLabel%22%3A%2213%22%2C%22position%22%3A%7B%22pageIndex%22%3A12%2C%22rects%22%3A%5B%5B8.2%2C207.96434326171874%2C157.70784999999998%2C226.400575%5D%2C%5B10.225%2C183.93434326171874%2C157.17819999999998%2C202.370575%5D%2C%5B33.625%2C159.91434326171876%2C157.728275%2C187.000575%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2213%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/B5BXM4R9?page=13">minimize dynamic rendering and use thin framework</a></span><span style="color: rgb(126, 131, 134)"><br>最小化动态渲染并使用轻量级框架</span>
>     >
>     > *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FB5BXM4R9%22%2C%22pageLabel%22%3A%2213%22%2C%22position%22%3A%7B%22pageIndex%22%3A12%2C%22rects%22%3A%5B%5B513.7%2C159.91434326171876%2C761.6835250000004%2C187.000575%5D%2C%5B546.63%2C144.53434326171873%2C761.4233500000007%2C162.970575%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2213%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/B5BXM4R9?page=13">read data once, write data once for each sorting invocation</a></span><span style="color: rgb(126, 131, 134)"><br>每次排序调用读取数据一次，写入数据一次</span>
>     >
>     > *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FB5BXM4R9%22%2C%22pageLabel%22%3A%2213%22%2C%22position%22%3A%7B%22pageIndex%22%3A12%2C%22rects%22%3A%5B%5B617.3%2C51.51434326171875%2C758.6120000000001%2C69.950575%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2213%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/B5BXM4R9?page=13">file better than db</a></span><span style="color: rgb(126, 131, 134)"><br>文件优于数据库？</span>

### 架构师

*   Responsible for all technical high-level design decisions for a system<span style="color: rgb(126, 131, 134)"><br>负责系统中所有技术性的高层次设计决策</span>> *   High-level = the architectural level<span style="color: rgb(126, 131, 134)"><br>高层次 = 架构层面</span>
    >
    > <!---->
    >
    > *   All decisions made now or deferred to a later time<span style="color: rgb(126, 131, 134)"><br>包括当前做出或推迟到以后做出的所有决策</span>
    >
    > *   Lead the system to evolve in the right direction<span style="color: rgb(126, 131, 134)"><br>引导系统朝着正确的方向演进</span>

*   Know the business impact of the technical decision<span style="color: rgb(126, 131, 134)"><br>了解技术决策带来的业务影响</span>

*   Embrace, anticipate, and manage changes (and their risks)<span style="color: rgb(126, 131, 134)"><br>拥抱、预见并管理变更（及其风险）</span>

*   As the promotor and communicator of project vision among stakeholders (including developers)<span style="color: rgb(126, 131, 134)"><br>作为项目愿景在利益相关者（包括开发人员）中的倡导者和沟通者</span>

## <软件架构的过程与驱动>

### 架构在生命周期中的角色

*   特点（引入架构前）

    *   Iteration mainly on functional requirements\ <span style="color: rgb(126, 131, 134)">迭代主要围绕功能需求进行</span>

    *   No balancing between functional and quality requirements\ <span style="color: rgb(126, 131, 134)">未能在功能需求与质量需求之间进行平衡</span>

*   特点（引入架构后）

    *   Iteration on both functional and quality requirements\ <span style="color: rgb(126, 131, 134)">迭代同时围绕功能需求和质量需求进行</span>

    *   Balancing of functional and quality requirements<span style="color: rgb(126, 131, 134)"><br>实现了功能需求与质量需求之间的平衡</span>

### 架构驱动因素

**Architectural driver **is a **design requirement** that will influence the software architects' **early design decisions**.\
**<span style="color: rgb(126, 131, 134)">架构驱动因素</span>**<span style="color: rgb(126, 131, 134)">是一种</span>**<span style="color: rgb(126, 131, 134)">设计需求</span>**<span style="color: rgb(126, 131, 134)">，它将影响软件架构师的</span>**<span style="color: rgb(126, 131, 134)">早期设计决策</span>**

> ```
> 注意：
> ```
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FB5BXM4R9%22%2C%22pageLabel%22%3A%2227%22%2C%22position%22%3A%7B%22pageIndex%22%3A26%2C%22rects%22%3A%5B%5B107.8%2C221.85318603515626%2C736.6543750000001%2C243.69932500000002%5D%2C%5B107.8%2C193.30318603515624%2C581.5249499999998%2C215.149325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2227%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/B5BXM4R9?page=27">Functional features (aka functionality) are software requirements, not sufficient to serve as the architectural drivers.</a></span><span style="color: rgb(126, 131, 134)"><br>功能特性（即功能性）属于软件需求，但不足以作为架构驱动因素。</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FB5BXM4R9%22%2C%22pageLabel%22%3A%2227%22%2C%22position%22%3A%7B%22pageIndex%22%3A26%2C%22rects%22%3A%5B%5B107.8%2C158.78318603515623%2C664.4241249999999%2C180.629325%5D%2C%5B107.8%2C129.50318603515623%2C734.203825%2C151.349325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2227%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/B5BXM4R9?page=27">Architecture deals with non-functional requirements</a></span><span style="color: rgb(126, 131, 134)"><br>架构处理的是非功能性需求。</span>> 例如，以不同质量实现相同功能的解决方案
>
> <!---->
>
> ```
> 支付系统例子（防原题）
> ```
>
> ![\<img alt="" data-attachment-key="6YY58FK4" width="1229" height="592" src="attachments/6YY58FK4.png" ztype="zimage"> | 1229](attachments/6YY58FK4.png)
>
> 质量差异观察：
>
> *   **Keeping:** reliable, easy to use by merchants & customers\ <span style="color: rgb(126, 131, 134)">保留项：可靠、便于商户和客户使用</span>
>
> *   **Improvement: **T+2 => real-time and always-on\ <span style="color: rgb(126, 131, 134)">改进项：T+2 => 实时且全天候</span>
>
> *   **Generalization:** single platform => cross-platform\ <span style="color: rgb(126, 131, 134)">泛化项：单一平台 => 跨平台</span>
>
> *   **Extension: **easy to add new features, single standard for QR code\ <span style="color: rgb(126, 131, 134)">扩展项：易于添加新功能、单一的二维码标准</span>
>
> > <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FB5BXM4R9%22%2C%22pageLabel%22%3A%2229%22%2C%22position%22%3A%7B%22pageIndex%22%3A28%2C%22rects%22%3A%5B%5B71.25%2C135.44202880859373%2C718.0186500000004%2C160.698075%5D%2C%5B71.25%2C102.40662109375%2C703.5332000000002%2C127.6854%5D%2C%5B71.25%2C68.61702880859374%2C676.7450000000002%2C93.873075%5D%2C%5B71.25%2C27.2676025390625%2C323.97472500000003%2C60.098074999999994%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2229%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/B5BXM4R9?page=29">So, even if QR code is banned as a feature (and thus, both traditional payment system and FPS has no difference in functional requirement), FPS still needs to address the other quality attributes</a></span><span style="color: rgb(126, 131, 134)"><br>因此，即使二维码作为一项功能被禁止（从而使传统支付系统和FPS在功能需求上没有区别），FPS仍然需要满足其他质量属性。</span>

## <质量属性>

### **功能需求定义：**

**Functional requirements** specify what the software system needs to do to satisfy the fundamental reasons for the system’s existence.\
**<span style="color: rgb(126, 131, 134)">功能需求</span>**<span style="color: rgb(126, 131, 134)">规定了软件系统需要做什么，以满足系统存在的根本原因</span>

### **软件架构与质量：**

*   The notion of** quality** is central in software architecting\ <span style="color: rgb(126, 131, 134)">质量的概念在软件架构设计中至关重要。</span>

*   Some qualities are observable via execution: performance, security, availability, functionality, usability<span style="color: rgb(126, 131, 134)"><br>有些质量可以通过运行观察到：性能、安全性、可用性、功能性、可用性</span>

*   Some others are not observable via execution: modifiability, portability, reusability, integrability, testability<span style="color: rgb(126, 131, 134)"><br>其他一些质量无法通过运行观察到：可修改性、可移植性、可复用性、可集成性、可测试性</span>

*   Quality also affects different aspects of software projects<span style="color: rgb(126, 131, 134)"><br>质量还影响软件项目的不同方面。</span>

### **质量属性**

A quality attribute is a **measurable or testable** property of a system that is used to indicate how well the system satisfies the needs of its stakeholders\ <span style="color: rgb(126, 131, 134)">质量属性是系统的</span>**<span style="color: rgb(126, 131, 134)">可测量或可测试</span>**<span style="color: rgb(126, 131, 134)">的属性，用于表明系统满足其利益相关者需求的程度</span>

> ```
> 可测量性 / 可测试性
> ```
>
> *   Without knowing how far the current system is from a goal, designing a system to meet this goal is impossible.<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)"><br></span></span><span style="color: rgb(126, 131, 134)">如果不知道当前系统距离目标有多远，设计一个达到该目标的系统是不可能的。</span>
>
> *   As an analyst, we should aim to get the measurable one.<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)"><br></span></span><span style="color: rgb(126, 131, 134)">作为分析师，我们应该力求获得可测量的需求。</span>
>
> <!---->
>
> ```
> 质量属性权衡
> ```
>
> *   Many pairs of “-litiity” form tradeoffs.<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)"><br></span></span><span style="color: rgb(126, 131, 134)">许多以"-ility"结尾的属性对会形成权衡。</span>
>
>     *   Improving the privacy => lowering usability<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)"><br></span></span><span style="color: rgb(126, 131, 134)">提高隐私性 => 降低可用性</span>
>
>     *   Higher performance => lower interoperability<span style="color: rgb(126, 131, 134)"><br>更高性能 => 更低互操作性</span>
>
>     *   Higher modularity => longer time-to-market<span style="color: rgb(126, 131, 134)"><br>更高模块化 => 更长的上市时间</span>
>
>     *   Higher reliability => lower performance<span style="color: rgb(126, 131, 134)"><br>更高可靠性 => 更低性能</span>
>
>     *   Quicker time-to-market and lower cost => lower stability<span style="color: rgb(126, 131, 134)"><br>更快的上市时间和更低的成本 => 更低的稳定性</span>
>
>     > We should be aware that addressing one quality attribute by a system decomposition should evaluate its impact on some other quality attributes (within the domain model and among the quality attributes of the requirements)<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)"><br></span></span><span style="color: rgb(126, 131, 134)">通过</span>**<span style="color: rgb(126, 131, 134)">系统分解</span>**<span style="color: rgb(126, 131, 134)">来解决一个质量属性时，应该评估它对其他一些质量属性（在领域模型内以及需求的质量属性之间）的影响。</span>

### **设计质量**

*   ***Feasibility***<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)"><br></span></span><span style="color: rgb(126, 131, 134)">可行性</span>

> *   What is the chance of project success\ <span style="color: rgb(126, 131, 134)">项目成功的几率有多大？</span>
>
> *   Time to market (feasible for D-day)?<span style="color: rgb(126, 131, 134)"><br>上市时间（能否在截止日前完成）？</span>> *   Slower: build from scratch; all features; top-down decision making**<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)"><br></span></span>**<span style="color: rgb(126, 131, 134)">较慢：从头开始构建；包含所有功能；自上而下的决策</span>
>     >
>     > <!---->
>     >
>     > *   Faster: reuse whenever possible; minimum viable product; developers make decisions<span style="color: rgb(126, 131, 134)"><br>较快：尽可能复用；最小可行产品；开发人员做决策</span>
>
> *   Affordability (enough resources to complete the project?)<span style="color: rgb(126, 131, 134)"><br>可承受性（是否有足够资源完成项目？）</span>> *   资金是否足够？
>     >
>     > <!---->
>     >
>     > *   资源是否足够？
>     >
>     >     *   people (quality and quantity), time, environment (including hardward)<span style="color: rgb(126, 131, 134)"><br>人员（质量与数量）、时间、环境（包括硬件）...</span>
>     >
>     > *   How elastic are the available resources to cater for unanticipated events on top of a “reasonable schedule”?<span style="color: rgb(126, 131, 134)"><br>可用资源在"合理进度"之外，应对意外事件的弹性如何？</span>

*   ***Reusability***<span style="color: rgb(126, 131, 134)"><br>可复用性</span>

> *   **复用策略：**
>
>     *   Duplication (multiple copies) versus Reference (shared copy)<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)"><br></span></span><span style="color: rgb(126, 131, 134)">复制（多份副本）与引用（共享副本）</span>
>
>     *   Baseline is internal to the project or external to it?<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)"><br></span></span><span style="color: rgb(126, 131, 134)">基线是项目内部还是外部的？</span>
>
>     *   General-purpose or domain-specific or feature-specific?<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)"><br></span></span><span style="color: rgb(126, 131, 134)">通用目的、领域特定还是功能特定？</span>
>
>     *   More generic => fewer constraints on other quality attributes<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)"><br></span></span><span style="color: rgb(126, 131, 134)">越通用 => 对其他质量属性的约束越少</span>
>
> *   Pre-requisites of reuses available to the project product<span style="color: rgb(126, 131, 134)"><br>项目产品可用的复用的先决条件</span>
>
>     *   Open-source? Industry standard? Well-documented interface? Accessibility to the component? Quality?<span style="color: rgb(126, 131, 134)"><br>开源？行业标准？文档完善的接口？组件的可访问性？质量？</span>

*   ***Consistency***<span style="color: rgb(126, 131, 134)"><br>一致性</span>

> *   Is the design conceptually clean and coherent?<span style="color: rgb(126, 131, 134)"><br>设计在概念上是否清晰和连贯？</span>> *   understanding a part and the general principle of a component can help generalize the understanding to the whole component<span style="color: rgb(126, 131, 134)"><br>理解组件的局部及其通用原则有助于将理解推广到整个组件</span>
>     >
>     > *   Reduce surprise.<span style="color: rgb(126, 131, 134)"><br>减少意外。</span>
>
> *   Follow the architectural style constraint and document the major architectural decisions<span style="color: rgb(126, 131, 134)"><br>遵循架构风格约束并记录主要架构决策</span>
>
> *   Follow the design principles and break it with a consistent reason<span style="color: rgb(126, 131, 134)"><br>遵循设计原则，并在有一致理由的情况下才打破它</span>

*   ***Simplicity***<span style="color: rgb(126, 131, 134)"><br>简洁性</span>

> *   A complex problem does not necessarily need a complex solution.\ <span style="color: rgb(126, 131, 134)">复杂的问题不一定需要复杂的解决方案。</span>> *   Simple is beautiful<span style="color: rgb(126, 131, 134)"><br>简洁即美</span>
>     >
>     > *   One general solution is better than many customized solutions<span style="color: rgb(126, 131, 134)"><br>一个通用解决方案优于多个定制化方案</span>
>
> *   **策略**
>
>     *   Minimize variability of components<span style="color: rgb(126, 131, 134)"><br>最小化组件的可变性</span>
>
>     *   Minimize direct connections between components<span style="color: rgb(126, 131, 134)"><br>最小化组件间的直接连接</span>
>
>     *   Make each design decision concise and clean<span style="color: rgb(126, 131, 134)"><br>使每个设计决策简洁清晰</span>
>
>     *   Refactoring the design if needed<span style="color: rgb(126, 131, 134)"><br>必要时重构设计</span>
>
>     *   Identify a fundamental set of primitives and create solutions based on these primitives<span style="color: rgb(126, 131, 134)"><br>识别一组基本原语，并基于这些原语创建解决方案</span>
>
>     *   Change that requires compromising the simplicity? => think twice<span style="color: rgb(126, 131, 134)"><br>需要牺牲简洁性的变更？ => 三思而后行</span>

*   ***Stability***<span style="color: rgb(126, 131, 134)"><br>稳定性</span>

> *   If a design decision depends on N modules, changing one module may lead to changing the other N−1 modules.<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)"><br></span></span><span style="color: rgb(126, 131, 134)">如果一个设计决策依赖于 N 个模块，更改一个模块可能导致需要更改其他 N-1 个模块。</span>
>
> *   A design decision can be fragile in some specific operating environments.<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)"><br></span></span><span style="color: rgb(126, 131, 134)">设计决策在特定运行环境中可能很脆弱。</span>> Better encapsulate the environmental issue into the underlying platform or framework<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)"><br></span></span><span style="color: rgb(126, 131, 134)">最好将环境问题封装到底层平台或框架中</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FB5BXM4R9%22%2C%22pageLabel%22%3A%2242%22%2C%22position%22%3A%7B%22pageIndex%22%3A41%2C%22rects%22%3A%5B%5B50.6%2C30.33662109375%2C660.9490000000004%2C55.6154%5D%2C%5B50.6%2C-3.4579711914062496%2C498.88850000000025%2C21.798074999999997%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2242%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/B5BXM4R9?page=42">Using experimental code or features without sufficient evaluation in the project context is risky</a></span><span style="color: rgb(126, 131, 134)"><br>在项目上下文中未经充分评估就使用实验性代码或功能是有风险的</span>

*   ***Composability***<span style="color: rgb(126, 131, 134)"><br>可组合性</span>

> *   Is it easy to compose a higher-level component from supportive components? To what extent?<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)"><br></span></span><span style="color: rgb(126, 131, 134)">从支持性组件组合成更高级别的组件是否容易？到什么程度？</span>> *   Plug-and-play components?<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)"><br></span></span><span style="color: rgb(126, 131, 134)">即插即用的组件？</span>
>     >
>     > *   Everything automated?<span style="color: rgb(126, 131, 134)"><br>全部自动化？</span>
>     >
>     > *   By modifying the mapping script or modifying the code?<span style="color: rgb(126, 131, 134)"><br>通过修改映射脚本还是修改代码？</span>
>
> *   Are all components ready, or do we need to develop some “glue” scripts? Hard or easy?<span style="color: rgb(126, 131, 134)"><br>所有组件都准备好了吗，还是我们需要开发一些"胶水"脚本？困难还是容易？</span>

*   ***Deployability***<span style="color: rgb(126, 131, 134)"><br>可部署性</span>

> *   Is it easy to deploy the system into its operating environment?<span style="color: rgb(126, 131, 134)"><br>将系统部署到其运行环境中是否容易？</span>> *   Manual vs. Automated<span style="color: rgb(126, 131, 134)"><br>手动 vs. 自动</span>
>     >
>     > *   Scheduled update vs. continuous delivery<span style="color: rgb(126, 131, 134)"><br>计划更新 vs. 持续交付</span>
>     >
>     > *   Onsite, cloud-based, or service composition?<span style="color: rgb(126, 131, 134)"><br>本地部署、基于云部署，还是服务组合？</span>
>     >
>     > *   Version downgrade: not possible vs. possible (easy/difficult)<span style="color: rgb(126, 131, 134)"><br>版本降级：不可能 vs. 可能（容易/困难）</span>
>     >
>     > *   Coordinate with external dependencies needed?<span style="color: rgb(126, 131, 134)"><br>是否需要与外部依赖项协调？</span>
>     >
>     > *   Can a subset in an upgrade patch be deployable in a standalone manner?<span style="color: rgb(126, 131, 134)"><br>升级补丁中的子集能否以独立方式部署？</span>

### **运行质量**

*   ***Performance:*** Latency (delay, first response, completion time) and Throughput (output per unit time, bandwidth)<span style="color: rgb(126, 131, 134)"><br></span>**<span style="color: rgb(126, 131, 134)">性能：</span>**<span style="color: rgb(126, 131, 134)">延迟（时延、首次响应时间、完成时间）和吞吐量（单位时间输出、带宽）</span>

*   ***Scalability:*** Growth with throughput (# of requests), users (concurrency), data volume (I/O and processing), network scale (# of nodes), and system size (# of components): dynamic scaling possible?<span style="color: rgb(126, 131, 134)"><br></span>**<span style="color: rgb(126, 131, 134)">可扩展性：</span>**<span style="color: rgb(126, 131, 134)">随吞吐量（请求数）、用户（并发数）、数据量（I/O和处理）、网络规模（节点数）和系统规模（组件数）增长的能力：能否动态扩展？</span>

*   ***Capacity:*** Limit, overload, and utilization rate**<span style="color: rgb(126, 131, 134)"><br>容量：</span>**<span style="color: rgb(126, 131, 134)">限制、过载和利用率</span>

*   ***Usability:*** Easy to learn and recall efficiently? Follow the norm? user satisfaction? Easy to access?**<span style="color: rgb(126, 131, 134)"><br>可用性：</span>**<span style="color: rgb(126, 131, 134)">易于学习和高效回忆？遵循规范？用户满意度？易于访问？</span>

*   ***Serviceability:*** operation stop vs. continuous operation? Reboot or no reboot? Manual error report vs. automated?**<span style="color: rgb(126, 131, 134)"><br>可服务性：</span>**<span style="color: rgb(126, 131, 134)">运行停止 vs. 持续运行？需要重启还是无需重启？手动错误报告 vs. 自动报告？</span>

*   ***Visibility: ***system behavior auditable and logged?**<span style="color: rgb(126, 131, 134)"><br>可观测性：</span>**<span style="color: rgb(126, 131, 134)">系统行为是否可审计和记录？</span>

### **故障相关质量**

*   ***Reliability***\ <span style="color: rgb(126, 131, 134)">可靠性</span>> *   Mean time between failures (MTBF)<span style="color: rgb(126, 131, 134)"><br>平均无故障时间</span>
    >
    > *   Mean time to failure (MTTF)<span style="color: rgb(126, 131, 134)"><br>平均失效前时间</span>

*   ***Recoverability***<span style="color: rgb(126, 131, 134)"><br>可恢复性</span>> MTTR: Mean time to recovery, mean time to repair, or mean time to respond<span style="color: rgb(126, 131, 134)"><br>平均恢复时间</span>

*   ***(Functional) Availability***<span style="color: rgb(126, 131, 134)"><br>（功能）可用性</span>> “Can be calculated based on reliability and recoverability<span style="color: rgb(126, 131, 134)"><br>可根据可靠性和可恢复性计算</span>

### **安全相关质量**

*   ***Authentication: ***to confirm user identity<span style="color: rgb(126, 131, 134)"><br>身份验证：确认用户身份</span>

*   ***Authorization:*** to restrict access<span style="color: rgb(126, 131, 134)"><br>授权：限制访问权限</span>

*   ***Confidentiality: ***to avoid unauthorized data access<span style="color: rgb(126, 131, 134)"><br>保密性：避免未经授权的数据访问</span>

*   ***Integrity:*** to protect the system/data from tampering<span style="color: rgb(126, 131, 134)"><br>完整性：保护系统/数据不被篡改</span>

*   ***Defensibility:*** to protect against attacks<span style="color: rgb(126, 131, 134)"><br>可防御性：保护系统免受攻击</span>

*   ***Privacy:*** to secure confidential data<span style="color: rgb(126, 131, 134)"><br>隐私性：保护机密数据</span>

### **变更相关质量**

*   ***Configurability*** (deferring the architectural design is better):<span style="color: rgb(126, 131, 134)"><br>可配置性（推迟架构设计决策更好）：</span>> *   How to initialize, (re-)activate, place and bid components?<span style="color: rgb(126, 131, 134)"><br>如何初始化、（重新）激活、放置和竞标组件？</span>
    >
    > *   How to add or remove system resources<span style="color: rgb(126, 131, 134)"><br>如何添加或移除系统资源（例如，节点或相同组件的副本）</span>
    >
    > *   How can a feature be toggled on or off?<span style="color: rgb(126, 131, 134)"><br>功能如何被开启或关闭？</span>

*   ***Customizability***<span style="color: rgb(126, 131, 134)"><br>可定制性</span>> One-size-fits-all, product line, UI skin, JSON for data to decouple from hardcoding the data<span style="color: rgb(126, 131, 134)"><br>一刀切、产品线、UI皮肤、使用JSON存储数据以与硬编码解耦</span>

*   ***Duration***<span style="color: rgb(126, 131, 134)"><br>持续性</span>> Temporary and then revoked possible? Permanent evolution possible?<span style="color: rgb(126, 131, 134)"><br>可否临时生效然后撤销？可否永久演进？</span>

*   ***Feature Evolution***<span style="color: rgb(126, 131, 134)"><br>特性演进</span>> extensibility for new feature for; modifiability for existing feature<span style="color: rgb(126, 131, 134)"><br>对新特性的可扩展性；对现有特性的可修改性</span>

<!---->

*   ***Compatibility***<span style="color: rgb(126, 131, 134)"><br>兼容性</span>> Standardized interface, format, platform. Version backward/forward compatibility<span style="color: rgb(126, 131, 134)"><br>标准化接口、格式、平台。版本向前/向后兼容</span>

*   ***Portability***<span style="color: rgb(126, 131, 134)"><br>可移植性</span>> Platform independent versus native code? Write once, run anywhere? VM-based?<span style="color: rgb(126, 131, 134)"><br>平台无关 vs. 原生代码？一次编写，到处运行？基于虚拟机？</span>

*   ***Interoperability*** (with other systems)<span style="color: rgb(126, 131, 134)"><br>互操作性（与其他系统）</span>> Standard, presence of medicator, content negotiation<span style="color: rgb(126, 131, 134)"><br>标准、中介器的存在、内容协商</span>

*   ***Integration***<span style="color: rgb(126, 131, 134)"><br>集成性</span>> Standard interface and data format, continuous, real-time, # of integrated components at the same time<span style="color: rgb(126, 131, 134)"><br>标准接口和数据格式、连续性、实时性、同时集成的组件数量</span>

### **项目健康质量**

*   Data persistence, checkpoint, and recovery\ <span style="color: rgb(126, 131, 134)">数据持久性、检查点和恢复</span>

*   Backup and disaster recovery plan<span style="color: rgb(126, 131, 134)"><br>备份和灾难恢复计划</span>

*   Maintainability<span style="color: rgb(126, 131, 134)"><br>可维护性</span>

### **API设计的实例（防原题，此处有课后思考）**

要求：

*   在现代应用中，开发者经常使用通过网络或来自库的 API。他们有时会将应用程序功能暴露为 API 供其他客户端使用。

    *   例如，后端开发者将其功能封装为 API，供前端开发者构建前端功能。

*   我们希望我们的 API 设计是稳定、开放并对其客户端应用友好的。

*   如何实现\[从设计角度]？

> ```
> API 设计原则
> ```
>
> *   Easy to understand: Usability, Simplicity, Small, Well-documented, Meaningful error messages<span style="color: rgb(126, 131, 134)"><br>易于理解：可用性、简洁性、小巧、文档完善、有意义的错误信息</span>
>
> *   High quality of services: Scalability, Reliable, Available, Security, Compatibility, Standardized I/O message type<span style="color: rgb(126, 131, 134)"><br>高质量服务：可扩展性、可靠性、可用性、安全性、兼容性、标准化的 I/O 消息类型</span>
>
> *   Naming Consistency (from endpoints, functions, I/O, Ordering of elements, similarity with other APIs)<span style="color: rgb(126, 131, 134)"><br>命名一致性（包括端点、函数、I/O、元素顺序、与其他 API 的相似性）</span>
>
> *   Design from the client application’s perspective (usability)<span style="color: rgb(126, 131, 134)"><br>从客户端应用程序的角度进行设计（可用性）</span>
>
> *   Principles<span style="color: rgb(126, 131, 134)"><br>原则</span>> *   Explicit interfaces principle<span style="color: rgb(126, 131, 134)"><br>显式接口原则</span>
>     >
>     > *   Principle of least surprise<span style="color: rgb(126, 131, 134)"><br>最小意外原则</span>
>     >
>     > *   Small interfaces principle<span style="color: rgb(126, 131, 134)"><br>小接口原则</span>
>     >
>     > *   Uniform access principle<span style="color: rgb(126, 131, 134)"><br>统一访问原则</span>
>     >
>     > *   Few interfaces principle<span style="color: rgb(126, 131, 134)"><br>少接口原则</span>
>     >
>     > *   Clear interfaces principle<span style="color: rgb(126, 131, 134)"><br>清晰接口原则</span>

## <属性驱动设计（ADD）>

### **定义**

ADD is an architectural design methodology to tackle quality attributes incrementally<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)"><br></span></span><span style="color: rgb(126, 131, 134)">ADD 是一种用于逐步处理质量属性的架构设计方法论。</span>

1.  Choose a system module/connector to decompose<span style="color: rgb(126, 131, 134)"><br>选择一个系统模块/连接器进行分解。</span>

2.  Refine this module:<span style="color: rgb(126, 131, 134)"><br>细化此模块：</span>> *   choose architectural drivers (quality is the driving force)<span style="color: rgb(126, 131, 134)"><br>选择架构驱动因素（质量是主要驱动力）</span>
    >
    > *   choose patterns/tactics/styles that satisfy the drivers<span style="color: rgb(126, 131, 134)"><br>选择满足驱动因素的模式/战术/风格</span>
    >
    > *   apply patterns/tactics/styles and assign responsibilities<span style="color: rgb(126, 131, 134)"><br>应用模式/战术/风格并分配职责</span>

3.  Repeat steps 1-2<span style="color: rgb(126, 131, 134)"><br>重复步骤 1-2。</span>

### **ADD迭代**

*   Top-level (whole system):<span style="color: rgb(126, 131, 134)"><br>顶层（整个系统）：</span>> *   address usability<span style="color: rgb(126, 131, 134)"><br>解决可用性</span>
    >
    > *   \=> tactic: separate user interface => pattern: three tier architecture<span style="color: rgb(126, 131, 134)"><br>=> 战术：分离用户界面 => 模式：三层架构</span>

*   Lower-level, within the presentation tier module:<span style="color: rgb(126, 131, 134)"><br>较低层级，在表示层模块内：</span>> *   address security<span style="color: rgb(126, 131, 134)"><br>解决安全性</span>
    >
    > <!---->
    >
    > *   \=> tactic: authenticate users<span style="color: rgb(126, 131, 134)"><br>=> 战术：认证用户</span>

*   Lower-level, within the data tier module:<span style="color: rgb(126, 131, 134)"><br>较低层级，在数据层模块内：</span>> *   address availability<span style="color: rgb(126, 131, 134)"><br>解决可用性</span>
    >
    > <!---->
    >
    > *   \=> tactic: active redundancy<span style="color: rgb(126, 131, 134)"><br>=> 战术：主动冗余</span>

> *   ADD iteratively applies one or more architectural tactics to address a quality attribute issue.<span style="color: rgb(126, 131, 134)"><br>ADD 迭代地应用一个或多个架构战术来解决质量属性问题。</span>
>
> *   Architectural tactics are concepts. They are usually used implicitly in a solution.<span style="color: rgb(126, 131, 134)"><br>架构战术是概念。它们通常在解决方案中隐式使用。</span>
>
> *   The most often mentioned tactics nowadays are Security tactics (defense approaches).<span style="color: rgb(126, 131, 134)"><br>如今最常被提及的战术是安全战术（防御方法）。</span>

## <企业集成模式>

*   Apart from addressing quality attributes by components, we can also address the quality attributes by how we connect these components<span style="color: rgb(126, 131, 134)"><br>除了通过组件来处理质量属性外，我们还可以通过连接这些组件的方式来处理质量属性。</span>

> ```
> 实例：订单处理系统（防原题）
> ```
>
> **问题1？**
>
> *   每个供应商只能处理特定类型的消息。
>
> *   将请求路由到"合适的"供应商。但是如何实现？
>
>     *   不希望让发送方承担决策的负担。
>     *   让供应商"挑选"消息需要协调。
>
> **解决方案：基于内容的路由器（Content-Based Router）**
>
> *   Insert a router that selects channels based on the message meta-content\ <span style="color: rgb(126, 131, 134)">插入一个路由器，根据消息的元内容选择通道。</span>
>
> *   Routers forward incoming messages to different channels\ <span style="color: rgb(126, 131, 134)">路由器将传入的消息转发到不同的通道。</span>
>
> *   Message content not changed<span style="color: rgb(126, 131, 134)"><br>消息内容不改变。</span>
>
> *   But if a few messages form a unit, we need to design a bit more (see next slide)<span style="color: rgb(126, 131, 134)"><br>但如果几条消息构成一个单元，我们需要做更多的设计</span>
>
> ![\<img alt="" data-attachment-key="Z9THICBJ" width="1241" height="340" src="attachments/Z9THICBJ.png" ztype="zimage"> | 1241](attachments/Z9THICBJ.png)
>
> > **订单入口** -> **订单消息** -> **基于内容的路由器** -> 将消息路由至 **Widget 库存** 或 **Gadget 库存**
>
> ***
>
> **问题2？**
>
> *   我们如何处理包含多个元素的消息？
>
>     *   需要避免元素丢失或重复。
>     *   有效利用网络资源。
>
> **解决方案：拆分器 & 路由器（Splitter & Router）**
>
> *   Use a splitter to break out a composite message into a series of individual messages\ <span style="color: rgb(126, 131, 134)">使用一个拆分器将复合消息分解为一系列单独的消息。</span>
>
> *   Then use a router to route the individual messages as before<span style="color: rgb(126, 131, 134)"><br>然后像之前一样使用路由器来路由这些单独的消息。</span>
>
> *   Note that two patterns are composed in the solution<span style="color: rgb(126, 131, 134)"><br>注意，解决方案中组合了两种模式。</span>
>
> *   we can now split messages, but what about the reverse...?<span style="color: rgb(126, 131, 134)"><br>我们现在可以拆分消息了，但是反过来呢...？（指聚合）</span>
>
> ![\<img alt="" data-attachment-key="XQZFJ4F7" width="1183" height="415" src="attachments/XQZFJ4F7.png" ztype="zimage"> | 1183](attachments/XQZFJ4F7.png)
>
> > *   **订单入口** -> **订单消息** -> **拆分器** -> **订单项** -> **路由器**
> > *   路由器将各个订单项分别路由到 **Widget 库存** (订单项1) 和 **Gadget 库存** (订单项2)
>
> ***
>
> **问题 3a？\[单一合作伙伴]**
>
> *   如何组合单个但相关的消息的结果？
>
>     *   消息可能乱序、延迟
>     *   多个对话可能交织在一起
>
> **解决方案：聚合器**
>
> *   Use a stateful filter (an Aggregator)\ <span style="color: rgb(126, 131, 134)">使用一个有状态过滤器（一个聚合器）</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FB5BXM4R9%22%2C%22pageLabel%22%3A%2269%22%2C%22position%22%3A%7B%22pageIndex%22%3A68%2C%22rects%22%3A%5B%5B71.25%2C348.44202880859376%2C723.2681250000003%2C373.69807499999996%5D%2C%5B71.25%2C314.64202880859375%2C454.23947500000014%2C339.89807499999995%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2269%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/B5BXM4R9?page=69">Collects and stores messages until a complete set has been received (completeness condition)</a></span><span style="color: rgb(126, 131, 134)"><br>收集并存储消息，直到收到完整的集合（完成条件）</span>
>
> *   Publishes a single message created from the individual messages (aggregation algorithm)<span style="color: rgb(126, 131, 134)"><br>发布一条由单个消息创建而成的单一消息（聚合算法）</span>
>
> ![\<img alt="" data-attachment-key="L4MCFCAF" width="1162" height="386" src="attachments/L4MCFCAF.png" ztype="zimage"> | 1162](attachments/L4MCFCAF.png)
>
> > *   **订单项 1** -> **Widget 库存** -> **响应 1** -> **聚合器**
> > *   **订单项 2** -> **Gadget 库存** -> **响应 2** -> **聚合器**
> > *   **聚合器** 生成 **已确认的订单** 并发送到 **计费** 系统。
>
> ***
>
> **问题 3b：\[多个合作伙伴]**
>
> *   如何将消息发送给一组动态的接收者？
> *   并返回单一的响应消息？
>
> **解决方案：分散-聚合器对**
>
> *   Send a message to a publish-subscribe channel<span style="color: rgb(126, 131, 134)"><br>将消息发送到发布-订阅通道</span>
>
> *   Interested recipients subscribe to a "topic"<span style="color: rgb(126, 131, 134)"><br>感兴趣的接收者订阅一个"主题"</span>
>
> *   Aggregator collects individual response messages<span style="color: rgb(126, 131, 134)"><br>聚合器收集各个响应消息</span>
>
>     *   may not wait for all quotes, only returns one quote<span style="color: rgb(126, 131, 134)"><br>可能不会等待所有报价，仅返回一个报价</span>
>
> ![\<img alt="" data-attachment-key="U7GZ9HTR" width="1230" height="400" src="attachments/U7GZ9HTR.png" ztype="zimage"> | 1230](attachments/U7GZ9HTR.png)
>
> > *   **询价请求** -> **发布-订阅通道**
> > *   **发布-订阅通道** 将请求分发给 **供应商 A**，**供应商 B**，**供应商 C**
> > *   各供应商返回 **报价** 到 **聚合器**
> > *   **聚合器** 生成 **最佳报价**
>
> ***
>
> **复杂组合**
>
> *   Receive an order message<span style="color: rgb(126, 131, 134)">接收订单消息</span>
>
> *   Use splitter to create one message per item<span style="color: rgb(126, 131, 134)"><br>使用拆分器为每个订单项创建一条消息</span>
>
> *   Send to scatter/gather, which returns the “best quote” message<span style="color: rgb(126, 131, 134)"><br>发送到分散/收集模式，该模式返回"最佳报价"消息</span>
>
> *   Aggregate to create a quoted order message<span style="color: rgb(126, 131, 134)"><br>聚合以创建带报价的订单消息</span>
>
> ![\<img alt="" data-attachment-key="U3SIFBM7" width="1199" height="411" src="attachments/U3SIFBM7.png" ztype="zimage"> | 1199](attachments/U3SIFBM7.png)
>
> > *   **订单** -> **拆分器** -> **每个订单项的报价请求** -> **发布-订阅通道**
> > *   **发布-订阅通道** 将报价请求分发给 **供应商 A**，**供应商 B**，**供应商 C**
> > *   各供应商返回 **报价**
> > *   **每个订单项的最佳报价** -> **聚合器** -> **带报价的订单**

## <架构决策>

### 设计决策的作用

*   Identify key design decisions for a stakeholder<span style="color: rgb(126, 131, 134)"><br>为利益相关者识别关键设计决策</span>

    *   Make the key decisions quickly available. E.g., introducing new people and making them up-to-date.<span style="color: rgb(126, 131, 134)"><br>使关键决策能够快速被了解。例如，向新成员介绍情况并让他们了解最新进展。</span>

    *   ..., Get a rationale, evaluate/validate decisions against requirements<span style="color: rgb(126, 131, 134)"><br>...，获取决策理由，根据需求评估/验证决策。</span>

*   Evaluate impacts<span style="color: rgb(126, 131, 134)"><br>评估影响</span>

    *   If we want to change an element, what elements are impacted (decisions, design, issues)?<span style="color: rgb(126, 131, 134)"><br>如果我们想更改一个元素，哪些元素会受到影响（决策、设计、问题）？</span>

    *   Clean up the architecture, identify important architectural drivers<span style="color: rgb(126, 131, 134)"><br>清理架构，识别重要的架构驱动因素。</span>

*   Make the design decision explicit<span style="color: rgb(126, 131, 134)"><br>使设计决策明确化</span>

### 表示法

*   While we make our design decision, we need to manifest the design concept as** explicit artifacts (i.e., representation) **to communicate with stakeholders<span style="color: rgb(126, 131, 134)"><br>在我们制定设计决策时，需要将设计概念具体化为明确的制品（即表示法），以便与利益相关者沟通。</span>

    *   e.g., your team members and your customers or users to address their concerns on the non-functional requirements<span style="color: rgb(126, 131, 134)"><br>例如，您的团队成员、客户或用户，以解决他们对非功能性需求的关切。</span>

> *   Different representations<span style="color: rgb(126, 131, 134)"><br>不同的表示法</span>
>
>     *   For different people<span style="color: rgb(126, 131, 134)"><br>面向不同的人员</span>
>
>     *   For different purposes<span style="color: rgb(126, 131, 134)"><br>用于不同的目的</span>
>
> *   These representations are both descriptive and prescriptive<span style="color: rgb(126, 131, 134)"><br>这些表示法既是描述性的，也是规定性的。</span>
>
> <!---->
>
> ```
> 4+1 视图模型（The 4+1 view model）
> ```
>
> ![\<img alt="" data-attachment-key="JNRZ72UI" width="1277" height="572" src="attachments/JNRZ72UI.png" ztype="zimage"> | 1277](attachments/JNRZ72UI.png)
>
> > *   **逻辑视图** - 对应最终用户功能
> > *   **实现视图** - 对应程序员软件管理
> > *   **进程视图** - 对应集成人员性能、可扩展性
> > *   **部署视图** - 对应系统工程师拓扑、通信

## <架构风格>

An architectural style is a description of** component and connector types **and a pattern of their runtime control and/or data transfer.<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)"><br></span></span><span style="color: rgb(126, 131, 134)">架构风格是对</span>**<span style="color: rgb(126, 131, 134)">组件和连接器类型</span>**<span style="color: rgb(126, 131, 134)">及其运行时控制和/或数据传输模式的描述</span>

> ```
> 黑板模式
> ```
>
> *   Blackboard (BB)**<span style="color: rgb(126, 131, 134)"><br>黑板</span>**
>
>     *   Data: problem and partial solution.<span style="color: rgb(126, 131, 134)"><br>数据：问题和部分解决方案。</span>
>
> *   Knowledge source (KS)**<span style="color: rgb(126, 131, 134)"><br>知识源</span>**
>
>     *   Specialized modules, each providing a solution to some part of the entire problem.<span style="color: rgb(126, 131, 134)"><br>专用模块，每个模块为整个问题的某部分提供解决方案。</span>
>
>     *   Condition() checks whether the module can contribute to the BB<span style="color: rgb(126, 131, 134)"><br>Condition() 检查模块是否可以对 BB 做出贡献</span>
>
>     *   Acton() updates BB.<span style="color: rgb(126, 131, 134)"><br>Action() 更新 BB。</span>
>
> *   Control**<span style="color: rgb(126, 131, 134)"><br>控制</span>**
>
>     *   Periodically monitor changes on BB<span style="color: rgb(126, 131, 134)"><br>定期监控 BB 上的变化</span>
>
>     *   On identifying changes, decide KS to be selected and executed.<span style="color: rgb(126, 131, 134)"><br>识别变化后，决定选择并执行哪个 KS。</span>
>
> <!---->
>
> ```
> 客户端-服务器及其变体
> ```
>
> *   Client-server<span style="color: rgb(126, 131, 134)"><br>客户端-服务器</span>> <span style="color: rgb(126, 131, 134)">客户端通过互联网与服务器通信</span>
>
> *   Master-slave<span style="color: rgb(126, 131, 134)"><br>主从模式</span>> <span style="color: rgb(126, 131, 134)">主节点向多个从节点分派任务并收集确认</span>
>
> <!---->
>
> ```
> 事件总线/发布-订阅模式 “Event-bus/Publish–subscribe pattern” 
> ```
>
> *   Source publishes an event to a channel<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)"><br></span></span><span style="color: rgb(126, 131, 134)">源将事件发布到通道</span>
>
> *   Channels are grouped into bus<span style="color: rgb(126, 131, 134)"><br>通道被分组到总线中</span>
>
> *   Subscriber subscribes to a channel<span style="color: rgb(126, 131, 134)"><br>订阅者订阅一个通道</span>
>
> <!---->
>
> ```
> 管道-过滤器模式 “Pipe-and-Filter” 
> ```
>
> ![\<img alt="" data-attachment-key="ZPJI392W" width="1278" height="499" src="attachments/ZPJI392W.png" ztype="zimage"> | 1278](attachments/ZPJI392W.png)\
> （图示：数据从源1经过任务A、B、C、D的管道变换；数据从源2经过任务A、B、E、F的管道变换）
>
> ```
> 分层模式 “Layered pattern” 
> ```
>
> *   OSI 7-layer model<span style="color: rgb(126, 131, 134)"><br>OSI 7层模型</span>
>
> *   Three-tier architecture<span style="color: rgb(126, 131, 134)"><br>三层架构</span>
>
> <!---->
>
> ```
> 微内核模式 “Microkernel” 
> ```
>
> *   A core system is a barebone system<span style="color: rgb(126, 131, 134)"><br>核心系统是一个骨架系统</span>
>
> *   All other features are provided as plug-in<span style="color: rgb(126, 131, 134)"><br>所有其他功能都作为插件提供</span>
>
> > ```
> > 微内核（此处有Home Reading）
> > ```
> >
> > *   ***Microkernel*** provides the core set of functionalities.<span style="color: rgb(126, 131, 134)"><br>微内核提供核心功能集。</span>
> >
> > *   ***InternalServer*** adds additional important functionalities to the microkernel.<span style="color: rgb(126, 131, 134)"><br>内部服务器向微内核添加额外的重要功能。</span>
> >
> > *   ***ExternalServer*** implements higher level functionality derived from the functionality offered by the microkernel.<span style="color: rgb(126, 131, 134)"><br>外部服务器实现基于微内核功能衍生的更高级功能。</span>
> >
> > *   ***Adapter*** bridges between the user (client) and the system (microkernels and external servers) to handle heterogeneous system components.<span style="color: rgb(126, 131, 134)"><br>适配器在用户（客户端）和系统（微内核和外部服务器）之间架起桥梁，以处理异构系统组件。</span>
>
> ```
> 模型-视图-控制器（MVC）
> ```
>
> *   Popularity used to improve user experience<span style="color: rgb(126, 131, 134)"><br>广泛用于改善用户体验</span>
>
> *   **model :** represent the core functionality and data<span style="color: rgb(126, 131, 134)"><br>模型：表示核心功能和数据</span>
>
> *   **view:** displays a part of the model to the user<span style="color: rgb(126, 131, 134)"><br>视图：向用户显示模型的一部分</span>
>
> *   **controller :** accept user input and update models<span style="color: rgb(126, 131, 134)"><br>控制器：接受用户输入并更新模型</span>
