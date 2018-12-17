<template>
  <div id="todo-list">
    <h1>Todo List</h1>

    <input v-model="newItemText" @keyup.enter="addNewItem">
    <ol>
      <todo-item v-for="item in filteredTodoList" v-bind:todo="item" v-bind:key="item.id"></todo-item>
    </ol>

    <span>
      <input type="radio" id="opt1" name="filter" v-on:change="setFilter(filterAll)">All
      <input type="radio" id="opt2" name="filter" v-on:change="setFilter(filterActive)">Active
      <input type="radio" id="opt3" name="filter" v-on:change="setFilter(filterCompleted)">Completed
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
    const filterAll = item => item;
    return {
      todoList: [],
      newItemText: "",
      filterAll: filterAll,
      filterActive: item => !item.done,
      filterCompleted: item => item.done,
      listFilter: filterAll
    };
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
    },
    setFilter(filter) {
      this.listFilter = filter;
    }
  }
});
</script>
