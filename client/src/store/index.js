import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    currentUser: {},
    games: [],
    wishlist: [],
    detailGame: {},
    filterGame: [],
    avatar: ''
  },
  mutations: {
    setLogin (state, value) {
      state.isLogin = value
    },
    setUser (state, payload) {
      const loggedUser = {
        id: payload.id,
        email: payload.email,
        username: payload.username
      }
      state.currentUser = loggedUser
    },
    FETCH_GAME (state, data) {
      state.games = data
    },
    FAVORITE_GAMES (state, value) {
      state.wishlist = value
    },
    FILTER_GAMES (state, data) {
      state.filterGame = data
    },
    DETAILS_GAME (state, payload) {
      state.detailGame = payload
    },
    setAvatar (state, payload) {
      state.avatar = payload
    }
  },
  getters: {
    getCurrentUser (state) {
      return state.currentUser
    }
  },
  actions: {
    fecthGames (context) {
      axios
        .get('/games', {
          headers: {
            'Access-Control-Allow-Origin': true,
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          context.commit('FETCH_GAME', data)
        })
        .catch(err => console.log(err))
    },
    favoriteGames (context) {
      axios
        .get('/games/wishlists', {
          headers: {
            'Access-Control-Allow-Origin': true,
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          context.commit('FAVORITE_GAMES', data)
        })
        .catch(err => console.log(err))
    },
    fetchFilterGame (context, category) {
      axios
        .post('/games/filter', { platform: category }, {
          headers: {
            'Access-Control-Allow-Origin': true,
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          context.commit('FILTER_GAMES', data)
        })
        .catch(err => console.log(err))
    },
    addWishlist (_, game) {
      axios
        .post(' ', game, {
          headers: {
            'Access-Control-Allow-Origin': true,
            access_token: localStorage.access_token
          }
        })
        .then(_ => console.log('suksess'))
        .catch(err => console.log(err))
    },
    removeItemWishlist (context, id) {
      axios
        .delete(`/games/wishlists/${id}`, {
          headers: {
            'Access-Control-Allow-Origin': true,
            access_token: localStorage.access_token
          }
        })
        .then(_ => {
          console.log('success delete')
          context.dispatch('favoriteGames')
          router.push({ name: 'Wishlist' }).catch(_ => {})
        })
        .catch(err => console.log(err))
    },
    signin (context, payload) {
      axios
        .post('/users/signin', payload)
        .then(({ data }) => {
          console.log(data)
          context.commit('setUser', data)
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('username', data.username)
          localStorage.setItem('email', data.email)
          router.push({ name: 'Home' }).catch(_ => {})
        })
        .catch(err => console.log(err))
    },
    signup (_, newUserData) {
      axios
        .post('/users/signup', newUserData)
        .then(({ data }) => {
          console.log(data, 'Success Sign Up')
          router.push({ name: 'Home' }).catch(_ => {})
        })
        .catch(err => console.log(err))
    },
    fetchDetailGame (context, id) {
      axios
        .get(`/games/detail/${id}`, {
          headers: {
            'Access-Control-Allow-Origin': true,
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          context.commit('DETAILS_GAME', data)
        })
        .catch(err => console.log(err))
    },
    googleLogin (context, idToken) {
      axios
        .post('/users/googleLogin', { idToken })
        .then(({ data }) => {
          console.log('Success Login', data)
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('username', data.username)
          localStorage.setItem('email', data.email)
          context.commit('setUser', data)
          context.commit('setLogin', true)
          router.go(0)
          router.push({ name: 'Home' }).catch(_ => {})
        })
        .catch((err) => console.log(err))
    }
  },
  modules: {
  }
})
