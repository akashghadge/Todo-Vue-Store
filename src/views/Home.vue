<template>
  <div class="home">
    <Heading />
    <InputFields v-on:add-todo="addtodo" />
    <Todos :todoList="todoList" v-on:delete-todo-main="deleteTodo" />
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
    return {
      // todo list main varible
      todoList: [],
    };
  },
  methods: {
    // add todo function
    addtodo: function (todo) {
      this.todoList.push(todo);
    },
    // delete todo
    deleteTodo(todo) {
      this.todoList = this.todoList.filter((value) => {
        if (value.id == todo.id) {
          return false;
        }
        return true;
      });
    },
  },
};
</script>
