<template>
  <div class='hi'>
    Hi Vue! {{message}}
    <br>
    <button v-on:click=click> Test Click</button>
    <button v-on:click=keyup> Test key up</button>

  </div>
</template>

<script>
export default {
  data () {
    return { message: "test  msg" }
  },
  methods: {
    click: function(){
      this.message = this.message + "click"
    },
    keydown: function(){
      this.message = this.message + "keydown"
    },
    keyup: function(){
      this.message = this.message + "keyup"
    }
  }
}
</script>

<style>
.hi {
  color: red;
  font-size: 60px;
}
</style>
