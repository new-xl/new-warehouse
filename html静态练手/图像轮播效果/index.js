const image_father = document.querySelector('.image_father')
const image_interface = document.querySelectorAll('.image_interface')
const operation_left = document.querySelector('.left')
const operation_right = document.querySelector('.right')
const operation_father = document.querySelector('.operation_father')
let number = 0
let lock = true
let image_width = image_father.offsetWidth/6
let timing = null

image_interface.forEach((image,index)=>{
    // image.style.backgroundImage = `url(/static/images/图片${index+1}.${(index+1)!= 2&&(index+1) !=5?'jpg':'webp'})`
    image.style.backgroundImage = `url(/static/images/图片${index+1}.${[2,5].includes(index+1)?'webp':'jpg'})`

})

let interface =document.createElement('div')
interface.className = 'image_interface'
interface.style.backgroundImage = 'url(/static/images/图片1.jpg)'
image_father.appendChild(interface)

function image_transition() {
    if (lock) {
        number++
        if (number == image_interface.length+1) {
            image_father.classList.remove('ttt')
            number = 0
            image_father.style.left = -(number*image_width)+'px'
            setTimeout(() => {
                image_transition() 
            }, 500);
        }else{
            if (!image_father.classList.contains('ttt')) {
                image_father.classList.add('ttt')
            }
            image_father.style.left = -(number*image_width)+'px'
        }
    }else{
        return false
    }
}
image_transition()

image_father.addEventListener('transitionend',image_transition)

operation_left.addEventListener('click',function () {
    lock = false
    number--
    if (number < 0) {
        number = 5
        image_father.classList.remove('ttt')
        image_father.style.left = -(number*image_width)+'px'
        setTimeout(() => {
            number = 4
            image_father.classList.add('ttt')
            image_father.style.left = -(number*image_width)+'px'
        }, 500);
    }
    image_father.style.left = -(number*image_width)+'px'
    if(timing != null){
        // 注：如果使用timing = null的方法，并且不会清除定时器，定时器依然在内存中运行，使用clearTimeout(timing)可以在内存中清除定时器
        clearTimeout(timing)
        // timing = null 
        timing = setTimeout(() => {
            lock = true
            image_transition()
        }, 5000);
    }else{
        console.log(111111);
        timing = setTimeout(() => {
            lock = true
            image_transition() 
        }, 2000);
    }
})


operation_right.addEventListener('click',function () {
    lock = false
    number++
    if (number == 6) {
        number = 0
        image_father.classList.remove('ttt')
        image_father.style.left = -(number*image_width)+'px'
        setTimeout(() => {
            number = 1
            image_father.classList.add('ttt')
            image_father.style.left = -(number*image_width)+'px'
        }, 500);
    }
    image_father.style.left = -(number*image_width)+'px'
    if(timing != null){
        // 注：如果使用timing = null的方法，并且不会清除定时器，定时器依然在内存中运行，使用clearTimeout(timing)可以在内存中清除定时器
        clearTimeout(timing)
        // timing = null 
        timing = setTimeout(() => {
            lock = true
            image_transition()
        }, 5000);
    }else{
        console.log(111111);
        timing = setTimeout(() => {
            lock = true
            image_transition() 
        }, 2000);
    }
})

