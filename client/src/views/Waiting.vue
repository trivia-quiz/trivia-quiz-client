<template>
  <div class=" container text-light text-center">
        <div class=" d-flex">
            <div class=" col bg-info">
                <button class="btnStart btn btn-primary bg-transparent" style="width: 250px; height: 80px; margin-top: 30%; font-size: 40px; margin-bottom: 300px;">Get Start</button>
                <div>
                    <div class=" overflow-auto" style="height: 25vh;">
                        <!-- table player -->
                        <table class=" table text-light" style="font-family: 'VT323', monospace; font-size: 35px; height: fit-content; border-left: 5px solid black;
                        border-radius: 25px;">
                            <tr v-for="(username, i) in usernames"
                                :key="i"
                            >
                                <td><img src="../assets/img/pl4.png" alt="player 1"></td>
                                <td>{{ username }}</td>
                                <td><img src="../assets/img/2ndW.png" alt=""></td>
                            </tr>
                            <tr>
                                <td><img src="../assets/img/pl2.png" alt="player 2"></td>
                                <td>JONY</td>
                                <td><img src="../assets/img/1stW.png" alt=""></td>
                            </tr>
                            <tr>
                                <td><img src="../assets/img/pl3.png" alt="player 2"></td>
                                <td>ANTON</td>
                                <td><img src="../assets/img/notplay.png" alt=""></td>
                            </tr>
                            <tr>
                                <td><img src="../assets/img/pl4.png" alt="player 1"></td>
                                <td>BABANG</td>
                                <td><img src="../assets/img/2ndW.png" alt=""></td>
                            </tr>
                            <tr>
                                <td><img src="../assets/img/pl2.png" alt="player 2"></td>
                                <td>JONY</td>
                                <td><img src="../assets/img/1stW.png" alt=""></td>
                            </tr>
                            <tr>
                                <td><img src="../assets/img/pl3.png" alt="player 2"></td>
                                <td>ANTON</td>
                                <td><img src="../assets/img/notplay.png" alt=""></td>
                            </tr>
                            <tr>
                                <td><img src="../assets/img/pl4.png" alt="player 1"></td>
                                <td>BABANG</td>
                                <td><img src="../assets/img/2ndW.png" alt=""></td>
                            </tr>
                            <tr>
                                <td><img src="../assets/img/pl2.png" alt="player 2"></td>
                                <td>JONY</td>
                                <td><img src="../assets/img/1stW.png" alt=""></td>
                            </tr>
                        </table>
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
      username: localStorage.getItem('username')
    }
  }
}
</script>

<style>
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
