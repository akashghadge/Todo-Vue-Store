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
      todoList: [
        { id: 1, title: "akash", desc: "Enim mollit aliquip elit veniam ex. Laborum nulla amet ad et fugiat laborum cupidatat velit qui Lorem mollit Lorem. Excepteur ut est occaecat ea et. Quis dolor nostrud aliquip ad fugiat dolor ut." },
        { id: 2, title: "akash", desc: "ghadge" },
        { id: 3, title: "akash", desc: "ghadge" },
      ],
    };
  },
  methods: {
    addtodo: function (todo) {
      this.todoList.push(todo);
    },
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
