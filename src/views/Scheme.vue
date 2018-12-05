<template>
  <div class="scheme">
    <img src="../assets/lifecycle.png">
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.scheme {
  text-align: center;

  img {
    width: 100%;
    max-width: 600px;
  }
}
</style>
