const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 2,
    centeredSlides: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});