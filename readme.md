## Vue 2 学习笔记

###  常用指令

- v-bind 绑定属性
    - `<a :href="url">...</a>`
- v-on 监听事件
    - `<a @click="doSomething">...</a>`
    - 中括号指定属性名，动态绑定参数
    - 动态绑定约束：不使用表达式，全小写
    - `.`修饰符，添加额外的绑定信息 `<form v-on:submit.prevent="onSubmit">...</form>` 

### vue的默认属性以$为前缀

- `vm.$data === data`
- `vm.$el === document.getElementById('example') // => true`

```js
// 默认实例方法
vm.$watch('a', function (newValue, oldValue) {
  // 这个回调将在 `vm.a` 改变后调用
})
```

## 调试技巧

- 如何在console中修改vue中的变量
    - 在chrome-dev中打开vue-tab
    - 选择vue绑定的div
    - `$vm.targeVariable`

## 参考资料

- https://cn.vuejs.org/v2/guide/installation.html
- https://github.com/justjavac/awesome-wechat-weapp
- [vue dev tools doc](https://github.com/vuejs/vue-devtools)