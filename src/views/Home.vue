<template>
  <div class="home">
    <Heading />
    <InputFields v-on:add-todo="addtodo" />
    <Todos :todoList="todoList" />
  </div>
</template>

<script>
// @ is an alias to /src
import Heading from "../components/Todo-List/Heading.vue";
import InputFields from "../components/Todo-List/InputFields.vue";
import Todos from "../components/Todo-List/Todos.vue";
export default {
  name: "Home",
  components: {
    Heading,
    InputFields,
    Todos,
  },
  data: function () {
    return { todoList: [] };
  },
  methods: {
    addtodo: function (todo) {
      this.todoList.push(todo);
    },
  },
};
</script>
