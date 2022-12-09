var shoppingCart = (function() {
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
        for(var item in cart) {
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
        var totalCount = 0;
        for(var item in cart) {
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
            console.log(itemCopy.total);
        }
        return cartCopy;
    }
    return obj;
})();


$('.add-to-cart').click(function(event) {
    event.preventDefault();
    let name = $(this).data('name');
    let price = Number($(this).data('price'));
    let img = $(this).data('img');
    let content = $(this).data('content');
    shoppingCart.addItemToCart(name, content, price, img, 1);
    displayCart();
});

$('.clear-cart').click(function() {
    shoppingCart.clearCart();
    displayCart();
});

function displayCart() {
    let cartArray = shoppingCart.listCart();
    let output = "";
    $.each(cartArray, function (i) {
        output +=
            `
            <div class="cart-row">
                    <div class="cart-td">
                        <div class="cart-img-block">
                            <img src="${cartArray[i].img}" alt="">
                        </div>
                    </div>
                    <div class="cart-td">
                        <div class="cart-text">
                            <h1>${cartArray[i].name}</h1>
                            <h2>${cartArray[i].content}</h2>
                        </div>
                    </div>
                    <div class="cart-td">
                        <div class="cart-count-box">
                            <img src="assets/minus.svg" alt="">
                            <p>${cartArray[i].count}</p>
                            <img src="assets/plus2.svg" alt="">
                        </div>
                    </div>
                    <div class="cart-td">
                        <p>${cartArray[i].total}.00 ₽</p>
                    </div>
                    <div class="cart-td">
                        <div class="cart-remove">
                            <img src="assets/close.svg" alt="">
                        </div>
                    </div>
                </div>
            `
    });
    $('.show-cart').html(output);
    let cartPrice = shoppingCart.totalCart() + ".00 ₽";
    console.log(cartPrice);
    $('.total-cart').html(cartPrice);
}
