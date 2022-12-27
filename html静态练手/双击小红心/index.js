const content_img = document.querySelector('.content_img')
const love =document.querySelector('.love')
const subtitle_number = document.querySelector('.subtitle_number')
let clickTime = 0
let timesClicked = 0
content_img.addEventListener('click',(e)=>{
    if(clickTime === 0) {
        clickTime = new Date().getTime()
    }else{
        if((new Date().getTime() - clickTime) < 800) {
            timesClicked++
            var target = e.target 
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
            const kkk = offset()
            var love_top = (e.pageY - kkk[0]) +'px' 
            var love_left = (e.pageX - kkk[1]) +'px' 
            love.style.top = love_top
            love.style.left = love_left
            love.classList.toggle('ttt')
            clickTime = 0
            subtitle_number.innerHTML = timesClicked
        } else {
            clickTime = new Date().getTime()
        }
    }
})

love.addEventListener('animationend',()=>{
    love.classList.remove('ttt')
})