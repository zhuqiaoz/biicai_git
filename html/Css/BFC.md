# BFC

<!--
http://www.cnblogs.com/winter-cn/archive/2012/11/13/2768732.html
 -->

BFC（块级格式化上下文），是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素，反之亦然。它与普通的块框类似，但不同之处在于:

1. 可以阻止元素被浮动元素覆盖。
2. 可以包含浮动元素。
3. 可以阻止 margin 重叠。

满足下列条件之一就可触发 BFC：

- 根元素，即 HTML 元素
- float 的值不为 none
- overflow 的值不为 visible
- display 的值为 inline-block、table-cell、table-caption
- position 的值为 absolute 或 fixed

