const left_slider = document.querySelector('.left_slider')
const right_slider = document.querySelector('.right_slider')
const left_img = document.querySelectorAll('.left_img')
const right_img = document.querySelectorAll('.right_img')
const left_but =document.querySelector('.left_but')
const right_but = document.querySelector('.right_but')

const left_1 = left_img[0]
const right_1 = right_img[0]

let throttling = true
let number = 0
// console.log(getComputedStyle(left_1).height);

let left_h = getComputedStyle(left_1).height
let right_h = getComputedStyle(right_1).height

left_h = left_h.slice(0,left_h.length-2)
right_h = right_h.slice(0,right_h.length-2)

right_slider.style.top = -(right_h*2)+'px'


left_but.addEventListener('click',()=>{
    if (throttling) {
        throttling = false
        number++
        if (number == 3) {
            left_slider.style.top = 0 +'px'
            right_slider.style.top = -(right_h*2)+'px'
            number = 0
        }else{
            left_slider.style.top = -(left_h*number)+'px'
            right_slider.style.top =-((right_h*2)-(right_h*number))+'px'
        }
    }else{
        return
    }
})

right_but.addEventListener('click',()=>{
    if (throttling) {
        throttling = false
        number--
        if (number < 0) {
            right_slider.style.top = 0 +'px'
            left_slider.style.top = -(right_h*2)+'px'
            number = 2
        }else{
            left_slider.style.top = -(left_h*number)+'px'
            right_slider.style.top =-((right_h*2)-(right_h*number))+'px'
        }
    }else{
        return
    }
})

left_slider.addEventListener('transitionend',()=>{
    throttling = true
})

right_slider.addEventListener('transitionend',()=>{
    throttling = true
})