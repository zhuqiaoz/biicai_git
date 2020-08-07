# number

## number

- JavaScript 只有一种数字类型：number。这种类型包含“整数”值和小数值。
- 我说“整数”时加了引号，因为 JS 的一个长久以来为人诟病的原因是，和其他语言不同，JS 没有真正的整数。这可能在未来某个时候会改变，但是目前，我们只有 number 可用。
- 在 JS 中，一个“整数”只是一个没有小数部分的小数值。也就是说，42.0 和 42 一样是“整数”。
- JavaScript 的 number 的实现基于“IEEE 754”标准，通常被称为“浮点”。JavaScript 明确地使用了这个标准的“双精度”（也就是“64 位二进制”）格式。

### 语法

- JavaScript 中字面数字一般用 10 进制小数表达。

```
var num = 42;
var num1 = 42.0
```

- 小数的整数部分如果是 0，是可选的：

```
var num2 = 0.42;
var num3 = .42;

num2 === num3
```

- 小数在.之后的小数部分如果是 0，是可选的：

```
var num4 = 42.;
var num5 = 42.0;

num4 === num5
```

> 42.是极不常见的，如果你正在努力避免别人阅读你的代码时感到困惑，它可能不是一个好主意。但不管怎样，它是合法的。

- 非常大或非常小的 number 将默认以指数形式输出，与 toExponential()方法的输出一样，比如：

```
var num6 = 42E10;
console.log(num6);
num6.toExponential() //"4.2e+11"
```

- 因为 number 值可以用 Number 对象包装器封装，number 值可以访问内建在 Number.prototype 上的方法

```
var num7 = 42.56
num7.toFixed(0); //"43"
num7.toFixed(1); //"42.6"
num7.toFixed(2); //"42.56"
num7.toFixed(3); //"42.560"
num7.toFixed(4); //"42.56000"
num7.toFixed(5); //"42.560000"
```

> 要注意的是，它的输出实际上是一个 number 的 string 表现形式，而且如果你指定的位数多于值持有的小数位数时，会在右侧补 0。

- toPrecision(..)很相似，但它指定的是有多少 有效数字 用来表示这个值：

```
var num8 = 42.56;
num8.toPrecision(1); // "4e+1"
num8.toPrecision(2); // "43"
num8.toPrecision(3); // "42.6"
num8.toPrecision(4); // "42.56"
```

- `.`数字操作符和属性操作符`.`会出现一些问题：42.这个点会解析成数字操作符的（42.0）

```
42.toFixed(3) //不合法的语句

// 这些都是合法的：
(42).toFixed( 3 );	// "42.000"
0.42.toFixed( 3 );	// "0.420"
42..toFixed( 3 );   // "42.000"
42 .toFixed(3)  //"42.00"  注意42后面的空格
```

### 整数

- 整数 Number.isInteger()

```
Number.isInteger(42)
Number.isInteger(42.0)
Number.isInteger(42.3)
```

- 安全整数 Number.isSafeInteger()

> 符合 IEEE-754 标准的值

### isNAN

- NAN :是一种“哨兵值”（一个被赋予了特殊意义的普通的值），它代表 number 集合内的一种特殊的错误情况。这种错误情况实质上是：“我试着进行数学操作但是失败了，而这就是失败的 number 结果。”
