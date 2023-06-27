const hideSectionButtons = document.getElementsByClassName('nascondi')
const toHide1 = document.getElementById('saldi')
const toHide2 = document.getElementById('welcome-summer')
hideSectionButtons[0].addEventListener('click', function (){
    toHide1.classList.toggle('d-none')
})
hideSectionButtons[1].addEventListener('click', function (){
    toHide2.classList.toggle('d-none')
})
const allTheCards = document.getElementsByClassName('card')
console.log(allTheCards)
const voyagesCounter = function (arr){
    counter = 0
    for(let i=0; i<arr.length; i++){
        counter++
    }
    return counter
}

const navButton = document.getElementsByClassName('nav-button')
navButton[0].addEventListener('click', function (){
    alert('Attualmente sono disponibili: '+ voyagesCounter(allTheCards) + ' mete per il tuo viaggio')
})
const allTheBadge = document.getElementsByClassName('badge')
navButton[1].addEventListener('click', function (){
     for(let i=0; i < allTheBadge; i++){
         allTheBadge[i].classList.remove('invisible')
         allTheBadge[i].classList.add('visible')
         console.log(allTheBadge)
     }
    console.log('ciao')
})
