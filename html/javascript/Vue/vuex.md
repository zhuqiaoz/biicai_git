## Vuex
### 概念
1. store
> 单一数据源 唯一实例
2. state
> 存放数据的地方，在跟目录注入Vue实例中，可以子组件中可以通过this.$state获取store实例

> mapState 创建多少计算属性的方法。可以传入对象和数组的方法。

3. getters
>  store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。

> mapGetters辅助函数仅仅是将 store 中的 getter 映射到局部计算属性

4. actions
+ Action 类似于 mutation，不同在于：
  - Action 提交的是 mutation，而不是直接变更状态。 
  - Action 可以包含任意异步操作。

> mapactions 辅助函数将组件的 methods 映射为 store.dispatch 调用

5. mutations

> 更改 Vuex 的 store 中的数据状态的唯一方法是提交 mutation

> 每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数

> mapMutations 将组件中的 methods 映射为 store.commit 调用

Redux： view——>actions——>reducer——>state变化——>view变化（同步异步一样）

Vuex： view——>commit——>mutations——>state变化——>view变化（同步操作）               view——>dispatch——>actions——>mutations——>state变化——>view变化（异步操作）