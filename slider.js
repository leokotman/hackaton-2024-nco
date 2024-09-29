import { Swiper } from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// allImages json contains the images url and content to render
// to add more images in a slider you need to update the images data the corresponding list
import allImages from './components/slider/images.json';

export const basicSlider = new Swiper('.swiper--basic', {
  modules: [Navigation],
  navigation: { nextEl: '.arrow-right', prevEl: '.arrow-left' },
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
});

const projectsSlider = document.querySelector(
  '.swiper--projects .swiper-wrapper'
);

projectsSlider.innerHTML = allImages.projects
  .map(image => {
    return `
    <div key=${image.id} class="swiper-slide">
       <img src=${image.url} />
        <div class="swiper-slide__content">
           <h4>${image?.content?.heading}</h4>
            <p>${image?.content?.text}</p>
         </div>
    </div>`;
  })
  .join('');

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
