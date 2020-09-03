<template>
    <div>
        <h1 class="mb-4">My {{ category }}</h1>
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="(item, index) in array"
                :key="'Item ' + index">
                <div class="group-item" @click="goToItem(item)">
                    <img class="frame" :src="item.thumbnail.path === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' ?
                    'https://i.pinimg.com/originals/bb/26/cb/bb26cbfab6d03a5a9a8c47f576b4d78e.jpg'
                    : item.thumbnail.path + '.' + item.thumbnail.extension" alt="picture of hero">
                    <button class="hover bg-black cl-white"><h3 class="m-0 pt-2 px-3">More..</h3></button>
                    <div class="bg-lighter title w-100 py-3 px-1">
                        <h2 class="cl-white fw-100 m-0">{{ item.title }}</h2>
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import axios from 'axios';
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import { publicKey } from '../../marvel';
import 'swiper/swiper-bundle.css';

export default {
  props: ['id', 'category'],
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      array: null,
    };
  },
  methods: {
    goToItem(item) {
      window.open(item.urls[0].url, '_blank');
    },
  },
  created() {
    axios.get(`http://gateway.marvel.com/v1/public/characters/${this.id}/${this.category}?ts=1&apikey=${publicKey}&hash=311843f0c7ec4abd6a923eeeea1cb05c&limit=5`)
      .then((response) => {
        this.array = response.data.data.results;
        if (this.array.length === 0) {
          this.$emit('arrayEmpty', this.category);
        }
      });
  },
};
</script>

<style scoped>
h2 {
    font-size: 1.1rem!important;
}

h3 {
    font-size: 1.7rem!important;
}

button {
    position: absolute;
    top: 20vh;
    right: 0;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

.swiper-container {
    height: 55vh;
}

.swiper-slide {
    width: 45vh!important;
}

.frame {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.title {
    position: absolute;
    bottom: 0;
}

.bg-lighter {
    background-color: #000000f6;
}

/*.swiper-slide:nth-child(2n) {
    width: 40%!important;
}
.swiper-slide:nth-child(3n) {
    width: 20%!important;
}*/
</style>
