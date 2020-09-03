<template>
    <div @mouseenter="display = true" @mouseleave="display = false" class="hero px-2">
        <img @click="updateFavorite(hero.id)" class="heart" :src="pathImg" alt="Add/delete to my favorites">
        <img class="profile-picture"
            :src="hero.thumbnail.path === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' ?
                'https://nsa40.casimages.com/img/2020/09/02/200902084129640048.png'
                : hero.thumbnail.path + '.' + hero.thumbnail.extension"
            alt="Picture of hero">
        <div v-if="display" class="content h-100 py-2 d-flex flex-column justify-content-between">
            <h3 class="cl-white m-0 mt-2">{{ hero.name }}</h3>
            <p class="cl-white m-0">
                {{ hero.description }}{{ hero.description.length >= 160 ? '...' : '' }}
            </p>
            <router-link :to="{name:'Details', params: {id: hero.id}}" tag="button" class="hover fw-900 bg-red cl-white button">MORE..</router-link>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { shareMethods } from '../../mixins/shareMethod';

export default {
  props: ['hero'],
  data() {
    return {
      display: false,
      pathImg: '/img/svg/listing/heart-empty.svg',
    };
  },
  mixins: ([shareMethods]),
  methods: {
    ...mapActions({
      updateFavorite: 'favorites/updateFavorite',
    }),
    setDesc() {
      this.updatePicture(this.favorites);
      if (this.hero.description.length < 10) {
        this.hero.description = 'For see more about me such as ability, comics or series come here !';
      } else if (this.hero.description.length > 160) {
        this.hero.description = this.hero.description.slice(0, 160);
      }
    },
  },
  computed: {
    ...mapState('favorites', ['favorites']),
  },
  watch: {
    favorites(value) {
      this.updatePicture(value);
    },
  },
  async created() {
    await this.setDesc();
  },
  async updated() {
    await this.setDesc();
  },
};
</script>

<style scoped>
p {
  font-family: 'Roboto', sans-serif;
  font-size: 0.85rem!important;
  padding: 0 1rem;
  font-weight: 300;
}

.button {
  align-self: center;
  font-family: 'Luckiest Guy', cursive;
  font-size: 1.5rem!important;
  margin: 0;
  width: 50%;
  padding: 0.3rem 1.8rem 0 1.8rem;
}

.hero {
  position: relative;
  margin-bottom: 15vh;
}

.hero:hover .profile-picture {
  filter: brightness(82%) blur(7px);
}

.profile-picture {
  transition: 600ms ease-out;
  box-shadow: 25px 22px 25px -1px rgba(0,0,0,0.75);
  width: 20vw;
  height: 20vw;
}

.heart {
  transition: 400ms ease-out;
  z-index: 99;
  position: absolute;
  top: -3vh;
  right: -2.5vw;
  width: 5vw;
}

.heart:hover {
  cursor: pointer;
  transform: scale(1.3);
}

.content {
  top: 0;
  height: 12vh;
  width: 20vw;
  text-align: center;
  position: absolute;
}
</style>
