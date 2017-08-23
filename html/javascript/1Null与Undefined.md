# Null与Undefined的区别

## Null
* Null是JavaScript的关键字
* Null是对象。
* Null是自有类型的唯一成员，它可以表示数字、字符串和对象是“无值”的。
```
typeof null // Object
Object.prototype.toString.call(null) //"[object Null]"
```


## Undefinde
* 未定义的值、未初始化
* 对象的值、数组的值返回Undefined则说明对象、数组的属性不存在。
* 如果函数没有`return`语句，则返回Undefinde
* 函数实参没有传入，则也是Undefinde。
* 在ES5中Undefined 是只读的。
* Undefined也是自有类型中的一员。
* 判断null === undefined  



## 总结

Undefined表示系统级的，出乎意料或错误值的“空值”
而null表示程序级的、正常或意料之中的“空值”



