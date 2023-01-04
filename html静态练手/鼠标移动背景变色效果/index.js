let content = document.querySelector('.content')

let number = 638
let content_width = 0
let content_height = 0
let content_area = 0
let son_area = 0
let son_width =0

window.addEventListener('resize',window_change)

function window_change(e){
    // isTrusted可以监听是代码触发了事件，还是手动触发了事件【true是自动触发，false是手动触发】
    content = document.querySelector('.content')
    content_width = content.clientWidth
    content_height = content.clientHeight
    son_box()
}
// 注：使用这个方法可以手动触发window的resize事件
let hvent = new Event('resize')
window.dispatchEvent(hvent)


function son_box() {
    content_area = content_width * content_height
    son_area = content_area /800
    // ~~的意思是取整   Math.sprt表示为平方根，求子盒子的边长
    son_width = ~~Math.sqrt(son_area)
    content.innerHTML = ''
    for (let index = 0; index < number; index++) {
        let bibi =  document.createElement('div')
        bibi.classList.add('bibi')
        content.appendChild(bibi)
        bibi.style.width = son_width- (son_width*0.1)+ 'px'
        bibi.style.height = son_width-(son_width*0.1) + 'px'
        bibi.style.margin = `${(son_width*0.1) +'px'}`
    }
}

son_box()


const color = ['red','orange','yellow','green','cyan','blue','purple']
let son_number = 0
let son_lock = true

content.addEventListener('mouseout',son_color)


function son_color(e) {
    let tar = e.target
    if (tar.classList.contains('bibi')) {
        if (son_lock) {
            son_number++
            son_lock = false
            if (son_number > color.length-1) {
                son_number = 0
            }
            tar.style.backgroundColor = color[son_number]
            setTimeout(() => {
                son_lock = true
            }, 50);
            setTimeout(() => {
                tar.style.backgroundColor = 'gray'
            }, 1000);  
        }else{
            return false
        }
    }
}

