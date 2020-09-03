<template>
  <div id="app">
    <nav-bar v-if="display"></nav-bar>
    <message></message>
    <transition name="routerAnimate" mode="out-in" appear>
      <router-view router-view class="components"></router-view>
    </transition>
    <footer>
      <footer-component></footer-component>
    </footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import FooterComponent from './components/shares/FooterComponent.vue';
import NavBar from './components/shares/NavBar.vue';
import Message from './components/shares/Message.vue';

export default {
  components: {
    FooterComponent,
    NavBar,
    Message,
  },
  data() {
    return {
      display: true,
    };
  },
  methods: {
    ...mapActions({
      setError: 'message/setError',
      setSuccess: 'message/setSuccess',
    }),
    checkRoute() {
      if (this.$router.currentRoute.path === '/') {
        // Animation delay
        setTimeout(() => {
          this.display = false;
        }, 450);
      } else {
        setTimeout(() => {
          this.display = true;
        }, 450);
      }
    },
  },
  created() {
    this.checkRoute();
  },
  updated() {
    this.checkRoute();
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
body, html {
  box-sizing: border-box;
  font-family: 'Luckiest Guy', cursive;
  font-style: normal;
  font-size: 22px;
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 3.5rem!important;
  font-family: 'Luckiest Guy', cursive;
}

h2 {
  font-family: 'Roboto', sans-serif;

}

h3 {
  font-size: 2.2rem!important;
  font-family: 'Luckiest Guy', cursive;
}

h4 {
  font-size: 1.5rem!important;
  font-family: 'Luckiest Guy', cursive;
}

p {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem!important;
}

span {
  font-size: 5rem;
}

a:hover {
  color: initial!important;
  text-decoration: none!important;
}

button {
  font-size: 2.3rem!important;
  font-family: 'Roboto', sans-serif;
  border: none;
}

.components {
  min-height: 75vh;
}

.hover:hover {
  opacity: 0.8;
  cursor: pointer;
}

.contain {
  padding: 5vh 10vw;
}

.back {
  height: 4rem;
  position: absolute;
  top: 12vh;
  left: 20px;
}

/* Share color */
.bg-red {
  background-color: red;
}

.bg-marvel {
  background-color: #7A1F1E;
}

.bg-green {
  background-color: #29cc00;
}

.bg-black {
  background-color: rgb(24, 24, 24);
}

.cl-red {
  color: red;
}

.cl-green {
  color: rgb(41, 204, 0);
}

.cl-marvel {
  color: #7A1F1E;
}

.cl-white {
  color: white;
}

.cl-black {
  color: black;
}

/* Share font */
.fw-100 {
  font-weight: 100;
}

.fw-300 {
  font-weight: 300;
}

.fw-900 {
  font-weight: 900;
}

.align-center {
  text-align: center;
}

/* Share w-h */
.w-70 {
  width: 70%;
}

/* Animation */
.routerAnimate-enter-active {
  animation: slideEnter 200ms;
}
.routerAnimate-leave-active {
  animation: slideLeave 400ms;
}

@keyframes slideEnter {
  0% {
    filter: brightness(0%);
  }
  100% {
    filter: brightness(90%);
  }
}

@keyframes slideLeave {
  0% {
    filter: brightness(90%) blur(0px);
  }
  100% {
    filter: brightness(0%) blur(6px);
  }
}
</style>
