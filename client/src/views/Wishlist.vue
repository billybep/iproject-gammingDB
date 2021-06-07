<template>
  <div class="container-sm wish">
    <div class="row mt-5 mb-5">
      <h1>WISHLIST</h1>
    </div>
    <div class="row">
      <!-- Wishlist Card -->
      <WishlistGame
        v-for="favorite in wishLists.data"
        :key="favorite.id"
        :favorite="favorite"/>
    </div>
  </div>
</template>

<script>
import WishlistGame from '../components/WishlistGame'
export default {
  name: 'Wishlist',
  beforeCreate () {
    this.$store.dispatch('favoriteGames')
  },
  components: {
    WishlistGame
  },
  computed: {
    wishLists () {
      return this.$store.state.wishlist
    }
  }
}
</script>

<style scoped>
  .wish {
    width: auto;
    margin-top: 3em;
    height: 35em;
    border-radius: 1em;
  }
</style>
