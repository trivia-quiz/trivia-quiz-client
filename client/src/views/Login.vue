<template>
  <section class="login">
    <div class="container">
        <div class="mama row d-flex justify-content-center">
            <div id="login" class="col-3 border rounded shadow text-center text-white">
                <h1 class=" mt-5">Enter The Game</h1>
                <form @submit.prevent="join" class=" p-3">
                    <div class="form-group">
                        <label class="mt-5 mb-4" for="username"><h2>Username</h2></label>
                        <input v-model="user.username" placeholder="User Name" type="text" class="papa form-control text-center mb-5">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="papabaru btn btn-success btn-md">Join the game</button>
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
        url: 'http://localhost:3000/register',
        method: 'POST',
        data: user
      })
        .then(({ data }) => {
          localStorage.setItem('username', data.username)
          localStorage.setItem('score', data.score)
          this.$socket.emit('userLogin', { username: data.username, score: data.score })
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
.papa{
  font-size: 30px;
}
.papabaru{
  font-size: 20px;
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
  margin-bottom: 74vh;
}

</style>
