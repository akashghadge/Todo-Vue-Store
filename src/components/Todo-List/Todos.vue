<template>
  <ul>
    <li v-for="todo in todoList" v-bind:key="todo.title">
      {{ todo.title }} : {{ todo.desc }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    todoList: Array,
  },
};
</script>

<style>
</style>