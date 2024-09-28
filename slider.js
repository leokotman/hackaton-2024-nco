import { Swiper } from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import allImages from './public/assets/images/images.json';

export const basicSlider = new Swiper('.my-swiper', {
  modules: [Navigation],
  navigation: { nextEl: '.arrow-right', prevEl: '.arrow-left' },
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
});


const aboutSlider = document.querySelector('.swiper--about .swiper-wrapper');

aboutSlider.innerHTML = allImages.about
  .map(image => {
    return `
    <div key=${image.id} class="swiper-slide">
       <img src=${image.url} />
        <div class="swiper-slide__content">
           <h4 class="slide__content__heading">${image?.content?.heading}</h4>
            <ul class="slide__content__list">${image?.content?.list.join('')}</ul>
         </div>
    </div>`;
  })
  .join('');
