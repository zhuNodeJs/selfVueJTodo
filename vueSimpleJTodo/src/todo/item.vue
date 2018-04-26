<template>
  <div :class="['todo-item', todo.completed ? 'completed': '']">
    <input 
    type="checkbox"
    class="toggle"
    v-model='todo.completed'
    >
    <label>{{todo.content}}</label>
    <button class="destory" @click='deleteTodo'></button>
  </div>
</template>
<script>
  export default {
    props: {
      todo: {
        type: Object,
        required: true
      }
    },
    methods: {
      deleteTodo() {
        this.$emit('del', this.todo.id);
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .todo-item {
    position: relative;
    background: #ffffff;
    font-size: 24px;
    border-bottom: 1px solid rgba(0,0,0,0.06);    
  }
  .todo-item:hover .destory:after {
    content: 'x'
  }
  .todo-item label {
    white-space: pre-line;
    word-break: break-all;
    padding: 15px 60px 15px 15px;
    margin-left: 45px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
  }
  .todo-item.completed label{
    color: #d9d9d9;
    text-decoration: line-through;
  }
  .toggle {
    text-align: center;
    width: 40px;
    height: 40px;
    position: absolute;
    top:0px;
    bottom: 0px;
    margin: auto 0;
    border: none;
    outline: none;    
  }
  .toggle:after {
    content: url('../assets/images/round.svg')
  }
  .toggle:checked::after {
    content: url('../assets/images/done.svg')
  }
  .destory {
    position: absolute;
    top: 0px;
    right: 10px;
    bottom: 0px;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #cc9a9a;
    margin-bottom: 11px;
    transition: color 0.2s ease-out;
    background-color: transparent;
    border-width: 0px;
    cursor: pointer;
    outline: none;
  }

</style>
