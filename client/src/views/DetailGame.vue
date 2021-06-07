<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-4" style="width: 320px; height: 569px;">
        <img
          v-if="detailGame.detailGame.detail[0].cover"
          class="detailCard"
          :src="detailGame.detailGame.detail[0].cover.url.replace('t_thumb', 't_cover_big')"
          alt="default.jpg">
        <img
          v-else
          class="detailCard"
          src="../assets/NO_picture.jpg"
          alt="default.jpg">
      </div>
      <div class="col-8 txt mt-2" style="height: 569px;">
        <h1>{{ detailGame.detailGame.detail[0].name}}</h1>
        <h5>Developers: {{ detailGame.detailGame.developer }}</h5>
        <h5>Platforms: {{ detailGame.detailGame.platform }}</h5>
        <h5 class="mt-5">Summary</h5>
        <p>{{ detailGame.detailGame.detail[0].summary }}</p>
        <a :href="detailGame.detailGame.detail[0].url">{{ detailGame.detailGame.detail[0].url }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGame',
  beforeCreate () {
    const id = this.$route.params.id
    this.$store.dispatch('fetchDetailGame', id)
  },
  computed: {
    detailGame () {
      return this.$store.state.detailGame
    }
  }
}
</script>

<style scoped>
</style>
