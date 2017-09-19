# Null与Undefined的区别

## Null
* Null是JavaScript的关键字
* Null是对象。
* Null是自有类型的唯一成员，它可以表示数字、字符串和对象是“无值”的。
```
typeof null // Object
Object.prototype.toString.call(null) //"[object Null]"
```
>原理是这样的，不同的对象在底层都表示为二进制，在JavaScript中二进制前三位都为0的话会被判断为object类型，null的二进制表示是全0，自然前三位也是0，所以执行typeof时会返回“object”。


## Undefinde
* 未定义的值、未初始化
* 对象的值、数组的值返回Undefined则说明对象、数组的属性不存在。
* 如果函数没有`return`语句，则返回Undefinde
* 函数实参没有传入，则也是Undefinde。
* 在ES5中Undefined 是只读的。
* Undefined也是自有类型中的一员。
* 判断 null === undefined  //false



## 总结
	
Undefined表示系统级的，出乎意料或错误值的“空值”
而null表示程序级的、正常或意料之中的“空值”



