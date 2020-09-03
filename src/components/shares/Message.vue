<template>
    <div class="message align-left">
        <div @click="resetState" class="popup-message errors" v-if="error">{{ error }}<img class="hover" src="/img/svg/close.svg"></div>
        <div @click="resetState" class="popup-message success" v-if="success">{{ success }}<img class="hover" src="/img/svg/close.svg"></div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {

    };
  },
  methods: {
    ...mapActions({
      resetState: 'message/resetState',
    }),
  },
  computed: {
    ...mapGetters({
      error: 'message/error',
      success: 'message/success',
    }),
  },
};
</script>

<style scoped>
img {
    width: 13px;
    position: absolute;
    top: 5px;
    right: 7px;
}

.message {
    word-spacing: 0;
    position: fixed;
    top: 7vh;
    left: 0;
    display: flex;
    justify-content: left;
    width: 80%;
    z-index: 100;
}

.errors {
    background-color: rgba(221, 3, 61, 0.95);
}
.success {
    background-color: rgba(58, 255, 51, 0.945);
}

.popup-message {
    font-family: 'Luckiest Guy', cursive;
    position: relative;
    padding: .5rem 1.1rem .5rem .9rem;
    animation: coming 300ms ease-out forwards;
    font-size: 1.1rem;
    opacity: 0;
    color: white;
    font-weight: 500;
}

.coming {
    opacity: 1;
}

@keyframes coming {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
