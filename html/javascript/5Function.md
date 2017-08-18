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