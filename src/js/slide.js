let slideArray = [
    { 'img': 'card1.jpg', },
    { 'img': 'card2.jpg', },
];

slideArray = slideArray.flatMap(i => Array(5).fill(i));
shuffle(slideArray);

let slideHTML = '';
slideArray.forEach ((item) => {
    slideHTML +=
        `
        <div class="swiper-slide">
            <div class="swiper-image">
                <img src="images/${item.img}" alt="">
            </div>
        </div>
        `
});

document.getElementById('slide-out').innerHTML = slideHTML;