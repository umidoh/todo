<template>
  <p>{{ title }}</p>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "TodoItem",
  props: {
    title: String
  }
});
</script>
