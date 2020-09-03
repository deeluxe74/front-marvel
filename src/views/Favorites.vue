<template>
    <div class="contain align-center">
       <div v-if="arrHeros.length > 0">
            <h3 class="mb-5">My Favorites heros</h3>
            <div v-if="!load" class="frame d-flex flex-row flex-wrap justify-content-between">
                <hero @click.native="updateFavorites" v-for="(hero, index) in arrHeros" :key="'hero ' + index" :hero="hero"></hero>
            </div>
            <spinner v-else></spinner>
       </div>
       <div v-else>
            <h5 class="mb-5">You didn’t add any heroes to your favorites.</h5>
       </div>
        <div class="my-5">
            <h3>Add more as you want !</h3>
            <router-link :to="{name:'Listing', query: {page: 1, order: 'name'}}" tag="button" class="hover fw-900 bg-red cl-white button">START</router-link>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Hero from '../components/shares/Hero.vue';
import Spinner from '../components/shares/Spinner.vue';
import { shareMethods } from '../mixins/shareMethod';

export default {
  components: {
    Hero,
    Spinner,
  },
  mixins: ([shareMethods]),
  data() {
    return {
      arrHeros: [],
      load: true,
    };
  },
  computed: {
    ...mapState('favorites', ['favorites']),
  },
  async created() {
    await this.updateFavorites();
  },
};
</script>

<style scoped>
button {
    padding: 0.5rem 5rem;
}
</style>
