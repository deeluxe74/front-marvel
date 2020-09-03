<template>
    <div v-if="!load && hero" class="align-center">
        <div v-if="hero.thumbnail.path || hero.description" class="d-flex flex-column bloc">
            <img class="back hover" @click="$router.go(-1)" src="/img/svg/listing/back.svg" alt="Return one page back">
            <div class="mb-5 d-flex flex-row justify-content-center align-items-center">
                <h1>{{ hero.name }}</h1>
                <img @click="updateFavorite(hero.id)" class="heart ml-5" :src="pathImg" alt="Add/delete to my favorites">
            </div>
            <div class="d-flex flex-row">
                <div class="mt-4 w-70">
                    <h3 class="cl-green">Who am i ?</h3>
                    <p class="fw-100">{{ hero.description === false ? empty.description : hero.description }}</p>
                    <h4 class="mt-5">I have nothing to prove to you</h4>
                    <h5 class="cl-marvel fw-300">CAROL DANVERS / CAPTAIN MARVEL</h5>
                </div>
                <img class="frame" :src="hero.thumbnail.path === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' ?
                  empty.picture : hero.thumbnail.path + '.' + hero.thumbnail.extension" alt="picture of hero">
            </div>
          <div>
            <a target="_blank" class="hover fw-900 bg-green cl-white button" :href="hero.urls[1].url">More about me</a>
          </div>
        </div>

        <div v-if="asComics" class="bg-marvel cl-white bloc">
          <movies-comics @arrayEmpty="arrayEmpty" :id="hero.id" :category="'comics'"></movies-comics>
        </div>

        <div v-if="asSeries" class="bg-white cl-black bloc">
          <movies-comics @arrayEmpty="arrayEmpty" :id="hero.id" :category="'series'"></movies-comics>
        </div>
    </div>

    <div v-else class="h-100 d-flex justify-content-center align-items-center">
        <spinner :message="'The hero as you try access is not in database. Please retry with one other !'"></spinner>
    </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapState } from 'vuex';
import { shareMethods } from '../../mixins/shareMethod';
import Spinner from './Spinner.vue';
import MoviesComics from './MoviesComics.vue';
// eslint-disable-next-line import/named
import { publicKey } from '../../marvel';

export default {
  data() {
    return {
      load: true,
      id: this.$route.params.id,
      hero: null,
      empty: {
        description: "I don't have any description available, but you can see my stats, biography, where i am born and all the stuff who you want ! For that just follow the next button.",
        picture: 'https://nsa40.casimages.com/img/2020/09/02/200902084129640048.png',
      },
      asComics: true,
      asSeries: true,
      pathImg: '/img/svg/listing/heart-empty.svg',
    };
  },
  mixins: ([shareMethods]),
  components: {
    Spinner,
    MoviesComics,
  },
  methods: {
    ...mapActions({
      updateFavorite: 'favorites/updateFavorite',
    }),
    arrayEmpty(value) {
      if (value === 'comics') {
        this.asComics = false;
      } else {
        this.asSeries = false;
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
    this.load = true;
    await axios.get(`http://gateway.marvel.com/v1/public/characters/${this.id}?ts=1&apikey=${publicKey}&hash=311843f0c7ec4abd6a923eeeea1cb05c&limit=1`)
      .then((response) => {
        // eslint-disable-next-line prefer-destructuring
        this.hero = response.data.data.results[0];
      });
    this.updatePicture(this.favorites);
    this.load = false;

    if (this.hero.description.length < 10) {
      this.hero.description = 'For see more about me such as ability, comics or series come here !';
    }
  },
  async updated() {
    await this.updatePicture(this.favorites);
  },
};
</script>

<style scoped>
h3 {
  font-size: 3rem!important;
}

h4 {
  font-size: 1.2rem!important;
}

h5 {
  font-size: 0.8rem!important;
}

p {
  padding: 0 2rem;
  text-align: center;
}

.frame {
  width: 30vw;
  margin-bottom: 2rem;
}

.heart {
  transition: 400ms ease-out;
  height: 6rem;
}

.heart:hover {
  cursor: pointer;
  transform: scale(1.3);
}

.bloc {
  padding: 3rem 10vw;
}

.button {
  padding: 0.5rem 5rem;
  font-size: 2rem;
}
</style>
