## Vue
### 生命周期
1. beforeCreate
> 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
2. Create
> 在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见
3. beforeMount
> render 函数调用开始
4. mounted
> 