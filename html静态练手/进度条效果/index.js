const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const progress_container = document.querySelector('.progress_container')
const line = document.querySelector('.line')
const progress_s = document.querySelectorAll('.progress')

let num = 0 
let container_width = progress_container.offsetWidth -10
let lock = true

function complete_num() {
    const completes = document.querySelectorAll('.complete')
    return completes.length
}

prev.addEventListener('click',prev_click)
function prev_click() {
    let com_length = complete_num()
    if (com_length == 2) {
        prev.disabled = true
    }else{
        prev.disabled = false
    }
    progress_s[com_length-1].classList.remove('complete')
    num = com_length -2
    line.style.width = num*(container_width/3) +'px'
    if (next.disabled) {
        next.disabled = false
    }
}

next.addEventListener('click',next_click)
function next_click() {
    let com_length = complete_num()
    if (com_length == 3) {
        next.disabled = true
    }else{
        next.disabled = false
    }
    progress_s[com_length].classList.add('complete')
    num = com_length
    line.style.width = num*(container_width/3) +'px'
    if (prev.disabled) {
        prev.disabled = false
    }
}