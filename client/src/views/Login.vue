<template>
  <section class="login">
    <div class="container">
        <div class="row">
            <div class="col-3"></div>
            <div id="login" class="col-3 border rounded shadow text-center text-white">
                <h2>Enter The Game</h2>
                <form @submit.prevent="join">
                    <div class="form-group">
                        <label class="mt-2" for="username"><h5>Username</h5></label>
                        <input v-model="user.username" placeholder="darklord" type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-success btn-md">Join the game</button>
                    </div>
                </form>
            </div>
            <div class="col-3"></div>
        </div>
    </div>
  </section>
</template>

<script>

import axios from '../axios/axiosInstance'

export default {
  name: 'Login',
  data () {
    return {
      user: {
        username: ''
      }
    }
  },
  methods: {
    join () {
      const user = this.user
      axios({
        url: '/register',
        method: 'POST',
        data: user
      })
        .then(({ data }) => {
          localStorage.setItem('username', data.username)
          localStorage.setItem('score', data.score)
          this.$router.push('/waiting')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
body{
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
#login{
  background-color: black;
  top: 70px;
  left:12%;
}

</style>
