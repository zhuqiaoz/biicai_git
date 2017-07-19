# BOM

### 全局作用域
```
var age = 27;
window.sex = '男'；

delete age  //false
delete sex  //true
```
> 抛开全局变量会成为 window 对象的属性不谈，定义全局变量与在 window 对象上直接定义属性还。是有一点差别：全局变量不能通过 delete 操作符删除，而直接在 window 对象上的定义的属性可以。


### 窗口位置
1. screenLeft //窗口相对于屏幕左边
2. screenTop  //窗口相对于屏幕上边的位置
```
chrome

screenLeft === screenX
screenTop  === screenY
```
> Opera虽然也支持 screenX 和 screenY 属性，但与 screenLeft 和 screenTop 属性并不对应，因此建议大家不要在 Opera 中使用它们。使用下列代码可以跨浏览器取得窗口左边和上边的位置。

```
var leftPos = (typeof window.screenLeft == "number") ? window.screenLeft : window.screenX;
var topPos = (typeof window.screenTop == "number") ? window.screenTop : window.screenY;
```
3. moveTo() //二个参数。分别是X坐标和Y坐标
4. moveBy() //二个参数。分别是要X坐标和Y坐标移动的像素数。


### 窗口大小

+ chrom
    - chrom 窗口最大化 window.innerWidth === window.outerWidth //true
    - chrom 穿口非最大化  window.outerWidth - window.innerWidth = 10
+ firefox 
    - firefox 穿口最大化 window.outerWidth - window.innerWidth = 16






### 导航和打开窗口

window.open('URL','窗口目标','object','object')
窗口目标可以是：窗口名称(框架名称)或者特定的值。如果存在窗口名称(框架)就在该窗口名称(框架)加载相应的URL。特定值包含_self、_parent、_top 或_blank。

设置|值|说明
:----:|:----:|:----:
fullscreen|yes或no|表示浏览器窗口是否最大化。仅限IE 
height| 数值| 表示新窗口的高度。不能小于100
left| 数值 |表示新窗口的左坐标。不能是负值
location| yes或no| 表示是否在浏览器窗口中显示地址栏。不同浏览器的默认值不同。如果设置为no，地址栏可能会隐藏，也可能会被禁用（取决于浏览器）
menubar| yes或no| 表示是否在浏览器窗口中显示菜单栏。默认值为no
resizable| yes或no| 表示是否可以通过拖动浏览器窗口的边框改变其大小。默认值为no
scrollbars| yes或no| 表示如果内容在视口中显示不下，是否允许滚动。默认值为no
status| yes或no| 表示是否在浏览器窗口中显示状态栏。默认值为no
toolbar| yes或no| 表示是否在浏览器窗口中显示工具栏。默认值为no
top| 数值 |表示新窗口的上坐标。不能是负值
width| 数值| 表示新窗口的宽度。不能小于100 

* resizeTo() //二个参数，浏览器窗口的新宽度和新高度
* resizeBy() //二个参数，新窗口与原窗口的宽度和高度之差
* window.close() //可以关闭由open()打开的窗口



### 间歇调用和超时调用

* 超时调用： setTimeout()   clearTimeout()
* 间歇调用： setInterval()  clearInterval()


### 系统对话框
* alert()  
* confirm() //返回false和true
* prompt() //返回输入的值或者undefinde



### Location
属性名|列子|说明
:----:|:----:|:----:
hash | "#contents"  | 返回URL中的hash（#号后跟零或多个字符），如果URL中不包含散列，则返回空字符串
host |  "www.biicai.com:80"  | 返回服务器名称和端口号（如果有）
hostname  | "www.biicai.com" |  返回不带端口号的服务器名称
href |  "http:/www.biicai.com"  | 返回当前加载页面的完整URL。而location对象的toString()方法也返回这个值
pathname |  "/WileyCDA/" |  返回URL中的目录和（或）文件名
port |  "80" |  返回URL中指定的端口号。如果URL中不包含端口号，则这个属性返回空字符串
protocol |  "https:" |  返回页面使用的协议。通常是http:或https:search "?q=javascript" 返回URL的查询字符串。这个字符串以问号开头

* Location.replace(URL)： 接受一个参数，要导航的URL。不会在浏览器的浏览记录中存在。
* location.reload(true): 可以接受一个参数，类似与强制刷新。





### navigator

属性名|列子
:----:|:----:
appCodeName | 浏览器的名称。通常都是Mozilla，即使在非Mozilla浏览器中也是如此
appMinorVersion | 次版本信息
appName |  完整的浏览器名称
appVersion |  浏览器的版本。一般不与实际的浏览器版本对应
buildID  | 浏览器编译版本
cookieEnabled  | 表示cookie是否启用
cpuClass |  客户端计算机中使用的CPU类型（x86、68K、Alpha、PPC或Other）
javaEnabled()  | 表示当前浏览器中是否启用了Java
language  | 浏览器的主语言
mimeTypes  | 在浏览器中注册的MIME类型数组
onLine  | 表示浏览器是否连接到了因特网
opsProfile |  似乎早就不用了。查不到相关文档
oscpu  | 客户端计算机的操作系统或使用的CPU
platform  | 浏览器所在的系统平台
plugins  | 浏览器中安装的插件信息的数组
preference()  | 设置用户的首选项
product  | 产品名称（如 Gecko）
productSub  | 关于产品的次要信息（如Gecko的版本） 
registerContentHandler()  |  针对特定的MIME类型将一个站点注册为处理程序
registerProtocolHandler()  |  针对特定的协议将一个站点注册为处理程序
systemLanguage |  操作系统的语言
userAgent  | 浏览器的用户代理字符串
userLanguage |  操作系统的默认语言
userProfile |  借以访问用户个人信息的对象
vendor  | 浏览器的品牌
vendorSub  | 有关供应商的次要信息

### screen


### history

* history.go() //接受一个参数，可以是数字和网址。参数数字可以是正数和负数，代表前进和后退。 参数网址代表跳转。
* history.back()  //后退 
* history.forward() //前进


## 浏览器引擎

1. Gecko
2. WebKit
3. Konqueror
4. Opera 


































