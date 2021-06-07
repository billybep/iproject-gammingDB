<template>
  <!--? Menu -->
  <section>
    <div id="menu" class="container" style="background-color: #0A0A0A;">
      <div class="row" style="height: 5rem;">
        <div class="col-12">
          <div class="row text-center">
            <div id="dropdown" class="dropdown active">
              <button class="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" style="width: 10rem;">
                Platforms
              </button>
              <ul class="dropdown-menu">
                <li><router-link
                  class="dropdown-item"
                  :to="{ name: 'Playstation', params: { categoryId: '48,9,16,7' }}">Playstation</router-link></li>
                <li><router-link
                  class="dropdown-item"
                  :to="{ name: 'Xbox', params: { categoryId: '11,12,49' }}">Xbox</router-link></li>
                <li><router-link
                  class="dropdown-item"
                  :to="{ name: 'PC', params: { categoryId: '6' }}">PC</router-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CategoryBar'
}
</script>

<style scoped>
</style>
