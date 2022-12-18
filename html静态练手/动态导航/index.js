console.log('2222');
var but = document.querySelector('.nvigation-but');
var left = but.querySelector('.left')
var right = but.querySelector('.right')
var navigation = document.querySelector('.navigation')
var title = document.querySelector('.nvigation-title')

navigation.addEventListener('click',()=>{
    left.classList.toggle('ttt')
    right.classList.toggle('kkk')
    navigation.classList.toggle('ppp')
    title.classList.toggle('hhh')
})