# Array

## `ES6`新增的方法
* `Array.of()`
    - 用于将参数依次转化为数组中的一项，然后返回这个新数组，而不管这个  参数是数字还是其它
    - 
    ```
    if(!Array.of){
        Array.of = function(){
            return Array.prototype.slice.call(arguments);
        }
    }
    ```
* `Array.from()`
    - 将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）。
* `Array.copyWithin(target,start,end)`
    - 在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。
* `Array.find()`
    - 查找符合条件的元素，返回第一个值。
* `Array.findIndex()`--（当前值，当前的位置，数组）
    - 查找符合的元素，返回值的索引。无返回-1
* `Array.fill()`
    - 填充数组内容。
* `Array.includes()`
    - 判断数组中，是否存在指定的至。返回一个boolean
## `Array.isArray`
```
var a ={
    __proto__ : Array.prototype
};

a instanceof Array  //true OR false

a.constructor ===  Array //true OR false

Array.prototype.isPrototypeOf(a) //true OR false

Object.getPrototypeOf(a) === Array.prototype // true OR false

Object.prototype.toString.call(a)  //靠谱
```
## Array.length

* 如果一个可以被强制转换为10进制number的string值被用作键的话，它会认为你想使用number索引而不是一个string键！

```
var arr = [];

arr["123"] = 123;

arr.length //124
```


## `Array.prototype` 所有的方法

* Object.getOwnPropertyNames(Array.prototype)

## 改变自身的方法
* pop()
* push()
* reverse() //数组的引用
* shift()
* sort()
    - `localeCompare`和`Intl.Collator`
```
若 function(a, b) < 0，那么a 将排到 b 前面；
若 function(a, b) = 0，那么a 和 b 相对位置不变；
若 function(a, b) > 0，那么a , b 将调换位置；
```
* splice()
* unshift()

## 不会改变自身的方法
* concat()
    - 若`concat()`方法中不传入参数，那么将基于原数组浅复制生成一个一模一样的新数组（指向新的地址空间）深拷贝？
* join()
* slice()
    - 浅复制
    - 由于`slice()`是浅复制，复制到的对象只是一个引用，改变原数组array的值，array2也随之改变
    - `slice()` 方法第一个参数为负数时的特性，我们可以非常方便的拿到数组的最后一项元素
```
var array = [{color:"yellow"}, 2, 3]; 
var array2 = array.slice(0,1); 
console.log(array2); // => [{color:"yellow"}] array[0]["color"] = "blue"; 
console.log(array2); // => [{color:"bule"}]
```

* toString()
    - `toString() `方法返回数组的字符串形式，该字符串由数组中的每个元素的 `toString()` 返回值经调用 `join()` 方法连接（由逗号隔开）组成。
    - 当数组直接和字符串作连接操作时，将会自动调用其toString() 方法。
* toLocateString()
* indexOf() 
    - 查找元素出现的索引。如果没有，返回-1.
    - `indexof()`使用的是严格相等===。
* lastIndexOf()
    - `lastIndexOf() `方法用于查找元素在数组中最后一次出现时的索引，如果没有，则返回-1。并且它是`indexOf()`的逆向查找，即从数组最后一个往前查找。
* 未标准的toSource()
    - `toSource()`返回数组的源代码,只有firefox实现。
* ES7新增的方法includes()
    - `includes()` 方法基于ECMAScript 2016（ES7）规范，它用来判断当前数组是否包含某个指定的值，如果是，则返回 true，否则返回 false。
    - `includes()` 能够发现NaN，而indexof()不可以。

## 遍历方法
* forEach()
    - 方法指定数组的每项元素都执行一次传入的函数，返回值为undefined. 语法 arr.forEach(fn,thisArg)
    - fn表示每一项上执行的函数。接受三个参数。 value、index、array 。 thisarg可选
    ```
    var arr = [1,2,3];
    var obj = {name:'zyx'};
    var sf = arr.forEach(function(value,index,array){
        array[index] = value * value;
        console.log(this.name); // 3次zyx
    },obj);

    console.log(arr); // 1,4,9 
    console.log(sf); //undefined
    ```
* every()
    - `every()` 方法使用传入的函数测试所有元素，只要其中有一个函数返回值为 false，那么该方法的结果为 false；如果全部返回 true，那么该方法的结果才为 true。因此 every() 方法存在如下规律：
    - 若需检测数组中存在元素大于100 （即 one > 100），那么我们需要在传入的函数中构造 “false” 返回值 （即返回 item <= 100），同时整个方法结果为 false 才表示数组存在元素满足条件；（简单理解为：若是单项判断，可用 one false ===> false）
    - 若需检测数组中是否所有元素都大于100 （即all > 100）那么我们需要在传入的函数中构造 “true” 返回值 （即返回 item > 100），同时整个方法结果为 true 才表示数组所有元素均满足条件。(简单理解为：若是全部判断，可用 all true ===> true）
* some()
* filter()
    - `filter()` 方法使用传入的函数测试所有元素，并返回所有通过测试的元素组成的新数组。它就好比一个过滤器，筛掉不符合条件的元素。
    ```
    var arr = [23,15,9]
    var arr2 = arr.filter(function(value,index,array){
        return value > 10
    });

    console.log(arr2)
    ```
* map()
    - `map()` 方法遍历数组，使用传入函数处理每个元素，并返回函数的返回值组成的新数组。
* reduce()
    - `reduce()` 方法接收一个方法作为累加器，数组中的每个值(从左至右) 开始合并，最终为一个值。
* reduceRight() 
    - reduce().reverse()
* entries()
* find()
* findIndex()
* keys()
* values()


## 栈方法
* push  // 返回插入后数据的长度
* pop   // 返回删除后的数据



## 队列方法
* shift   // 返回插入的数据
* unshift // 数据的长度  

## 重排序方法
* reverse()
* sort

## 操作方法
* concat()   // 合并
* slice()   // 返回新数组
+ splice()  // 返回删除的数组项目
    - **删除：** 可以删除任意数量的项，只需指定 2 个参数：要删除的第一项的位置和要删除的项数。
    - **插入：** 可以向指定位置插入任意数量的项，只需提供 3 个参数：起始位置、0（要删除的项数）和要插入的项。如果要插入多个项，可以再传入第四、第五，以至任意多个项。
    - **替换：** 可以向指定位置插入任意数量的项，且同时删除任意数量的项，只需指定 3 个参数：起始位置、要删除的项数和要插入的任意数量的项。插入的项数不必与删除的项数相等。

## 位置方法
* indexof()
* lastIndexOf()

## 迭代方法
* every()：对数组中的每一项运行给定函数，如果该函数对每一项都返回 true，则返回 true。
* filter()：对数组中的每一项运行给定函数，返回该函数会返回 true 的项组成的数组。
* forEach()：对数组中的每一项运行给定函数。这个方法没有返回值。
* map()：对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
* some()：对数组中的每一项运行给定函数，如果该函数对任一项返回 true，则返回 true。

## 归并方法
* reduce()
* reduceRight()

* 这两个方法都会迭代数组的所有项，然后构建一个最终返回的值。其中，reduce()方法从数组的第一项开始，逐个遍历到最后。而 reduceRight()则从数组的最后一项开始，向前遍历到第一项。

* 这两个方法都接收两个参数：
    1. 一个在每一项上调用的函数和（可选的）作为归并基础的初始值。传给 reduce()和 reduceRight()的函数接收 4 个参数：
    2. 前一个值(累加器累加回调的返回值)、当前值、数组的索引和数组对象。这个函数返回的任何值都会作为第一个参数自动传给下一项。第一次迭代发生在数组的第二项上，因此第一个参数是数组的第一项，第二个参数就是数组的第二项。

* 金钱格式化

```
function formatCash(str) {
    return str.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + ',')) + prev
    })
}
console.log(formatCash('1234567890'))
```