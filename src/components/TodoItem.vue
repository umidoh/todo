<template>
  <li>
    <input type="checkbox" v-bind:id="todo.id" v-model="todo.done">
    <span v-bind:class="{ deleted: todo.done }">{{ todo.text }}</span>
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
.deleted {
  text-decoration: line-through;
}
</style>
