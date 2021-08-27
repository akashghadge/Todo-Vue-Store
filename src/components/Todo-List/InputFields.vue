<template>
  <div class="inputFieldsDiv">
    <input type="text" placeholder="Title" v-model="title" />
    <br />
    <input type="text" placeholder="description" v-model="desc" />
    <br />
    <button class="addButton" @click="addTodo()">Add Todo</button>
  </div>
</template>

<script>
export default {
  name: "InputFields",
  data: function () {
    console.log("hello");
    return { title: "", desc: "" };
  },
  methods: {
    addTodo() {
      console.log(this.title, this.desc);
      this.$emit("add-todo", {
        title: this.title,
        desc: this.desc,
        id: Math.random(),
      });
    },
  },
};
</script>

<style>
.inputFieldsDiv {
  padding: 3rem;
  text-align: center;
}
.inputFieldsDiv input {
  width: 20vw;
  min-width: 200px;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  padding: 0.1rem;
  border: none;
  border-bottom: solid 2px var(--theme);
  outline: none;
  font-weight: 500;
}
.inputFieldsDiv input::placeholder {
  text-transform: capitalize;
  font-weight: 200;
  color: rgba(0, 0, 0, 0.781);
}
.inputFieldsDiv button {
  font-family: Arial, Helvetica, sans-serif;
  width: 100px;
  padding: 0.3rem;
  margin-top: 1rem;
  font-size: 1rem;
  color: var(--theme);
  background-color: white;
  border: solid 1px var(--theme);
}
.inputFieldsDiv button :hover {
  color: white;
  background-color: var(--theme);
}
</style>