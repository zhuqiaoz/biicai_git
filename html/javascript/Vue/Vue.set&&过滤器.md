## Vue
### this.$set()
  this.set()可以动态的将实例中的data属性或者函数(对象或者数字)新增属性而达到响应式的方法。
  ```
  this.$set === Vue.set;
  new Vue({
    data:{
      number:0,
      listData:[1,2,3,4,5]
      },
    filters:{
      stringLocal : function(value){
        if(!value) return '';
        let newvalue = value.toString();
        return newvalue.toUpperCase() + newvalue.slice(1);
      }
    },
      methods:{
        setlistDate(){
          this.number+=1;
          this.listData[this.listData.length] = this.number;
          this.$set(this.listData,this.listData.length,this.number+1);
        }
      }
    })
  ```
### 过滤器 filters 
  - 使用：双花括号插值和 v-bind 表达式.可以传递参数。默认当前值
  - 过滤器是 JavaScript 函数，因此可以接收参数：```{{ value | filterA('arg1', arg2) }}```
  > 过滤器是有三个参数，第一个参数为value第二第三为arg1,arg2.

### 计算属性computed
  - 计算属性缓存： 计算属性是'惰性'的。只有依赖的响应式发生变动才会去重新计算属性值。
  - 计算属性有get和set属性。