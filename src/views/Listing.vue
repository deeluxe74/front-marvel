<template>
    <div v-if="!load" class="contain">
        <div class="d-flex flex-row mb-5 justify-content-between">
            <div class="d-flex flex-row">
                <div @click="orderBy('name')" :class="order === 'name' ? 'bg-green' : ''" class="category">
                    <h4>A - Z</h4>
                </div>
                <div @click="orderBy('-modified')" :class="order === '-modified' ? 'bg-green' : ''" class="category">
                    <h4>Last update</h4>
                </div>
            </div>
            <div class="d-flex flex-row">
              <div class="input-group">
                <input list="heros" v-model="search" type="text" class="form-control" placeholder="Search by name" aria-label="Username" aria-describedby="basic-addon1">
                <datalist v-if="arrSearch" id="heros">
                  <option v-for="(hero, index) in arrSearch" :value="hero.name" :key="'hero ' + index">ID: {{ hero.id }}</option>
                </datalist>
              </div>
              <img v-if="arrSearch[0].name === search" @click="goToDetails" class="hover check ml-2" src="/img/svg/listing/check.svg" alt="Valider la recherche">
              <img v-else class="check ml-2" src="/img/svg/listing/close.svg" alt="Valider la recherche">
            </div>
        </div>

        <div>
            <div class="frame d-flex flex-row flex-wrap justify-content-between">
                <hero v-for="(hero, index) in arrHeros" :key="'hero ' + index" :hero="hero"></hero>
            </div>
        </div>
        <paginate
          v-model="currPage"
          :page-count="numbPages"
          :page-range="3"
          :click-handler="updateQuery"
          :container-class="'pagination'"
          :page-class="'page-item'"
          :page-link-class="'page-link'"
          :prev-class="'page-item'"
          :prev-link-class="'page-link'"
          :next-class="'page-item'"
          :next-link-class="'page-link'">
        </paginate>
    </div>

    <div v-else class="h-100 d-flex justify-content-center align-items-center">
        <spinner :message="'The server got an error. Please reload the page.'"></spinner>
    </div>
</template>

<script>
import axios from 'axios';
import Paginate from 'vuejs-paginate';
import Hero from '../components/shares/Hero.vue';
import Spinner from '../components/shares/Spinner.vue';
import { publicKey } from '../marvel';

export default {
  data() {
    return {
      arrHeros: null,
      arrSearch: [
        { name: null },
      ],
      search: null,
      load: true,
      numbPages: 0,
      // eslint-disable-next-line radix
      currPage: parseInt(this.$route.query.page),
      order: this.$route.query.order,
      offset: 0,
    };
  },
  components: {
    Hero,
    Spinner,
    Paginate,
  },
  methods: {
    async updateQuery() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      this.$router.push({ name: 'Listing', query: { page: this.currPage, order: this.order } });
      await this.getArray();
    },
    async getArray() {
      this.offset = (this.currPage - 1) * 9;
      await axios.get(`http://gateway.marvel.com/v1/public/characters?&orderBy=${this.order}&ts=1&apikey=${publicKey}&hash=311843f0c7ec4abd6a923eeeea1cb05c&limit=9&offset=${this.offset}`)
        .then((response) => {
          this.arrHeros = response.data.data.results;
          this.numbPages = Math.round(response.data.data.total / 9) - 1;
        });
    },
    orderBy(category) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      this.$router.replace({ name: 'Listing', query: { page: 1, order: category } });
      this.order = this.$route.query.order;
      // eslint-disable-next-line radix
      this.currPage = parseInt(this.$route.query.page);
      this.getArray();
    },
    async goToDetails() {
      let idHero;
      await axios.get(`http://gateway.marvel.com/v1/public/characters?name=${this.search}&ts=1&apikey=${publicKey}&hash=311843f0c7ec4abd6a923eeeea1cb05c&limit=1`)
        .then((response) => {
          idHero = response.data.data.results[0].id;
        });
      this.$router.push({ name: 'Details', params: { id: idHero } });
    },
  },
  watch: {
    search() {
      if (this.search.length >= 3) {
        axios.get(`http://gateway.marvel.com/v1/public/characters?&nameStartsWith=${this.search}&ts=1&apikey=${publicKey}&hash=311843f0c7ec4abd6a923eeeea1cb05c&limit=10`)
          .then((response) => {
            this.arrSearch = response.data.data.results;
          });
      }
    },
  },
  async created() {
    this.load = true;
    await this.getArray();
    this.load = false;
  },
};
</script>

<style scoped>
h4 {
  margin: 0.5rem 0 0 0;
}

.category {
  cursor: pointer;
  height: auto;
  padding: 0.3rem 2rem;
  margin-right: 1.5rem;
  border: black 2px solid;
  box-shadow: 3px 6px 6px -1px rgba(0, 0, 0, 0.164);
}

.check {
  height: 2rem;
}

.pagination {
  justify-content: center;
}
</style>
