<template>
  <img alt="PrimeVue logo" src="./assets/primevue-logo.png" />

  <h1>PrimeVue Quickstart</h1>

  <h2>Form</h2>
  <p><i>Demo of InputText and Button components.</i></p>

  <form @submit.prevent="greet">
    <InputText type="text" v-model="text" />

    <Button type="submit" label="Submit" />
  </form>

  <h2>Reponses</h2>
  <p>{{ message }}</p>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      text: "",
      message: "",
    };
  },
  methods: {
    greet() {
      // this.$toast.add({ severity: "info", summary: "Hello " + this.text });
      this.message = this.text ? `Hello, ${this.text}!` : "";
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
