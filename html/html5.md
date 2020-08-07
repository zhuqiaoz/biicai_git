## html5 新增标签

    <article>标签定义外部的内容。比如来自一个外部的新闻提供者的一篇新的文章，或者来自 blog 的文本，或者是来自论坛的文本。亦或是来自其他外部源内容。</article>
    <aside>标签定义外部的内容。比如来自一个外部的新闻提供者的一篇新的文章，或者来自 blog 的文本，或者是来自论坛的文本。亦或是来自其他外部源内容。</aside>

    <bdi>标签允许您设置一段文本，使其脱离其父元素的文本方向设置</bdi>
    <canvas>标签定义图形</canvas>
    <command>标签可以定义命令按钮，比如单选按钮、复选框或按钮.</command>
    <datalist>标签定义下拉列表，标签定义选项列表。请与 input 元素配合使用该元素，来定义 input 可能的值。datalist 及其选项不会被显示出来，它仅仅是合法的输入值列表。请使用 input 元素的 list 属性来绑定 datalist</datalist>

    <details>标签用于描述文档或文档某个部分的细节。</details>
    <summary> 标签包含 details 元素的标题，"details" 元素用于描述有关文档或文档片段的详细信息。<summary>



    <embed>标签定义嵌入的内容，比如插件。</embed>
    <figcaption>标签定义 figure 元素的标题（caption）。</figcaption>
    <figure>签规定独立的流内容（图像、图表、照片、代码等等）。figure 元素的内容应该与主内容相关，但如果被删除，则不应对文档流产生影响。</figure>

    <footer>页脚标签</footer>
    <header>头部标签</header>
    <nav>导航标签</nav>
    <section> 标签定义文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分。</section>
    <dialog>标签定义对话框或者窗口</dialog>

    <time>标签定义时间和日期</time>

    <audio>标签定义声音</audio>
    <video>视频标签</video>
    <track>视频外部文本轨迹</track>



    <keygen>标签规定用于表单的密钥对生成器字段。当提交表单时，私钥存储在本地，公钥发送到服务器。</keygen>

    <mark> 标签定义带有记号的文本。请在需要突出显示文本时使用 <m> 标签。</mark>
    <meter> 标签定义已知范围或分数值内的标量测量。也被称为 gauge（尺度）。例子：磁盘用量、查询结果的相关性，等等。注释：<meter> 标签不应用于指示进度（在进度条中）。如果标记进度条，请使用 <progress> 标签。</meter>


    <output> 标签定义不同类型的输出，比如脚本的输出。</output>
    <progress> 标签标示任务的进度（进程）。</progress>





    <source> 标签为媒介元素（比如 <video> 和 <audio>）定义媒介资源。<source> 标签允许您规定可替换的视频/音频文件供浏览器根据它对媒体类型或者编解码器的支持进行选择。<source>





    <ruby>标签定义 ruby 注释（中文注音或字符）</ruby>
    <rt>标签在<ruby>显示注音</rt>
    <rp>标签定义不支持<ruby>显示的内容</rp>

## IE8 兼容

### DOCTYPE

### 使用 meta 标签渲染方式

### IE8-不支持 css 媒体查询

- 解决方案，引入 respond.js

### IE9-下 img 标签出现蓝色边框

```
img{border-width:0px;}
```

### IE8 中 text-align:center 文字标签居中，元素并不居中

- 对于文字标签如 span、input、p、textarea 等没有问题，但是其他非文字标签都会有这个问题。　　解决方法：可以在其子元素中加入 CSS 属性：margin:0 auto;

### IE8-不支持 background-size

- 但是 IE 滤镜的限制还是比较大：
  - src 路径不能是相对路径
  - 容器必须要明确的设定 width 和 height 这两个 css 样式。

### IE8-不支持 css3 样式

```
Css3.PIE
```
