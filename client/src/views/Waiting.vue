<template>
  <div id="Quiz-page">
        <!-- margin top bisa di hapus -->
        <div class="container-fluid d-flex text-light" style="background-color: black; margin-top: 10%;">
            <!-- Score Board -->
            <div class=" col-3 d-flex flex-column">
                <div class=" row justify-content-center">
                    <div class=" m-1">
                        <!-- data player -->
                        <div class=" text-center mt-3">
                            <!-- judul -->
                            <h1 style="font-family: 'Bungee Shade', cursive;">Score</h1>
                            {{ username }}
                            <div class=" overflow-auto" style="height: 40vh;">
                                <!-- table player -->
                                <table class=" table text-light" style="font-family: 'VT323', monospace; font-size: 55px; height: fit-content; border-left: 5px solid black;
                                border-radius: 25px;">
                                    <!-- <tr>
                                        <th>ava</th>
                                        <th>name</th>
                                        <th>score</th>
                                        <th>status</th>
                                    </tr> -->
                                    <tr>
                                        <td><img src="../assets/img/pl4.png" alt="player 1"></td>
                                        <td>BABANG</td>
                                        <td>80</td>
                                        <td><img src="../assets/img/2ndW.png" alt=""></td>
                                    </tr>
                                    <tr>
                                        <td><img src="../assets/img/pl2.png" alt="player 2"></td>
                                        <td>JONY</td>
                                        <td>100</td>
                                        <td><img src="../assets/img/1stW.png" alt=""></td>
                                    </tr>
                                    <tr>
                                        <td><img src="../assets/img/pl3.png" alt="player 2"></td>
                                        <td>ANTON</td>
                                        <td>60</td>
                                        <td><img src="../assets//img/notplay.png" alt=""></td>
                                    </tr>
                                    <tr>
                                        <td><img src="../assets/img/pl4.png" alt="player 1"></td>
                                        <td>BABANG</td>
                                        <td>80</td>
                                        <td><img src="../assets/img/2ndW.png" alt=""></td>
                                    </tr>s
                                    <tr>
                                        <td><img src="../assets/img/pl2.png" alt="player 2"></td>
                                        <td>JONY</td>
                                        <td>100</td>
                                        <td><img src="../assets/img/1stW.png" alt=""></td>
                                    </tr>
                                    <tr>
                                        <td><img src="../assets/img/pl3.png" alt="player 2"></td>
                                        <td>ANTON</td>
                                        <td>60</td>
                                        <td><img src="../assets//img/notplay.png" alt=""></td>
                                    </tr>
                                    <tr>
                                        <td><img src="../assets/img/pl4.png" alt="player 1"></td>
                                        <td>BABANG</td>
                                        <td>80</td>
                                        <td><img src="../assets/img/2ndW.png" alt=""></td>
                                    </tr>
                                    <tr>
                                        <td><img src="../assets/img/pl2.png" alt="player 2"></td>
                                        <td>JONY</td>
                                        <td>100</td>
                                        <td><img src="../assets/img/1stW.png" alt=""></td>
                                    </tr>
                                    <tr>
                                        <td><img src="../assets/img/pl3.png" alt="player 2"></td>
                                        <td>ANTON</td>
                                        <td>60</td>
                                        <td><img src="../assets//img/notplay.png" alt=""></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <hr class=" my-3">
                        <div class="text-center">
                            <!-- blm di isi -->
                            <span style="font-family: 'Bungee Shade', cursive;" onclick="openNav()"><h1>open</h1></span>
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
      username: localStorage.getItem('username')
    }
  }
}
</script>

<style>

</style>
