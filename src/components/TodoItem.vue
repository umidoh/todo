<template>
  <li>
    <input type="checkbox" v-bind:id="todo.id" v-model="todo.done">
    <span v-bind:class="{ done: todo.done }">{{ todo.text }}</span>
  </li>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "TodoItem",
  props: ["todo"]
});
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
