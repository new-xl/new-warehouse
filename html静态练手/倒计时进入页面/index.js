const text = document.querySelector('.text');
const countdown = document.querySelectorAll('.countdown');
const cou = document.querySelector('.cou');
const ok = document.querySelector('.ok');
var number = 0;
var ber = 0;
var tttt = 0;

text.addEventListener('click',()=>{
    tttt(0)
})

var tttt= function (page) {
    if (page <= 2) {
        number = 90
        countdown[page].style.transform = `rotate(-${number}deg)`
        console.log('1111');
        big(page)
    }else{
        cou.style.display = 'none'
        ok.style.display = 'block'
    }
}

var big = function (page) {
    var ti = setInterval(function () {
        console.log('2222');
        ber++;
        if(ber != 3){
            if ((ber%2)==0) {
                number =90
                countdown[page].style.transform = `rotate(-${number}deg)`
            }else{
                number =80
                countdown[page].style.transform = `rotate(-${number}deg)`
            }
        }else{
            ber = 0
            clearInterval(ti);
            bt(page)
        }
    },500)
}
var bt = function (page) {
    console.log('3333');
    number = 180
    countdown[page].style.transform = `rotate(-${number}deg)`
    countdown[page].style.right = '-2px'
    setTimeout(function () {
        tttt(page+1)
    },1000)
    
}
