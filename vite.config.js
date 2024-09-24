export default {
  build: {
    target: 'ES2022',
    rollupOptions: {
      external: ['swiper/css/bundle', 'swiper/bundle'],
    },
    optimizeDeps: {
      exclude: ['swiper/bundle', 'swiper/css/bundle'],
    },
  },
};
