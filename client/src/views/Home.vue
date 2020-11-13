<template>
    <div style="background-color: black;">
      <div id="mySidenav" class="sidenav">
          <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
          <a href="#"><i class="fa fa-fw fa-home"></i> Home</a>
          <a href="#"><i class="fa fa-fw fa-wrench"></i> Services</a>
          <a href="#"><i class="fa fa-fw fa-user"></i> Clients</a>
          <a href="#"><i class="fa fa-fw fa-envelope"></i> Contact</a>
          <a href="#">Log Out</a>
      </div>

      <div id="Quiz-page">
          <!-- margin top bisa di hapus -->
          <div class="container-fluid d-flex text-light" style="background-color: black;">
              <!-- Score Board -->
              <div class=" col-3 d-flex flex-column">
                  <div class=" row justify-content-center">
                      <div class=" m-1">
                          <!-- data player -->
                          <div class=" text-center mt-3">
                              <!-- judul -->
                              <h1 style="font-family: 'Bungee Shade', cursive;">Score</h1>
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
                                          <td>{{ username }}</td>
                                          <td>{{ score }}</td>
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
                              <span style="font-family: 'Bungee Shade', cursive;" @click="openNav"><h1>open</h1></span>
                          </div>
                      </div>
                  </div>
              </div>
              <!-- Quiz -->
              <div class="rom2 col-9 d-flex flex-column">
                  <div class=" row justify-content-center flex-column">
                      <div class=" col">
                          <!-- pertanyaan -->
                          <div class=" justify-content-center d-flex text-center">
                              <div v-if="result === null" class=" m-5 text-light" style="font-family: 'VT323', monospace;">
                                  <h1>Find the word who has similarity with these three words</h1>
                                  <h2>{{ questions.data.quizlist[0].quiz[0] }}</h2>
                                  <h2>{{ questions.data.quizlist[0].quiz[1] }}</h2>
                                  <h2>{{ questions.data.quizlist[0].quiz[2] }}</h2>
                              </div>
                              <div v-if="result === 100" class=" m-5 text-light" style="font-family: 'VT323', monospace;">
                                  <h1>{{ win }}</h1>
                              </div>
                          </div>
                      </div>
                      <div v-if="result === null" class=" col">
                          <!-- pilihan jawaban -->
                          <div class=" justify-content-center d-flex text-center" style="margin-top: 35%; margin-bottom: 6%;">
                              <div class=" col">
                                  <!-- jawaban A -->
                                  <button class="button" @click="check1(questions.data.quizlist[0].correct)">{{ questions.data.quizlist[0].option[0] }}</button>
                              </div>
                              <div class=" col">
                                  <!-- jawaban B -->
                                  <button class="button" @click="check2(questions.data.quizlist[0].correct)">{{ questions.data.quizlist[0].option[1] }}</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      username: localStorage.getItem('username'),
      score: +localStorage.getItem('score'),
      win: '',
      result: null
    }
  },
  methods: {
    openNav () {
      document.getElementById('mySidenav').style.width = '460px'
    },
    closeNav () {
      document.getElementById('mySidenav').style.width = '0'
    },
    fetchQuestions () {
      this.$store.dispatch('fetchQuestions')
    },
    check1 (params) {
      if (params === 1) {
        this.fetchQuestions()
        this.score += 20
        if (this.score >= 100) {
          this.win = 'CONGRATS!'
          this.result = 100
        }
      } else {
        this.fetchQuestions()
        this.score -= 20
      }
    },
    check2 (params) {
      if (params === 2) {
        this.fetchQuestions()
        this.score += 20
      } else {
        this.fetchQuestions()
        this.score -= 20
      }
    }
  },
  computed: {
    questions () {
      return this.$store.state.questions
    }
  },
  created () {
    this.fetchQuestions()
  }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
/* https://i.imgur.com/87Ie2nd.gif */
/* https://www.dictionary.com/e/wp-content/uploads/2017/09/wotd_1.gif */
.rom2{
    background-image: url('https://i.imgur.com/87Ie2nd.gif');
    background-clip: content-box;
    background-repeat: inherit;
}
/* button */
.button {
    font-family: 'VT323', monospace;
    padding: 15px 25px;
    font-size: 28px;
    text-align: center;
    cursor: pointer;
    outline: none;
    color: #fff;
    background-color: #0F4491;
    border: none;
    border-radius: 15px;
    box-shadow: 0 9px #8C574B;
  }
  .button:hover {background-color: #A3A5A2; color: black;}
  .button:active {
    background-color: #EFA809;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
  /* ================navbar================== */
  /* The side navigation menu */
.sidenav {
    font-family: 'VT323', monospace;
    height: 100%; /* 100% Full-height */
    width: 0; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: #111; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
  }
  /* The navigation menu links */
  .sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 35px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }
  /* When you mouse over the navigation links, change their color */
  .sidenav a:hover {
    color: #EFA809;
    background-color: #0F4491;
  }
  /* Position and style the close button (top right corner) */
  .sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }
  /* Style page content - use this if you want to push the page content to the right when you open the side navigation */
  #main {
    transition: margin-left .5s;
    padding: 20px;
  }
  /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
  @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
  }
  /* =============END navbar================= */
</style>
