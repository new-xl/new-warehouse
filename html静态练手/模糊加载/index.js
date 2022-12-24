var loading = document.querySelector('.loading')
var number = document.querySelector('.number')
var ttt = document.querySelector('.ttt')
var num = 0
var time = 50

function blurry_loading() {
    num++
    if (num >100) {
        num = 0
        loading.style.display = 'none'
        return
    }else{
        setTimeout(() => {
            blurry_loading()
            number.innerHTML = num
            loading.style.opacity = 1 - (num /100)
            ttt.style.filter = `blur(${25-(num/4)}px)`
            if (num == 0) {
                ttt.style.filter = `blur(0px)`
            }
        }, time);
    }
    console.log(num);
}

blurry_loading()