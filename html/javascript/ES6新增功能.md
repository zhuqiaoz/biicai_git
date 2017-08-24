## ES6

## 将ES6代码转换成ES5请使用Babel

## 新特性
* let 定义的变量不会被变量提升，const 定义的常量不能被修改，let 和 const 都是块级作用域

>let实际上是有变量提升的。提升至块顶端。 从块顶端到初始化变量叫做"TDZ"(临时死区)。 在临时死区中，使用变量。那么有会抛出异常。

* import导入模块、export导出模块。
* ES6定义类的概念 Class。 Class之间可以通过extends关键字实现继承。super关键字，它指代父类的实例（即父类的this对象）
* Promise
+ 箭头函数
    - this对象的指向是可变的，但是在箭头函数中，它是固定的。
    - this指向的固定化，并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。正是因为它没有this，所以也就不能用作构造函数。
    - 由于箭头函数没有自己的this，所以当然也就不能用call()、apply()、bind()这些方法去改变this的指向。
    - 箭头函数是根据外层（函数或者全局）作用域来决定this

``` 
        var arr1 = [1, 2, 3];
        var newArr1 = arr1.map(function(x) {
        console.log(x+1)
        });

        let arr3 = [1, 2, 3];
        let newArr3 = arr3.map((x) => {
        console.log(x + 1)
        });
```
template string （模板字符串）**
```
        const w = "words";
        console.log(`hello ${w}`);

```
_另外：includes repeat_
```
        //includes 判断是否包含，返回布尔值
        let con = "hello";
        console.log(con.includes('d')); //false

        //repeat 获取字符重复N次
        let str = 'hello';
        console.log(str.repeat(2));  //hellohello
```
      