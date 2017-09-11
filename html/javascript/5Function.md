# Function

* 函数实际上是对象。每个函数都是 Function 类型的实例，而且都与其他引用类型一样具有属性和方法。

* 由于函数是对象，因此函数名实际上也是一个指向函数对象的指针，不会与某个函数绑定。

* 函数名称是指向函数的指针。因此可以有多个函数名称指向一个函数。


## Function构造函数创建function实例
```
var fun = new Function("num", "return num");
```

## Function

* 没有重载 -- 如果有二个相同的函数，那么JavaScript在解析时。后者将覆盖前者。
+ 函数声明与函数表达式
    - 在JavaScript解析中，函数申明将提升至代码块顶部。而函数表达式则是顺序执行的。
* 函数本身是对象，所有函数可以当作值来使用。
+ 函数内部属性
    - arguments
        - callee  -- 该属性是一个指针，指向拥有这个 arguments 对象的函数。
    - this
    - caller --这个属性中保存着调用当前函数的函数的引用。
+ 函数属性和方法
    - length
    - prototype
+ Function
    - call()
    - apply()
    - bind()

## call、apply
>call, apply都属于Function.prototype的一个方法,它是JavaScript引擎内在实现的,因为属于Function.prototype,所以每个Function对象实例,也就是每个方法都有call, apply属性.

>将obj的属性和方法绑定到thisObj上，即将obj的运行时上下文指向thisObj,或者说此时thisObj继承了obj的属性和方法。

### 常用用法

1. 合并几个数组
```
var array1 = [12 , "foo" , {name "Joe"} , -2458];
var array2 = ["Doe" , 555 , 100];
Array.prototype.push.apply(array1, array2); //array1 值为  [12 , "foo" , {name "Joe"} , -2458 , "Doe" , 555 , 100]
```
2. 找出数组中的最大最小值
```
var  numbers = [5, 458 , 120 , -215 ];
var maxInNumbers = Math.max.apply(Math, numbers),   //458
maxInNumbers = Math.max.call(Math,5, 458 , 120 , -215); //458
```
3. 验证是否是数组(要求没有重写toString方法)
```
functionisArray(obj){
    return Object.prototype.toString.call(obj) === '[object Array]' ;
}
```
>唯一区别是apply接受的是数组参数，call接受的是连续参数。所以当传入的参数数目不确定时，多使用apply。

### bing
>bind和call,apply的作用很类似，都是改变this的指向，但是又不完全相同。
我们看一下MDN的解释：
```
bind()方法会创建一个新函数，当这个新函数被调用时，它的this值是传递给bind()的第一个参数, 它的参数是bind()的其他参数和其原本的参数.
```


