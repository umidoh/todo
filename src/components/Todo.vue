<template>
  <div id="todo">
    <h1>Todo App</h1>
    <todo-item title="하하하하"></todo-item>
  </div>
</template>

<script>
import Vue from "vue";
import TodoItem from "./TodoItem.vue";

export default Vue.extend({
  name: "Todo",
  components: {
    TodoItem
  },
  data: {
    dotoList: []
  }
});
</script>
