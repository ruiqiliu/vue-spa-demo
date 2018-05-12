new Vue({
  el: '#example-3',
  data: {
    name: 'L R Q',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  },
  methods: {
    say: function (message) {
      alert(message)
    }
  }
})
