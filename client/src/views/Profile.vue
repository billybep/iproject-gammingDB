<template >
  <div class="container">
    <div class="col-4 card mt-5 text-center">
      <img class="profile" src="../assets/NO_picture.jpg" alt="default" style="width:100%;">
      <a href="http://www.freepik.com"><p style="font-size:10px;">Designed by pch.vector / Freepik</p></a>
      <h3 class="mt-3">{{ username }}</h3>
      <p class="title">{{ email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      username: localStorage.username,
      email: localStorage.email
    }
  }
}
</script>

<style scoped>
  .card {
    margin: auto  ;
  }
  .profile{
    object-fit:contain;
    max-height: 300px;
  }
</style>
