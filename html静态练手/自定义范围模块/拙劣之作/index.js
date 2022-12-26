const progress = document.querySelector('.progress')
const progerss_point = document.querySelector('.progerss_point')
const progerss_text = document.querySelector('.progerss_text')
var time_l = null
function kkk(e) {
    var tar = e.target
    // console.log(e.pageX);
    function offset() {
        var target_father = tar.offsetParent
        var tar_top = tar.offsetTop
        var tar_left = tar.offsetLeft
        // console.log(target_father);
        while(target_father != null){
            tar_top +=target_father.offsetTop
            tar_left +=target_father.offsetLeft
            target_father = target_father.offsetParent
        }
        return [tar_top,tar_left]
    }
    var tt = offset()
    var tar_l = tt[1]-150
    var tar_r = tt[1]+150
    var ttt = e.pageX - tar_l-10
    var number = e.pageX - tar_l
    var number_b = parseInt(number/300*100)
    progerss_point.style.left =  ttt +'px'
    if(number_b>95){
        number_b = 100
    }else if(number_b<5){
        number_b = 0
    }
    progerss_text.innerHTML = number_b
}
progress.addEventListener('click',(e)=>{
    kkk(e)
})

progerss_point.addEventListener('mousedown',(e)=>{
    function ttt() {
        kkk(e)
        ttt()
    }
})