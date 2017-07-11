# Sass


## 声明变量

* 声明变量的符号“$”
* 变量名称
* 赋予变量的值

## 普通变量与默认变量

> 普通变量:定义之后可以在全局范围内使用。

> 默认变量:sass 的默认变量仅需要在值后面加上 !default 即可。

## [Sass]嵌套
* 选择器嵌套
```
SCSS选择器嵌套
nav {
  a {
    color: red;

    header & {
      color:green;
    }
  }  
}
```
* 属性嵌套
```
SCSS属性嵌套

.box {
  border: {
   top: 1px solid red;
   bottom: 1px solid green;
  }
}

```
* 伪类嵌套
```
SCSS伪类嵌套
.clearfix{
&:before,
&:after {
    content:"";
    display: table;
  }
&:after {
    clear:both;
    overflow: hidden;
  }
}
```

## 混合宏-声明混合宏
+ 声明混合宏 @mixin
    - 不带参数混合宏
    - 带参数混合宏
        * 混合宏的参数--传一个不带值的参数
        * 混合宏的参数--传一个带值的参数
        * 混合宏的参数--传多个参数

## 混合宏-调用
@include调用混合宏


## 扩展/继承
> 在 Sass 中是通过关键词 “@extend”来继承已存在的类样式块，从而实现代码的继承。


## 占位符 %placeholder
> 通过 @extend 调用的占位符，编译出来的代码会将相同的代码合并在一起。这也是我们希望看到的效果，也让你的代码变得更为干净。

## 插值#{}

## 值列表
* nth函数（nth function） 可以直接访问值列表中的某一项；
* join函数（join function） 可以将多个值列表连结在一起；
* append函数（append function） 可以在值列表中添加值； 
* @each规则（@each rule） 则能够给值列表中的每个项目添加样式。


---
## for
    @for $i from <start> through <end> 

    @for $i from <start> to <end>

* $i 表示变量

* start 表示起始值

* end 表示结束值

>这两个的区别是关键字 through 表示包括 end 这个数，而 to 则不包括 end 这个数。 

## while

```
$types: 4;
$type-width: 20px;

@while $types > 0 {
    .while-#{$types} {
        width: $type-width + $types;
    }
    $types: $types - 1;
}
```


## @each

> @each 循环就是去遍历一个列表，然后从列表中取出对应的值。

> @each $list in  $arrlist

```
$arrlist: Meizu Xiaomi Apple Huawei;

@mixin auto-list {
    @each $list in $arrlist{
        .width_#{$list} { width : 2rem }
    } 
}

body{
    @include auto-list
}
```

## 字符串函数

+ unquote($string)：删除字符串中的引号;
    - unquote( ) 函数只能删除字符串最前和最后的引号（双引号或单引号），而无法删除字符串中间的引号。如果字符没有带引号，返回的将是字符串本身。
+ quote($string)：给字符串添加引号。
    - 有单引号替换成双引号
    - 没有引号添加双引号 
* To-upper-case() 函数将字符串小写字母转换成大写字母
* To-lower-case() 将字符串转换成小写字母

## 数字函数
* percentage($value)：将一个不带单位的数转换成百分比值；
* round($value)：将数值四舍五入，转换成一个最接近的整数；
```
body{
    font-size: round(percentage(62.5/100))
}
```
* ceil($value)：将大于自己的小数转换成下一位整数；向上取整
* floor($value)：将一个数去除他的小数部分；
* abs($value)：返回一个数的绝对值；
* min($numbers…)：找出几个数值之间的最小值；
* max($numbers…)：找出几个数值之间的最大值；
* random(): 获取随机数

## 列表函数
* length($list)：返回一个列表的长度值；
* nth($list, $n)：返回一个列表中指定的某个标签值
* join($list1, $list2, [$separator])：将两个列给连接在一起，变成一个列表；
* append($list1, $val, [$separator])：将某个值放在列表的最后；
* zip($lists…)：将几个列表结合成一个多维的列表；
* index($list, $value)：返回一个值在列表中的位置值。
```
body{
    width:nth($list,index($list,red))
}
```

## Introspection函数

* type-of($value)：返回一个值的类型
    ### type-of
        * number 为数值型。
        * string 为字符串型。
        * bool 为布尔型。
        * color 为颜色型。
* unit($number)：返回一个值的单位
* unitless($number)：判断一个值是否带有单位
* comparable($number-1, $number-2)：判断两个值是否可以做加、减和合并


## Miscellaneous函数
> Miscellaneous 函数称为三元条件函数,他有两个值，当条件成立返回一种值，当条件不成立时返回另一种值

## Map函数
* map-get($map,$key)：根据给定的 key 值，返回 map 中相关的值。
* map-merge($map1,$map2)：将两个 map 合并成一个新的 map。
* map-remove($map,$key)：从 map 中删除一个 key，返回一个新 map。
* map-keys($map)：返回 map 中所有的 key。
* map-values($map)：返回 map 中所有的 value。
* map-has-key($map,$key)：根据给定的 key 值判断 map 是否有对应的 value 值，如果有返回 true，否则返回 false。
* keywords($args)：返回一个函数的参数，这个参数可以动态的设置 key 和 value。

## RGB颜色函数
* rgb($red,$green,$blue)：根据红、绿、蓝三个值创建一个颜色；
* rgba($red,$green,$blue,$alpha)：根据红、绿、蓝和透明度值创建一个颜色；
* red($color)：从一个颜色中获取其中红色值；
* green($color)：从一个颜色中获取其中绿色值；
* blue($color)：从一个颜色中获取其中蓝色值；
* mix($color-1,$color-2,[$weight])：把两种颜色混合在一起。

## HSL函数
* hsl($hue,$saturation,$lightness)：通过色相（hue）、饱和度(saturation)和亮度（lightness）的值创建一个颜色；
* hsla($hue,$saturation,$lightness,$alpha)：通过色相（hue）、饱和度(saturation)、亮度（lightness）和透明（alpha）的值创建一个颜色；
* hue($color)：从一个颜色中获取色相（hue）值；
* saturation($color)：从一个颜色中获取饱和度（saturation）值；
* lightness($color)：从一个颜色中获取亮度（lightness）值；
* adjust-hue($color,$degrees)：通过改变一个颜色的色相值，创建一个新的颜色；
* lighten($color,$amount)：通过改变颜色的亮度值，让颜色变亮，创建一个新的颜色；
* darken($color,$amount)：通过改变颜色的亮度值，让颜色变暗，创建一个新的颜色；
* saturate($color,$amount)：通过改变颜色的饱和度值，让颜色更饱和，从而创建一个新的颜色
* desaturate($color,$amount)：通过改变颜色的饱和度值，让颜色更少的饱和，从而创建出一个新的颜色；
* grayscale($color)：将一个颜色变成灰色，相当于desaturate($color,100%);
* complement($color)：返回一个补充色，相当于adjust-hue($color,180deg);
* invert($color)：反回一个反相色，红、绿、蓝色值倒过来，而透明度不变。

## Opacity函数
* alpha($color) /opacity($color)：获取颜色透明度值；
* rgba($color, $alpha)：改变颜色的透明度值；
* opacify($color, $amount) / fade-in($color, $amount)：使颜色更不透明；
* transparentize($color, $amount) / fade-out($color, $amount)：使颜色更加透明。


## @at-root
>@at-root 从字面上解释就是跳出根元素。当你选择器嵌套多层之后，想让某个选择器跳出，此时就可以使用 @at-root

## @debug
>@debug 在 Sass 中是用来调试的，当你的在 Sass 的源码中使用了 @debug 指令之后，Sass 代码在编译出错时，在命令终端会输出你设置的提示 Bug:

## @warn @error
>提示错误
