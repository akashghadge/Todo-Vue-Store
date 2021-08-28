<template>
  <div class="quote">
    <!-- conditional rendring -->
    <div v-if="quotesStore.length != 0">
      <h1>
        <q>
          {{ quotesStore[quoteI].text }}
        </q>
      </h1>
      <br />
      <p>-{{ quotesStore[quoteI].author }}</p>
    </div>
    <div v-else>
      <h1>Loading ...</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quotes: [],
      quoteI: 0,
    };
  },
  methods: {},
  mounted() {
    // fetching api data for store
    this.$store.dispatch("apiFetch");
    // changing quote after every 5 sec
    setInterval(() => {
      this.quoteI++;
    }, 5000);
  },
  computed: {
    quotesStore() {
      return this.$store.state.quotes;
    },
  },
};
</script>

<style>
.quote {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
.quote h1 {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-size: 1.5rem;
  transition: all 1s ease-in-out;
}
.quote p {
  text-align: end;
}

@media (max-width: 500px) {
  .quote {
    height: 60vh;
    padding: 1rem;
  }
  .quote h1 {
    font-size: 1rem;
  }
  .quote p {
    font-size: 70%;
  }
}
</style>