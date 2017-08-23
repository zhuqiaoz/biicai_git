# MVC

<!-- 
http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html
 -->

![Model-View-Controller](./img/01.png)

* 视图（View）：用户界面。
* 控制器（Controller）：业务逻辑
* 模型（Model）：数据保存


组件通信如下。

![MVC模型组件通信](./img/02.png)

1. View(视图层) 传送指令到 Controller(控制业务逻辑层)
2. Controller(控制业务逻辑层) 完成业务逻辑后，要求 Model(模型-数据存储) 改变状态
3. Model(模型-数据存储) 将新的数据发送到 View(视图层)，用户得到反馈

**所有通信都是单向的。**

## 互动模式

接受用户指令时，MVC 可以分成两种方式。一种是通过 View(视图层) 接受指令，传递给 Controller(业务逻辑)。


![MVC用户操作View](./img/03.png)

* 用户在View(视图层)，操作DOM.发送请求Controller(业务逻辑层),改变Model(数据存储)。从而在View展示。

另一种是直接通过controller接受指令。

![MVC controller接受指令](./img/04.png)


## **实例：Backbone**

实际项目往往采用更灵活的方式，以 Backbone.js 为例。

![Backbone实例](./img/05.png)

1. 用户可以向 View 发送指令（DOM 事件），再由 View 直接要求 Model 改变状态。
2. 用户也可以直接向 Controller 发送指令（改变 URL 触发 hashChange 事件），再由 Controller 发送给 View。
3. Controller 非常薄，只起到路由的作用，而 View 非常厚，业务逻辑都部署在 View。所以，Backbone 索性取消了 Controller，只保留一个 Router（路由器） 。

## MVP

MVP 模式将 Controller 改名为 Presenter，同时改变了通信方向。

![MVP](./img/06.png)

1. 各部分之间的通信，都是双向的。
2. View 与 Model 不发生联系，都通过 Presenter 传递。
3. View 非常薄，不部署任何业务逻辑，称为"被动视图"（Passive View），即没有任何主动性，而 Presenter非常厚，所有逻辑都部署在那里。


## MVVM

MVVM 模式将 Presenter 改名为 ViewModel，基本上与 MVP 模式完全一致。

![MVVM](./img/07.png)

唯一的区别是，它采用双向绑定（data-binding）：View的变动，自动反映在 ViewModel，反之亦然。`Angular` 、`Vue` 、`React` 、 `Ember` 都采用这种模式。