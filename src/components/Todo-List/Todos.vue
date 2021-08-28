<template>
  <div class="allTodo">
    <!-- rendring each todo -->
    <div class="todoDiv" v-for="todo in todoListStore" v-bind:key="todo.id">
      <SingleTodo :todo="todo" />
    </div>
  </div>
</template>

<script>
import SingleTodo from "./SingleTodo.vue";
export default {
  components: {
    SingleTodo,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    todoListStore() {
      return this.$store.state.todoList;
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