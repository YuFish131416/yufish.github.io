# CS5351 期中开卷应试整理 第四章 Requirements Engineering（需求工程）

## <定义>

*   RE is a process to ***find out*** and ***structure*** the**<span style="color: rgb(78, 179, 28)"> functional </span>**and **<span style="color: rgb(5, 162, 239)">non-functional</span>**<span style="color: rgb(5, 162, 239)"> </span>**requirements** of the software to be built.<span style="color: rgb(126, 131, 134)">RE 是</span>**<span style="color: rgb(126, 131, 134)">发现</span>**<span style="color: rgb(126, 131, 134)">和</span>**<span style="color: rgb(126, 131, 134)">组织</span>**<span style="color: rgb(126, 131, 134)">待构建软件的</span>**<span style="color: rgb(126, 131, 134)">功能性</span>**<span style="color: rgb(126, 131, 134)">和</span>**<span style="color: rgb(126, 131, 134)">非功能性需求</span>**<span style="color: rgb(126, 131, 134)">的过程</span>

> ![\<img alt="" data-attachment-key="FR6C8M2U" width="847" height="257" src="attachments/FR6C8M2U.png" ztype="zimage"> | 847](attachments/FR6C8M2U.png)
>
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%223%22%2C%22position%22%3A%7B%22pageIndex%22%3A2%2C%22rects%22%3A%5B%5B534.8%2C90.30103759765625%2C690.0132750000005%2C106.691325%5D%2C%5B534.8%2C68.52603759765624%2C750.9738250000009%2C84.916325%5D%2C%5B534.8%2C46.75103759765625%2C765.5454000000007%2C63.141324999999995%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%223%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=3">In many cases, a high proportion of all requirements are non-functional requirements</a></span>\ <span style="color: rgb(126, 131, 134)">在很多情况下，需求中非功能性需求的比例是很高的</span>

### 非功能性需求的多种表现形式

*   Different people in different domains may use different terminologies<span style="color: rgb(126, 131, 134)">不同领域的人可能使用不同的术语</span>

*   Different application domains have different sets of major quality attributes.<span style="color: rgb(126, 131, 134)">不同的应用领域有不同的主要质量属性集合</span>

*   Even in the same application domain, different types of applications have different sets of non-functional requirements<span style="color: rgb(126, 131, 134)">即使在同一应用领域，不同类型的应用也有不同的非功能需求集</span>

*   Some quality attributes are undefined or vaguely known.\ <span style="color: rgb(126, 131, 134)">一些质量属性是未定义或模糊不清的</span>

> *   If a quality attribute **cannot** be measured or **cannot** be verified, we **cannot **know whether we cannot predict how well our software meets them\ <span style="color: rgb(126, 131, 134)">如果一个质量属性</span>**<span style="color: rgb(126, 131, 134)">无法</span>**<span style="color: rgb(126, 131, 134)">测量或</span>**<span style="color: rgb(126, 131, 134)">无法</span>**<span style="color: rgb(126, 131, 134)">验证，我们就</span>**<span style="color: rgb(126, 131, 134)">无法</span>**<span style="color: rgb(126, 131, 134)">知道我们的软件是否能够很好地满足它们</span>
>
>     *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%227%22%2C%22position%22%3A%7B%22pageIndex%22%3A6%2C%22rects%22%3A%5B%5B97.475%2C240.22202880859373%2C678.1669250000003%2C265.478075%5D%2C%5B97.475%2C206.42202880859375%2C404.1387750000001%2C231.678075%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%227%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=7">For such quality attributes, we can only rely on user evaluations on the software</a></span>\ <span style="color: rgb(126, 131, 134)">对于这样的质量属性，我们只能依靠用户对软件的评价</span>

### 处理多层次关注

*   specific to the application domain => meet the general requirement of the industry sector\ <span style="color: rgb(126, 131, 134)">具体到应用领域 => 满足工业部门的一般要求</span>

*   specific to the type of software application => meet the general requirement for the type of software\ <span style="color: rgb(126, 131, 134)">具体到软件应用类型 => 满足对软件类型的一般要求</span>

*   the specific to the application => meet the unique requirements of the current application\ <span style="color: rgb(126, 131, 134)">具体到应用 => 满足当前应用的特有要求</span>

> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%228%22%2C%22position%22%3A%7B%22pageIndex%22%3A7%2C%22rects%22%3A%5B%5B71.25%2C145.96662109374998%2C635.5652000000002%2C171.2454%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%228%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=8">In all levels, consider non-functional requirements</a></span>\ <span style="color: rgb(126, 131, 134)">在各个层次中，考虑非功能性需求</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%228%22%2C%22position%22%3A%7B%22pageIndex%22%3A7%2C%22rects%22%3A%5B%5B71.25%2C71.61702880859374%2C641.5540750000001%2C96.873075%5D%2C%5B71.25%2C27.2676025390625%2C343.36167500000005%2C63.098074999999994%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%228%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=8">If not, our application will not be used easily in the application environment</a></span>\ <span style="color: rgb(126, 131, 134)">如果没有，我们的应用程序将不容易在应用环境中使用</span>

## \<RE 核心流程概述>

> ```
> 重要性（地位）
> ```
>
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2210%22%2C%22position%22%3A%7B%22pageIndex%22%3A9%2C%22rects%22%3A%5B%5B66.825%2C377.19202880859376%2C713.8390750000001%2C402.44807499999996%5D%2C%5B66.825%2C343.4120288085938%2C159.76015000000004%2C368.668075%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2210%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=10"><strong>is the first step</strong> in finding a solution for a data processing problem</a></span>\ <span style="color: rgb(126, 131, 134)">是寻找数据处理问题解决方案的第一步</span>
>
> ```
> 目的
> ```
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2210%22%2C%22position%22%3A%7B%22pageIndex%22%3A9%2C%22rects%22%3A%5B%5B66.825%2C309.62202880859377%2C717.3151249999999%2C334.90585%5D%2C%5B66.825%2C276.5920288085938%2C215.92120000000003%2C301.403675%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2210%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=10">the results of requirements engineering is a <strong>requirements specification</strong></a></span>\ <span style="color: rgb(126, 131, 134)">需求工程的结果就是一个需求规格说明书</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2210%22%2C%22position%22%3A%7B%22pageIndex%22%3A9%2C%22rects%22%3A%5B%5B66.825%2C242.80662109374998%2C408.2368000000003%2C268.0854%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2210%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=10">requirements specification is a</a></span><span style="color: rgb(126, 131, 134)">需求规格说明书是</span>
>
>     *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2210%22%2C%22position%22%3A%7B%22pageIndex%22%3A9%2C%22rects%22%3A%5B%5B98.375%2C207.57318603515625%2C338.8412249999999%2C229.41932500000001%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2210%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=10">contract for the customer</a></span><span style="color: rgb(126, 131, 134)">面向客户的合同</span>
>
>     *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2210%22%2C%22position%22%3A%7B%22pageIndex%22%3A9%2C%22rects%22%3A%5B%5B98.375%2C173.05318603515624%2C327.93387499999983%2C194.899325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2210%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=10">starting point for design</a></span>\ <span style="color: rgb(126, 131, 134)">设计的出发点</span>
>
> <!---->
>
> ```
> 常见错误
> ```
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2211%22%2C%22position%22%3A%7B%22pageIndex%22%3A10%2C%22rects%22%3A%5B%5B66.825%2C371.19202880859376%2C518.9275250000001%2C396.44807499999996%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2211%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=11"><strong>noise:</strong> does not add relevant information</a></span>\ <span style="color: rgb(126, 131, 134)">噪音：包含了不相关的信息</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2211%22%2C%22position%22%3A%7B%22pageIndex%22%3A10%2C%22rects%22%3A%5B%5B66.825%2C330.64202880859375%2C645.9744500000002%2C355.89807499999995%5D%2C%5B66.825%2C296.87202880859377%2C209.86625000000004%2C322.12807499999997%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2211%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=11"><strong>silence:</strong> feature in the problem not mentioned in the specification</a></span>\ <span style="color: rgb(126, 131, 134)">遗漏</span><span style="color: rgb(126, 131, 134)">：问题中存在的功能特性未在规格说明书中提及</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2211%22%2C%22position%22%3A%7B%22pageIndex%22%3A10%2C%22rects%22%3A%5B%5B66.825%2C257.07202880859376%2C711.3533750000001%2C282.32807499999996%5D%2C%5B66.825%2C223.29202880859376%2C159.76015000000004%2C248.548075%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2211%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=11"><strong>over-specification:</strong> talk about the solution rather than the problem</a></span><span style="color: rgb(126, 131, 134)">过度规约：描述了解决方案的细节，而非问题本身</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2211%22%2C%22position%22%3A%7B%22pageIndex%22%3A10%2C%22rects%22%3A%5B%5B66.825%2C182.74202880859374%2C517.8642500000001%2C207.998075%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2211%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=11"><strong>contradictions:</strong> inconsistent description</a></span>\ <span style="color: rgb(126, 131, 134)">矛盾：描述存在不一致</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2211%22%2C%22position%22%3A%7B%22pageIndex%22%3A10%2C%22rects%22%3A%5B%5B66.825%2C142.19202880859373%2C285.3792%2C167.448075%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2211%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=11"><strong>ambiguity:</strong> unclear</a></span>\ <span style="color: rgb(126, 131, 134)">歧义：描述不清晰（可能导致多种解释）</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2211%22%2C%22position%22%3A%7B%22pageIndex%22%3A10%2C%22rects%22%3A%5B%5B66.825%2C102.40662109375%2C656.6138000000005%2C127.6854%5D%2C%5B66.825%2C68.61702880859374%2C187.95177500000003%2C93.873075%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2211%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=11"><strong>forward references:</strong> especially cumbersome in long documents</a></span>\ <span style="color: rgb(126, 131, 134)">前向引用：在文档中提前引用了尚未说明的内容，在长文档中尤其繁琐</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2211%22%2C%22position%22%3A%7B%22pageIndex%22%3A10%2C%22rects%22%3A%5B%5B66.825%2C28.08662109375%2C763.5448000000002%2C53.3654%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2211%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=11"><strong>wishful thinking: </strong>features that cannot realistically be realized</a></span>\ <span style="color: rgb(126, 131, 134)">理想化思维：包含了不切实际、无法实现的功能特性</span>
>
> <!---->
>
> ```
> 自然语言规范的风险
> ```
>
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2212%22%2C%22position%22%3A%7B%22pageIndex%22%3A11%2C%22rects%22%3A%5B%5B66.825%2C128.69202880859373%2C719.34445%2C153.97584999999998%5D%2C%5B66.825%2C95.64202880859375%2C713.5103250000001%2C120.898075%5D%2C%5B66.825%2C61.86702880859375%2C136.09585%2C87.123075%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2212%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=12">We should validate the documented requirements to avoid misunderstanding. It leads to the RE process</a></span>\ <span style="color: rgb(126, 131, 134)">我们应当验证已文档化的需求以避免误解。这引出了需求工程流程</span>

### 需求工程的主要步骤

1.  understanding the problem: **elicitation**<span style="color: rgb(126, 131, 134)">理解问题：获取</span>

2.  describing the problem: **specification**<span style="color: rgb(126, 131, 134)">描述问题：规约</span>

3.  agreeing upon the nature of the problem: **validation**<span style="color: rgb(126, 131, 134)">就问题的性质达成一致：验证</span>

4.  agreeing upon the boundaries of the problem: **negotiation**<span style="color: rgb(126, 131, 134)">就问题的边界达成一致：协商</span>

> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2213%22%2C%22position%22%3A%7B%22pageIndex%22%3A12%2C%22rects%22%3A%5B%5B39.8%2C152.72202880859373%2C337.8257500000002%2C177.978075%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2213%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=13">This is an iterative process</a></span>\ <span style="color: rgb(126, 131, 134)">这是一个迭代的过程</span>

### 概念建模

*   We **explicitly** model the scope of the requirements as a domain model\ <span style="color: rgb(126, 131, 134)">我们将需求的范围</span>**<span style="color: rgb(126, 131, 134)">明确地</span>**<span style="color: rgb(126, 131, 134)">建模为一个领域模型</span>

*   Making a model explicit requires solving two problems:\ <span style="color: rgb(126, 131, 134)">使模型明确化需要解决两个问题：</span>

    *   **Analysis: **to find and clear ambiguity: Because of the unspoken assumptions, different languages /terminologies being spoken, incomplete codification of the problem domain\ <span style="color: rgb(126, 131, 134)">分析：发现并消除歧义。这是因为存在未言明的假设、使用不同的语言/术语、以及问题域知识编码不完整</span>

    *   **Negotiation:** to resolve ambiguity due to stakeholders with different goals (e.g., workers against management).\ <span style="color: rgb(126, 131, 134)">协商：解决因利益相关者目标不同（例如，员工与管理层）而导致的歧义</span>

*   Having an explicit model reduces later surprises.\ <span style="color: rgb(126, 131, 134)">拥有一个明确的模型可以减少后期的意外情况</span>

## <需求分析师的立场>

> ```
> 分析世界的基本维度
> ```
>
> *   people have a set of assumptions about a topic they study\ <span style="color: rgb(126, 131, 134)">人们对所研究的主题存在一套基本假设</span>
>
> *   this set of assumptions concerns/affects:\ <span style="color: rgb(126, 131, 134)">这套假设关乎/影响着：</span>
>
>     *   how knowledge is gathered<span style="color: rgb(126, 131, 134)">知识的获取方式</span>
>
>     *   how the world (they know) is organized<span style="color: rgb(126, 131, 134)">（他们所知的）世界的组织方式</span>
>
> *   this results in two dimensions:<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)">这形成了两个维度：</span></span>
>
>     *   subjective-objective (w\.r.t. knowledge)<span style="color: rgb(126, 131, 134)">主观-客观（关于知识）</span>
>
>     *   conflict-order (w\.r.t. the world)\ <span style="color: rgb(126, 131, 134)">冲突-秩序（关于世界）</span>
>
> > which results in 4 basic positions to requirements engineering that an analyst can take\ <span style="color: rgb(126, 131, 134)">由此产生了需求工程师可以采取的四种基本立场</span>

### 四种分析立场

*   **Functional: **functional (objective+order): the analyst is the expert who empirically seeks the truth\ <span style="color: rgb(126, 131, 134)">功能主义（客观+秩序）：分析师是凭经验寻求真相的专家</span>

> *   冲突由管理层解决。
> *   管理层决定事务的运作方式。
> *   需求是清晰阐述、共享且客观的。
> *   开发是正式、理性的。
> *   政治因素无关紧要。
> *   现实是可测量的，且对每个人都相同。
> *   设计是一个技术问题。

*   **Social-relativism:** (subjective+order): the analyst is a ‘change agent’. RE is a learning process guided by the analyst\ <span style="color: rgb(126, 131, 134)">社会相对主义（主观+秩序）：分析师是"变革推动者"。需求工程是一个由分析师引导的学习过程</span>

> *   不存在唯一的真理，可能存在不同的认知。
> *   信息系统是持续变化的社会环境的一部分。
> *   系统目标源于组织塑造其自身现实。
> *   不存在客观的好坏标准。
> *   目标是为了达成共识。

*   **Radical-structuralism:** (objective+conflict) there is a struggle between classes; the analyst chooses for either party\ <span style="color: rgb(126, 131, 134)">激进结构主义（客观+冲突）：阶级之间存在斗争；分析师需选择支持其中一方（？给我干鉴证来了）</span>

> *   阶级之间存在斗争；分析师需选择支持其中一方。
> *   存在根本性的真理，但阶级之间也存在根本性的斗争。
> *   你可以选择支持管理层（机器取代人力、机器指导工作、加强监督、导致失业、工作内容变得乏味）或选择支持工人（提升劳动技能、使工作更有趣和更具挑战性）。

*   neohumanism (subjective+conflict): the analyst is kind of a social therapist, bringing parties together<span style="color: rgb(126, 131, 134)">新人文主义（主观+冲突）：分析师类似于社会治疗师，将各方聚集在一起</span>

## <需求获取>

### 需求获取活动的五种类型

*   Understanding the application domain\ <span style="color: rgb(126, 131, 134)">理解应用领域</span>

> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2221%22%2C%22position%22%3A%7B%22pageIndex%22%3A20%2C%22rects%22%3A%5B%5B71.25%2C371.19202880859376%2C613.8901750000003%2C396.44807499999996%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2221%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=21">Start from understanding the application domain</a></span>\ <span style="color: rgb(126, 131, 134)">从理解应用领域开始</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2221%22%2C%22position%22%3A%7B%22pageIndex%22%3A20%2C%22rects%22%3A%5B%5B71.25%2C290.11662109375%2C638.2588000000002%2C315.3954%5D%2C%5B71.25%2C257.07202880859376%2C731.2951000000002%2C282.32807499999996%5D%2C%5B71.25%2C223.29202880859376%2C718.7685750000005%2C248.548075%5D%2C%5B71.25%2C189.49202880859374%2C662.4964250000002%2C214.748075%5D%2C%5B71.25%2C155.72202880859373%2C222.73485%2C180.978075%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2221%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=21">The current environment of the system needs to be thoroughly explored including the political, organizational, and social aspects related to the system, in addition to any constraints they may enforce upon the system and its development.</a></span>\ <span style="color: rgb(126, 131, 134)">需要彻底探索系统的当前环境，包括与系统相关的政治、组织和社会方面，以及这些环境可能对系统及其开发施加的任何约束</span>

*   Identifying the sources of requirements\ <span style="color: rgb(126, 131, 134)">识别需求来源</span>

> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2222%22%2C%22position%22%3A%7B%22pageIndex%22%3A21%2C%22rects%22%3A%5B%5B71.25%2C371.19202880859376%2C678.3281750000003%2C396.44807499999996%5D%2C%5B71.25%2C337.40662109375%2C267.0732%2C362.6854%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2222%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=22">Requirements spread across many sources and exist in different formats.</a></span><span style="color: rgb(126, 131, 134)">需求散布在许多来源中，并以不同的格式存在</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2222%22%2C%22position%22%3A%7B%22pageIndex%22%3A21%2C%22rects%22%3A%5B%5B71.25%2C296.87202880859377%2C147.2424%2C322.12807499999997%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2222%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=22">People</a></span>
>
>     *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2222%22%2C%22position%22%3A%7B%22pageIndex%22%3A21%2C%22rects%22%3A%5B%5B107.8%2C262.38318603515626%2C700.7850500000001%2C284.22932499999996%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2222%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=22">Stakeholders: the main source of requirements for the system.</a></span>\ <span style="color: rgb(126, 131, 134)">利益相关者：系统需求的主要来源</span>
>
>     *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2222%22%2C%22position%22%3A%7B%22pageIndex%22%3A21%2C%22rects%22%3A%5B%5B107.8%2C227.85318603515626%2C665.9488%2C249.69932500000002%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2222%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=22">Users and subject matter experts: supply details and needs</a></span><span style="color: rgb(126, 131, 134)">用户和领域专家：提供细节和需求</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2222%22%2C%22position%22%3A%7B%22pageIndex%22%3A21%2C%22rects%22%3A%5B%5B71.25%2C187.24202880859374%2C148.714475%2C212.498075%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2222%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=22">Things</a></span>
>
>     *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2222%22%2C%22position%22%3A%7B%22pageIndex%22%3A21%2C%22rects%22%3A%5B%5B107.8%2C83.70318603515625%2C724.017225%2C105.54932500000001%5D%2C%5B107.8%2C55.17818603515625%2C241.5952249999999%2C77.024325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2222%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=22">provide useful information about the organization, environment, and rationales</a></span><span style="color: rgb(126, 131, 134)">提供有关组织、环境和（业务）缘由的有用信息</span>

*   Analysing the stakeholders\ <span style="color: rgb(126, 131, 134)">分析利益相关者</span>

> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2223%22%2C%22position%22%3A%7B%22pageIndex%22%3A22%2C%22rects%22%3A%5B%5B71.25%2C371.19202880859376%2C729.4897250000001%2C396.44807499999996%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2223%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=23">Stakeholders are people who have an interest in the system</a></span>\ <span style="color: rgb(126, 131, 134)">利益相关者是对系统有利益或影响的个人或团体</span>
>
>     *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2223%22%2C%22position%22%3A%7B%22pageIndex%22%3A22%2C%22rects%22%3A%5B%5B107.8%2C336.7231860351563%2C726.34765%2C358.569325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2223%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=23">Groups and individuals internal and external to the organization.</a></span>\ <span style="color: rgb(126, 131, 134)">组织内部和外部的团体与个人</span>
>
>     *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2223%22%2C%22position%22%3A%7B%22pageIndex%22%3A22%2C%22rects%22%3A%5B%5B107.8%2C302.18318603515627%2C500.58472500000005%2C324.029325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2223%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=23">Customers and direct users of the system</a></span>\ <span style="color: rgb(126, 131, 134)">系统的客户和直接用户</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2223%22%2C%22position%22%3A%7B%22pageIndex%22%3A22%2C%22rects%22%3A%5B%5B71.25%2C261.57202880859376%2C628.6942500000004%2C286.82807499999996%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2223%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=23">Analyze and involve all the relevant stakeholders.</a></span>\ <span style="color: rgb(126, 131, 134)">分析并让所有相关的利益相关者参与进来</span>
>
>     *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2223%22%2C%22position%22%3A%7B%22pageIndex%22%3A22%2C%22rects%22%3A%5B%5B107.8%2C227.10318603515626%2C695.2112500000001%2C248.94932500000002%5D%2C%5B107.8%2C197.83318603515625%2C734.5882250000003%2C219.679325%5D%2C%5B107.8%2C169.28318603515623%2C317.70642499999985%2C191.129325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2223%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=23">The process of analyzing the stakeholders also often includes identifying key user representatives and product champions (who support the software).</a></span><span style="color: rgb(126, 131, 134)">分析利益相关者的过程通常也包括识别关键用户代表和产品倡导者（支持该软件的人）</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2223%22%2C%22position%22%3A%7B%22pageIndex%22%3A22%2C%22rects%22%3A%5B%5B71.25%2C128.69202880859373%2C571.9777000000001%2C153.948075%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2223%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=23">Consult them during requirements elicitation</a></span><span style="color: rgb(126, 131, 134)">在需求获取过程中咨询他们</span>

*   Selecting the techniques, approaches, and tools to use\ <span style="color: rgb(126, 131, 134)">选择使用的技术、方法和工具</span>

> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2224%22%2C%22position%22%3A%7B%22pageIndex%22%3A23%2C%22rects%22%3A%5B%5B71.25%2C371.19202880859376%2C747.8212250000004%2C396.44807499999996%5D%2C%5B71.25%2C337.40662109375%2C190.76219999999998%2C362.6854%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2224%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=24">Requirements elicitation is best performed using a variety of techniques</a></span>\ <span style="color: rgb(126, 131, 134)">使用多种技术（例如访谈和表单分析）可以最好地执行需求获取</span>
>
>     *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2224%22%2C%22position%22%3A%7B%22pageIndex%22%3A23%2C%22rects%22%3A%5B%5B107.8%2C296.87202880859377%2C674.3822250000003%2C322.12807499999997%5D%2C%5B107.8%2C263.83662109375%2C730.8814000000002%2C289.1154%5D%2C%5B107.8%2C230.04202880859376%2C293.0037%2C255.298075%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2224%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=24">In many projects, several elicitation techniques are employed during and at different software development life cycle stages.</a></span>\ <span style="color: rgb(126, 131, 134)">在许多项目中，会在软件开发生命周期的不同阶段使用多种获取技术</span>

*   Eliciting the requirements from stakeholders and other sources\ <span style="color: rgb(126, 131, 134)">从利益相关者和其他来源获取需求</span>

> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2225%22%2C%22position%22%3A%7B%22pageIndex%22%3A24%2C%22rects%22%3A%5B%5B71.25%2C371.19202880859376%2C742.5439750000002%2C396.44807499999996%5D%2C%5B71.25%2C337.40662109375%2C386.2796000000001%2C362.6854%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2225%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=25">After the above four preparation steps, this step is the actual step to collect requirements.</a></span>\ <span style="color: rgb(126, 131, 134)">在完成上述四个准备步骤之后，此步骤是实际收集需求的步骤</span>
>
> <!---->
>
> ```
> 目标
> ```
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2225%22%2C%22position%22%3A%7B%22pageIndex%22%3A24%2C%22rects%22%3A%5B%5B107.8%2C262.38318603515626%2C425.62672499999985%2C284.22932499999996%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2225%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=25">Establish the scope of the system</a></span>\ <span style="color: rgb(126, 131, 134)">确定系统的范围</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2225%22%2C%22position%22%3A%7B%22pageIndex%22%3A24%2C%22rects%22%3A%5B%5B107.8%2C227.85318603515626%2C688.1238750000001%2C249.69932500000002%5D%2C%5B107.8%2C199.32318603515625%2C294.08984999999996%2C221.16932500000001%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2225%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=25">Investigate in detail the needs and wants of the stakeholders, especially the users</a></span>\ <span style="color: rgb(126, 131, 134)">详细调查利益相关者（尤其是用户）的需求和期望</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2225%22%2C%22position%22%3A%7B%22pageIndex%22%3A24%2C%22rects%22%3A%5B%5B107.8%2C164.02318603515624%2C688.0277750000001%2C185.869325%5D%2C%5B107.8%2C135.50318603515623%2C429.0382749999999%2C157.349325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2225%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=25">Determine the future processes the system will perform with respect to the business operations</a></span><span style="color: rgb(126, 131, 134)">确定系统将执行的、与业务运营相关的未来流程</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2225%22%2C%22position%22%3A%7B%22pageIndex%22%3A24%2C%22rects%22%3A%5B%5B107.8%2C100.97318603515625%2C663.7625250000001%2C122.81932499999999%5D%2C%5B107.8%2C72.42818603515624%2C659.2218000000003%2C94.274325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2225%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=25">Examine how the system may support to satisfy the major objectives (and address the key problems) of the business</a></span>\ <span style="color: rgb(126, 131, 134)">研究系统如何支持满足业务的主要目标（并解决关键问题）</span>

### 各项获取技术详解

![\<img alt="" data-attachment-key="GHGLEPEN" width="1258" height="553" src="attachments/GHGLEPEN.png" ztype="zimage"> | 1258](attachments/GHGLEPEN.png)

> ```
> 需求获取：访谈 “Interview”
> ```
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2227%22%2C%22position%22%3A%7B%22pageIndex%22%3A26%2C%22rects%22%3A%5B%5B71.25%2C371.19202880859376%2C562.0342500000003%2C396.44807499999996%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2227%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=27">Commonly used in requirements elicitation.</a></span><span style="color: rgb(126, 131, 134)">在需求获取中常用。</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2227%22%2C%22position%22%3A%7B%22pageIndex%22%3A26%2C%22rects%22%3A%5B%5B71.25%2C330.64202880859375%2C723.1570250000002%2C355.89807499999995%5D%2C%5B71.25%2C296.87202880859377%2C623.4447750000003%2C322.12807499999997%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2227%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=27">Ask stakeholders questions about the current application’s usage and the usage of the application to be built.</a></span><span style="color: rgb(126, 131, 134)"><br>向利益相关者提问关于当前应用程序的使用以及待构建应用程序的使用。</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2227%22%2C%22position%22%3A%7B%22pageIndex%22%3A26%2C%22rects%22%3A%5B%5B71.25%2C257.07202880859376%2C709.8805750000001%2C282.32807499999996%5D%2C%5B71.25%2C223.29202880859376%2C675.9117500000001%2C248.548075%5D%2C%5B71.25%2C189.49202880859374%2C143.3539%2C214.748075%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2227%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=27">Good at getting an overall understanding of stakeholders' needs and the current application's problem from their views.</a></span><span style="color: rgb(126, 131, 134)"><br>善于从利益相关者的视角整体理解他们的需求和当前应用程序的问题。</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2227%22%2C%22position%22%3A%7B%22pageIndex%22%3A26%2C%22rects%22%3A%5B%5B71.25%2C148.96662109374998%2C653.2708000000006%2C174.2454%5D%2C%5B71.25%2C115.17202880859375%2C607.1130750000002%2C140.428075%5D%2C%5B71.25%2C82.14202880859375%2C208.51405000000003%2C107.398075%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2227%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=27">Inherently informal, and their effectiveness depends greatly on the quality of interaction between the participants.</a></span><span style="color: rgb(126, 131, 134)"><br>本质上是非正式的，其有效性很大程度上取决于参与者之间互动的质量。</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2227%22%2C%22position%22%3A%7B%22pageIndex%22%3A26%2C%22rects%22%3A%5B%5B71.25%2C41.59202880859375%2C641.5540750000001%2C66.848075%5D%2C%5B71.25%2C7.8116210937499995%2C340.7432%2C40.22525%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2227%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=27">Interviews provide an efficient way to collect large amounts of data quickly</a></span><span style="color: rgb(126, 131, 134)"><br>访谈提供了一种快速收集大量数据的有效方式。</span>
>
> ***
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2228%22%2C%22position%22%3A%7B%22pageIndex%22%3A27%2C%22rects%22%3A%5B%5B71.25%2C371.19202880859376%2C690.2992000000002%2C396.44807499999996%5D%2C%5B71.25%2C337.40662109375%2C547.5031999999999%2C362.6854%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2228%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=28">Three types of interviews: unstructured, structured, and semi-structured (hybrid of the former two</a></span>)<span style="color: rgb(126, 131, 134)"><br>三种访谈类型：非结构化、结构化和半结构化（前两者的混合）。</span>
>
> > *   非结构化访谈
> >
> >     *   对讨论方向的控制有限。
> >     *   最适合在对领域理解有限时进行探索性使用。
> >     *   有风险：在某些方面过于详细，而在其他方面则不够详细。
> >
> > *   结构化访谈
> >
> >     *   使用预设好的问题集来收集特定信息。
> >     *   结构化访谈的成功取决于知道该问什么正确的问题、何时提问、以及由谁回答。可以使用为需求获取提供指导的结构化访谈模板，例如 Volere。
> >     *   问题可以先开放式，然后再封闭式（更具体）。
>
> ```
> 需求获取：头脑风暴会议 “Brainstorming session” 
> ```
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2230%22%2C%22position%22%3A%7B%22pageIndex%22%3A29%2C%22rects%22%3A%5B%5B71.25%2C371.19202880859376%2C373.999075%2C396.44807499999996%5D%2C%5B71.25%2C337.40662109375%2C392.45120000000003%2C362.6854%5D%2C%5B71.25%2C303.62202880859377%2C320.30842500000006%2C328.87807499999997%5D%2C%5B71.25%2C270.5920288085938%2C344.97262500000005%2C295.848075%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2230%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=30">Brainstorming is a groupbased activity by gathering a list of ideas iteratively toward a particular topic</a></span><span style="color: rgb(126, 131, 134)"><br>头脑风暴是一种基于小组的活动，通过迭代地收集关于某个特定主题的想法列表来进行。</span>
>
> <!---->
>
> ```
> 需求获取：任务分析 “Task Analysis” 
> ```
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2231%22%2C%22position%22%3A%7B%22pageIndex%22%3A30%2C%22rects%22%3A%5B%5B66.825%2C371.19202880859376%2C675.9029750000003%2C396.44807499999996%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2231%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=31">Task analysis analyzes how people perform their jobs:</a></span><span style="color: rgb(126, 131, 134)"><br>任务分析旨在分析人们如何执行他们的工作：</span>
>
>     *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2231%22%2C%22position%22%3A%7B%22pageIndex%22%3A30%2C%22rects%22%3A%5B%5B103.37%2C336.7231860351563%2C737.8222000000003%2C358.569325%5D%2C%5B103.37%2C307.43318603515627%2C187.52957499999997%2C329.279325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2231%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=31">the things they do, the things they act on, and the things they need to know.</a></span><span style="color: rgb(126, 131, 134)"><br>他们做的事情，他们操作的对象，以及他们需要知道的事情。</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2231%22%2C%22position%22%3A%7B%22pageIndex%22%3A30%2C%22rects%22%3A%5B%5B66.825%2C267.58662109375%2C729.9492%2C292.8654%5D%2C%5B66.825%2C233.79202880859376%2C625.7690999999999%2C259.048075%5D%2C%5B66.825%2C200.01202880859375%2C648.1835250000003%2C225.268075%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2231%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=31">It employs a top-down approach where high-level tasks are decomposed into subtasks and eventually detailed sequences until all actions and events are described.</a></span><span style="color: rgb(126, 131, 134)"><br>它采用自上而下的方法，将高级任务分解为子任务，并最终细化为详细的序列，直到描述所有动作和事件。</span>
>
>     *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2231%22%2C%22position%22%3A%7B%22pageIndex%22%3A30%2C%22rects%22%3A%5B%5B103.37%2C165.53318603515623%2C714.9504%2C187.379325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2231%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=31">It determines the knowledge used or required to carry tasks out.</a></span><span style="color: rgb(126, 131, 134)"><br>它确定了执行任务所使用或所需的知识。</span>
>
> <!---->
>
> ```
> 需求获取：场景分析 “Scenario-Based Analysis” 
> ```
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2232%22%2C%22position%22%3A%7B%22pageIndex%22%3A31%2C%22rects%22%3A%5B%5B66.825%2C371.19202880859376%2C736.0609250000005%2C396.44807499999996%5D%2C%5B66.825%2C337.40662109375%2C441.79140000000024%2C362.6854%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2232%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=32">Provides a more user-oriented perspective on designing and developing an interactive system.</a></span><span style="color: rgb(126, 131, 134)"><br>为交互式系统的设计和开发提供了更以用户为导向的视角。</span>
>
> <!---->
>
> ```
> 需求获取：表单分析 “Form analysis” 
> ```
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2234%22%2C%22position%22%3A%7B%22pageIndex%22%3A33%2C%22rects%22%3A%5B%5B92.65%2C353.1620288085938%2C365.65047500000014%2C378.418075%5D%2C%5B92.65%2C319.39202880859375%2C349.76317500000005%2C344.64807499999995%5D%2C%5B92.65%2C285.5920288085938%2C367.92802500000016%2C310.848075%5D%2C%5B92.65%2C252.57202880859373%2C300.407%2C277.82807499999996%5D%2C%5B92.65%2C218.78662109375%2C258.6716%2C244.0654%5D%2C%5B92.65%2C184.99202880859374%2C362.1786000000001%2C210.248075%5D%2C%5B92.65%2C151.22202880859373%2C226.164425%2C176.478075%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2234%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=34">Figure out items that are certain or have variety, and the time (past, while filling the form, or future) that the information for the item is available.</a></span><span style="color: rgb(126, 131, 134)"><br>找出表单中确定的或有变化的项目，以及项目信息可用的时间（过去、填写表单时、或未来）。</span>
>
> <!---->
>
> ```
> 需求获取：焦点小组与引导式工作坊 “Focus Group and Facilitated Workshop” 
> ```
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2235%22%2C%22position%22%3A%7B%22pageIndex%22%3A34%2C%22rects%22%3A%5B%5B71.25%2C371.19202880859376%2C690.9444500000002%2C396.44807499999996%5D%2C%5B71.25%2C337.40662109375%2C705.6738000000004%2C362.6854%5D%2C%5B71.25%2C303.62202880859377%2C266.92487500000004%2C328.87807499999997%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2235%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=35">A<strong> focus group</strong> is a small, but demographically diverse, group of people whose reactions are studied in guided or open discussions.</a></span><span style="color: rgb(126, 131, 134)"><br>焦点小组是一个小型但人口统计特征多样化的群体，在引导式或开放式讨论中研究他们的反应。</span>
>
>     *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2235%22%2C%22position%22%3A%7B%22pageIndex%22%3A34%2C%22rects%22%3A%5B%5B107.8%2C269.1531860351563%2C710.6112750000004%2C290.999325%5D%2C%5B107.8%2C240.63318603515626%2C270.8336499999999%2C262.479325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2235%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=35">people are asked about their perceptions, opinions, beliefs, and attitudes towards</a></span><span style="color: rgb(126, 131, 134)"><br>询问参与者对某事物的看法、意见、信念和态度。</span>
>
>     *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2235%22%2C%22position%22%3A%7B%22pageIndex%22%3A34%2C%22rects%22%3A%5B%5B107.8%2C206.07318603515625%2C718.9239250000002%2C227.91932500000001%5D%2C%5B107.8%2C176.80318603515624%2C170.07279999999997%2C198.649325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2235%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=35">RE Analyst records the vital points he or she is getting from the group.</a></span><span style="color: rgb(126, 131, 134)"><br>需求分析师记录从小组中获取的要点。</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2235%22%2C%22position%22%3A%7B%22pageIndex%22%3A34%2C%22rects%22%3A%5B%5B71.25%2C136.94202880859373%2C694.229225%2C162.198075%5D%2C%5B71.25%2C103.16202880859375%2C729.9341250000003%2C128.418075%5D%2C%5B71.25%2C69.36702880859374%2C553.7850750000002%2C94.623075%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2235%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=35">A <strong>facilitated workshop</strong> involves cross-functional team members to study the topic from all perspectives and make a decision as the outcome of the workshop.</a></span><span style="color: rgb(126, 131, 134)"><br>引导式工作坊涉及跨职能团队成员，从所有角度研究主题，并做出决策作为工作坊的成果。</span>
>
> <!---->
>
> ```
> 需求获取：思维导图、群组故事讲述、用户故事 “Mind mapping, group storytelling, user stories” 
> ```
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2236%22%2C%22position%22%3A%7B%22pageIndex%22%3A35%2C%22rects%22%3A%5B%5B44.575%2C389.2220288085938%2C160.53562500000004%2C414.478075%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2236%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=36">Mind map</a></span><span style="color: rgb(126, 131, 134)"><br>思维导图</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2236%22%2C%22position%22%3A%7B%22pageIndex%22%3A35%2C%22rects%22%3A%5B%5B44.575%2C227.79202880859376%2C250.66550000000004%2C253.048075%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2236%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=36">Group storytelling</a></span><span style="color: rgb(126, 131, 134)"><br>群组故事讲述</span>
>
>     *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2236%22%2C%22position%22%3A%7B%22pageIndex%22%3A35%2C%22rects%22%3A%5B%5B81.125%2C193.30318603515624%2C698.320725%2C215.149325%5D%2C%5B81.125%2C164.02318603515624%2C756.1875750000004%2C185.869325%5D%2C%5B81.125%2C135.50318603515623%2C285.2654249999999%2C157.349325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2236%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=36">Co-construct a story, share a story, complete an unfinished story provided by a facilitator, zoom-in/out or summarize a story, roleplay a story, analyze a story</a></span><span style="color: rgb(126, 131, 134)"><br>共同构建一个故事，分享一个故事，完成由引导者提供的一个未完成的故事，放大/缩小或总结一个故事，角色扮演一个故事，分析一个故事。</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2236%22%2C%22position%22%3A%7B%22pageIndex%22%3A35%2C%22rects%22%3A%5B%5B44.575%2C94.89202880859375%2C160.5634%2C120.148075%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2236%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=36">User story</a></span><span style="color: rgb(126, 131, 134)"><br>用户故事</span>

### 需求获取技术选择

*   **Interviewing:** particularly useful to gather initial background information when working on new projects in new domains.<span style="color: rgb(126, 131, 134)"><br>访谈：在新领域的新项目中工作时，对于收集初步背景信息特别有用。</span>

*   **Collaborative Sessions (focus group, workshop, brainstorming):** Effective<span style="color: rgb(126, 131, 134)"><br>协作会议（焦点小组、工作坊、头脑风暴）：有效。</span>

*   **Data Gathering from Existing Systems: **must do, but not over-analyze<span style="color: rgb(126, 131, 134)"><br>从现有系统收集数据：必须做，但不要过度分析。</span>

*   **Agile (mind mapping, group storytelling, user stories):** popular nowadays.<span style="color: rgb(126, 131, 134)"><br>敏捷方法（思维导图、群组故事讲述、用户故事）：当下流行。</span>

*   **<span style="color: rgb(255, 32, 32)">Questionnaires:</span>** Not effective<span style="color: rgb(126, 131, 134)"><br>问卷调查：没卵用。</span>

## 成熟技术的有效性

![\<img alt="" data-attachment-key="ZBL7XUSI" width="1284" height="645" src="attachments/ZBL7XUSI.png" ztype="zimage"> | 1284](attachments/ZBL7XUSI.png)

> *   **<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)">焦点小组、工作坊、头脑风暴</span></span>**<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)">：处于成熟应用阶段。</span></span>
>
> *   **<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)">思维导图</span></span>**<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)">：趋势不明/待观察？</span></span>
>
> *   **<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)">访谈、原型法、场景分析</span></span>**<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)">：显示出持续的有效性。</span></span>
>
> *   **<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)">联合应用设计、用户故事、群组故事讲述、业务流程建模</span></span>**<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)">：被认为是新兴或有效的技术。</span></span>

## <需求规范、验证与协商>

### 需求结构化

While we collect the requirements, we should structure them.<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)"><br></span></span><span style="color: rgb(126, 131, 134)">在收集需求的同时，我们应该对它们进行结构化。</span>

1.  Hierarchical structure: Higher-level requirements are decomposed into lower-level requirements**<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)"><br></span></span>**<span style="color: rgb(126, 131, 134)">层次化结构：将高层次需求分解为低层次需求。</span>

2.  Link requirements to specific stakeholders**<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)"><br></span></span>**<span style="color: rgb(126, 131, 134)">将需求与特定利益相关者关联（例如，管理层和最终用户各有其需求集）。</span>

So, while we structure the requirements, we also analyze them and their relationships.<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)"><br></span></span><span style="color: rgb(126, 131, 134)">因此，在对需求进行结构化的同时，我们也在分析需求及其相互关系。</span>

### 验证需求

*   Direct versus indirect links\ <span style="color: rgb(126, 131, 134)">直接链接与间接链接</span>

> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2242%22%2C%22position%22%3A%7B%22pageIndex%22%3A41%2C%22rects%22%3A%5B%5B66.825%2C371.19202880859376%2C702.3170000000003%2C396.44807499999996%5D%2C%5B66.825%2C337.40662109375%2C425.27820000000014%2C362.6854%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2242%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=42">Same requirements from multiple sources help us reason the validity of the requirements.</a></span><span style="color: rgb(126, 131, 134)"><br>来自多个来源的相同需求有助于我们推理需求的有效性。</span>
>
>     *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2242%22%2C%22position%22%3A%7B%22pageIndex%22%3A41%2C%22rects%22%3A%5B%5B103.37%2C302.93318603515627%2C711.8751999999998%2C324.779325%5D%2C%5B103.37%2C273.6531860351563%2C256.36119999999994%2C295.499325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2242%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=42">Lesson 1: don’t rely too much on indirect links (intermediaries, surrogate users)</a></span><span style="color: rgb(126, 131, 134)"><br>经验教训 1：不要过于依赖间接链接（中间人、代理用户）。</span>
>
>     *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2242%22%2C%22position%22%3A%7B%22pageIndex%22%3A41%2C%22rects%22%3A%5B%5B103.37%2C239.10318603515626%2C629.157125%2C260.949325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2242%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=42">Lesson 2: The more links, the better (but up to a point)</a></span><span style="color: rgb(126, 131, 134)"><br>经验教训 2：链接越多越好（但有一定限度）。</span>

*   Things to look at\ <span style="color: rgb(126, 131, 134)">需要关注的事项</span>

> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2243%22%2C%22position%22%3A%7B%22pageIndex%22%3A42%2C%22rects%22%3A%5B%5B73.85%2C371.19202880859376%2C619.983025%2C396.44807499999996%5D%2C%5B66.825%2C337.40662109375%2C622.8528000000005%2C362.6854%5D%2C%5B66.825%2C303.62202880859377%2C365.156275%2C328.87807499999997%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2243%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=43">Inspection of the requirement specification w.r.t. correctness, completeness, consistency, accuracy, readability, and testability.</a></span><span style="color: rgb(126, 131, 134)"><br>对需求规格说明书进行检查，关注其正确性、完整性、一致性、准确性、可读性和可测试性。</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2243%22%2C%22position%22%3A%7B%22pageIndex%22%3A42%2C%22rects%22%3A%5B%5B66.825%2C223.29202880859376%2C566.3028250000002%2C248.548075%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2243%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=43">“some aids at different stages of development</a></span><span style="color: rgb(126, 131, 134)"><br>在开发的不同阶段可以使用的一些辅助手段：</span>
>
>     *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2243%22%2C%22position%22%3A%7B%22pageIndex%22%3A42%2C%22rects%22%3A%5B%5B98.375%2C188.05318603515624%2C540.5070749999998%2C209.899325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2243%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=43">Early structured walkthroughs with customers</a></span><span style="color: rgb(126, 131, 134)"><br>早期与客户进行结构化走查</span>
>
>     *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2243%22%2C%22position%22%3A%7B%22pageIndex%22%3A42%2C%22rects%22%3A%5B%5B98.375%2C153.53318603515623%2C374.6624999999998%2C175.379325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2243%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=43">Prototypes of initial versions</a></span><span style="color: rgb(126, 131, 134)"><br>初始版本的原型</span>
>
>     *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2243%22%2C%22position%22%3A%7B%22pageIndex%22%3A42%2C%22rects%22%3A%5B%5B98.375%2C118.97318603515625%2C540.2908499999998%2C140.819325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2243%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=43">Test plan or unit testing in Agile development</a></span><span style="color: rgb(126, 131, 134)"><br>敏捷开发中的测试计划或单元测试</span>
>
>     *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFY78QT9X%22%2C%22pageLabel%22%3A%2243%22%2C%22position%22%3A%7B%22pageIndex%22%3A42%2C%22rects%22%3A%5B%5B98.375%2C84.45318603515625%2C467.47107499999987%2C106.29932500000001%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2243%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FY78QT9X?page=43">User acceptance testing when delivery</a></span><span style="color: rgb(126, 131, 134)"><br>交付时的用户验收测试</span>

### **<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)">协商需求：确定需求优先级</span></span>**

*   Apart from negotiating requirements during requirement elicitation, we should also negotiate requirements with stakeholders when prioritizing them.<span style="color: rgb(126, 131, 134)"><br>除了在需求获取期间进行协商外，我们还应在确定需求优先级时与利益相关者进行协商。</span>

*   E.g., label a requirement item as “high”, “medium”, or “low” priority,<span style="color: rgb(126, 131, 134)"><br>例如，将需求项标记为"高"、"中"或"低"优先级。</span>

*   E.g., Classify it using the MoSCoW Method<span style="color: rgb(126, 131, 134)"><br>例如，使用 MoSCoW 方法 对其进行分类：</span>> *   **<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)">必须有</span></span>**<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)">：强制性的需求</span></span>
    >
    > <!---->
    >
    > *   **<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)">应该有</span></span>**<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)">：重要但非强制性的需求</span></span>
    >
    > *   **<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)">可以有</span></span>**<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)">：如果时间允许则实现的需求</span></span>
    >
    > *   **<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)">这次不会有</span></span>**<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)">：本次不做（可能未来会做）</span></span>
