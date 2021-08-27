<template>
  <h1 class="heading">To-Do List</h1>
</template>

<script>
export default {
  name: "Heading",
};
</script>

<style>
.heading {
  font-size: 3rem;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--theme);
  text-align: center;
  padding: 2rem 0rem;
}

@media (max-width: 425px) {
  .heading {
    font-size: 2.5rem;
    padding: 1rem 0rem;
  }
}
</style>