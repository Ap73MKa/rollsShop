let productArray = [
    {
        'name': 'Калифорния',
        'content': 'Ролл',
        'img': 'assets/california.png',
        'price': 279
    },
    {
        'name': 'Филадельфия',
        'content': 'Ролл',
        'img': 'assets/philadelphia.png',
        'price': 359
    },
    {
        'name': 'Бонито',
        'content': 'Ролл',
        'img': 'assets/bonito.png',
        'price': 299
    },
    {
        'name': 'Ями',
        'content': 'Ролл',
        'img': 'assets/yami.png',
        'price': 239
    },
];

productArray = productArray.flatMap(i => Array(5).fill(i));
shuffle(productArray);

let productHTML = '';
productArray.forEach ((item) => {
    productHTML +=
        `
        <div class="product">
            <div class="product-image">
                <img src="${item.img}" alt="">
            </div>
            <div class="product-content shadow border">
                <div class="product-text">
                    <p class="product-title">${item.name}</p>
                    <p class="product-class">${item.content}</p>
                    <div class="product-price">
                        <p>${item.price}.00 ₽</p>
                        <div class="product-btn add-to-cart" data-name="${item.name}" data-img="${item.img}"
                         data-content="${item.content}" data-price="${item.price}">
                            <img src="assets/plus2.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
});

document.getElementById('product-out').innerHTML = productHTML;