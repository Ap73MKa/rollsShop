let slideArray = [
    { 'img': 'assets/card1.jpg', },
    { 'img': 'assets/card2.jpg', },
];

slideArray = slideArray.flatMap(i => Array(5).fill(i));
shuffle(slideArray);

let slideHTML = '';
slideArray.forEach ((item) => {
    slideHTML +=
        `
        <div class="swiper-slide">
            <div class="swiper-image">
                <img src="${item.img}" alt="">
            </div>
        </div>
        `
});

document.getElementById('slide-out').innerHTML = slideHTML;