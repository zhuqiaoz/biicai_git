# DOM

## API

- querySelector("css 选择符") //匹配第一个匹配 Css 的元素
- querySelectorAll("css 选择符") //匹配所有匹配的 Css 的元素，返回一个 NodeList

- matchesSelector("css 选择符") //如果调用元素与该选择符匹配，返回 true；否则，返回 false

## 元素遍历

- childElementCount：返回子元素（不包括文本节点和注释）的个数。
- firstElementChild：指向第一个子元素；firstChild 的元素版。
- lastElementChild：指向最后一个子元素；lastChild 的元素版。
- previousElementSibling：指向前一个同辈元素；previousSibling 的元素版。
- nextElementSibling：指向后一个同辈元素；nextSibling 的元素版。

## HTML5

### HTML 新增 API 选择器

- getElementsByClassName() //接收一个参数，即一个包含一或多个类名的字符串，返回带有指定类的所有元素的 NodeList。
- classList
  - add(value)：将给定的字符串值添加到列表中。如果值已经存在，就不添加了。
  - contains(value)：表示列表中是否存在给定的值，如果存在则返回 true，否则返回 false。
  - remove(value)：从列表中删除给定的字符串。
  - toggle(value)：如果列表中已经存在给定的值，删除它；如果列表中没有给定的值，添加它。

### 焦点管理

- document.activeElement //获取当前焦点 === focus()
- document.hasFocus() // 确定文档是否获得了焦点

### HTMLDocument 的变化

- readyState
  - loading，正在加载文档；
  - complete，已经加载完文档。
- 兼容模式
  - 标准模式 ： document.compatMode = "CSS1Compat
  - 混杂模式 ： document.compatMode = "BackCompat"

* document.head //Head
* document.charset //字符集
* document.defaultCharset //系统默认字符集

- 自定义数据属性 data-
  - dataset 来获取(更改)设置的自定义属性
- 插入标记 - innerHTML 在读模式下，innerHTML 属性返回与调用元素的所有子节点（包括元素、注释和文本节点）对应的 HTML 标记。在写模式下，innerHTML 会根据指定的值创建新的 DOM 树，然后用这个 DOM 树完全
  替换调用元素原先的所有子节点。 - outerHTML 返回调用它的元素及所有子节点的 HTML 标签。在写模式下，outerHTML 会根据指定的 HTML 字符串创建新的 DOM 子树，然后用这个 DOM 子树完全替换调用元素 - insertAdjacentHTML()方法 插入标记的最后一个新增方式是 insertAdjacentHTML()方法。这个方法最早也是在 IE 中出现的，它接收两个参数：插入位置和要插入的 HTML 文本。 - "beforebegin"，在当前元素之前插入一个紧邻的同辈元素； - "afterbegin"，在当前元素之下插入一个新的子元素或在第一个子元素之前再插入新的子元素； - "beforeend"，在当前元素之下插入一个新的子元素或在最后一个子元素之后再插入新的子元素； - "afterend"，在当前元素之后插入一个紧邻的同辈元素。

### 文档模式

IE8 引入了一个新的概念叫“文档模式”（document mode）。页面的文档模式决定了可以使用什么功能。换句话说，文档模式决定了你可以使用哪个级别的 CSS，可以在 JavaScript 中使用哪些 API，以及如何对待文档类型（doctype）。

- IE5：以混杂模式渲染页面（IE5 的默认模式就是混杂模式）。IE8 及更高版本中的新功能都无法使用。
- IE7：以 IE7 标准模式渲染页面。IE8 及更高版本中的新功能都无法使用。
- IE8：以 IE8 标准模式渲染页面。IE8 中的新功能都可以使用，因此可以使用 Selectors API、更多 CSS2 级选择符和某些 CSS3 功能，还有一些 HTML5 的功能。不过 IE9 中的新功能无法使用。
- IE9：以 IE9 标准模式渲染页面。IE9 中的新功能都可以使用，比如 ECMAScript 5、完整的 CSS3 以及更多 HTML5 功能。这个文档模式是最高级的模式。

要强制浏览器以某种模式渲染页面，可以使用 HTTP 头部信息 X-UA-Compatible，或通过等价的&lt;meta&gt;标签来设置：

```
<meta http-equiv="X-UA-Compatible" content="IE=IEVersion">
```

- Edge：始终以最新的文档模式来渲染页面。忽略文档类型声明。对于 IE8，始终保持以 IE8 标准模式渲染页面。对于 IE9，则以 IE9 标准模式渲染页面。
- EmulateIE9：如果有文档类型声明，则以 IE9 标准模式渲染页面，否则将文档模式设置为 IE5。
- EmulateIE8：如果有文档类型声明，则以 IE8 标准模式渲染页面，否则将文档模式设置为 IE5。
- EmulateIE7：如果有文档类型声明，则以 IE7 标准模式渲染页面，否则将文档模式设置为 IE5。
- 9：强制以 IE9 标准模式渲染页面，忽略文档类型声明。
- 8：强制以 IE8 标准模式渲染页面，忽略文档类型声明。
- 7：强制以 IE7 标准模式渲染页面，忽略文档类型声明。
- 5：强制将文档模式设置为 IE5，忽略文档类型声明。

- document.documentMode //它会返回使用的文档模式的版本号

### children 属性

- children === childNodes

### contains()方法

> 这个方法接收一个参数，即要检测的后代节点。如果被检测的节点是后代节点，该方法返回 true；否则，返回 false。
