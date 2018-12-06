<template>
  <div class="scheme">
    <img src="../assets/lifecycle.png">

    <a
      class="scheme__runtime"
      href="https://ru.vuejs.org/v2/guide/installation.html#Runtime-%D0%9A%D0%BE%D0%BC%D0%BF%D0%B8%D0%BB%D1%8F%D1%82%D0%BE%D1%80-vs-Runtime-only"
    ></a>
  </div>
</template>

<script>
export default {
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.scheme {
  position: relative;
  display: inline-block;

  img {
    width: 100%;
    max-width: 600px;
  }

  &__runtime {
    position: absolute;
    width: 100%;
    height: 90px;
    left: 0;
    top: 287px;
  }
}
</style>
