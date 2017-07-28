# Console

* console.log()
* console.info()
* console.error()
* console.warn()

### 占位符
占位符|说明
:----:|:----:
%s|字符串
%d or %i |	整数
%f | 浮点数
%o | 可展开的DOM
%O | 列出DOM的属性
%c | 根据提供的css样式格式化字符串

* %s 字符串
```
console.info("%s是一门%s语言","javascript","弱")
```
* %c css格式字符串
```
console.log("%cHello world,欢迎您！","color: red; font-size: 20px"); 
```

### 查看对象的信息

```
var info={
    name:'zyx',
    sex:'男',
    age:27
}
console.dir(info)
```

### 查看dom节点所包含的xml/html

```
var index = document.body;
console.dirxml(index)
```

### 计时
```
console.time('计时开始');
for(var i=0;i<99999;i++){

}
console.timeEnd('计时结束');
```

### 判断变量是否为真.如果结果为否，则在控制台输出一条相应信息，并且抛出一个异常。
```
var a = 1;
console.assert(a)

var b;

console.assert(b)
```

### 信息分组
```
console.group("第一组信息");
　　　　console.log("%cHello world,欢迎您！","color: red; font-size: 20px");
　　　　console.log("%c JavaScript","color:blue;font-size:4rem;font-weight:700;");
console.groupEnd();
console.group("第二组信息");
　　　　console.log("JavaScipt%d",200000);
　　　　console.log("%s","javascript是一项弱语言");
console.groupEnd();
```

### 执行次数

```
console.count()
```

console.table()
