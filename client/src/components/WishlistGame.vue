<template>
  <div class="flip-card game-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img class="auto-crop" :src="favorite.cover.url.replace('t_thumb', 't_cover_big')" alt="Avatar">
      </div>
      <i class="far fa-times-circle remove-btn" style="font-size: 28px; color: red;" @click="removeWishlist(favorite.id)"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Wishlist',
  props: ['favorite'],
  methods: {
    removeWishlist (id) {
      this.$store.dispatch('removeItemWishlist', id)
    }
  }
}
</script>

<style scope>
  .auto-crop {
    width: 12.3em;
    height: 250px;
    object-position: center;
    object-fit:fill;
    border-radius: 15px;
  }
  .game-card {
    width: 12.3em;
    height: 250px;
    display: inline-block;
    margin: 0 10px 20px;
    position: relative;
    border-radius: 20px;
    border-color: transparent;
    vertical-align: top;
  }
  .remove-btn {
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
    position: absolute;
    z-index: 10;
    top: -8px;
    right: -20px;
    height: 25px;
    width: 25px;
  }
  remove-btn:hover {
    /* colo: #3e8e41; */
    color: rgb(29, 29, 29);
  }
  /* .flip-card {
    background-color: transparent;
    width: 12.3em;
    height: 250px;
    perspective: 1000px;
  }
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .flip-card-front {
    background-color: #bbb;
    color: black;
  }
  .flip-card-back {
    background-color:#BB2D3B;
    color: white;
    border-radius: 1em;
    transform: rotateY(180deg);
  } */
</style>
