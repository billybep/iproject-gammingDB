<template>
  <div class="section">
    <section>
      <div class="container-fluid">
        <div class="d-flex flex-row flex-wrap justify-content-center" >
          <CategoryCard
            v-for="category in filterGames.data"
            :key="category.id"
            :category="category"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CategoryCard from '../components/CategoryCard'
export default {
  name: 'PC',
  components: {
    CategoryCard
  },
  beforeCreate () {
    const platform = this.$route.params.categoryId
    this.$store.dispatch('fetchFilterGame', platform)
  },
  computed: {
    filterGames () {
      return this.$store.state.filterGame
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
    transform: scale(1.05);     /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }
</style>
