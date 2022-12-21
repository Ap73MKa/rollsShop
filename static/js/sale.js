let saleArray = [
    {
        'img': './static/assets/card1.jpg',
        'text': 'Акция. Ролл Калифорния за 279 рублей!'
    },
    {
        'img': './static/assets/card2.jpg',
        'text': 'Акция. Новый ролл Ями всего за 239 рублей!'
    },
];

saleArray = saleArray.flatMap(i => Array(5).fill(i));
shuffle(saleArray);

let saleHTML = '';
saleArray.forEach ((item) => {
    saleHTML +=
        `
        <div class="sale-item">
            <div class="sale-image">
                <img src="${item.img}" alt="">
            </div>
            <div class="sale-text">${item.text}</div>
        </div>
        `
});

document.getElementById('sale-out').innerHTML = saleHTML;