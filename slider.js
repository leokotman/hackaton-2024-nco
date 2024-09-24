import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const imagesJsonFromApi = await fetch(
  'https://jsonplaceholder.typicode.com/photos'
)
  .then(response => response.json())
  .then(json => json);

const imagesToUse = imagesJsonFromApi.slice(0, 20);
imagesToUse.unshift({ url: '/assets/images/cat.jpg' });

export const swiper = new Swiper('.my-swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'custom-bullet',
    renderBullet: function (index, className) {
      return (
        '<span class="custom-bullet ' +
        className +
        '">' +
        (index + 1) +
        '</span>'
      );
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
});

swiper.height = 300;
const sliderWrapper = document.querySelector('.swiper-wrapper');
sliderWrapper.innerHTML = imagesToUse
  .map(image => {
    return `<div class="swiper-slide"><img class="custom-img" src=${image.url} /></div>`;
  })
  .join('');
