## ES6

## 将ES6代码转换成ES5请使用Babel

## 新特性
* let 定义的变量不会被变量提升，const 定义的常量不能被修改，let 和 const 都是块级作用域

>let实际上是有变量提升的。提升至块顶端。 从块顶端到初始化变量叫做"TDZ"(临时死区)。 在临时死区中，使用变量。那么有会抛出异常。

* import导入模块、export导出模块。
* ES6定义类的概念 Class。 Class之间可以通过extends关键字实现继承。super关键字，它指代父类的实例（即父类的this对象）
* Promise
    - Promise 对象用于一个异步操作的最终完成（或失败）及其结果值的表示。(简单点说就是处理异步请求。。我们经常会做些承诺，如果我赢了你就嫁给我，如果输了我就嫁给你之类的诺言。这就是promise的中文含义。一个诺言，一个成功，一个失败。)--MDN
    - Promise 是一个构造函数，包含三个状态：
        - pending: 初始状态，不是成功或失败状态。
        - fulfilled: 意味着操作成功完成。
        - rejected: 意味着操作失败。
        ```
                var flace = function(){
                    return  new Promise(function(resolve,reject){
                        setTimeout(function(){
                        var num = Math.floor(Math.random()*10+1);
                        if(num > 5){
                                resolve(num);
                        }else{
                                reject(num)
                        }
                        },1000)
                })
                }

                flace().then(function(data){
                    console.log('resolve');
                    console.log(data+'数字大于5');
                return apld;
                },
                function(reason,data){
                    console.log('rejected');
                    console.log(reason+'数字小于5');
                return apld;
                })
                .catch(function(data){
                    console.log('catch');
                    console.log(data);
                })
        ```
        * resolve == 成功执行then的方法
        * reject == 失败执行then的方法(reason)
        * catch == 出错执行的方法。 //then(null, function() {}) 就等同于catch(function() {})
        * Promise.all 提供了并行执行异步操作的能力，并且在所有异步操作执行完后才执行回调。

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
* template string （模板字符串）**
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
* 函数默认值
```
function count_d(x=10,y=20){
    return x+y
}

count_d();

//function默认值

function add([x,y,z] = [1,2,3]){
    return x+y+z;
}

//function默认值

function add1({a,b,c} = {a:1,b:2,c:3}){
    return a*b*c
}

//function默认值

function add2([a,b] = [1,2],{z:z} = {z:100}){
    return a+b+z;
}
```
* 解析结构(解构赋值)
    - 加载模块 : 解构赋值可以帮助加载一个模块的特定子集
    ```
    const { Loader, main } = require('toolkit/loader'); //MDN
    ```
```
//object

var {a,b,...c} = {a:1,b:2,c:3,d:4,e:5}

//array
var [d,e,...f] = [7,8.3,9,10,11]


//直面量

var g = [1,2,3,4,5,6];

var [h,j,k,l] = g

//解构数组

var z = ['1','2','3']

var [x,v,n] =z

//解构默认值

var m,q;

[m=4,q=9] = [1]

//解构交换变量

var w = 11;
var r = 22;

[w,r] = [r,w]

//function返回数组

function f(){
    return [1,2,3,4,5,6,7,8,9,0]
}

var [t,y,...u] = f();
```
* 展开运算符(扩展语法)
* 对象字面量
    - 当属性与值的变量同名时。
```
const name = 'Jane';
const age = 20

// es6
const person = {
  name,
  age
}

// es5
var person = {
  name: name,
  age: age
};
```
* class
* Modules