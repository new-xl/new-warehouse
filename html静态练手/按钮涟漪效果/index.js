const button = document.querySelector('.button')
const ripple = document.querySelector('.ripple')


button.addEventListener('click',(e)=>{
    var target = e.target 
    // console.log(target);
    // console.log(e.pageY);
    // console.log(target.parentNode.offsetTop);
    function offset() {
        var target_father = target.offsetParent
        var tar_top = target.offsetTop
        var tar_left = target.offsetLeft
        // console.log(target_father);
        while(target_father != null){
            tar_top +=target_father.offsetTop
            tar_left +=target_father.offsetLeft
            target_father = target_father.offsetParent
        }
        return [tar_top,tar_left]
    }
    var ttt = offset()
    var ripple_t = (e.pageY + 25 - ttt[0]) +'px' 
    var ripple_l = e.pageX + 50 - ttt[1] +'px'
    // console.log(ripple_t);
    ripple.style.top = ripple_t
    ripple.style.left = ripple_l
    ripple.classList.toggle('ttt')
    setTimeout(() => {
        ripple.classList.toggle('ttt')
        ripple.style.transform= 'translate(-50%, -50%) scale(0)'
    }, 500);
})
