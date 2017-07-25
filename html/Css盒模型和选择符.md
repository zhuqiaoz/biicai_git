## CSS
### box-sizing:border-box , content-box
* 盒模型相关：border-box(怪异)模式下,width=width+border+padding;
* content-box: 正常模式 width=width;
### 选择符
+ 元素选择符：
    - 通配选择符(*),
    - 类型选择符(div),
    - ID选择符(#ID),
    - Class选择符(.Class)
+ 关系选择符：
    - 包含选择符(E F),
    - 子选择符(E > F),
    - 相邻选择符(E + F),
    - 兄弟选择符(E ~ F)(CSS3)
+ 属性选择符：
    - E[atter]:选择具有atter的E元素,
    - E[atter ="value"]:选择具有atter="value"的E元素,
    - E[atter~="value"]:选择具有atter属性且属性值为一用空格分隔的字词列表，其中一个等于value的E元素（包含只有一个值且该值等于val的情况）.
    - E[atter^="value"]:选择具有atter属性且属性值为以value开头的字符串的E元素。
    - E[atter$="value"]:选择具有atter属性且属性值为以value结尾的字符串的E元素。
    - E[atter*="value"]:选择具有att属性且属性值为包含val的字符串的E元素。
    - E[atter|="value"]:选择具有att属性且属性值为以val开头并用连接符"-"分隔的字符串的E元素，如果属性值仅为val，也将被选择。
+ 伪类选择符：
    - E:link: 设置超链接a在未被访问前的样式。
    - E:visited: 设置超链接a在其链接地址已被访问过时的样式。
    - E:hover: 设置元素在其鼠标悬停时的样式。
    - E:active: 设置元素在被用户激活（在鼠标点击与释放之间发生的事件）时的样式。
    - E:focus: 设置对象在成为输入焦点（该对象的onfocus事件发生）时的样式。webkit内核浏览器会默认给:focus状态的元素加上outline的样式。
    - E:lang(fr): 匹配使用特殊语言的E元素。
    - E:not(s): 匹配不含有s选择符的元素E。
    - E:root: 匹配E元素在文档的根元素。在HTML中，根元素永远是HTML
    - E:first-child: 匹配父元素的第一个子元素E。
    - E:last-child: 匹配父元素的最后一个子元素E。
    - E:only-child: 匹配父元素仅有的一个子元素E。
    - E:nth-child(n): 匹配父元素的第n个子元素E，假设该子元素不是E，则选择符无效。
         >E:nth-child(n)会选择父元素的第n个子元素E，如果第n个子元素不是E，则是无效选择符，但n会递增。

    - E:nth-last-child(n):匹配父元素的倒数第n个子元素E，假设该子元素不是E，则选择符无效。
    - E:first-of-type:匹配同类型中的第一个同级兄弟元素E。
    - E:last-of-type:匹配同类型中的最后一个同级兄弟元素E。
    - E:only-of-type:匹配同类型中的唯一的一个同级兄弟元素E。
    - E:nth-of-type(n):匹配同类型中的第n个同级兄弟元素E。
    - E:nth-last-of-type(n):匹配同类型中的倒数第n个同级兄弟元素E。
    - E:empty:匹配没有任何子元素（包括text节点）的元素E。
    - E:checked:匹配用户界面上处于选中状态的元素E。(用于input type为radio与checkbox时)
    - E:enabled:匹配用户界面上处于可用状态的元素E。
    - E:disabled:匹配用户界面上处于禁用状态的元素E。
    - E:target:匹配相关URL指向的E元素。

+ 伪对象选择符：

    - E:first-letter/E::first-letter: 设置对象内的第一个字符的样式。
        >此伪对象仅作用于块对象。内联对象要使用该伪对象，必须先将其设置为块级对象。该伪类常被用来配合font-size属性和float属性制作首字下沉效果。IE6在使用该选择符时有个显式的BUG：选择符与包含规则的花括号之间不能紧挨着，需留有空格或换行。同时还存在该BUG的选择符包括：E:first-line。CSS3将伪对象选择符(Pseudo-Element Selectors)前面的单个冒号(:)修改为双冒号(::)用以区别伪类选择符(Pseudo-Classes Selectors)，但以前的写法仍然有效。

    - E:first-line/E::first-line: 设置对象内的第一行的样式。
        >此伪对象仅作用于块对象。内联对象要使用该伪对象，必须先将其设置为块级对象。IE6在使用该选择符时有个显式的BUG：选择符与包含规则的花括号之间不能紧挨着，需留有空格或换行。同时还存在该BUG的选择符包括：E:first-letter。CSS3将伪对象选择符(Pseudo-Element Selectors)前面的单个冒号(:)修改为双冒号(::)用以区别伪类选择符(Pseudo-Classes Selectors)，但以前的写法仍然有效。

    - E:before/E::before 设置在对象前（依据对象树的逻辑结构）发生的内容。用来和content属性一起使用，并且必须定义content属性
    - E:after/E::after 设置在对象后（依据对象树的逻辑结构）发生的内容。用来和content属性一起使用，并且必须定义content属性
    - E::placeholder： 设置对象文字占位符的样式。
        >::placeholder 伪元素用于控制表单输入框占位符的外观，它允许开发者/设计师改变文字占位符的样式，默认的文字占位符为浅灰色。当表单背景色为类似的颜色时它可能效果并不是很明显，那么就可以使用这个伪元素来改变文字占位符的颜色。需要注意的是，除了Firefox是 ::[prefix]placeholder，其他浏览器都是使用 ::[prefix]input-placeholder
        
    - E::selection 设置对象被选择时的样式。
        >需要注意的是，::selection只能定义被选择时的background-color，color及text-shadow(IE11尚不支持定义该属性)。 文本选中