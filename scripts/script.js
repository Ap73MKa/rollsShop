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