const c_img = document.querySelector('.c-img')
const arrow_left = document.querySelector('.arrow-left')
const arrow_right = document.querySelector('.arrow-right')
const center_img = document.querySelector('.center-img')
const tt_img =document.querySelector('.tt-img')
var data =  c_img.dataset.index 
var number = 1
var path = null
var time = 2000

function imgs() {
    path = `/static/backgroud-imgs/背景图-${data}.jpg`
    c_img.style.backgroundImage = ` url(${path}) `

    tt_img.style.backgroundImage = ` url(${path}) `
    c_img.classList.toggle('ttt')
    // c_img.className = 'c-img ttt'
}
function seeding(ti = null) {
    if (ti == 1) {
        number--
        if (number > 5) {
            number = 1
        }else if(number == 0){
            number = 5
        }
        data = number
        imgs();
    }else{
        number++;
        if (number > 5) {
            number = 1
        }else if(number == 0){
            number = 5
        }
        data = number
        imgs();
    }
    // setTimeout(() => {
    //     if(ti){
    //         console.log('1111');
    //         return
    //     }else{
    //         seeding()
    //     }
    // }, time);
}


arrow_left.addEventListener('click',function () {
    // number++
    // seeding(true)
    c_img.removeEventListener('transitionend',seeding)
    seeding(1)
    if (c_img.className == 'c-img') {
        seeding(1)
    }
    c_img.addEventListener('transitionend',seeding)
    seeding()
})

arrow_right.addEventListener('click',function () {
    // number++
    // seeding(true)
    c_img.removeEventListener('transitionend',seeding)
    if (c_img.className == 'c-img') {
        seeding()
    }
    c_img.addEventListener('transitionend',seeding)
    seeding()
})

c_img.addEventListener('transitionend',seeding)

seeding()