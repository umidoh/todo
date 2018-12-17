<template>
  <div id="todo">
    <h1>Todo App</h1>
    <ol>
      <todo-item v-for="item in todoList" v-bind:todo="item" v-bind:key="item.id"></todo-item>
    </ol>
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
  data: function() {
    return {
      todoList: [{ id: 0, text: "A" }, { id: 1, text: "B" }]
    };
  }
});
</script>
