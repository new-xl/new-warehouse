const pageEl = document.querySelector('.page')
const change_background = document.querySelector('.change_background')
const mode = document.querySelector('.mode')
const hourEl = document.querySelector('.hour')
const minutesEl = document.querySelector('.minutes')
const secondsEl = document.querySelector('.seconds')
const time_num = document.querySelector('.time_num')
const monthEl = document.querySelector('.month')
let time_h = 0
let time_m = 0
let time_s = 0
let time_set = {}
clock_rotation()
function time_conversion() {
    const date = new Date();
    time_set.month = date.getFullYear() + '-' + (date.getMonth()+1) + '-' +date.getDate() 
    time_set.hour = date.getHours()
    time_set.minutes = date.getMinutes()
    time_set.seconds =  date.getSeconds()
    return time_set
}

setInterval(clock_rotation,1000)

function clock_rotation() {
    let {month,hour,minutes,seconds} = time_conversion()
    hourEl.style.transform =`rotate(${time_h+(hour>12?hour-12:hour)*30}deg)`
    minutesEl.style.transform =`rotate(${time_m+minutes*6}deg)`
    secondsEl.style.transform =`rotate(${time_s+seconds*6}deg)`
    time_num.innerHTML = `${hour}:${minutes}`
    monthEl.innerHTML = month
}

change_background.addEventListener('click',function () {
    pageEl.classList.toggle('ttt')
    if (pageEl.classList.contains('ttt')) {
        change_background.innerHTML = '开灯'
        mode.innerHTML = '暗模式'
    }else{
        change_background.innerHTML = '关灯'
        mode.innerHTML = '光模式'
    }
    mode.classList.add('bbb')
    setTimeout(function () {
        mode.classList.remove('bbb')
    },2000)
})



hourEl.addEventListener('transitionend',function () {
    let angle = this.style.transform.slice(7,-4) -0
    // console.log(this.style.transform.slice(7,-4));
    if (angle == time_h+354) {
        time_h +=360 
    }
})
minutesEl.addEventListener('transitionend',function () {
    let angle = this.style.transform.slice(7,-4) -0
    // console.log(this.style.transform.slice(7,-4));
    if (angle == time_m+354) {
        time_m +=360 
    }
})

secondsEl.addEventListener('transitionend',function () {
    let angle = this.style.transform.slice(7,-4) -0
    // console.log(this.style.transform.slice(7,-4));
    if (angle == time_s+354) {
        time_s +=360 
    }
})