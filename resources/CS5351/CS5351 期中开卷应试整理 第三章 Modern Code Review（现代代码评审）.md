# CS5351 期中开卷应试整理 第三章 Modern Code Review（现代代码评审）

## <**<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)">代码评审基础</span></span>**>

### 定义

*   Performing human inspection on the source code by developers other than the author of the code.<span style="color: rgb(126, 131, 134)">由代码作者以外的开发人员对源代码进行人工检查。</span>

*   is a well-established software engineering practice<span style="color: rgb(126, 131, 134)">是一种完善的软件工程实践‧旨在维护和提升源代码质量</span>

### 目的

*   aim at ***maintaining and promoting*** source ***code quality***, as well as ***sustaining*** development ***community*** by means of knowledge transfer of design and implementation solutions applied by others<span style="color: rgb(126, 131, 134)">旨在</span>**<span style="color: rgb(126, 131, 134)">维护和提升源代码质量</span>**<span style="color: rgb(126, 131, 134)">, 并通过他人应用的设计和实施解决方案的知识转移来</span>**<span style="color: rgb(126, 131, 134)">维持开发社区</span>**

## <**<span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)">传统代码评审方法</span></span>**>

### 代码走查

*   informal meeting where the programmer leads the review team through his/her code, and the reviewers try to identify faults<span style="color: rgb(126, 131, 134)">在非正式会面中，程序员通过他/她的代码领导评审小组，评审人员试图识别错误。</span>

*   More effective if the programmer and reviewer are not the same person<span style="color: rgb(126, 131, 134)">如果程序员和评审员不是同一个人，则更有效。</span>

*   Sometimes, integrate with Pair Programming<span style="color: rgb(126, 131, 134)">有时与结对编程集成。</span>

> \- <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FTVAUHFZ8%22%2C%22pageLabel%22%3A%227%22%2C%22position%22%3A%7B%22pageIndex%22%3A6%2C%22rects%22%3A%5B%5B107.8%2C346.5343432617188%2C508.454275%2C364.970575%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%227%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/TVAUHFZ8?page=7">Similar to testing in effectiveness for finding bugs</a></span>. <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FTVAUHFZ8%22%2C%22pageLabel%22%3A%227%22%2C%22position%22%3A%7B%22pageIndex%22%3A6%2C%22rects%22%3A%5B%5B107.8%2C318.01434326171875%2C673.8171750000004%2C336.45057499999996%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%227%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/TVAUHFZ8?page=7">But code walkthrough requires more human effort. Thus, less effective</a></span>\ <span style="color: rgb(126, 131, 134)">- </span><span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FHZ7XFGJ4%22%2C%22pageLabel%22%3A%227%22%2C%22position%22%3A%7B%22pageIndex%22%3A6%2C%22rects%22%3A%5B%5B81.260101%2C344.25479645135755%2C340.0980059752396%2C360.85081698142966%5D%2C%5B81.260101%2C315.73477645135756%2C364.9885159752396%2C332.33079698142967%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%227%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/HZ7XFGJ4?page=7"><span style="color: rgb(126, 131, 134)">与测试在查找 bug 方面的有效性类似，但代码走查需要更多人力。因此,效率较低</span></a></span><span style="color: rgb(126, 131, 134)">。</span>

### <span style="color: rgb(15, 17, 21)"><span style="background-color: rgb(255, 255, 255)">代码审查</span></span>

*   Is a highly-structured formal process of review<span style="color: rgb(126, 131, 134)">是一个高度结构化的正式审查流程</span>

*   Effective to find bugs in code.<span style="color: rgb(126, 131, 134)">有效的发现代码中的缺陷。</span>

*   <span style="color: rgb(255, 32, 32)">Home Reading</span><span style="color: rgb(126, 131, 134)">居家阅读</span>

> ```
> 描述
> ```
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FTVAUHFZ8%22%2C%22pageLabel%22%3A%229%22%2C%22position%22%3A%7B%22pageIndex%22%3A8%2C%22rects%22%3A%5B%5B107.8%2C363.81434326171876%2C489.4788%2C382.25057499999997%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%229%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/TVAUHFZ8?page=9">Sometimes called as static testing in companies</a></span>\ <span style="color: rgb(126, 131, 134)">有时在公司中被称为静态测试</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FTVAUHFZ8%22%2C%22pageLabel%22%3A%229%22%2C%22position%22%3A%7B%22pageIndex%22%3A8%2C%22rects%22%3A%5B%5B107.8%2C334.5197509765625%2C588.5147499999999%2C352.93325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%229%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/TVAUHFZ8?page=9">Effective to find bugs and spot further process improvemen</a></span>t<span style="color: rgb(126, 131, 134)">有效发现错误并发现进一步的流程改进</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FTVAUHFZ8%22%2C%22pageLabel%22%3A%229%22%2C%22position%22%3A%7B%22pageIndex%22%3A8%2C%22rects%22%3A%5B%5B107.8%2C305.99434326171877%2C279.48869999999994%2C324.430575%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%229%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/TVAUHFZ8?page=9">Decreasingly popular</a></span><span style="color: rgb(126, 131, 134)">过气了</span>
>
> <!---->
>
> ```
> 核心思想
> ```
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FTVAUHFZ8%22%2C%22pageLabel%22%3A%229%22%2C%22position%22%3A%7B%22pageIndex%22%3A8%2C%22rects%22%3A%5B%5B107.8%2C248.19434326171876%2C742.1685000000009%2C266.630575%5D%2C%5B107.8%2C224.16434326171876%2C271.82475%2C242.60057500000002%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%229%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/TVAUHFZ8?page=9">Pre-meeting: Authors educate reviewers, and reviewers read/question the code from a testing angle.</a></span>\ <span style="color: rgb(126, 131, 134)">会前：作者对审阅者进行培训，审阅者从测试角度阅读/质疑代码</span>
>
> *   In-meeting: Walk through the code (by code author) with reviewers and check against checklists. Answer questions and resolve ambiguity. Each reviewer has a predefined role assigned pre-meeting. <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FTVAUHFZ8%22%2C%22pageLabel%22%3A%229%22%2C%22position%22%3A%7B%22pageIndex%22%3A8%2C%22rects%22%3A%5B%5B139.33%2C124.53773193359375%2C437.7141249999999%2C138.629675%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%229%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/TVAUHFZ8?page=9">Reviewers “execute” the code in their heads</a></span>\ <span style="color: rgb(126, 131, 134)">会中：作者与审阅者一起（由代码作者）审阅代码，并对照清单进行检查。解答问题并解决歧义。每位审阅者在会前都会被分配一个预先设定的角色，审查人员在脑海里"执行"他们的代码。</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FTVAUHFZ8%22%2C%22pageLabel%22%3A%229%22%2C%22position%22%3A%7B%22pageIndex%22%3A8%2C%22rects%22%3A%5B%5B107.8%2C95.76434326171875%2C692.484825%2C114.200575%5D%2C%5B107.8%2C71.73934326171874%2C609.9306500000005%2C90.175575%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%229%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/TVAUHFZ8?page=9">Post-meeting: Authors follow up and correct code. The moderator of the meeting verifies the required corrective actions taken properly.</a></span><span style="color: rgb(126, 131, 134)">会后：作者跟进并修正代码。会议主持人核实所需采取的纠正措施是否得当。</span>
>
> <!---->
>
> ```
> 特点
> ```
>
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FTVAUHFZ8%22%2C%22pageLabel%22%3A%229%22%2C%22position%22%3A%7B%22pageIndex%22%3A8%2C%22rects%22%3A%5B%5B107.8%2C13.93934326171875%2C724.2335750000001%2C40.22525%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%229%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/TVAUHFZ8?page=9">Formal, synchronous, check code, tool support is secondary, heavy-weighted</a></span>\
> <span style="color: rgb(126, 131, 134)">形式化、同步、校验代码、工具支持是次要的、重量级的</span>
>
> ```
> 检查事项
> ```
>
> *   Efficiency of algorithm<span style="color: rgb(126, 131, 134)">算法效率</span>
>
> *   Logics and correctness of code\ <span style="color: rgb(126, 131, 134)">代码的逻辑性和正确性</span>
>
> *   Comments and consistency with code\ <span style="color: rgb(126, 131, 134)">注释及与代码的一致性</span>

## <span style="color: rgb(255, 32, 32)">&#x3C;MCR >【重要】</span>

*   MCR is a lightweight and tool-based code review of ***code change*** (not the whole piece of code!) <span style="color: rgb(126, 131, 134)">MCR 是一个轻量级的、基于工具的代码变更审查（不是整段代码！）</span>

    *   is the norm for many software development projects<span style="color: rgb(126, 131, 134)">是许多软件开发项目的常态</span>

*   Authors and reviewers exchange ideas, find bugs, and discuss alternative solutions to better design the structure of a submitted code change.\ <span style="color: rgb(126, 131, 134)">作者和审阅人交流思想，发现bug，并讨论替代方案，以更好地设计提交代码变更的结构。</span>

> ```
> MCR 特点
> ```
>
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FTVAUHFZ8%22%2C%22pageLabel%22%3A%2214%22%2C%22position%22%3A%7B%22pageIndex%22%3A13%2C%22rects%22%3A%5B%5B107.8%2C272.9643432617188%2C722.1011750000009%2C291.400575%5D%2C%5B107.8%2C248.94434326171876%2C463.5046%2C267.380575%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2214%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/TVAUHFZ8?page=14">Informal</a></span>\ <span style="color: rgb(126, 131, 134)">非正式</span>
>
> > <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FTVAUHFZ8%22%2C%22pageLabel%22%3A%2220%22%2C%22position%22%3A%7B%22pageIndex%22%3A19%2C%22rects%22%3A%5B%5B107.8%2C336.7231860351563%2C687.4511750000001%2C358.569325%5D%2C%5B107.8%2C307.43318603515627%2C594.4984499999999%2C329.279325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2220%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/TVAUHFZ8?page=20">Ad hoc group of reviewers without predefined roles, and the review process does not follow a formal procedure</a></span>\
> > <span style="color: rgb(126, 131, 134)">临时评审小组没有预先定义的角色,评审过程不遵循正式的程序</span>
>
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FTVAUHFZ8%22%2C%22pageLabel%22%3A%2214%22%2C%22position%22%3A%7B%22pageIndex%22%3A13%2C%22rects%22%3A%5B%5B107.8%2C272.9643432617188%2C722.1011750000009%2C291.400575%5D%2C%5B107.8%2C248.94434326171876%2C463.5046%2C267.380575%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2214%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/TVAUHFZ8?page=14">tool-based logistics</a></span>\ <span style="color: rgb(126, 131, 134)">工具型物流</span>
>
> > *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FTVAUHFZ8%22%2C%22pageLabel%22%3A%2220%22%2C%22position%22%3A%7B%22pageIndex%22%3A19%2C%22rects%22%3A%5B%5B107.8%2C232.35318603515626%2C490.18189999999987%2C254.19932500000002%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2220%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/TVAUHFZ8?page=20">Email, WhatsApp, WeChat are popular.</a></span>
> > *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FTVAUHFZ8%22%2C%22pageLabel%22%3A%2220%22%2C%22position%22%3A%7B%22pageIndex%22%3A19%2C%22rects%22%3A%5B%5B107.8%2C197.83318603515625%2C674.13625%2C219.679325%5D%2C%5B107.8%2C169.28318603515623%2C218.45915%2C191.129325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2220%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/TVAUHFZ8?page=20">Open-source tools: GitHub, Gerrit (for Git), ReviewBoard, Phabricator</a></span>
>
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FTVAUHFZ8%22%2C%22pageLabel%22%3A%2214%22%2C%22position%22%3A%7B%22pageIndex%22%3A13%2C%22rects%22%3A%5B%5B107.8%2C272.9643432617188%2C722.1011750000009%2C291.400575%5D%2C%5B107.8%2C248.94434326171876%2C463.5046%2C267.380575%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2214%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/TVAUHFZ8?page=14">asynchronous</a></span>\ <span style="color: rgb(126, 131, 134)">异步</span>
>
> > <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FTVAUHFZ8%22%2C%22pageLabel%22%3A%2220%22%2C%22position%22%3A%7B%22pageIndex%22%3A19%2C%22rects%22%3A%5B%5B107.8%2C94.20318603515625%2C646.921%2C116.04932500000001%5D%2C%5B107.8%2C65.67818603515624%2C543.9258249999997%2C87.524325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2220%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/TVAUHFZ8?page=20">Authors and reviewers need not engage in the same task simultaneously (but not extensively delayed)</a></span>\
> > 作者和审稿人不需要同时从事同一项任务(但不会延迟很长时间)
>
> f<span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FTVAUHFZ8%22%2C%22pageLabel%22%3A%2214%22%2C%22position%22%3A%7B%22pageIndex%22%3A13%2C%22rects%22%3A%5B%5B107.8%2C272.9643432617188%2C722.1011750000009%2C291.400575%5D%2C%5B107.8%2C248.94434326171876%2C463.5046%2C267.380575%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2214%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/TVAUHFZ8?page=14">ocused on reviewing code changes</a></span>\ <span style="color: rgb(126, 131, 134)">聚焦于代码变更</span>
>
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FTVAUHFZ8%22%2C%22pageLabel%22%3A%2214%22%2C%22position%22%3A%7B%22pageIndex%22%3A13%2C%22rects%22%3A%5B%5B107.8%2C272.9643432617188%2C722.1011750000009%2C291.400575%5D%2C%5B107.8%2C248.94434326171876%2C463.5046%2C267.380575%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2214%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/TVAUHFZ8?page=14">lighter weight than code inspection</a></span>\ <span style="color: rgb(126, 131, 134)">比代码检查更轻量</span>
>
> ```
> 核心思想
> ```
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FTVAUHFZ8%22%2C%22pageLabel%22%3A%2214%22%2C%22position%22%3A%7B%22pageIndex%22%3A13%2C%22rects%22%3A%5B%5B107.8%2C185.11434326171874%2C763.2974500000005%2C203.550575%5D%2C%5B107.8%2C161.09434326171873%2C766.6217250000002%2C179.530575%5D%2C%5B107.8%2C137.06434326171873%2C225.703425%2C155.500575%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2214%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/TVAUHFZ8?page=14">Author <span style="color: rgb(255, 32, 32)">A</span> makes a patch<span style="color: rgb(255, 32, 32)"> P</span> on a code block <span style="color: rgb(78, 179, 28)">C</span> to address some problems and sends the patch<span style="color: rgb(255, 32, 32)"> P</span> via e-channel (e.g., email, WhatsApp, Wechat, or GitHub tool) to a set of reviewers <span style="color: rgb(5, 162, 239)">R</span></a></span><span style="color: rgb(5, 162, 239)"><br></span><span style="color: rgb(126, 131, 134)">作者 A 在代码块 C 上制作补丁 P 来解决一些问题,并通过电子渠道将补丁P发送给一组审阅者 R</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FTVAUHFZ8%22%2C%22pageLabel%22%3A%2214%22%2C%22position%22%3A%7B%22pageIndex%22%3A13%2C%22rects%22%3A%5B%5B107.8%2C108.53434326171875%2C604.9229%2C126.970575%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2214%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/TVAUHFZ8?page=14">Each reviewer <span style="color: rgb(5, 162, 239)">R </span>evaluates<span style="color: rgb(255, 32, 32)"> P</span>: either deems<span style="color: rgb(255, 32, 32)"> P</span> good or rejects<span style="color: rgb(255, 32, 32)"> P</span></a></span>\ <span style="color: rgb(126, 131, 134)">每个审阅者 R 评估 P：要么认为 P 好,要么拒绝 P</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FTVAUHFZ8%22%2C%22pageLabel%22%3A%2214%22%2C%22position%22%3A%7B%22pageIndex%22%3A13%2C%22rects%22%3A%5B%5B107.8%2C79.26434326171875%2C632.7934250000003%2C97.700575%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2214%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/TVAUHFZ8?page=14">Author<span style="color: rgb(255, 32, 32)"> A</span> commits <span style="color: rgb(255, 32, 32)">P</span>; post-commit reviewer by other <span style="color: rgb(5, 162, 239)">R</span>s possible.</a></span>\ <span style="color: rgb(126, 131, 134)">作者 A 提交 P；其他 R 可能担任提交后的审阅者</span>

## \<MCR 的深入分析>【非重点】

> 这部分主要目的是防一下原题

### 目的

![\<img alt="" data-attachment-key="NP2JFU5U" width="1268" height="541" src="attachments/NP2JFU5U.png" ztype="zimage"> | 1268](attachments/NP2JFU5U.png)

### 理解代码的意义（Outcomes）

![\<img alt="" data-attachment-key="LM7I9YXF" width="1256" height="472" src="attachments/LM7I9YXF.png" ztype="zimage"> | 1256](attachments/LM7I9YXF.png)

### 应对问题的策略

![\<img alt="" data-attachment-key="ZZ9WV2HM" width="1270" height="599" src="attachments/ZZ9WV2HM.png" ztype="zimage"> | 1270](attachments/ZZ9WV2HM.png)

### 审阅者需要哪些信息？

![\<img alt="" data-attachment-key="NH6RQ9A2" width="1267" height="698" src="attachments/NH6RQ9A2.png" ztype="zimage"> | 1267](attachments/NH6RQ9A2.png)

### 特定场景的评审

How about a review patch is for code refactoring?\ <span style="color: rgb(126, 131, 134)">审查补丁是否适合代码重构？</span>

> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FTVAUHFZ8%22%2C%22pageLabel%22%3A%2225%22%2C%22position%22%3A%7B%22pageIndex%22%3A24%2C%22rects%22%3A%5B%5B71.25%2C375.75318603515626%2C359.3324999999999%2C397.59932499999996%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2225%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/TVAUHFZ8?page=25">Industrial case study in Xerox</a></span>\ <span style="color: rgb(126, 131, 134)">施乐公司工业案例研究</span>
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FTVAUHFZ8%22%2C%22pageLabel%22%3A%2225%22%2C%22position%22%3A%7B%22pageIndex%22%3A24%2C%22rects%22%3A%5B%5B71.25%2C341.2231860351563%2C685.833525%2C363.069325%5D%2C%5B71.25%2C312.70318603515625%2C734.7244000000002%2C334.54932499999995%5D%2C%5B71.25%2C283.4031860351563%2C726.9162749999998%2C305.249325%5D%2C%5B71.25%2C254.88318603515623%2C256.6028749999999%2C276.72932499999996%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2225%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/TVAUHFZ8?page=25">“coping with poor design and coding style is the main driver for developers to apply refactoring in their code changes. Yet, functional changes and bug fixing activities often trigger developers to refactor their code as well.”</a></span>\ <span style="color: rgb(126, 131, 134)">应对不良的设计和编码风格是开发人员在其代码变更中应用重构的主要驱动力。然而，功能更改和bug修复活动往往也会触发开发人员重构他们的代码。</span>

How about Knowledge Transfer?\ <span style="color: rgb(126, 131, 134)">审查补丁是否适合知识转移？</span>

> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FTVAUHFZ8%22%2C%22pageLabel%22%3A%2226%22%2C%22position%22%3A%7B%22pageIndex%22%3A25%2C%22rects%22%3A%5B%5B71.25%2C366.46864013671876%2C731.8224250000001%2C395.816575%5D%2C%5B71.25%2C328.16864013671875%2C434.15009999999995%2C357.516575%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2226%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/TVAUHFZ8?page=26">Does conducting more rounds of MCR improve the code quality of a developer?</a></span>\ <span style="color: rgb(126, 131, 134)">进行更多轮的MCR是否提高了开发人员的代码质量</span>
>
>     *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FTVAUHFZ8%22%2C%22pageLabel%22%3A%2226%22%2C%22position%22%3A%7B%22pageIndex%22%3A25%2C%22rects%22%3A%5B%5B107.8%2C287.86662109375%2C701.8026000000001%2C313.1454%5D%2C%5B107.8%2C254.07202880859373%2C576.1142750000002%2C279.32807499999996%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2226%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/TVAUHFZ8?page=26">Unfortunately, there is no evident yet both within the same project and across multiple projects.</a></span>\ <span style="color: rgb(126, 131, 134)">不幸的是，目前还没有证据证明以上观点，无论是在同一个项目内还是跨多个项目</span>

## \<MCR 的最佳实践>

*   Contemporary peer review follows a lightweight, flexible process\ <span style="color: rgb(126, 131, 134)">当代 peer review 遵循轻量、灵活的流程</span>

*   Reviews happen early (before a change is committed), in time, and frequently<span style="color: rgb(126, 131, 134)">评审应及早进行(在提交变更之前)，并及时、频繁进行</span>

*   Reviewers have a prior knowledge of the context and the code complete reviews quicker and provide more valuable feedback to the authors\ <span style="color: rgb(126, 131, 134)">审阅者对上下文和代码有预先了解,可以更快地完成审阅,并向作者提供更有价值的反馈</span>

*   Change sizes are small\ <span style="color: rgb(126, 131, 134)">更改规模要小</span>

*   Small numbers of reviewers (1 to 5 reviewers)\ <span style="color: rgb(126, 131, 134)">审阅者数量较少(1 至 5 名审阅者)</span>

*   Read informal posts and comments on the code and patch\ <span style="color: rgb(126, 131, 134)">阅读关于代码和补丁的非正式帖子和评论</span>

*   Review is not just to find bugs at group-level: problem solving (solution development), code readability and maintainability, following the norm (of the belonging company), accidence prevention, gate-keeping (recall the role of moderator in code inspection?)\ <span style="color: rgb(126, 131, 134)">Review 不仅仅是在小组层面发现 Bug：解决问题(解决方案制定)、代码可读性和可维护性、遵循规范(所属公司)、预防事故、把关(还记得代码审查中主持人的作用吗?)</span>

*   Reviewer candidates?\ <span style="color: rgb(126, 131, 134)">审查候选人</span>

    *   Code owner; Developers who made previous changes on the code; Developers who develop the code before (e.g., in producing the code through pair programming); Experienced reviewers; Developers who develop similar features of the changed fragments in some other code

### Google 的例子（防原题）

*   The above diagram shows the relationships between Developer (i.e., Author) and Reviewers in a code project in Google\ <span style="color: rgb(126, 131, 134)">上述关系图展示了Google代码项目中Developer (即作者)和Reviewers之间的关系。</span>

![\<img alt="" data-attachment-key="UXCAJIGQ" width="1280" height="485" src="attachments/UXCAJIGQ.png" ztype="zimage"> | 1280](attachments/UXCAJIGQ.png)

*   Suggesting Reviewers: ask persons who can serve as reviewers in turn and in round-robin manner.\ <span style="color: rgb(126, 131, 134)">推荐审查者：轮流、循环询问可以担任审查者的人</span>

*   Perform code analysis to supplement human reviewers\ <span style="color: rgb(126, 131, 134)">执行代码分析以补充人工审核</span>

*   Review frequency: 4 hours of review (and 4 review) per week (median)\ <span style="color: rgb(126, 131, 134)">审查频率:每次审查 4 小时(4 次审查)(中位数)</span>

*   Review speed: authors waits for 1-5 hours\ <span style="color: rgb(126, 131, 134)">审核速度:作者等待 1‐5 小时</span>

*   Changed code size: 1 line of code (\~10%), one file (\~30%), fewer than 10 files (\~90%).\ <span style="color: rgb(126, 131, 134)">更改的代码大 小:1 行代码(~10%)、1 个文件(~30%)、少于 10 个文件 (~90%)</span>

## \<MCR 的问题>

*   Review Quality and Code Size\ <span style="color: rgb(126, 131, 134)">审查质量和代码大小</span>

    *   Reviews on code with higher complexity get fewer discussions and feedback\ <span style="color: rgb(126, 131, 134)">对复杂度较高的代码的审查得到的讨论和反馈较少</span>

    *   Code with fewer review feedback will encounter more post-release bugs\ <span style="color: rgb(126, 131, 134)">审查反馈较少的代码在发布后会遇到更多错误</span>

*   Distance\ <span style="color: rgb(126, 131, 134)">距离</span>

    *   Causing delay in the review process or leading to misunderstanding<span style="color: rgb(126, 131, 134)">导致审核过程延迟或引起误解</span>

    > **两个方面：**
    >
    > *   Large physical distance between authors and reviewers\ <span style="color: rgb(126, 131, 134)">作者与审阅人之间的物理距离较大（地理方面）</span>
    >
    > *   Reviewers from different teams or taking different roles<span style="color: rgb(126, 131, 134)">审阅人来自不同的团队或承担不同的角色</span>

*   Social Interaction\ <span style="color: rgb(126, 131, 134)">社交互动</span>

    *   Tone: comments with negative tones are less useful\ <span style="color: rgb(126, 131, 134)">语气：带有负面语气的评论不太有用</span>

    *   Power: ask another person to change their comments. Authors unhappy<span style="color: rgb(126, 131, 134)">权力：要求别人改变自己的评论。作者不高兴</span>

*   Context\ <span style="color: rgb(126, 131, 134)">上下文</span>

    *   Misunderstanding due to mismatched expectations on the code change\ <span style="color: rgb(126, 131, 134)">由于对代码变更的期望不一致而产生的误解</span>

### Should We Review Test Code too?

*   The simple answer is “yes”, but on different focuses and less often (and review with the production code)\ <span style="color: rgb(126, 131, 134)">简单的回答是"是"，但侧重点不同，较少出现(并结合生产代码进行审查)</span>
