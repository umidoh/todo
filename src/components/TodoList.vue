<template>
  <div id="todo-list">
    <h1>Todo List</h1>

    <input v-model="newItemTitle" @keyup.enter="addNewItem">
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
import axios from "axios";
import TodoItem from "./TodoItem.vue";

export default Vue.extend({
  name: "TodoList",
  components: {
    TodoItem
  },
  data: function() {
    return {
      todoList: [],
      newItemTitle: "",
      filterAll: item => item,
      filterActive: item => !item.done,
      filterCompleted: item => item.done,
      listFilter: undefined
    };
  },
  beforeCreate: function() {
    axios.defaults.baseURL = "http://localhost:3000";
    axios.defaults.headers.post["Content-Type"] = "application/json";
  },
  created: function() {
    this.listFilter = this.filterAll;
    axios.get("/todos").then(response => (this.todoList = response.data));
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
      const newItem = { title: this.newItemTitle, done: false };
      this.todoList.push(newItem);
      axios.post("/todos", newItem);
      this.newItemTitle = "";
    },
    setFilter(filter) {
      this.listFilter = filter;
    }
  }
});
</script>
