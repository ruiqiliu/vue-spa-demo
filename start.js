Vue.component("todo-item",{
  template: '<li>  this is a componet time: https://scrimba.com/g/gvuedocs </li>'
});

var app = new Vue({
  el: '#example-3',
  data: {
    name: 'L R Q',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ],
    seen: true,
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
    ]
  }
})
