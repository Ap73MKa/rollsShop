import Swiper from "/swiper";
import '/swiper/css';

new Swiper('.swiper', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,

    autoplay: {
        delay: 5000,
        disableOnInteraction: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
});