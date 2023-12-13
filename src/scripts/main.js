window.addEventListener("scroll", function(){
    let header = document.querySelector('.header')

    header.classList.toggle('header__scrolling', window.scrollY > 50)
})
