<template>
  <div
    @click="detailGame(game.id)"
    class="card bg-dark text-white game-card"
    data-bs-toggle="tooltip"
    :title="game.name">
      <img
        v-if="game.cover"
        class="card-img auto-crop" :alt="game.id"
        :src="game.cover.url.replace('t_thumb', 't_cover_big')">
      <img
        v-else src="../assets/NO_picture.jpg"
        class="card-img auto-crop" alt="defaultImage">
    <div class="card-img">
      <i class="fas fa-heart wishlist"
        style="font-size: 20px;"
        @click="wishlist(game)">
      </i>
      <a v-if="!game.cover" href="http://www.freepik.com"><p style="font-size:10px;">Designed by pch.vector / Freepik</p></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameCard',
  props: ['game'],
  methods: {
    wishlist (vaf) {
      if (!localStorage.access_token) this.$router.push({ name: 'SignUp' })
      else this.$store.dispatch('addWishlist', { id: vaf.id, name: vaf.name })
    },
    detailGame (gameId) {
      this.$router.push({ name: 'DetailGame', params: { id: gameId } })
    }
  }
}
</script>

<style scoped>
  .card {
    border: 0px solid rgba(0,0,0,.125);
  }
  .auto-crop {
    width: 12.3em;
    height: 250px;
    object-position: center;
    object-fit:fill;
    border-radius: 15px;
  }
  .wishlist {
    position: absolute;
    z-index: 100;
    top: -5px;
    right: -7px;
    height: 25px;
    width: 25px;
  }
  .wishlist:hover {
    /* colo: #3e8e41; */
    color: rgb(255, 5, 5);
  }
</style>
