let shoppingCart = (function() {
    cart = [];

    function Item(name, type, price, img, count) {
        this.name = name;
        this.type = type;
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

    obj.addItemToCart = function(name, type, price, img, count) {
        for(let item in cart) {
            if(cart[item].name === name) {
                cart[item].count ++;
                saveCart();
                return;
            }
        }
        let item = new Item(name, type, price, img, count);
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
                <div class="cart__table-row">
                        <div class="cart__table-td">
                            <div class="cart__image">
                                <img src="${item.img}" alt="">
                            </div>
                        </div>
                        <div class="cart__table-td">
                            <div class="cart__table-text">
                                <h1>${item.name}</h1>
                                <h2>${item.type}</h2>
                            </div>
                        </div>
                        <div class="cart__table-td">
                            <div class="cart__counter">
                                <div class="cart__counter-icon">
                                    <span class="icon-minus" id="minus-item" data-name="${item.name}"></span>
                                </div>
                                <p>${item.count}</p>
                                <div class="cart__counter-icon">
                                    <span class="icon-plus" id="plus-item" data-name="${item.name}"></span>
                                </div>
                            </div>
                        </div>
                        <div class="cart__table-td">
                            <p>${item.total}.00 ₽</p>
                        </div>
                    </div>
                `
        });
    document.getElementById('cart-table').innerHTML = output;
    document.getElementById('cart-total').innerHTML = shoppingCart.totalCart() + ".00 ₽";
    let counter = document.getElementById('product-counter');
    let productCount = shoppingCart.totalCount();

    if (productCount <= 0)
        counter.style.display = 'None';
    else {
        counter.style.display = 'flex';
        counter.innerHTML = '' + productCount;
    }
}

let cart_element = document.getElementById('cart-wrapper');

cart_element.addEventListener('keydown', function(event) {
    if (event.key === 'Escape')
        cart_element.style.display = 'none';
});

document.getElementById('cart-icon').addEventListener('click', () => {
    cart_element.style.display = 'flex';
});

document.getElementById('icon__cart-close').addEventListener('click', () => {
    cart_element.style.display = 'none';
})

document.querySelectorAll('.product__btn').forEach((element) => {
    element.addEventListener('click', function(event) {
        event.preventDefault();

        // Animate cart icon
        document.getElementById('cart-icon').animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1.2)' },
            { transform: 'scale(1)' },
        ], {
            duration: 200,
        });

        // Add new product
        const data = {
            name: this.dataset.name,
            price: this.dataset.price,
            img: this.dataset.img,
            type: this.dataset.type,
        };
        shoppingCart.addItemToCart(data['name'], data['type'], data['price'], data['img'], 1);
        displayCart();
    });
});

document.getElementById('cart-clear').addEventListener('click', () => {
    shoppingCart.clearCart();
    displayCart();
});

document.getElementById('cart-table').addEventListener('click', function(event) {
    if (event.target.id === 'minus-item') {
        shoppingCart.removeItemFromCart(event.target.dataset.name);
        displayCart();
    }

    else if (event.target.id === 'plus-item') {
        shoppingCart.addItemToCart(event.target.dataset.name);
        displayCart();
    }
})

displayCart();