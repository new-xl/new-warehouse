const canvas = document.querySelector('#canvas')
const subtract = document.querySelector('.subtract')
const number = document.querySelector('.number')
const plus = document.querySelector('.plus')
const color_EI = document.querySelector('#color')
const clear_EI = document.querySelector('.clear')

const cts = canvas.getContext('2d')

let color = 'block'
let size = 5
let isPressed = false
let x
let y

canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed){
        const x2 = e.offsetX
        const y2 = e.offsetY

        Draw_circle(x2,y2)
        Draw_straight_lines(x, y, x2, y2)

        x = x2
        y = y2

    }
    
})


function Draw_circle() {
    cts.beginPath()
    // 画圆，XY表示坐标，0表示起始角度，Math.PI是圆周率（3.14）【Math.PI * 2表示画一个完整的圆】
    cts.arc(x, y, size, 0, Math.PI * 2)
    // fillStyle表示圆中填充的颜色
    cts.fillStyle = color
    // fill() 方法填充当前的图像（路径）。默认颜色是黑色。
    cts.fill()

}

function Draw_straight_lines(x1,y1,x2,y2) {
    cts.beginPath();
    // 直线起始位置
    cts.moveTo(x1, y1)
    // 直线结束位置
    cts.lineTo(x2, y2)
    // strokeStyle 属性设置或返回用于笔触的颜色、渐变或模式。
    cts.strokeStyle = color 
    // lineWidth 属性设置或返回当前线条的宽度，以像素计
    cts.lineWidth = size * 2
    // stroke() 方法会实际地绘制出通过 moveTo() 和 lineTo() 方法定义的路径。默认颜色是黑色
    cts.stroke()
}


function updateSizeOnScreen() {
    console.log(size);
    number.innerHTML = size
}

plus.addEventListener('click', () => {
    size += 5
    if(size > 50) {
        size = 50
    }

    updateSizeOnScreen()
})

subtract.addEventListener('click', () => {
    size -= 5
    if(size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})

color_EI.addEventListener('change', (e) => color = e.target.value)

clear_EI.addEventListener('click', () => cts.clearRect(0, 0, canvas.width, canvas.height))