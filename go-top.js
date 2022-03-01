window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        // Mostramos el botón y el icono
        document.querySelector('.scroll-top-container')
        .classList.add('show-btn-top');
        document.querySelector('#scroll-top-icon').classList.add('fas','fa-chevron-up');
    }else {
        // Ocultamos el botón y el icono
        document.querySelector('.scroll-top-container')
        .classList.remove('show-btn-top');
        document.querySelector('#scroll-top-icon').classList.remove('fas','fa-chevron-up');
    }
}

document.querySelector('.scroll-top-button')
.addEventListener('click',() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});