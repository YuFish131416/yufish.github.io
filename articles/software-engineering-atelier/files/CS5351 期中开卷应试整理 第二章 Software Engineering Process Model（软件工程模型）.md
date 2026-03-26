# CS5351 期中开卷应试整理 第二章 Software Engineering Process Model（软件工程模型）

## <定义>

*   A **<span style="color: rgb(255, 32, 32)">software engineering process model</span>** is a set of ：(1) activities,(2) techniques,(3) deliverables(4) toolsso that <span style="color: rgb(121, 83, 227)">software engineers</span> and <span style="color: rgb(121, 83, 227)">project managers</span> follow the(5) **<span style="color: rgb(255, 32, 32)">best practices</span>** (e.g., pair programming, agile methods) to use the items (1)−(4) to manage software systems

*   **<span style="color: rgb(255, 32, 32)">软件工程过程模型</span>**是一组（1）活动、（2） 技术、（3）可交付成果和（4）工具，以便<span style="color: rgb(121, 83, 227)">软件工程师</span>和<span style="color: rgb(121, 83, 227)">项目经理</span>遵循（5）**<span style="color: rgb(255, 32, 32)">最佳实践</span>**（例 如结对编程、敏捷方法）使用项目（1）‑（4） 来管理软件系统

> ```
> Activities
> ```
>
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2215%22%2C%22position%22%3A%7B%22pageIndex%22%3A14%2C%22rects%22%3A%5B%5B312.65%2C435.81611328125%2C488.9196999999999%2C476.2499%5D%2C%5B39.8%2C375.75318603515626%2C348.13812499999995%2C397.59932499999996%5D%2C%5B39.8%2C341.2231860351563%2C258.8131749999999%2C363.069325%5D%2C%5B39.8%2C306.68318603515627%2C299.8238499999999%2C328.529325%5D%2C%5B39.8%2C272.1531860351563%2C143.2289%2C293.999325%5D%2C%5B39.8%2C237.60318603515626%2C414.18284999999986%2C259.449325%5D%2C%5B39.8%2C203.07318603515625%2C246.03187499999999%2C224.91932500000001%5D%2C%5B39.8%2C168.52318603515624%2C336.6301499999999%2C190.369325%5D%2C%5B39.8%2C134.00318603515623%2C270.5614%2C155.849325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2215%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=15">◆ Collecting user requirements</a></span>（收集用户需求）
>
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2215%22%2C%22position%22%3A%7B%22pageIndex%22%3A14%2C%22rects%22%3A%5B%5B312.65%2C435.81611328125%2C488.9196999999999%2C476.2499%5D%2C%5B39.8%2C375.75318603515626%2C348.13812499999995%2C397.59932499999996%5D%2C%5B39.8%2C341.2231860351563%2C258.8131749999999%2C363.069325%5D%2C%5B39.8%2C306.68318603515627%2C299.8238499999999%2C328.529325%5D%2C%5B39.8%2C272.1531860351563%2C143.2289%2C293.999325%5D%2C%5B39.8%2C237.60318603515626%2C414.18284999999986%2C259.449325%5D%2C%5B39.8%2C203.07318603515625%2C246.03187499999999%2C224.91932500000001%5D%2C%5B39.8%2C168.52318603515624%2C336.6301499999999%2C190.369325%5D%2C%5B39.8%2C134.00318603515623%2C270.5614%2C155.849325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2215%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=15">◆ Designing software</a></span>（设计软件）
>
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2215%22%2C%22position%22%3A%7B%22pageIndex%22%3A14%2C%22rects%22%3A%5B%5B312.65%2C435.81611328125%2C488.9196999999999%2C476.2499%5D%2C%5B39.8%2C375.75318603515626%2C348.13812499999995%2C397.59932499999996%5D%2C%5B39.8%2C341.2231860351563%2C258.8131749999999%2C363.069325%5D%2C%5B39.8%2C306.68318603515627%2C299.8238499999999%2C328.529325%5D%2C%5B39.8%2C272.1531860351563%2C143.2289%2C293.999325%5D%2C%5B39.8%2C237.60318603515626%2C414.18284999999986%2C259.449325%5D%2C%5B39.8%2C203.07318603515625%2C246.03187499999999%2C224.91932500000001%5D%2C%5B39.8%2C168.52318603515624%2C336.6301499999999%2C190.369325%5D%2C%5B39.8%2C134.00318603515623%2C270.5614%2C155.849325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2215%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=15">◆ Coding/Implementation</a></span>（编码/实施）
>
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2215%22%2C%22position%22%3A%7B%22pageIndex%22%3A14%2C%22rects%22%3A%5B%5B312.65%2C435.81611328125%2C488.9196999999999%2C476.2499%5D%2C%5B39.8%2C375.75318603515626%2C348.13812499999995%2C397.59932499999996%5D%2C%5B39.8%2C341.2231860351563%2C258.8131749999999%2C363.069325%5D%2C%5B39.8%2C306.68318603515627%2C299.8238499999999%2C328.529325%5D%2C%5B39.8%2C272.1531860351563%2C143.2289%2C293.999325%5D%2C%5B39.8%2C237.60318603515626%2C414.18284999999986%2C259.449325%5D%2C%5B39.8%2C203.07318603515625%2C246.03187499999999%2C224.91932500000001%5D%2C%5B39.8%2C168.52318603515624%2C336.6301499999999%2C190.369325%5D%2C%5B39.8%2C134.00318603515623%2C270.5614%2C155.849325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2215%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=15">◆ Testing</a></span>（测试）
>
> > <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2221%22%2C%22position%22%3A%7B%22pageIndex%22%3A20%2C%22rects%22%3A%5B%5B31.85%2C135.53318603515623%2C489.5262499999999%2C157.379325%5D%2C%5B31.85%2C107.00318603515625%2C715.2411249999998%2C128.849325%5D%2C%5B31.85%2C77.72818603515624%2C767.3248000000003%2C99.57432499999999%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2221%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=21">Unit Testing: Test one class or just one function</a></span>\ <span style="color: rgb(126, 131, 134)">单元测试：测试一个类或仅一个函数</span>
> >
> > <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2221%22%2C%22position%22%3A%7B%22pageIndex%22%3A20%2C%22rects%22%3A%5B%5B31.85%2C135.53318603515623%2C489.5262499999999%2C157.379325%5D%2C%5B31.85%2C107.00318603515625%2C715.2411249999998%2C128.849325%5D%2C%5B31.85%2C77.72818603515624%2C767.3248000000003%2C99.57432499999999%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2221%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=21">Integration Testing: Test the interaction of multiple classes or functions</a></span>\ <span style="color: rgb(126, 131, 134)">集成测试：测试多个类或函数的交互</span>
> >
> > <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2221%22%2C%22position%22%3A%7B%22pageIndex%22%3A20%2C%22rects%22%3A%5B%5B31.85%2C135.53318603515623%2C489.5262499999999%2C157.379325%5D%2C%5B31.85%2C107.00318603515625%2C715.2411249999998%2C128.849325%5D%2C%5B31.85%2C77.72818603515624%2C767.3248000000003%2C99.57432499999999%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2221%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=21">System Testing: Test from user input to system output in end- to-end manner</a></span>\ <span style="color: rgb(126, 131, 134)">系统测试：以端到端的方式测试从用户输入到系统输出</span>
>
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2215%22%2C%22position%22%3A%7B%22pageIndex%22%3A14%2C%22rects%22%3A%5B%5B312.65%2C435.81611328125%2C488.9196999999999%2C476.2499%5D%2C%5B39.8%2C375.75318603515626%2C348.13812499999995%2C397.59932499999996%5D%2C%5B39.8%2C341.2231860351563%2C258.8131749999999%2C363.069325%5D%2C%5B39.8%2C306.68318603515627%2C299.8238499999999%2C328.529325%5D%2C%5B39.8%2C272.1531860351563%2C143.2289%2C293.999325%5D%2C%5B39.8%2C237.60318603515626%2C414.18284999999986%2C259.449325%5D%2C%5B39.8%2C203.07318603515625%2C246.03187499999999%2C224.91932500000001%5D%2C%5B39.8%2C168.52318603515624%2C336.6301499999999%2C190.369325%5D%2C%5B39.8%2C134.00318603515623%2C270.5614%2C155.849325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2215%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=15">◆ Deploying the software at user sites</a></span>（在客户端部署软件）
>
> > <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2222%22%2C%22position%22%3A%7B%22pageIndex%22%3A21%2C%22rects%22%3A%5B%5B31.125%2C125.14202880859375%2C675.6994250000004%2C150.398075%5D%2C%5B31.125%2C91.34202880859374%2C530.9361250000002%2C116.598075%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2222%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=22">Deployment diagram: Map software component to run on hardware device (or hardware virtualization)</a></span>\ <span style="color: rgb(126, 131, 134)">部署图：将软件组件映射到硬件设备上运行（或硬件虚拟化）</span>
> >
> > <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2222%22%2C%22position%22%3A%7B%22pageIndex%22%3A21%2C%22rects%22%3A%5B%5B31.125%2C24.53662109375%2C458.689%2C49.8154%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2222%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=22">Write scripts or use a tool to publish it</a></span>\ <span style="color: rgb(126, 131, 134)">编写脚本或使用工具发布</span>
>
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2215%22%2C%22position%22%3A%7B%22pageIndex%22%3A14%2C%22rects%22%3A%5B%5B312.65%2C435.81611328125%2C488.9196999999999%2C476.2499%5D%2C%5B39.8%2C375.75318603515626%2C348.13812499999995%2C397.59932499999996%5D%2C%5B39.8%2C341.2231860351563%2C258.8131749999999%2C363.069325%5D%2C%5B39.8%2C306.68318603515627%2C299.8238499999999%2C328.529325%5D%2C%5B39.8%2C272.1531860351563%2C143.2289%2C293.999325%5D%2C%5B39.8%2C237.60318603515626%2C414.18284999999986%2C259.449325%5D%2C%5B39.8%2C203.07318603515625%2C246.03187499999999%2C224.91932500000001%5D%2C%5B39.8%2C168.52318603515624%2C336.6301499999999%2C190.369325%5D%2C%5B39.8%2C134.00318603515623%2C270.5614%2C155.849325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2215%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=15">◆ Maintain software</a></span>（维护软件）
>
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2215%22%2C%22position%22%3A%7B%22pageIndex%22%3A14%2C%22rects%22%3A%5B%5B312.65%2C435.81611328125%2C488.9196999999999%2C476.2499%5D%2C%5B39.8%2C375.75318603515626%2C348.13812499999995%2C397.59932499999996%5D%2C%5B39.8%2C341.2231860351563%2C258.8131749999999%2C363.069325%5D%2C%5B39.8%2C306.68318603515627%2C299.8238499999999%2C328.529325%5D%2C%5B39.8%2C272.1531860351563%2C143.2289%2C293.999325%5D%2C%5B39.8%2C237.60318603515626%2C414.18284999999986%2C259.449325%5D%2C%5B39.8%2C203.07318603515625%2C246.03187499999999%2C224.91932500000001%5D%2C%5B39.8%2C168.52318603515624%2C336.6301499999999%2C190.369325%5D%2C%5B39.8%2C134.00318603515623%2C270.5614%2C155.849325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2215%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=15">◆ Configuration Management</a></span>（配置管理）
>
> > <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2224%22%2C%22position%22%3A%7B%22pageIndex%22%3A23%2C%22rects%22%3A%5B%5B71.25%2C366.46864013671876%2C169.26917499999996%2C395.816575%5D%2C%5B726.8%2C27.2676025390625%2C740.6999999999999%2C40.22525%5D%2C%5B19.1%2C202.29202880859376%2C254.048725%2C227.548075%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2224%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=24">Process | Code version control</a></span>\ <span style="color: rgb(126, 131, 134)">流程 | 代码版本控制</span>
>
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2215%22%2C%22position%22%3A%7B%22pageIndex%22%3A14%2C%22rects%22%3A%5B%5B312.65%2C435.81611328125%2C488.9196999999999%2C476.2499%5D%2C%5B39.8%2C375.75318603515626%2C348.13812499999995%2C397.59932499999996%5D%2C%5B39.8%2C341.2231860351563%2C258.8131749999999%2C363.069325%5D%2C%5B39.8%2C306.68318603515627%2C299.8238499999999%2C328.529325%5D%2C%5B39.8%2C272.1531860351563%2C143.2289%2C293.999325%5D%2C%5B39.8%2C237.60318603515626%2C414.18284999999986%2C259.449325%5D%2C%5B39.8%2C203.07318603515625%2C246.03187499999999%2C224.91932500000001%5D%2C%5B39.8%2C168.52318603515624%2C336.6301499999999%2C190.369325%5D%2C%5B39.8%2C134.00318603515623%2C270.5614%2C155.849325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2215%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=15">◆ Project Management</a></span> （项目管理）
>
> > <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2225%22%2C%22position%22%3A%7B%22pageIndex%22%3A24%2C%22rects%22%3A%5B%5B31.175%2C378.46864013671876%2C131.324325%2C407.816575%5D%2C%5B726.8%2C27.2676025390625%2C740.6999999999999%2C40.22525%5D%2C%5B325.5%2C398.4231396484375%2C674.68275%2C412.7605%5D%2C%5B337.5%2C180.37202880859374%2C469.070175%2C205.628075%5D%2C%5B294.17%2C53.41702880859375%2C429.09700000000004%2C78.673075%5D%2C%5B294.17%2C19.61702880859375%2C410.0473000000002%2C44.873075%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2225%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=25">PMBok | Gantt Chart | Agile-based task board</a></span>\ <span style="color: rgb(126, 131, 134)">项目管理知识库 | 甘特图 | 基于敏捷的任务板</span>
>
> ```
> technique & Deliverable & Tool
> ```
>
> <span style="color: rgb(15, 17, 21)">各活动（Activities）都有对应的技术（Techniques）、交付物（Deliverables）和工具（Tools），它们是依次具体化的，具体看以下表格：</span>
>
> *   **<span style="color: rgb(15, 17, 21)">Activity</span>**<span style="color: rgb(15, 17, 21)">：软件工程过程中的主要阶段。</span>
>
> *   **<span style="color: rgb(15, 17, 21)">Technique</span>**<span style="color: rgb(15, 17, 21)">：每个活动使用的具体方法或技术。</span>
>
> *   **<span style="color: rgb(15, 17, 21)">Deliverable</span>**<span style="color: rgb(15, 17, 21)">：每个活动产生的输出或文档。</span>
>
> *   **<span style="color: rgb(15, 17, 21)">Tool</span>**<span style="color: rgb(15, 17, 21)">：支持每个活动使用的软件或工具。</span>
>
> | **Activity**                         | **Technique**                                                     | **Deliverable**                             | **<span style="color: rgb(15, 17, 21)">Tool</span>** |
> | ------------------------------------ | ----------------------------------------------------------------- | ------------------------------------------- | ---------------------------------------------------- |
> | Collecting user requirements         | Use cases / user stories / use case diagram / meeting             | Requirement document                        | UML tool / Requirement modeling tool / Word          |
> | Designing software                   | UML / patterns / principles / ...                                 | Software design document                    | UML tool / SonarQube                                 |
> | Coding/Implementation                | Java / C++ / ...                                                  | Code listing and test script                | Visual Studio / Eclipse                              |
> | Testing                              | Unit testing / debugger / ...                                     | Quality assurance (QA) report               | JUnit / debugger / fuzzer ...                        |
> | Deploying the software at user sites | Standalone software / Software plug-in / app / web services / ... | Software at user site                       | Installer / plug-in framework                        |
> | Maintain software                    | Bug reporting / software repository                               | Bug report and software release             | Bug reporting system                                 |
> | Configuration Management             | Version control / change management software                      | Code change / patch / change history report | Apache Subversion / Git                              |
> | Project Management                   | Work breakdown structure / task scheduling algorithm              | Project schedule and status tracking        | MS Project                                           |
>

## <span style="color: rgb(255, 32, 32)">&#x3C;Best Practices> 【重点】</span>

◆ Different procedures to organize activities define different types of software processes\
   <span style="color: rgb(126, 131, 134)">组织活动的不同过程定义了不同类型的软件过程。</span>

◆ E.g., \[see the details in the next few slides]

◼ Waterfall model （1960s）\
   <span style="color: rgb(126, 131, 134)">瀑布模型</span>

> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2234%22%2C%22position%22%3A%7B%22pageIndex%22%3A33%2C%22rects%22%3A%5B%5B50.6%2C391.5920288085938%2C753.4572499999999%2C416.87585%5D%2C%5B50.6%2C357.81662109375%2C406.8848000000001%2C383.0954%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2234%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=34">Completely produce the full set of deliverables of each activity before starting the next activity.</a></span>\
> <span style="color: rgb(126, 131, 134)">完成每项活动的全套交付成果后,才能开始下一项活动</span>
>
> ![\<img alt="" data-attachment-key="LYRNAFJS" width="1048" height="571" src="attachments/LYRNAFJS.png" ztype="zimage"> | 1048](attachments/LYRNAFJS.png)
>
> \+ <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2234%22%2C%22position%22%3A%7B%22pageIndex%22%3A33%2C%22rects%22%3A%5B%5B41.5902%2C148.98662109375%2C237.10759999999996%2C174.2654%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2234%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=34">Simple workflow</a></span>\ <span style="color: rgb(126, 131, 134)">+ 简单的工作流程</span>
>
> \- <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2234%22%2C%22position%22%3A%7B%22pageIndex%22%3A33%2C%22rects%22%3A%5B%5B41.5%2C115.0970947265625%2C232.28647500000002%2C140.448075%5D%2C%5B19.1%2C81.41702880859374%2C268.991675%2C106.673075%5D%2C%5B19.1%2C48.36702880859375%2C297.57215%2C73.623075%5D%2C%5B19.1%2C14.592028808593753%2C75.51102499999999%2C39.848074999999994%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2234%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=34">Need test against design, coding details, requirements at the same time.</a></span>\ <span style="color: rgb(126, 131, 134)">- </span><span style="color: rgb(126, 131, 134)">需要同时针对设计、编 码细节和要求进行测试</span>

◼ V-shape waterfall model\
   <span style="color: rgb(126, 131, 134)">V型瀑布模型</span>

> ![\<img alt="" data-attachment-key="XJD3QY5P" width="1257" height="664" src="attachments/XJD3QY5P.png" ztype="zimage"> | 1257](attachments/XJD3QY5P.png)\
> \+ <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2235%22%2C%22position%22%3A%7B%22pageIndex%22%3A34%2C%22rects%22%3A%5B%5B48.842999999999996%2C25.98662109375%2C345.6635999999999%2C51.2654%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2235%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=35">Stagewise Validation Goal</a></span>\ <span style="color: rgb(126, 131, 134)">+ </span><span style="color: rgb(126, 131, 134)">分阶段验证目标</span>

> ```
> 上面两个模型共同的问题
> ```
>
> 1.  <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2236%22%2C%22position%22%3A%7B%22pageIndex%22%3A35%2C%22rects%22%3A%5B%5B83.725%2C389.2220288085938%2C571.6606500000001%2C414.478075%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2236%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=36">False sense of clear-cut phases of activities.</a></span>\ <span style="color: rgb(126, 131, 134)">有“活动阶段明确”的错误认知</span>
>
>     *   在我们设计出程序之前我们无法计算出实际需求
>     *   纠正上游活动中出现问题的成本也很高
>
> 2.  <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2236%22%2C%22position%22%3A%7B%22pageIndex%22%3A35%2C%22rects%22%3A%5B%5B83.725%2C187.24202880859374%2C513.5431250000001%2C212.498075%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2236%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=36">Nothing is done until they are all done</a></span>\ <span style="color: rgb(126, 131, 134)">一切完成之前什么</span>**<span style="color: rgb(126, 131, 134)">成果</span>**<span style="color: rgb(126, 131, 134)">都不产出</span>

◼ Prototyping （1980s）\
   <span style="color: rgb(126, 131, 134)">原型制作</span>

> 通过快速构建原型来确定需求和设计，然后根据反馈进行迭代开发
>
> ![\<img alt="" data-attachment-key="BMLA9G3K" width="845" height="572" src="attachments/BMLA9G3K.png" ztype="zimage"> | 845](attachments/BMLA9G3K.png)
>
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2242%22%2C%22position%22%3A%7B%22pageIndex%22%3A41%2C%22rects%22%3A%5B%5B519.25%2C385.37103759765625%2C704.4568750000008%2C401.761325%5D%2C%5B519.25%2C363.6010375976563%2C717.8855000000008%2C379.991325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2242%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=42">+ Code before design and requirement documentation</a></span>\ <span style="color: rgb(126, 131, 134)">+ </span><span style="color: rgb(126, 131, 134)">在设计和需求文档之前编写代码</span>
>
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2242%22%2C%22position%22%3A%7B%22pageIndex%22%3A41%2C%22rects%22%3A%5B%5B519.25%2C320.80103759765626%2C737.1362000000007%2C337.191325%5D%2C%5B519.25%2C299.0210375976563%2C754.602425000001%2C315.41132500000003%5D%2C%5B519.25%2C277.25103759765625%2C712.4059000000007%2C293.641325%5D%2C%5B519.25%2C255.48103759765624%2C726.8619500000009%2C271.871325%5D%2C%5B519.25%2C233.7064453125%2C722.0919999999998%2C250.07399999999998%5D%2C%5B519.25%2C212.6864453125%2C738.634%2C229.054%5D%2C%5B519.25%2C190.9064453125%2C759.8200000000002%2C207.274%5D%2C%5B519.25%2C169.15103759765626%2C723.8878250000005%2C185.541325%5D%2C%5B519.25%2C147.38103759765625%2C563.4833500000001%2C163.771325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2242%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=42">A prototype is a version of the final product that is likely buggy and only implements some features or merely the screen effects for users to “see” the product so that users can point out their requirements easier than expressing them in texts and UML.</a></span>\
> <span style="color: rgb(126, 131, 134)">原型是最终产品的一个版本，它可能存在错误，并且仅实现某些功能或仅仅是屏幕效果，以便用户“看到”产品,以便用户可以更容易地指出他们的需求，而不是用文本 和 UML 来表达</span><span style="color: rgb(126, 131, 134)">。</span>
>
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2242%22%2C%22position%22%3A%7B%22pageIndex%22%3A41%2C%22rects%22%3A%5B%5B519.25%2C104.57103759765624%2C760.3524000000011%2C120.961325%5D%2C%5B519.25%2C82.80103759765625%2C729.3494000000005%2C99.191325%5D%2C%5B519.25%2C61.02603759765625%2C747.1220500000011%2C77.416325%5D%2C%5B519.25%2C39.25103759765625%2C560.4551500000001%2C55.641324999999995%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2242%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=42">Incrementally obtain and validate the user/system requirements before a proper software design stage.</a></span>\
> <span style="color: rgb(126, 131, 134)">在适当的软件设计阶段之前逐步获取并验证用户/系统需求。</span>

◼ Incremental software development model\
   <span style="color: rgb(126, 131, 134)">增量式软件开发模型</span>

> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2243%22%2C%22position%22%3A%7B%22pageIndex%22%3A42%2C%22rects%22%3A%5B%5B71.25%2C371.19202880859376%2C677.439375%2C396.44807499999996%5D%2C%5B71.25%2C337.40662109375%2C654.6608000000002%2C362.6854%5D%2C%5B71.25%2C303.62202880859377%2C693.8544%2C328.87807499999997%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2243%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=43">Rather than using a parallel track to work on a smaller subsystem, another way is to deliver a smaller set of requirements and gradually enlarge the requirement set.</a></span>\ <span style="color: rgb(126, 131, 134)">与使用并行轨道在较小的子系统上工作不同，另一种方法是交付较小的需求集，并逐步扩大需求集。</span>
>
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2243%22%2C%22position%22%3A%7B%22pageIndex%22%3A42%2C%22rects%22%3A%5B%5B71.25%2C263.83662109375%2C554.9144000000001%2C289.1154%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2243%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=43">Divide the set of requirements into subsets.</a></span><span style="color: rgb(126, 131, 134)"><br>将需求集划分为子集</span>
>
> ![\<img alt="" data-attachment-key="3RN36BDE" width="1246" height="697" src="attachments/3RN36BDE.png" ztype="zimage"> | 1246](attachments/3RN36BDE.png)
>
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2244%22%2C%22position%22%3A%7B%22pageIndex%22%3A43%2C%22rects%22%3A%5B%5B21.3%2C80.66702880859374%2C295.07817500000004%2C105.923075%5D%2C%5B21.3%2C46.86702880859375%2C290.078675%2C72.123075%5D%2C%5B21.3%2C13.092028808593753%2C289.7731500000001%2C38.348074999999994%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2244%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=44">Parallel tracks with each stage of each subsystem development is possible</a></span>\ <span style="color: rgb(126, 131, 134)">每个子系统发展的每个阶段都有可能实现平行跟踪</span>

◼ Spiral model\
   <span style="color: rgb(126, 131, 134)">螺旋模型</span>

> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2245%22%2C%22position%22%3A%7B%22pageIndex%22%3A44%2C%22rects%22%3A%5B%5B71.25%2C371.19202880859376%2C690.2992000000005%2C396.44807499999996%5D%2C%5B71.25%2C337.40662109375%2C626.0824000000001%2C362.6854%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2245%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=45">Contains characteristics of the waterfall, prototype, and incremental development, but is more systematic.</a></span>\ <span style="color: rgb(126, 131, 134)">包含了瀑布式、原型式、渐进式开发的特点，但更具有系统性。</span>
>
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2245%22%2C%22position%22%3A%7B%22pageIndex%22%3A44%2C%22rects%22%3A%5B%5B71.25%2C296.87202880859377%2C722.9856000000002%2C322.12807499999997%5D%2C%5B71.25%2C263.83662109375%2C740.8784%2C289.14320000000004%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2245%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=45"><strong><em>Basic idea:</em></strong> plan, do prototyping, revise the previous plans until we know the item <strong><em><span style="color: rgb(255, 32, 32)">X</span></em></strong> well through a series of iterations.</a></span>\ <span style="color: rgb(126, 131, 134)">基本思路：规划、原型化、修改先前的计划，通过一系列的迭代，直到我们很好地知道X项。</span>
>
> ![\<img alt="" data-attachment-key="T7NRAPAT" width="1286" height="890" src="attachments/T7NRAPAT.png" ztype="zimage"> | 1286](attachments/T7NRAPAT.png)
>
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2246%22%2C%22position%22%3A%7B%22pageIndex%22%3A45%2C%22rects%22%3A%5B%5B10.825%2C507.7143432617188%2C259.70062499999995%2C525.826175%5D%2C%5B16.95%2C483.69434326171876%2C258.58745%2C501.806175%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2246%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=46">Step 1) Determine objectives, alternatives, and constraints</a></span>\ <span style="color: rgb(126, 131, 134)">步骤1 ) 确定目标、备选方案和约束条件。</span>
>
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2246%22%2C%22position%22%3A%7B%22pageIndex%22%3A45%2C%22rects%22%3A%5B%5B531.13%2C512.4643432617188%2C780.6341500000009%2C530.576175%5D%2C%5B579.17%2C488.44434326171876%2C733.1180750000003%2C506.556175%5D%2C%5B603.28%2C464.4143432617188%2C708.6086250000004%2C482.526175%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2246%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=46">Step 2) Evaluate alternatives, identify risks, and resolve risks</a></span>\ <span style="color: rgb(126, 131, 134)">步骤2 ) 评估备选方案，识别风险，化解风险。</span>
>
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2246%22%2C%22position%22%3A%7B%22pageIndex%22%3A45%2C%22rects%22%3A%5B%5B628.05%2C51.9697509765625%2C766.8030000000001%2C70.05925%5D%2C%5B614.8%2C27.944750976562503%2C779.2704999999999%2C46.03425%5D%2C%5B658.72%2C3.9197509765625007%2C740.6265%2C22.00925%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2246%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=46">Step 3) Develop, validate, and verify next-level</a></span>\ <span style="color: rgb(126, 131, 134)">步骤3 ) 进行下一级的开发、验证和确认。</span>
>
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2246%22%2C%22position%22%3A%7B%22pageIndex%22%3A45%2C%22rects%22%3A%5B%5B13.525%2C128.06434326171873%2C202.12304999999995%2C146.176175%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2246%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=46">Step 4) Plan next level</a></span>\ <span style="color: rgb(126, 131, 134)">步骤4 ) 规划下一阶段。</span>

◼ (Rational) Unified Process (RUP) （2000s）\
   <span style="color: rgb(126, 131, 134)">（理性）统一流程</span>

> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2248%22%2C%22position%22%3A%7B%22pageIndex%22%3A47%2C%22rects%22%3A%5B%5B627.63%2C341.19202880859376%2C748.1229500000001%2C366.47585%5D%2C%5B627.63%2C307.39202880859375%2C742.00745%2C332.64807499999995%5D%2C%5B627.63%2C273.62202880859377%2C712.0937749999999%2C298.433675%5D%2C%5B627.63%2C240.58662109374998%2C719.3700000000001%2C265.4206%5D%2C%5B627.63%2C206.79202880859376%2C751.6731499999996%2C232.048075%5D%2C%5B627.63%2C173.00662109375%2C741.9435999999998%2C198.2854%5D%2C%5B627.63%2C139.22202880859373%2C717.1488250000002%2C164.478075%5D%2C%5B627.63%2C105.44202880859375%2C757.0059499999999%2C130.698075%5D%2C%5B627.63%2C72.39202880859375%2C726.2312499999999%2C97.648075%5D%2C%5B627.63%2C38.61702880859375%2C727.592225%2C63.873075%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2248%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=48">Every type of activity runs in parallel (vertically) with other types of activities in the same iteration.</a></span>\ <span style="color: rgb(126, 131, 134)">每种类型的活动在同一迭代中与其他类型的活动并行(垂直)运行。</span>

◼ **Agile Methods（2010s）\
   敏捷方法**

> ![\<img alt="" data-attachment-key="Q7JYQFAE" width="964" height="625" src="attachments/Q7JYQFAE.png" ztype="zimage"> | 964](attachments/Q7JYQFAE.png)
>
> ```
> 核心思想
> ```
>
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2249%22%2C%22position%22%3A%7B%22pageIndex%22%3A48%2C%22rects%22%3A%5B%5B39.8%2C435.967529296875%2C681.9636%2C475.54110000000003%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2249%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=49">Ideas of Test-Driven Development</a></span>\ <span style="color: rgb(126, 131, 134)">测试驱动开发的思想</span>
>
> ```
> 敏捷项目管理核心概念
> ```
>
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2255%22%2C%22position%22%3A%7B%22pageIndex%22%3A54%2C%22rects%22%3A%5B%5B39.8%2C371.19202880859376%2C56.09365%2C396.44807499999996%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2255%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=55">◆</a></span> User story
>
> > *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2255%22%2C%22position%22%3A%7B%22pageIndex%22%3A54%2C%22rects%22%3A%5B%5B107.8%2C336.20546142578127%2C690.4514250000003%2C360.069325%5D%2C%5B107.8%2C306.91546142578125%2C200.15625%2C330.779325%5D%2C%5B116.8%2C278.0115600585938%2C640.3558500000004%2C298.150575%5D%2C%5B116.8%2C249.49156005859376%2C463.07537500000007%2C269.630575%5D%2C%5B116.8%2C220.21156005859376%2C499.769%2C240.35057500000002%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2255%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=55">As a <strong>&#x3C;role></strong>, I want an <strong>&#x3C;action></strong>, so that I can achieve a <strong>&#x3C;goal></strong>.</a></span>
> >
> >     *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2255%22%2C%22position%22%3A%7B%22pageIndex%22%3A54%2C%22rects%22%3A%5B%5B107.8%2C336.20546142578127%2C690.4514250000003%2C360.069325%5D%2C%5B107.8%2C306.91546142578125%2C200.15625%2C330.779325%5D%2C%5B116.8%2C278.0115600585938%2C640.3558500000004%2C298.150575%5D%2C%5B116.8%2C249.49156005859376%2C463.07537500000007%2C269.630575%5D%2C%5B116.8%2C220.21156005859376%2C499.769%2C240.35057500000002%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2255%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=55"><strong>role</strong> is what we can identify from Requirements Engineering</a></span>
> >     *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2255%22%2C%22position%22%3A%7B%22pageIndex%22%3A54%2C%22rects%22%3A%5B%5B107.8%2C336.20546142578127%2C690.4514250000003%2C360.069325%5D%2C%5B107.8%2C306.91546142578125%2C200.15625%2C330.779325%5D%2C%5B116.8%2C278.0115600585938%2C640.3558500000004%2C298.150575%5D%2C%5B116.8%2C249.49156005859376%2C463.07537500000007%2C269.630575%5D%2C%5B116.8%2C220.21156005859376%2C499.769%2C240.35057500000002%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2255%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=55"><strong>action</strong> should be tangible (actionable)</a></span>
> >     *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2255%22%2C%22position%22%3A%7B%22pageIndex%22%3A54%2C%22rects%22%3A%5B%5B107.8%2C336.20546142578127%2C690.4514250000003%2C360.069325%5D%2C%5B107.8%2C306.91546142578125%2C200.15625%2C330.779325%5D%2C%5B116.8%2C278.0115600585938%2C640.3558500000004%2C298.150575%5D%2C%5B116.8%2C249.49156005859376%2C463.07537500000007%2C269.630575%5D%2C%5B116.8%2C220.21156005859376%2C499.769%2C240.35057500000002%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2255%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=55"><strong>goal</strong> should be measurable and quantifiable</a></span>
> >
> > *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2255%22%2C%22position%22%3A%7B%22pageIndex%22%3A54%2C%22rects%22%3A%5B%5B71.25%2C117.47318603515625%2C653.0153750000001%2C139.319325%5D%2C%5B71.25%2C88.20318603515625%2C697.2213750000001%2C110.04932500000001%5D%2C%5B71.25%2C59.67818603515625%2C514.3190499999998%2C81.524325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2255%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=55">A user story usually has more information such as use cases, diagram sketch, user notes, data, reports from existing systems to clarify the context and scope of the user story.</a></span>\ <span style="color: rgb(126, 131, 134)">一个用户故事通常有更多的信息，例如用例，图示草图，用户笔记，数据，现有系统的报告，以阐明用户故事的上下文和范围。</span>
>
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2255%22%2C%22position%22%3A%7B%22pageIndex%22%3A54%2C%22rects%22%3A%5B%5B39.8%2C371.19202880859376%2C56.09365%2C396.44807499999996%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2255%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=55">◆</a></span> Relative Story Point Estimation\
>    <span style="color: rgb(126, 131, 134)">故事点估算</span>
>
> > *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2256%22%2C%22position%22%3A%7B%22pageIndex%22%3A55%2C%22rects%22%3A%5B%5B71.25%2C259.38318603515626%2C294.12992499999984%2C281.22932499999996%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2256%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=56">A story point is a value</a></span><span style="color: rgb(126, 131, 134)">故事点是一种价值</span>
> >
> > *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2256%22%2C%22position%22%3A%7B%22pageIndex%22%3A55%2C%22rects%22%3A%5B%5B71.25%2C167.03318603515623%2C723.5768000000005%2C188.879325%5D%2C%5B71.25%2C138.50318603515623%2C671.5867000000002%2C160.349325%5D%2C%5B71.25%2C109.97318603515625%2C703.1555500000002%2C131.819325%5D%2C%5B71.25%2C80.70318603515625%2C495.50747499999966%2C102.54932500000001%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2256%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=56">Pick one or more user stories as anchors. The whole team agreed on a story point for each such user story to indicate the number of expected efforts to implement the user stories, taking into account uncertainty and implementation complexity.</a></span>\ <span style="color: rgb(126, 131, 134)">选择一个或多个用户故事作为锚点。整个团队为每个用户故事商定一个故事点,以显示实现这些用户故事所需的工作量,同时考虑到不确定性和实施的复杂性。</span>
>
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2255%22%2C%22position%22%3A%7B%22pageIndex%22%3A54%2C%22rects%22%3A%5B%5B39.8%2C371.19202880859376%2C56.09365%2C396.44807499999996%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2255%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=55">◆</a></span> Project Velocity\
>    <span style="color: rgb(126, 131, 134)">项目速度</span>
>
> > *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2257%22%2C%22position%22%3A%7B%22pageIndex%22%3A56%2C%22rects%22%3A%5B%5B71.25%2C375.75318603515626%2C709.2578999999998%2C397.59932499999996%5D%2C%5B71.25%2C347.2231860351563%2C352.12627499999985%2C369.069325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2257%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=57">A user story is implemented in a cycle if it passes the cycle review (by users and product owner)</a></span>\ <span style="color: rgb(126, 131, 134)">如果用户故事通过了周期评审(由用户和产品所有者评审),则该用户故事将在一个周 期内实施</span>
> >
> > *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2257%22%2C%22position%22%3A%7B%22pageIndex%22%3A56%2C%22rects%22%3A%5B%5B71.25%2C312.70318603515625%2C709.0176500000002%2C334.54932499999995%5D%2C%5B71.25%2C283.4031860351563%2C211.89234999999994%2C305.249325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2257%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=57">An agile project is organized as a series of cycles (XP iterations or Scrum sprints)</a></span>\ <span style="color: rgb(126, 131, 134)">敏捷项目由一系列循环(XP 迭代或 Scrum 冲刺)组成。</span>
> >
> > *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2257%22%2C%22position%22%3A%7B%22pageIndex%22%3A56%2C%22rects%22%3A%5B%5B71.25%2C248.88318603515626%2C674.7580000000005%2C270.729325%5D%2C%5B71.25%2C220.35318603515626%2C135.73309999999998%2C242.19932500000002%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2257%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=57">Each cycle implements a set of user stories with assigned story points.</a></span>\ <span style="color: rgb(126, 131, 134)">每个循环实现一组指定故事点的用户故事。</span>
> >
> > *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2257%22%2C%22position%22%3A%7B%22pageIndex%22%3A56%2C%22rects%22%3A%5B%5B71.25%2C185.80318603515624%2C724.3696250000003%2C207.649325%5D%2C%5B71.25%2C156.53318603515623%2C446.88087499999983%2C178.379325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2257%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=57">If a user story is too large to fit into a cycle, the user story should be broken down into multiple user stories.</a></span>\ <span style="color: rgb(126, 131, 134)">如果一个用户故事太大，无法放入一个循环中，则应该将用户故事分解为多个用户故事</span>
> >
> > *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2257%22%2C%22position%22%3A%7B%22pageIndex%22%3A56%2C%22rects%22%3A%5B%5B71.25%2C121.97318603515625%2C606.57505%2C143.819325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2257%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=57">The total story points delivered by the cycle are plotted.</a></span>\ <span style="color: rgb(126, 131, 134)">绘制循环传递的总故事点</span>
>
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2255%22%2C%22position%22%3A%7B%22pageIndex%22%3A54%2C%22rects%22%3A%5B%5B39.8%2C371.19202880859376%2C56.09365%2C396.44807499999996%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2255%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=55">◆</a></span> Burndown Chart\
>    <span style="color: rgb(126, 131, 134)">燃尽图</span>
>
> > <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2258%22%2C%22position%22%3A%7B%22pageIndex%22%3A57%2C%22rects%22%3A%5B%5B25.6%2C58.89202880859376%2C733.9458250000002%2C84.148075%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2258%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=58">Project velocity is the slope over a consecutive series of cycles.</a></span>\ <span style="color: rgb(126, 131, 134)">项目速度表现为连续一系列循环的斜率。<br></span>![\<img alt="" data-attachment-key="Y6LEHHDS" width="1279" height="458" src="attachments/Y6LEHHDS.png" ztype="zimage"> | 1279](attachments/Y6LEHHDS.png)
>
> ***
>
> 本章<span style="color: rgb(15, 17, 21)">着重介绍了两种主流的敏捷方法</span>。这里写不下，单开一节放这一部分的知识点

## \<Extreme Programming XP & Scrum>

### Extreme Programming vs Scrum

◆ XP has no PM.\
   XP 没有 PM

> PM一般语境下是产品经理应该没有人类不知道吧，不是项目经理哈\
> 然而在**<span style="color: rgb(15, 17, 21)">“过程模型”和“项目管理”</span>**这个语境下，一般指的是“项目经理”，因为<span style="color: rgb(15, 17, 21)">在敏捷开发中，</span>**<span style="color: rgb(15, 17, 21)">Product Manager（产品经理）</span>**<span style="color: rgb(15, 17, 21)"> 的职责通常由 </span>**<span style="color: rgb(15, 17, 21)">Product Owner（产品负责人）</span>**<span style="color: rgb(15, 17, 21)"> 这个角色来承担。Product Owner 的核心职责是：</span>
>
> *   **<span style="color: rgb(15, 17, 21)">管理和优先排序产品待办列表</span>**<span style="color: rgb(15, 17, 21)">（第二章PPT64页）</span>
>
> *   **<span style="color: rgb(15, 17, 21)">代表客户和利益相关者</span>**<span style="color: rgb(15, 17, 21)">，定义产品功能</span>
>
> *   <span style="color: rgb(15, 17, 21)">在评审会上</span>**<span style="color: rgb(15, 17, 21)">验收完成的工作</span>**
>
> <span style="color: rgb(15, 17, 21)">如果在题目描述中出现了</span>**<span style="color: rgb(15, 17, 21)">定义产品需求、决定功能优先级</span>**<span style="color: rgb(15, 17, 21)">等活动时使用了“PM”，那么它可能指代产品经理。</span>

◆ Scrum has PM (but a less tedious process than XP) and other practices/activities/work products\
   <span style="color: rgb(126, 131, 134)">Scrum 有 PM(但过程比 XP 简单得多)和其他实践/活动/成果</span>

### Extreme Programming (XP)

◆ Extreme programming (XP) has five phases:

◼ Planning

> Meet with users, define user stories, and estimate story points. Plan for release through N iterations (for user stories delivery)\
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FS5MPGKHD%22%2C%22pageLabel%22%3A%2250%22%2C%22position%22%3A%7B%22pageIndex%22%3A49%2C%22rects%22%3A%5B%5B302.59161%2C368.6171773581991%2C561.3298693008164%2C387.4089794756123%5D%2C%5B81.449097%2C334.14341735819914%2C197.92666930081637%2C352.9352194756123%5D%2C%5B117.808006%2C304.9096573581991%2C470.68093860163276%2C323.7014594756123%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2250%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/S5MPGKHD?page=50"><span style="color: rgb(126, 131, 134)">规划与用户见面,定义用户故事,估算故事点。计划通过N次迭代进行发布(用于用户故事交付)</span></a></span>

◼ Design

> Use Simple and consistent design sketch\ <span style="color: rgb(126, 131, 134)">使用简单一致的设计草图</span>

◼ Coding

> Apply XP practice\ <span style="color: rgb(126, 131, 134)">应用XP实践</span>
>
> > XP实践的重点：
> >
> > *   生成反馈（<span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2251%22%2C%22position%22%3A%7B%22pageIndex%22%3A50%2C%22rects%22%3A%5B%5B564.38%2C336.7231860351563%2C650.7258500000002%2C358.569325%5D%2C%5B564.38%2C307.43318603515627%2C659.9514500000001%2C329.279325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2251%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=51">Generate feedbacks</a></span>）
> >
> > *   拥抱变化（Embrace changes）
> >
> > *   保持客户参与（<span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2251%22%2C%22position%22%3A%7B%22pageIndex%22%3A50%2C%22rects%22%3A%5B%5B564.38%2C238.35318603515626%2C713.1668250000002%2C260.199325%5D%2C%5B564.38%2C209.82318603515625%2C644.6235000000003%2C231.66932500000001%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2251%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=51">keep customers engaged</a></span>）
> >
> > *   短迭代（<span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2251%22%2C%22position%22%3A%7B%22pageIndex%22%3A50%2C%22rects%22%3A%5B%5B564.38%2C175.30318603515624%2C697.8388750000001%2C197.149325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2251%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=51">short iteration</a></span>）
> >
> > *   尽快修复BUG（<span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2251%22%2C%22position%22%3A%7B%22pageIndex%22%3A50%2C%22rects%22%3A%5B%5B564.38%2C140.00318603515623%2C701.5147000000002%2C161.849325%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2251%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=51">Fix bugs early</a></span>）

◼ Testing

> Conduct automated unit tests and acceptance tests per user story\
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FS5MPGKHD%22%2C%22pageLabel%22%3A%2250%22%2C%22position%22%3A%7B%22pageIndex%22%3A49%2C%22rects%22%3A%5B%5B117.808006%2C90.33545851908619%2C486.427572193823%2C109.86851464536724%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2250%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/S5MPGKHD?page=50"><span style="color: rgb(126, 131, 134)">根据用户故事进行自动化单元测试和验收测试</span></a></span>

◼ Feedback

> PM and users determine the values of the user stories delivered by the implementation\
> <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FS5MPGKHD%22%2C%22pageLabel%22%3A%2250%22%2C%22position%22%3A%7B%22pageIndex%22%3A49%2C%22rects%22%3A%5B%5B141.457733%2C26.627650448006445%2C532.4936677169657%2C45.834405287724195%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2250%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/S5MPGKHD?page=50"><span style="color: rgb(126, 131, 134)">PM 和用户确定实施过程中交付的用户故事的价值</span></a></span>

◆ XP guidelines：（规则下面有总结）

*   Planning: programmers estimate efforts needed for implementing user stories and customer decides the scope and timing of release\ <span style="color: rgb(126, 131, 134)">计划：程序员估计实现用户故事所需的努力，客户决定发布的范围和时间</span>

*   Small release: monthly, or daily for small fixes\ <span style="color: rgb(126, 131, 134)">小版本发布：每月发布一次,或每天进行小修复</span>

*   Metaphor: A shared story guides all developments by describing how the system works\ <span style="color: rgb(126, 131, 134)">系统隐喻：通过描述系统如何工作，共享的故事指导所有开发</span>

*   Simple design: use simplest possible solution\ <span style="color: rgb(126, 131, 134)">简单设计：使用尽可能简单的解决方案</span>

*   Testing: use tests are implemented before the code. Customer write the functional tests.\ <span style="color: rgb(126, 131, 134)">测试：在编写代码之前实施测试。客户编写功能测试</span>

*   Refactoring: do refactoring frequently\ <span style="color: rgb(126, 131, 134)">重构：经常进行重构</span>

*   Pair programming: two people write code at one computer.\ <span style="color: rgb(126, 131, 134)">结对编程：两个人在一台计算机上编写代码</span>

*   Collective ownership: anyone can change any part of the code at anytime\ <span style="color: rgb(126, 131, 134)">集体所有权：任何人都可以随时更改代码的任何部分</span>

*   Continuous integration: integrate the code to the project codebase as soon as it is ready.\ <span style="color: rgb(126, 131, 134)">持续集成：代码准备好后立即集成到项目代码库中</span>

*   On-side customer: customers are available full-time\ <span style="color: rgb(126, 131, 134)">现场客户：客户全天候待命</span>

*   Coding standards: apply them.\ <span style="color: rgb(126, 131, 134)">编码标准：应用它们</span>

*   Open worksplace: a large room with small cubicles preferred\ <span style="color: rgb(126, 131, 134)">开放式工作场所：最好是带有小隔间的大房间</span>

*   40-hour week: No Overtime in two consecutive weeks\ <span style="color: rgb(126, 131, 134)">每周 40 小时：连续两周不加班</span>

*   Just rules: Team has its own but changeable rules for all to follow\ <span style="color: rgb(126, 131, 134)">规则公正：团队有自己的规则,但规则是可变的,每个人都必须遵守</span>

> *   **<span style="color: rgb(15, 17, 21)">规划相关</span>**<span style="color: rgb(15, 17, 21)">：用户故事、小版本发布、</span>规则公正<span style="color: rgb(15, 17, 21)">。</span>
>
> *   **<span style="color: rgb(15, 17, 21)">设计相关</span>**<span style="color: rgb(15, 17, 21)">：简单设计、系统隐喻、重构。</span>
>
> *   **<span style="color: rgb(15, 17, 21)">编码相关</span>**<span style="color: rgb(15, 17, 21)">：结对编程、集体所有权、编码标准、持续集成。</span>
>
> *   **<span style="color: rgb(15, 17, 21)">测试相关</span>**<span style="color: rgb(15, 17, 21)">：测试驱动开发。</span>
>
> *   **<span style="color: rgb(15, 17, 21)">团队协作相关</span>**<span style="color: rgb(15, 17, 21)">：现场客户、可持续的工作节奏、开放的工作空间。</span>

### Scrum

> ```
> 核心驱动
> ```
>
> *   driven by daily and periodic one-hour meetings\ <span style="color: rgb(126, 131, 134)">以每日和定期一小时会议为驱动</span>
>
> <!---->
>
> ```
> 核心理念
> ```
>
> *   <span class="highlight" data-annotation="%7B%22attachmentURI%22%3A%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FFYEUKU8V%22%2C%22pageLabel%22%3A%2260%22%2C%22position%22%3A%7B%22pageIndex%22%3A59%2C%22rects%22%3A%5B%5B105.15%2C105.81434326171875%2C641.3831999999999%2C124.250575%5D%5D%7D%2C%22citationItem%22%3A%7B%22uris%22%3A%5B%22http%3A%2F%2Fzotero.org%2Fusers%2F18252408%2Fitems%2FL4HLFH47%22%5D%2C%22locator%22%3A%2260%22%7D%7D" ztype="zhighlight"><a href="zotero://open/library/items/FYEUKU8V?page=60">Accept that the requirements cannot be fully understood or defined</a></span>, Focus on maximizing the team’s ability to deliver quickly and respond to the selected backlog tasks.\ <span style="color: rgb(126, 131, 134)">接受需求无法被完全理解或定义, 专注于最大限度地提高团队快速交付和响应所 选积压任务的能力。</span>
>
> <!---->
>
> ```
> Scrum 过程
> ```
>
> *   A high-priority subset of the product backlog is treated as the current sprint backlog\ <span style="color: rgb(126, 131, 134)">产品待办清单的高优先级子集被视为当前 Sprint 待办事项</span>
>
> *   Through the standing meeting, each team member picks an item from the sprint backlog. The target is to deliver the user story in the cycle. (Visualize as a task board)\ <span style="color: rgb(126, 131, 134)">通过常设会议，每个团队成员从 Sprint 待办事项中挑选一项。目标是在周期内交付用户故事。(可视化为任务板）</span>
>
> *   At the end of a sprint, conduct a sprint review\ <span style="color: rgb(126, 131, 134)">在 Sprint 结束时,进行 Sprint 回顾</span>
>
> *   Also, conduct a sprint retrospective (reflect on what has been done right to make progress and what to be improved to reduce or avoid blockers to improve productivity, etc)<span style="color: rgb(126, 131, 134)">另外,进行 Sprint反思（反思哪些做法正确以取得进展,哪些方面需要改进以减少或避免阻碍因素以提高生产力等）</span>

**Scrum Tools and Meeting:**

◆ **<span style="color: rgb(255, 32, 32)">product backlog</span>** is a list of features desired for a final product, the bugs to be removed, technical work to set up and maintain development environment and user site, and knowledge (e.g., learn to use a new framework) to acquire by the project.\ <span style="color: rgb(126, 131, 134)">产品代办清单是列出最终产品所需要的功能、需要解决的BUG、设置和维护开发环境和用户站点的技术工作、以及项目需要获得的知识( e.g . ,学会使用新的框架)的一份清单。</span>

◆ **<span style="color: rgb(255, 32, 32)">release burndown chart</span>** tracks progress on a project. The chart itself is updated after each sprint. Teams can measure progress in any unit they choose.\ <span style="color: rgb(126, 131, 134)">发布燃尽图用于跟踪项目进度。该图表会在每次 Sprint 后更新。团队可以选择任意单位来衡量进度</span>

◆ **<span style="color: rgb(255, 32, 32)">sprint backlog </span>**is a list of tasks to complete during a sprint. It is updated once a day.\ <span style="color: rgb(126, 131, 134)">Sprint Backlog是 Sprint 期间需要完成的任务列表,每天更新一次</span>

◆ **<span style="color: rgb(255, 32, 32)">task board</span>** is a sheet that every member of the team can use and add to over the course of a sprint, and is a visual representation of every task and what phase of completion it’s in. Usually, task boards include columns for stories, to-dos, work in process, things needing verification and items finished. Some teams also include burndown charts, notes and tests. ***Hang the board on a wall*** or digitalize it.\ <span style="color: rgb(126, 131, 134)">任务板是团队中每个成员都可以在 Sprint 过程中使用和添加内容的表格,它以可视化的方式呈现每个任务及其完成阶段。通常,任务板包含故事、待办事项、进行事项、需要验证的事项和已完成事项等栏目。有些团队还会添加燃尽图、笔记和测试。将任务板挂在墙上或进行数字化处理。</span>

◆ **<span style="color: rgb(255, 32, 32)">Meeting: </span>**The product owner shows up at the sprint planning meeting with the prioritized agile product backlog and describes the top items to the team. The team then determines which items they can complete during the coming sprint. The team then moves items from the product backlog to the sprint backlog. In doing so, they expand each Scrum product backlog item into one or more sprint backlog tasks\ <span style="color: rgb(126, 131, 134)">会议：产品负责人出席 Sprint 计划会议,并确定敏捷产品待办清单的优先级,并向团队描述最重要的事项。然后,团队确定哪些事项可以在即将到来的 Sprint 中完成。之后,团队将事项从产品待办清单移至 Sprint 待办清单。 在此过程中,他们将每个 Scrum 产品待办清单扩展为一个或多个 Sprint 待办清单任务</span>
