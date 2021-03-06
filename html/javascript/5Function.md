# Function

- 函数实际上是对象。每个函数都是 Function 类型的实例，而且都与其他引用类型一样具有属性和方法。

- 由于函数是对象，因此函数名实际上也是一个指向函数对象的指针，不会与某个函数绑定。

- 函数名称是指向函数的指针。因此可以有多个函数名称指向一个函数。

## Function 构造函数创建 function 实例

```
var fun = new Function("num", "return num");
```

## 函数传递参数

- ECMAScript 中所有函数的参数都是按值传递的。也就是说，把函数外部的值复制给函数内部的参数，就和把值从一个变量复制到另一个变量一样。基本类型值的传递如同基本类型变量的复制一样，而引用类型值的传递，则如同引用类型变量的复制一样。有不少开发人员在这一点上可能会感到困惑，因为访问变量有按值和按引用两种方式，而参数只能按值传递。
- 可以把 ECMAScript 函数的参数想象成局部变量。变量的是按值进行传递的。

## Function

- 没有重载 -- 如果有二个相同的函数，那么 JavaScript 在解析时。后者将覆盖前者。

* 函数声明与函数表达式
  - 在 JavaScript 解析中，函数申明将提升至代码块顶部。而函数表达式则是顺序执行的。

- 函数本身是对象，所有函数可以当作值来使用。

* 函数内部属性
  - arguments
    - callee -- 该属性是一个指针，指向拥有这个 arguments 对象的函数。
  - this
  - caller --这个属性中保存着调用当前函数的函数的引用。
* 函数属性和方法
  - length
  - prototype
* Function
  - call()
  - apply()
  - bind()

## call、apply

> call, apply 都属于 Function.prototype 的一个方法,它是 JavaScript 引擎内在实现的,因为属于 Function.prototype,所以每个 Function 对象实例,也就是每个方法都有 call, apply 属性.

> 将 obj 的属性和方法绑定到 thisObj 上，即将 obj 的运行时上下文指向 thisObj,或者说此时 thisObj 继承了 obj 的属性和方法。

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

3. 验证是否是数组(要求没有重写 toString 方法)

```
functionisArray(obj){
    return Object.prototype.toString.call(obj) === '[object Array]' ;
}
```

> 唯一区别是 apply 接受的是数组参数，call 接受的是连续参数。所以当传入的参数数目不确定时，多使用 apply。

### bing

> bind 和 call,apply 的作用很类似，都是改变 this 的指向，但是又不完全相同。
> 我们看一下 MDN 的解释：

```
bind()方法会创建一个新函数，当这个新函数被调用时，它的this值是传递给bind()的第一个参数, 它的参数是bind()的其他参数和其原本的参数.
```
