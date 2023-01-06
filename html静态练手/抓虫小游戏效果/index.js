const content = document.querySelector('.content')
const game_enter = document.querySelector('.game_enter')
const insects = document.querySelectorAll('.insects')
const select_enter = document.querySelector('.select_enter')
const insect = document.querySelector('.insect')
const time_content = document.querySelector('.time_content')
const game_interface = document.querySelector('.game_interface')
const game_end = document.querySelector('.game_end')

game_enter.addEventListener('click',content_top_move)

function content_top_move(){
      let interface_width = this.parentNode.offsetHeight
      let this_data = this.parentNode.dataset['index']
      content.style.top = -(this_data*interface_width) +'px'
      if (this.parentNode.dataset['index'] == 2) {
        insect_serial_number()
        timing()
      }
}

let data_index = 0
insects.forEach((insect,index) =>{
    // 俩种方式都可以动态给元素设置自定义属性
    // insect.setAttribute('data-index',index)
    insect.dataset.index = index

    insect.addEventListener('click',insect_click)
})

function insect_click(){
    insects.forEach(insect=>{
        insect.classList.remove('kkk')
    })
    this.classList.add('kkk')
    data_index = this.dataset['index']
} 

select_enter.addEventListener('click',content_top_move)

let game_number = 0

// 把2分钟转化为时间戳
let game_time = 2*60000

let time_timing = null

// 定义一个定时器函数，当上面点击进入这个页面之后开启定时器
function timing() {
    time_timing = setInterval(function(){
        game_time = game_time -1000
        let new_time =  time_change(game_time)
        time_content.innerHTML = new_time
        insect_copy()
        if (game_time == 110000) {
            clearInterval(time_timing)
            game_interface.removeEventListener('click',game_interface_click)
            game_end.classList.add('ttt')
        }
    },1000) 
}

// 把时间戳转化时间的方法
function time_change(ti){
    ti = ti/1000
    // 转化为正常时间
    var m = parseInt(ti / 60 % 60);
    m = m <10 ? '0'+m : m;
    var s = parseInt(ti % 60);
    s = s <10 ? '0'+s : s;
    return m+':'+s
}

// 把选择的动物赋值给游戏界面动物
function insect_serial_number() {
    insect.style.backgroundImage = `url(/static/images/昆虫${(data_index-0+1)}.png)`
}

const x = 10,y = 90;
function insect_copy(tar,num) {
    for (let index = 0; index < num; index++) {
        let p1 = Math.round(Math.random()*(y-x)+x);
        let p2 = Math.round(Math.random()*(y-x)+x);
        let incopy = tar.cloneNode(true)
        incopy.style.top = p1 +'%'
        incopy.style.left = p2 +'%'
        game_interface.appendChild(incopy)
        
    }
}


game_interface.addEventListener('click',game_interface_click)

function game_interface_click(e) {
    tar = e.target
    console.log(tar);
    if (tar.classList.contains('insect')) {
        game_number++
        let num = game_number*3
        insect_copy(tar,num)
        game_interface.removeChild(tar)
    }
}