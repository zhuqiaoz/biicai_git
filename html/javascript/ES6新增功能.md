## ES6

## 将 ES6 代码转换成 ES5 请使用 Babel

## 新特性

- let 定义的变量不会被变量提升，const 定义的常量不能被修改，let 和 const 都是块级作用域

> let 实际上是有变量提升的。提升至块顶端。 从块顶端到初始化变量叫做"TDZ"(临时死区)。 在临时死区中，使用变量。那么有会抛出异常。

> 暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。

> const === Object.defineProperty({writable : false, configurable : false})

- 新增了数据集合 Set 和 Map。四种数据集合(Array,Object,Set,Map)
  - Set: 类数组数据，没有重复的值。
  - Set：函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。
  - Set：`add(value)`添加一个值，返回 Set 本身。`delete(value)`删除一个值，返回 Boolean 确定是否删除成功。`has(value)`返回一个 Boolean，确定是否是 Set 成员。`clear()`清除所有成员，没有返回值
- import 导入模块、export 导出模块。
- ES6 定义类的概念 Class。 Class 之间可以通过 extends 关键字实现继承。super 关键字，它指代父类的实例（即父类的 this 对象）
- Symbol :新增的基本类型的值（String,Number,Null,Undefined,Boolean,Symbol,Object）。
  - 包含一个不透明且无法预测的值（从技术角度来说就是一个字符串）。一般来说你不会用到符号的实际值（因为理论上来说在不同的 JavaScript 引擎中值是不同的），所以通常你接触到的是符号的名称.
  - 生成一个独一无二的'类字符串'的值。
- Promise

  - Promise 对象用于一个异步操作的最终完成（或失败）及其结果值的表示。(简单点说就是处理异步请求。。我们经常会做些承诺，如果我赢了你就嫁给我，如果输了我就嫁给你之类的诺言。这就是 promise 的中文含义。一个诺言，一个成功，一个失败。)--MDN
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

    - resolve == 成功执行 then 的方法
    - reject == 失败执行 then 的方法(reason)
    - catch == 出错执行的方法。 //then(null, function() {}) 就等同于 catch(function() {})
    - Promise.all 提供了并行执行异步操作的能力，并且在所有异步操作执行完后才执行回调。

- Generator
  - `Generator` 函数是 ES6 提供的一种异步编程解决方案,
  - `Generator` 函数有多种理解角度。从语法上，首先可以把它理解成，`Generator` 函数是一个状态机，封装了多个内部状态。
  - 执行 `Generator` 函数会返回一个遍历器对象，也就是说，`Generator` 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。
  - 形式上，`Generator` 函数是一个普通函数，但是有两个特征。一是，function 关键字与函数名之间有一个`星号`；二是，函数体内部使用`yield`表达式，定义不同的内部状态（`yield`在英语里的意思就是“产出”）。
  ```
  function* foo(){
      yield 'hello';
      yield 'world';
      return 'reject';
  }
  var pd = foo()
  pd.next() //{value: "hello", done: false}
  pd.next() //{value: "world", done: false}
  pd.next() //{value: "reject", done: false}
  pd.next() //{value: "undefined" , done:true}
  ```
  - Generator 函数可以不用`yield`表达式，这时就变成了一个`单纯的暂缓执行函数`。
  - Generator 函数遇到`yield`关键字，函数暂停执行，返回`yield`表达式的值。下一次再从该位置继续执行。
  - `next()`方法可以带一个参数，该参数就会被当作上一个 yield 表达式的返回值。
  - `for...of`循环可以自动遍历 Generator 函数时生成的`Iterator`对象，且此时不再需要调用`next`方法。
  - Generator 函数返回的遍历器对象，还有一个`return`方法，可以返回给定的值，并且终结遍历 Generator 函数。
  - Generator 函数如果`return`方法调用时，不提供参数，则返回值的`value`属性为`undefined`。
  - 如果在 Generator 函数内部，调用另一个 Generator 函数，默认情况下是没有效果的。
  - 这个就需要用到`yield*`表达式，用来在一个 Generator 函数里面执行另一个 Generator 函数。

* 箭头函数
  - this 对象的指向是可变的，但是在箭头函数中，它是固定的。
  - this 指向的固定化，并不是因为箭头函数内部有绑定 this 的机制，实际原因是箭头函数根本没有自己的 this，导致内部的 this 就是外层代码块的 this。正是因为它没有 this，所以也就不能用作构造函数。
  - 由于箭头函数没有自己的 this，所以当然也就不能用 call()、apply()、bind()这些方法去改变 this 的指向。
  - 箭头函数是根据外层（函数或者全局）作用域来决定 this

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

- template string （模板字符串）\*\*

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

- 函数默认值

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

- 解析结构(解构赋值)
  - 结构赋值中，如果一个值不严格(===)等于 Undefined。那么这个值不生效。
  - 对象结构赋值，需要变量同名。
  - 加载模块 : 解构赋值可以帮助加载一个模块的特定子集
  ```
  const { Loader, main } = require('toolkit/loader'); //MDN
  ```
  - 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
  ```
  var {foo : baz} = {foo:'aaa',bzr : 'bbb'}
  console.log(baz) //'aaa'
  console.log(foo) //Error ReferenceError
  ```
  - 对象的嵌套结构赋值
  ```

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

- 展开运算符(扩展语法)
- 对象字面量
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

- class
- Modules

- Object [可计算的属性名称]

```
var foo = 'fox';

var myobj = {
    [foo+'bat'] : 'nb'
}

myobj['foxbat']
```
