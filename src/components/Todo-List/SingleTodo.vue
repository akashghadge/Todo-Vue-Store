<template>
  <div class="singleTodo">
    <h3>{{ todo.title }}</h3>
    <p>{{ todo.desc }}</p>
    <div style="text-align: center">
      <button @click="deleteTodo($event, todo.id)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleTodo",
  props: {
    todo: Object,
  },
  methods: {
    // emiting event for parent and passing unique id
    deleteTodo(e, todoId) {
      // adding todo to store
      this.$store.commit("deleteTodo", { id: todoId });
    },
  },
};
</script>

<style>
.singleTodo {
  font-family: Arial, Helvetica, sans-serif;
  padding: 1rem;
}
.singleTodo h3 {
  text-transform: capitalize;
  text-align: center;
  color: var(--theme);
}
.singleTodo p {
  color: var(--theme);
  opacity: 0.7;
  word-spacing: 0.3rem;
  margin-top: 1rem;
}
.singleTodo button {
  width: 100px;
  padding: 0.3rem;
  margin-top: 1rem;
  font-size: 1rem;
  color: red;
  background-color: white;
  border: solid 1px red;
}
</style>