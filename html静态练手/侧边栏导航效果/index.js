const side_icon = document.querySelector('.side_icon')
const shut_down = document.querySelector('.shut_down')
const side_navigation = document.querySelector('.side_navigation')
const pipis = document.querySelectorAll('.pipi')

side_icon.addEventListener('click',function () {
    side_navigation.classList.remove('l')
    side_navigation.classList.add('k')
    pipis.forEach(pipi=>{
        pipi.classList.remove('pipi')
        pipi.classList.add('nav')
    })
})

shut_down.addEventListener('click',function () {
    side_navigation.classList.remove('k')
    side_navigation.classList.add('l')
    pipis.forEach(pipi=>{
        pipi.classList.remove('nav')
        pipi.classList.add('pipi')
    })
})