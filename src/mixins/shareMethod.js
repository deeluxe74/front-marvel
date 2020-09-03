import axios from 'axios';
import { publicKey } from '../marvel';

// eslint-disable-next-line import/prefer-default-export
export const shareMethods = {
  methods: {
    updateFavorites() {
      this.load = true;
      this.arrHeros = [];
      this.favorites.forEach((id) => {
        axios.get(`http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${publicKey}&hash=311843f0c7ec4abd6a923eeeea1cb05c&limit=1`)
          .then((response) => {
            const hero = response.data.data.results[0];
            // eslint-disable-next-line no-shadow
            this.arrHeros.push(hero);
          });
      });
      setTimeout(() => {
        this.load = false;
      }, 300);
    },
    updatePicture(value) {
      let fund = 0;
      if (value) {
        value.forEach((id) => {
          if (id === this.hero.id) {
            fund = 1;
          }
        });
      }
      if (fund) {
        this.pathImg = '/img/svg/listing/heart.svg';
      } else {
        this.pathImg = '/img/svg/listing/heart-empty.svg';
      }
    },
  },
};
