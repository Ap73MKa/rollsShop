import Swiper, {Navigation} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';

new Swiper('.swiper', {
    modules: [Navigation],
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