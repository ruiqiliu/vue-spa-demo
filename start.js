Vue.component("todo-item",{
  template: '<li>  this is a componet time: https://scrimba.com/g/gvuedocs </li>'
});

Vue.component("blog-post", {
  props: ['post'],
  template: `<div class="blog-post">
    <h3> {{post.text}}</h3>
    <button v-on:click="$emit('enlarge-text')">
        Enlarge text
      </button>
  </div>
  `
});

Vue.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
});
var app = new Vue({
  el: '#example-3',
  data: {
    name: 'L R Q',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ],
    checkedNames:[],
    seen: true,
    awesome: 123,
    counter:0,
    loginType: "",
    message:"multi lines input",
    model_msg: "this is two way bounded demo"
  },
  methods: {
    say: function (message) {
      alert(message)
    },
    reverseName: function(){
      this.name = this.name.split(" ").reverse().join(" ");
      console.log("click on reverse button");
    }
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    },
    fullName: {
      // getter
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
})

// control in js
app.items.push({message:"add in js"});

Vue.component("todo-item2", {
  // todo-item 组件现在接受一个
  // "prop"，类似于一个自定义 attribute。
  // 这个 prop 名为 todo。
  props: ['todo'],
  template: '<li> {{todo.text}}</li>'
});

var app2 = new Vue({
  el: "#app2",
  data:{
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ],
    postFontSize:1,
    a : 8080,
    number:10,
    ok:true,
    message:"test mustache",
    id:666,
    rawHtml: '<span style="color:red">This should be red</span>'
  },
  create: function(){ // 实例被创建后 调用
    // 不要在选项属性或回调上使用箭头函数，
    // 比如 created: () => console.log(this.a) 
    // 或 vm.$watch('a', newValue => this.myMethod())。因为箭头函数并没有 this，
    // this 会作为变量一直向上级词法作用域查找，直至找到为止
    // this = app2
    console.log('a is: ' + this.a);
  },
  methods: {
    onEnlargeText: function (enlargeAmount) {
      //debugger; 发送事件时，如果没有传参数，就是undefined
      this.postFontSize += enlargeAmount;
    }
  }
})
