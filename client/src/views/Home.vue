<template>
  <div class="section">
    <CarouselGame />
    <!--? Content -->
    <section>
      <div class="container-fluid mt-4">
        <div class="d-flex flex-row flex-wrap justify-content-center" >
          <GameCard
            class="zoom"
            v-for="game in games.data"
            :key="game.id"
            :game="game"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import CarouselGame from '../components/CarouselGame'
import GameCard from '../components/GameCard'

export default {
  name: 'Home',
  beforeCreate () {
    this.$store.dispatch('fecthGames')
  },
  components: {
    CarouselGame,
    GameCard
  },
  computed: {
    games () {
      return this.$store.state.games
    }
  }
}
</script>

<style scoped>
  .game-card {
    /* width: calc(15% - 20px); */
    width: 12.3em;
    display: inline-block;
    margin: 0 10px 20px;
    position: relative;
    border-radius: 20px;
    border-color: transparent;
    vertical-align: top;
  }

  .card-img {
    max-height: 13.2em;
  }

  .zoom {
    transition: transform .2s;  /* Animation */
  }

  .zoom:hover {
    transform: scale(1.02);     /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }
</style>
