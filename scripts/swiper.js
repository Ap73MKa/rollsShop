new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    slidesPerView: 2.8,
    spaceBetween: 30,
    initialSlide: 2,
    centeredSlides: true,
    centeredSlidesBounds: true,
    loop: true
});