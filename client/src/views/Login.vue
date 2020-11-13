<template>
  <section class="login">
    <div class="container bg-danger">
        <div class="mama row d-flex justify-content-center">
            <div id="login" class="col-3 border rounded shadow text-center text-white">
                <h2 class=" mt-5">Enter The Game</h2>
                <form @submit.prevent="join" class=" p-3">
                    <div class="form-group">
                        <label class="mt-5 mb-4" for="username"><h5>Username</h5></label>
                        <input v-model="user.username" placeholder="User Name" type="text" class="form-control text-center mb-5">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-success btn-md">Join the game</button>
                    </div>
                </form>
            </div>
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
          this.$socket.emit('userLogin', { username: data.username })
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
#login{
  top: 20vh;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-image: url('https://i.imgur.com/87Ie2nd.gif');
  background-position-x: center;
  font-family: 'VT323', monospace;
}
.mama{
  margin-bottom: 70vh;
}

</style>
