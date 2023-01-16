const navigation_interface = document.querySelector('.navigation_interface')

window.addEventListener('scroll',function () {
    if (document.documentElement.scrollTop < 300) {
        navigation_interface.classList.remove('ttt')
    }else{
        navigation_interface.classList.add('ttt')
    }
})