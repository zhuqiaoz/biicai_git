# String

## 字符方法
* length()
+ charAr()
    - charAt()方法以单字符字符串的形式返回给定位置的那个字符.
+ charCodeAt()
    - charCodeAt()转换字符编码。
* 可以使用[]来访问位置信息。

## 字符串操作方法
* concat()  === +
* slice()
* substr() //第二个参数指定要返回字符串的个数。
* substring()

###  slice()、substr()、substring()当第二个参数为负数时
* slice()方法会将传入的负值与字符串的长度相加。
* substr()方法将负的第一个参数加上字符串的长度，而将负的第二个参数转换为 0。
* substring()方法会把所有负值参数都转换为 0。

## 字符串位置方法
* indexOf() //从前 找不到返回-1.
* lastIndexOf() //从后  可以接受第二个参数，从那个位置查找。
* trim()
* toLowerCase()
* toLocaleLowerCase()
* toUpperCase()
* toLocaleUpperCase()
+ localeCompare() 这个方法比较两个字符串，并返回下列值中的一个：
    - 如果字符串在字母表中应该排在字符串参数之前，则返回一个负数（大多数情况下是-1，具体的值要视实现而定）；
    - 如果字符串等于字符串参数，则返回 0；
    - 如果字符串在字母表中应该排在字符串参数之后，则返回一个正数（大多数情况下是 1，具体的值同样要视实现而定）。
* fromCharCode()
    - charCodeAt()相反的操作。将字符串编码转换成字符串。