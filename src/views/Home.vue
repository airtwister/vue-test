<template>
  <div class="home">
    <div id="nav">
      <router-link to="/scheme">Схема</router-link>
      <router-link to="/v-if">v-if и v-for</router-link>
      <router-link to="/v-model">v-model и computed</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
}
</script>

<style lang="scss">
  #nav {
    font-family: Tahoma, Arial, sans-serif;
    padding: 30px;

    a {
      display: block;
      font-weight: bold;
      color: #2c3e50;
      padding: 10px;

      &:hover {
        color: #ff3333;
      }

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
