/**
 * @param {Array} productList
 */
function formProductHTML(productList) {
    let finalHTML = '';
    productList.forEach ((item) => {
        finalHTML +=
            `
        <div class="product">
            <div class="product-image">
                <img src="${item.img}" alt="">
            </div>
            <div class="product-type shadow border">
                <div class="product-text">
                    <p class="product-title">${item.name}</p>
                    <p class="product-class">${item.type}</p>
                    <div class="product-price">
                        <p>${item.price}.00 ₽</p>
                        <div class="product-btn add-to-cart" data-name="${item.name}" data-img="${item.img}"
                         data-type="${item.type}" data-price="${item.price}">
                            <img src="assets/plus2.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    });
    return finalHTML;
}


let productArray = [
    {
        'name': 'Калифорния',
        'type': 'Ролл',
        'img': './static/assets/california.png',
        'price': 279
    },
    {
        'name': 'Филадельфия',
        'type': 'Ролл',
        'img': './static/assets/philadelphia.png',
        'price': 359
    },
    {
        'name': 'Бонито',
        'type': 'Ролл',
        'img': './static/assets/bonito.png',
        'price': 299
    },
    {
        'name': 'Ями',
        'type': 'Ролл',
        'img': './static/assets/yami.png',
        'price': 239
    },
    {
        'name': 'Гункан с лососем',
        'type': 'Гункан',
        'img': './static/assets/gunkan_salmon.png',
        'price': 89
    },
    {
        'name': 'Гункан с угрём',
        'type': 'Гункан',
        'img': './static/assets/gunkan_eel.png',
        'price': 79
    },
    {
        'name': 'Гункан с курицей',
        'type': 'Гункан',
        'img': './static/assets/gunkan_chicken.png',
        'price': 74
    },
    {
        'name': 'Эби маки',
        'type': 'Маки ролл',
        'img': './static/assets/maki_abi.png',
        'price': 169
    },
    {
        'name': 'Сяки маки',
        'type': 'Маки ролл',
        'img': './static/assets/maki_saki.png',
        'price': 179
    },
    {
        'name': 'Унаги маки',
        'type': 'Маки ролл',
        'img': './static/assets/maki_unagi.png',
        'price': 189
    },
    {
        'name': 'Маки с огурцом',
        'type': 'Маки ролл',
        'img': './static/assets/maki_cucu.png',
        'price': 99
    },
];


try {
    document.getElementById('product-all-out').innerHTML = formProductHTML(productArray);
} catch (e) {}

try {
    document.getElementById('product-roll-out').innerHTML = formProductHTML(
        productArray.filter((elem) => { return elem.type === 'Ролл';}));
} catch (e) {}

try {
    document.getElementById('product-maki-out').innerHTML = formProductHTML(
        productArray.filter((elem) => { return elem.type === 'Маки ролл';}));
} catch (e) {}

try {
    document.getElementById('product-gunkan-out').innerHTML = formProductHTML(
        productArray.filter((elem) => { return elem.type === 'Гункан';}));
} catch (e) {}