# 严格模式(use strict)

## 变量

* 不允许意外创建全局变量
* 不能对变量调用 delete 操作符
* 变量名称限制(implements、interface、let、package、private、protected、public、static 、yield)

## 对象

* 为只读属性赋值会抛出 TypeError
* 对不可配置的（nonconfigurable）的属性使用 delete 操作符会抛出 TypeError
* 为不可扩展的（nonextensible）的对象添加属性会抛出 TypeError
* 在使用对象字面量时，属性名必须唯一。

## 函数

* 严格模式要求命名函数的参数必须唯一
* arguments不能修改。
* arguments.callee 和 arguments.caller 使用抛出 TypeError
* 严格模式对函数名也做出了限制，不允许用 implements、interface、let、package、private、protected、public、static 和 yield 作为函数名
* 只能在脚本的顶级和在函数内部声明函数(在 if 语句中声明函数会导致语法错误)

## eval()

* eval()函数在严格模式下也得到了提升。最大的变化就是它在包含上下文中不再创建变量或函数。
* 严格模式已经明确禁止使用 eval 和 arguments 作为标识符，也不允许读写它们的值。

## this
* 而在严格模式下，函数的 this 值始终是指定的值，无论指定的是什么值。
