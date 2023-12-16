
document.addEventListener('DOMContentLoaded', function(){
    const questions = document.querySelectorAll('[data-faq-questions]')
    
    
    window.addEventListener("scroll", function(){
        let header = document.querySelector('.header')

        header.classList.toggle('header__scrolling', window.scrollY > 50)
    })

    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaResposta)
    }
})

function abreOuFechaResposta(elemento){
    const classe = 'faq__questions__item--is--open'
    const elementoPai = elemento.target.parentNode

    elementoPai.classList.toggle(classe)
}


