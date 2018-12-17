<template>
  <div id="todo-list">
    <h1>Todo List</h1>
    <input v-model="newItem" @keyup.enter="addNewItem">
    <ol>
      <todo-item v-for="item in todoList" v-bind:todo="item" v-bind:key="item.id"></todo-item>
    </ol>
  </div>
</template>

<script>
import Vue from "vue";
import TodoItem from "./TodoItem.vue";

export default Vue.extend({
  name: "TodoList",
  components: {
    TodoItem
  },
  data: function() {
    return {
      todoList: [
        { id: 0, text: "A", done: false },
        { id: 1, text: "B", done: true }
      ],
      newItem: ""
    };
  },
  methods: {
    addNewItem() {
      this.todoList.push({ text: this.newItem, done: false });
    }
  }
});
</script>
