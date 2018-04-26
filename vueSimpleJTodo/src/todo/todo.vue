<template>
  <section class="real-app">
    <input 
    type="text"
    class="add-input"
    autofocus="autofocus"
    placeholder="接下去要做什么?"
    @keyup.enter = 'addTodo'
    >
    <Item      
      v-for='todo in filteredTodos'
      :todo = 'todo'
      :key='todo.id'
      @del='deleteTodo'
    ></Item>
    <Tabs
      :filter = 'filter'
      :todos = 'todos'
      @toggle='toggleFilter'
      @clearAllCompleted = 'clearAllCompleted'
    ></Tabs>    
  </section>
</template>
<script>
  import Tabs from './tabs.vue';
  import Item from './item.vue';
  let id = 0;
  export default {
    data() {
      return {
        todos: [],
        filter: 'all'
      }
    },
    components: {
      Tabs,
      Item
    },
    methods: {
      addTodo(e) {
        if(e.target.value && e.target.value.length > 0) {
          this.todos.unshift({
            id: id++,
            content: e.target.value.trim(),
            completed: false
          })
          e.target.value = '';
        }        
      },
      deleteTodo(id) {
        this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1);
      },
      toggleFilter(state) {
        this.filter = state;
      },
      clearAllCompleted() {        
        this.todos = this.todos.filter(
          todo => !todo.completed
        )
        console.log(this.todos);
      }
    },
    computed: {
      filteredTodos() {
        if (this.filter === 'all') {
          return this.todos;
        }
        // 通过filter的改变，来筛选出符合条件的item项
        const completed = this.filter === 'completed';
        return this.todos.filter(
          todo => todo.completed === completed
        )
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .real-app {
    width: 600px;
    margin: 0 auto;
    box-shadow: 0 0 5px #666;
  }
  .add-input {
    position: relative;
    margin: 0px;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    border: 0px;
    outline: none;
    color: inherit;
    padding:6px;
    border: 1px solid #999999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    padding: 16px 16px 16px 60px;
    border: none;
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03)
  }
</style>