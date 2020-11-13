<template>
<div class="">
  <div class="mama container text-light text-center">
        <div class=" d-flex">
            <div class=" col bg-info">
                <button @click="startGame" class="btnStart btn btn-primary bg-transparent" style="width: 250px; height: 80px; margin-top: 30%; font-size: 40px; margin-bottom: 300px;">Get Start</button>
                <div>
                    <div class=" overflow-auto" style="height: 25vh;">
                        <!-- table player -->
                        <table class=" table text-light" style="font-family: 'VT323', monospace; font-size: 35px; height: fit-content; border-left: 5px solid black;
                        border-radius: 25px;">
                            <tr v-for="(user, i) in onlineUsers" :key="i">
                                <td><img src="../assets/img/pl4.png" alt="player 1"></td>
                                <td>{{ user.username }}</td>
                                <td>{{ user.score }}</td>
                                <td><img src="../assets/img/2ndW.png" alt=""></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Waiting',
  data () {
    return {
      username: localStorage.getItem('username'),
      onlineUsers: []
    }
  },
  sockets: {
    userLogin (onlineUsers) {
      console.log(onlineUsers)
      this.onlineUsers = onlineUsers
    }
  },
  methods: {
    startGame () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-image: url('https://i.imgur.com/87Ie2nd.gif');
  background-position-x: center;
  font-family: 'VT323', monospace;
}
.btnStart:hover{
    background-color: #EFA809;
}
.button:hover {background-color: #A3A5A2; color: black;}
</style>
