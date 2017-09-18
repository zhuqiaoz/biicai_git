### ES6__Object

* 新增Object.assign()方法的第一个参数是目标对象，之后还可以跟一个或多个源对象。它会遍历一个或多个源对象的所有可枚举（enumerable，参见下面的代码）的自有键（owned key，很快会介绍）并把它们复制（使用=操作符赋值）到目标对象，最后返回目标对象.

* Object.seal()  这个方法实际上会在一个现有对象上调用Object.preventExtensions(..)并把所有现有属性标记为configurable:false。密封之后不仅不能添加新属性，也不能重新配置或者删除任何现有属性（虽然可以修改属性的值）。

* Object.freeze(..)会创建一个冻结对象，这个方法实际上会在一个现有对象上调用Object.seal(..)并把所有“数据访问”属性标记为writable:false，这样就无法修改它们的值。


### 检查类型
* typeof  // string、number、boolean、Object、undefined和Object
* instanceof  // obj instanceof Object 
	- instanceof操作符的左操作数是一个普通的对象，右操作数是一个函数。instanceof回答的问题是：在a的整条[[Prototype]]链中是否有指向Foo.prototype的对象？`a instanceof Foo`
* hasOwnProperty    // obj hasOwnProerty('obj的值返回true，否则返回false，不继承原型')
    - Object.prototype.hasOwnProperty.call(obj,"a")，
* isPrototypeOf // prototypeObj.isPrototypeOf(object)
	- 在a的整条[[Prototype]]链中是否出现过Foo.prototype.`Foo.prototype.isPrototypeOf( a )`
* Object.getPrototypeOf()
    - 返回指定对象的原型（即, 内部[[Prototype]]属性的值。
* Object.prototype.toString.call(123)


## Object.getPrototypeOf

* Object.getPrototypeOf(object)
* 给定对象的原型。如果没有继承属性，则返回 null 。
* 


## Object.defineproperty

* Object对象三个特性:可写(writable),可配置(configurable),可枚举(enumerable)
* Object.defineproperty可以修改对象这三个特性。
注意：
1. 修改可配置(configurable)是单向的。//修改成false后，就不可以在修改成true
2. 修改成false后，不可以进行删除。


> const === Object.defineProperty({writable : false, configurable : false})

* 禁止一个对象添加新属性并且保留已有属性，可以使用Object.preventExtensions(..)  === Object.seal(密封)
```
var obj = {a:2}

Object.preventExtensions(obj)
```
* Object.freeze(..)会创建一个冻结对象，这个方法实际上会在一个现有对象上调
    - 用Object.seal(..)并把所有“数据访问”属性标记为writable:false，这样就无法修改它们的值。


### 屏蔽属性
```
var obj = {a:1,b:2,c:3,d:4};

var obj1 = Object.create(obj);

Object.defineProperty(obj,'a',{
    writable : false
})

obj1.a = 100;

obj1; // null
```
* obj1 继承 obj ,使用`obj1.a = 100`分三种情况
	- obj1的[[prototype]]上`obj`存在这个属性，并且没有标记为只读(writable:false)那就会直接在obj1中添加一个名为a的新属性，它是屏蔽属性。
	- 如果在[[Prototype]]链上层存在a，但是它被标记为只读（writable:false），那么无法修改已有属性或者在obj1上创建屏蔽属性。如果运行在严格模式下，代码会抛出一个错误。否则，这条赋值语句会被忽略。总之，不会发生屏蔽。
	- 如果在[[Prototype]]链上层存在a并且它是一个setter，那就一定会调用这个setter。a不会被添加到（或者说屏蔽于）obj1，也不会重新定义a这个setter。
```
var obj = {a:100}
var myobj = Object.create(obj);

obj.hasOwnProperty('a');
myobj.hasOwnProperty('a');

myobj.a++; //隐式屏蔽

myobj.hasOwnProperty('a');
```
```
    var obj = {
        a:1,
        d:4,
        get b(){
            return 2;
        },
        set c(val){
            this._c_ = val*2;
        }
    };
    Object.defineProperty(obj,'d',{
        enumerable: false,
        configurable: false,
        writable: false,
        value: "static"
    })
    var myobj = Object.create(obj);
```


### 枚举(enumerable)
* Object.keys(..)会返回一个数组，包含所有可枚举属性
* Object.getOwnPropertyNames(..)会返回一个数组，包含所有属性，无论它们是否可枚举。

