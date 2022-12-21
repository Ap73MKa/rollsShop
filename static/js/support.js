document.querySelectorAll('textarea').forEach(el => {
    el.setAttribute('style', 'height: ' + el.scrollHeight + 'px');
    el.classList.add('auto');
    el.addEventListener('input', () => {
        el.style.height = 'auto';
        el.style.height = (el.scrollHeight) + 'px';
    });
});