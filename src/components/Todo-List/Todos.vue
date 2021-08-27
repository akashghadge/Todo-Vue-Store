<template>
  <div class="allTodo">
    <div class="todoDiv" v-for="todo in todoList" v-bind:key="todo.id">
      <SingleTodo :todo="todo" v-on:delete-todo="deleteTodo" />
    </div>
  </div>
</template>

<script>
import SingleTodo from "./SingleTodo.vue";
export default {
  components: {
    SingleTodo,
  },
  props: {
    todoList: Array,
  },
  data() {
    return {};
  },
  methods: {
    deleteTodo(todo) {
      this.$emit("delete-todo-main", todo);
    },
  },
};
</script>

<style>
.allTodo {
  display: grid;
  justify-content: space-around;
}
.todoDiv {
  margin: 1rem;
  padding: 0.5rem;
  box-shadow: 0px 1px 2px 0px black;
  border-radius: 15px;
  max-width: 500px;
  min-width: 300px;
  min-height: 150px;
}
/* @media (max-width: 500px) {
} */
</style>