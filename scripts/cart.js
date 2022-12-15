let shoppingCart = (function() {
    cart = [];

    function Item(name, content, price, img, count) {
        this.name = name;
        this.content = content;
        this.img = img;
        this.price = price;
        this.count = count;
    }

    function saveCart() {
        sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
    }

    function loadCart() {
        cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    }

    if (sessionStorage.getItem("shoppingCart") != null) {
        loadCart();
    }

    let obj = {};

    obj.addItemToCart = function(name, content, price, img, count) {
        for(let item in cart) {
            if(cart[item].name === name) {
                cart[item].count ++;
                saveCart();
                return;
            }
        }
        let item = new Item(name, content, price, img, count);
        cart.push(item);
        saveCart();
    }

    obj.setCountForItem = function(name, count) {
        for(let i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
    };

    obj.removeItemFromCart = function(name) {
        for(let item in cart) {
            if(cart[item].name === name) {
                cart[item].count --;
                if(cart[item].count === 0) {
                    cart.splice(item, 1);
                }
                break;
            }
        }
        saveCart();
    }

    obj.removeItemFromCartAll = function(name) {
        for(let item in cart) {
            if(cart[item].name === name) {
                cart.splice(item, 1);
                break;
            }
        }
        saveCart();
    }

    obj.clearCart = function() {
        cart = [];
        saveCart();
    }

    obj.totalCount = function() {
        let totalCount = 0;
        for(let item in cart) {
            totalCount += cart[item].count;
        }
        return totalCount;
    }

    obj.totalCart = function() {
        let totalCart = 0;
        for(let item in cart) { totalCart += cart[item].price * cart[item].count; }
        return Number(totalCart.toFixed(2));
    }

    obj.listCart = function() {
        let cartCopy = [];
        for(let i in cart) {
            let item = cart[i];
            let itemCopy = {};
            for(let p in item) { itemCopy[p] = item[p]; }
            itemCopy.total = Number(item.price * item.count);
            cartCopy.push(itemCopy);
        }
        return cartCopy;
    }
    return obj;
})();

function displayCart() {
    let cartArray = shoppingCart.listCart();
    let output = "";
    if (cartArray.length === 0)
        output = "Корзина пуста";
    else
        cartArray.forEach(item => {
            output +=
                `
                <div class="cart-row">
                        <div class="cart-td">
                            <div class="cart-img-block">
                                <img src="${item.img}" alt="">
                            </div>
                        </div>
                        <div class="cart-td">
                            <div class="cart-text">
                                <h1>${item.name}</h1>
                                <h2>${item.content}</h2>
                            </div>
                        </div>
                        <div class="cart-td">
                            <div class="cart-count">
                                <div class="cart-count-blocks">
                                    <img src="assets/minus.svg" id="minus-item" data-name="${item.name}" alt="">
                                </div>
                                <p>${item.count}</p>
                                <div class="cart-count-blocks">
                                   <img src="assets/plus2.svg" id="plus-item" data-name="${item.name}" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="cart-td">
                            <p>${item.total}.00 ₽</p>
                        </div>
                    </div>
                `
        });
    document.querySelector('.show-cart').innerHTML = output;
    document.querySelector('.total-cart').innerHTML = shoppingCart.totalCart() + ".00 ₽";
}

function set_selected(el_id) {
    let list = document.getElementsByClassName('selected');
    Array.from(list).forEach((elem) => { elem.classList.remove('selected'); });
    document.getElementById(el_id).classList.add("selected")
}

function close_cart() {
    document.getElementById('cart-wrapper').classList.add("hidden");
}

function unhide_cart() {
    document.getElementById('cart-wrapper').classList.remove("hidden");
}

function change_cart() {
    document.getElementById("cart-icon").animate([
        { transform: 'scale(1)' },
        { transform: 'scale(1.2)' },
        { transform: 'scale(1)' },
    ], {
        duration: 200,
    });
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape')
        close_cart()
});

document.querySelectorAll('.add-to-cart').forEach((element) => {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        const data = {
            name: this.dataset.name,
            price: this.dataset.price,
            img: this.dataset.img,
            content: this.dataset.content,
        };
        shoppingCart.addItemToCart(data['name'], data['content'], data['price'], data['img'], 1);
        displayCart();
    });
});

document.querySelector('.clear-cart').addEventListener('click', () => {
    shoppingCart.clearCart();
    displayCart();
});

let cart_block = document.querySelector('.show-cart');
cart_block.addEventListener('click', function(event) {
    if (event.target.id === 'minus-item') {
        shoppingCart.removeItemFromCart(event.target.dataset.name);
        displayCart();
    }

    if (event.target.id === 'plus-item') {
        shoppingCart.addItemToCart(event.target.dataset.name);
        displayCart();
    }
})

displayCart();