<template>
  <li>
    <input type="checkbox" v-model="todo.done">
    <span v-bind:class="{ done: todo.done }">{{ todo.title }}</span>
    <button @click="remove">X</button>
  </li>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import { $action } from 'vuex-dry';

export default Vue.extend({
  name: "TodoItem",
  props: ["todo"],
  methods: {
    remove() {
      $action("todo/removeTodo", this.todo.id);
    }
  },
  watch: {
    todo: {
      handler(newItem, oldItem) {
        axios.put("/todos/" + newItem.id, newItem);
      },
      deep: true
    }
  }
});
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
