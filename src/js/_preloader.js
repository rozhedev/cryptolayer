window.onload = function () {
    document.body.classList.add("_hide");
    document.body.style.overflow = 'hidden';

    document.body.classList.add("_loaded");
    document.body.classList.remove("_hide");
    document.body.style.overflow = 'auto';
}