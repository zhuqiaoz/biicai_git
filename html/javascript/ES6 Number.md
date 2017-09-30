# Number

## 二进制和八进制

1. ES6 提供了二进制和八进制数值的新的写法，分别用前缀`0b`（或`0B`）和`0o`（或`0O`）表示。
2. 从 ES5 开始，在严格模式之中，八进制就不再允许使用前缀0表示，ES6 进一步明确，要使用前缀`0o`表示。
3. 如果要将0b和0o前缀的字符串数值转为十进制，要使用Number方法。

## Number.isNaN  Number.isFinite()
1. Number.isFinite() 检查一个数值是否是有限（2^56-1）。 and typeof(num) == number
```
Number.isFinite('12.5')  //false
Number.isFinite(0.8)  //true
Number.isFinite('foo'/100)  //false
Number.inFinite(Infinity) // false
Number.inFinite(true) //false
```
2. Number.isNaN() 检查一个值是否是NaN  and typeof(num) === number
```
Number.isNaN(NaN) //true
Number.isNaN(14) //false
Number.isNaN('foo')  //false
Number.isNaN(true) //false
Number.isNaN(9/'foo') //true
Number.isNaN('true' / 'true') // true
```

* `Number.isFinite()`对于非数值一律返回`false`, `Number.isNaN()`只有对于`NaN`才返回`true`，非`NaN`一律返回`false`。

## Number.parseInt(), Number.parseFloat()

1. `ES6` 将全局方法`parseInt()`和`parseFloat()`，移植到`Number`对象上面，行为完全保持不变。


## Number.isInteger()  

1. Number.isInteger() 判断一个值是否是整数（javaScript中没有严格的整数 3 === 3.0） and typeof(num) === number and Math.floor(num) == num

## Math 扩展
###  Maht.trunc() //除去小数部分，返回整数部分
```
Math.trunc(42.1) //42
Math.trunc(-4.1) //-4
Math.trunc(-0.123) //-0
```
2. 对于非数值，Math.trunc内部使用Number方法将其先转为数值。
3. 对于空值和无法截取整数的值，返回NaN。
4. ES5 Math.trunc()
```
Math.trunc = Math.frunc || function(x){
    return x < 0 ? Math.ceil(x) : Math.floor(x);
}
```
### Math.sign()
1. Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。它会返回五种值。
    - 参数为正数，返回+1；
    - 参数为负数，返回-1；
    - 参数为0，返回0；
    - 参数为-0，返回-0;
    - 其他值，返回NaN。
2. 如果参数是非数值，会自动转为数值。对于那些无法转为数值的值，会返回NaN。
3. ES5
```
Maht.sign = Maht.sign || function(x){
    x = +x; //转化为数字类型;
    if( x === 0  || isNaN(x)){
        return 0;
    }
    return x > 0 ? 1 : -1;
}
```

### 
