<template>
  <li>
    <input type="checkbox" v-bind:id="todo.id" v-model="todo.done">
    <span v-bind:class="{ done: todo.done }">{{ todo.title }}</span>
  </li>
</template>

<script>
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "TodoItem",
  props: ["todo"],
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
