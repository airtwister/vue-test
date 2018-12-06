<template>
  <div class="home">
    <div id="nav">
      <router-link to="/scheme">Схема</router-link>
      <router-link to="/v-if">v-if и computed</router-link>
      <router-link to="/v-model">v-model</router-link>
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
    padding: 30px;

    a {
      display: block;
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
