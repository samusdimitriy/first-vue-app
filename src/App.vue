<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <MyBtn>Click me</MyBtn>
  <Title></Title>
</template>

<script>
import Button from "./components/Button";
import Title from "./components/Title.vue";
export default {
  name: "App",
  components: {
    MyBtn: Button,
    Title,
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
