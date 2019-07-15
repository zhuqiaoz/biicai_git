## Vue
### 生命周期
![Vue生命周期](../img/Vuelifecycle.png)
1. beforeCreate
> 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
2. Create
> 在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见
3. beforeMount
> render 函数调用开始
4. mounted
> el被新创建的vm.$el替换，并挂载到实例上去之后调用的钩子函数。
> 就是DOM已创建，可以操作DOM了。但是不能保证子组件已挂载。如果需要等到整个DOM都创建好，可以使用this.$nextTick替换mounted。
5. beforeUpdate
> 数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。
6. Update
> 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。

> 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。

> 注意 updated 不会承诺所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以用 vm.$nextTick 替换掉 updated
7. activated
> keep-alive 组件激活时调用。
8. deactivated
> keep-alive 组件停用时调用。
9. beforeDestroy
> 实例销毁之前调用。在这一步，实例仍然完全可用。
10. destroyed
> Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。