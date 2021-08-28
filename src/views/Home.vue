<template>
  <div class="home">
    <Heading />
    <InputFields />
    <Todos />
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
  data() {
    return {};
  },
  methods: {},
};
</script>
