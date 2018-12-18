<template>
  <div id="todo-list">
    <h1>Todo List</h1>

    <input v-model="newItemText" @keyup.enter="addNewItem">
    <ol>
      <todo-item v-for="item in filteredTodoList" v-bind:todo="item" v-bind:key="item.id"></todo-item>
    </ol>

    <span>
      <input type="radio" id="opt1" name="filter" @input="setFilter(filterAll)" checked>All
      <input type="radio" id="opt2" name="filter" @input="setFilter(filterActive)">Active
      <input type="radio" id="opt3" name="filter" @input="setFilter(filterCompleted)">Completed
    </span>

    <p>{{ activeItemCount }} items left</p>
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
      todoList: [],
      newItemText: "",
      filterAll: item => item,
      filterActive: item => !item.done,
      filterCompleted: item => item.done,
      listFilter: undefined
    };
  },
  created: function() {
    this.listFilter = this.filterAll;
  },
  computed: {
    activeItemCount: function() {
      return this.todoList.filter(this.filterActive).length;
    },
    filteredTodoList: function() {
      return this.todoList.filter(this.listFilter);
    }
  },
  methods: {
    addNewItem() {
      this.todoList.push({ text: this.newItemText, done: false });
      this.newItemText = "";
    },
    setFilter(filter) {
      this.listFilter = filter;
    }
  }
});
</script>
