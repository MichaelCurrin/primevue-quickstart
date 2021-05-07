<template>
  <img alt="PrimeVue logo" src="./assets/primevue-logo.png" />

  <h1>PrimeVue Quickstart</h1>

  <h2>Form demo</h2>
  <p>
    <i>
      Demo of InputText and Button components. Enter "dev" as your name to see
      an error.
    </i>
  </p>

  <form @submit.prevent="greet">
    <span>Name: </span>
    <InputText type="text" v-model="text" required />

    <br />
    <br />
    <Button type="submit" label="Submit" />
  </form>

  <h3>Your responses</h3>
  <p>{{ message }}</p>

  <!-- This is not visible directly but allow pop-up notifications to happen. -->
  <Toast />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      text: "",
      results: "",
    };
  },
  methods: {
    greet() {
      if (this.text === "dev") {
        const msg = "That name is not allowed.";

        this.$toast.add({ severity: "error", summary: msg });
        return;
      }

      const msg = `Hello, ${this.text}!`;
      this.$toast.add({ severity: "info", summary: msg });
      this.results = msg;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
