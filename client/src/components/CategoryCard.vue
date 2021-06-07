<template>
  <div
    @click="detailGame(category.id)"
    class="card bg-dark text-white game-card zoom"
    data-bs-toggle="tooltip"
    :title="category.name">
      <img
        v-if="category.cover"
        :src="category.cover.url.replace('t_thumb', 't_cover_big')"
        class="card-img auto-crop" alt="defaultImage">
      <img
        v-else
        src="../assets/NO_picture.jpg"
        class="card-img auto-crop" alt="defaultImage">
      <div class="card-img-overlay">
      <i class="fas fa-heart wishlist"
        style="font-size: 20px;"
        @click="wishlist(category)">
      </i>
      <a v-if="!category.cover" href="http://www.freepik.com"><p style="font-size:10px;">Designed by pch.vector / Freepik</p></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryCard',
  props: ['category'],
  methods: {
    wishlist (vaf) {
      if (!localStorage.access_token) this.$router.push({ name: 'SignUp' })
      else this.$store.dispatch('addWishlist', { id: vaf.id, name: vaf.name })
    },
    detailGame (gameId) {
      console.log('clik')
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
    z-index: 10;
    top: -5px;
    right: -9px;
    height: 25px;
    width: 25px;
  }
  .wishlist:hover {
    /* colo: #3e8e41; */
    color: rgb(255, 5, 5);
  }

  .card-img {
    max-height: 264px;
  }

  .zoom {
    transition: transform .2s;  /* Animation */
  }

  .zoom:hover {
    transform: scale(1.05);     /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }
</style>
