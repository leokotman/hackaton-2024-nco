import { Swiper } from 'swiper';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// allImages json contains the images url and content to render
// to add more images in a slider you need to update the images data the corresponding list
import allImages from './components/slider/images.json';

const projectsSlider = document.querySelector(
  '.swiper--projects .swiper-wrapper'
);

projectsSlider.innerHTML = allImages.projects
  .map(image => {
    return `
    <div key=${image.id} class="swiper-slide">
       <img src=${image.url} />
        <div class="swiper-slide__content">        
          <span class="slide__content__desc">${image?.content?.text}</span>
          <h4 class="slide__content__heading">${image?.content?.heading}</h4>
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

export const projectsBasicSlider = new Swiper('#projectsSlider', {
  modules: [Navigation],
  navigation: {
    nextEl: '#projectsSliderRight',
    prevEl: '#projectsSliderLeft',
  },
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
});

export const aboutBasicSlider = new Swiper('#aboutSlider', {
  modules: [Navigation],
  navigation: {
    nextEl: '#aboutSliderRight',
    prevEl: '#aboutSliderLeft',
  },
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
});

const swiperThumbs = new Swiper('.team-members__thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  swiperElementNodeName: '.team-members__slider',
  direction: 'vertical', // Set direction to vertical for the names
});

export const swiperMain = new Swiper('.team-members__slider', {
  modules: [Thumbs],
  spaceBetween: 10,

  thumbs: {
    swiper: swiperThumbs, // Connect the main swiper with the thumbs
  },
});

// Initialize Swiper for Testimonial Thumbs
const swiperTestimonialThumbs = new Swiper('.testimonial-slider__thumbs', {
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  swiperElementNodeName: '.testimonial-slider__main',
  direction: 'vertical', // Vertical navigation for the circles (thumbs)
});

// Initialize Swiper for Main Testimonial Content (connected with the thumbs)
export const swiperTestimonialMain = new Swiper('.testimonial-slider__main', {
  modules: [Thumbs],
  thumbs: {
    swiper: swiperTestimonialThumbs, // Link the main slider to the thumbs
  },
});

export const servicesSwiper = new Swiper('#swiper--services', {
  spaceBetween: 24,
  freeMode: true,
  loop: true,
  loopedSlides: 8,
  slidesPerView: 2.3,
  centeredSlides: true,
  initialSlide: 3,
});

const servicesSlider = document.querySelector(
  '#swiper--services .swiper-wrapper'
);

servicesSlider.innerHTML = allImages.services
  .map(image => {
    return `
    <div key=${image.id} class="swiper-slide">
       <img src=${image.url} />
    </div>`;
  })
  .join('');

const processTabsSwiper = new Swiper('.process-tabs', {
  slidesPerView: 3,
  spaceBetween: 10,
  watchSlidesProgress: true, // This keeps track of the slides that are in view
});

// Initialize the Swiper for the main video slider
export const processVideoSwiper = new Swiper('#process-slider', {
  modules: [Thumbs],
  spaceBetween: 10,
  thumbs: {
    swiper: processTabsSwiper, // Connect the video slider with the tabs
  },
  on: {
    slideChange: function () {
      // Pause all videos in the slides
      document.querySelectorAll('#process-slider video').forEach(video => {
        video.pause();
        video.currentTime = 0; // Optional: Reset the video to the start
      });
    },
  },
});

document.querySelectorAll('#process-slider video').forEach(video => {
  video.addEventListener('click', function () {
    // Play the video when clicked
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});
