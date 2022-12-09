function set_selected(el_id) {
    let list = document.getElementsByClassName('selected');
    Array.from(list).forEach((elem) => { elem.classList.remove('selected'); });
    document.getElementById(el_id).classList.add("selected")
}

function close_cart() {
    document.getElementById("cart-wrapper").classList.add("hidden");
}

function unhide_cart() {
    document.getElementById("cart-wrapper").classList.remove("hidden");
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

let productList = [
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
]

productList = productList.flatMap(i => Array(5).fill(i));
shuffle(productList);

let cardItem = ''
let out = document.getElementById('out')

productList.forEach ((item) => {
    cardItem +=
        `
        <div class="product">
            <div class="image-block">
                <img src="${item.img}" alt="">
            </div>
            <div class="content shadow border">
                <div class="text-block">
                    <p class="title">${item.name}</p>
                    <p class="info">${item.content}</p>
                    <div class="price-block">
                        <p>${item.price}.00 ₽</p>
                        <div data-name="${item.name}" data-img="${item.img}"
                         data-content="${item.content}" data-price="${item.price}" class="add-to-cart">
                            <img src="assets/plus.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
})
out.insertAdjacentHTML('afterbegin', cardItem);