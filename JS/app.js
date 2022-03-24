const menuDesple = document.querySelector('#menuDesple')
const menuBackground = document.querySelector('#menuBack')
const menu = document.querySelector('#menu')

menuDesple.addEventListener('click',()=>{
    menu.classList.add('header__menuOn')
})