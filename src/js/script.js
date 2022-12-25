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

export {shuffle};

function set_selected(el_id) {
    let list = document.getElementsByClassName('selected');
    Array.from(list).forEach((elem) => { elem.classList.remove('selected'); });
    document.getElementById(el_id).classList.add("selected")
}

document.getElementById('icon-nav').addEventListener('click', () => {
   let elem = document.getElementById('nav-bar');
   if (elem.style.display === 'flex')
       elem.style.display = 'none';
   else
       elem.style.display = 'flex';
});