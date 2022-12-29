const content_img_background = document.querySelectorAll('.content_img_background')
const content_img = document.querySelector('.content_img')

content_img.addEventListener('dragstart',drag_start)
content_img.addEventListener('dragend',drag_end)

for (let index = 0; index < content_img_background.length; index++) {
    const element = content_img_background[index];
    element.addEventListener('dragenter',drag_enter)
    element.addEventListener('dragover',drag_over)
    element.addEventListener('dragleave', dragLeave)
    element.addEventListener('drop',drag_drop)
    
}

function drag_start() {
    setTimeout(() => {
        this.className = 'invisible'
    }, 0)
}

function drag_end() {
    this.className = 'content_img'
}


function drag_enter(e) {
    console.log(content_img);
    e.preventDefault()
}

function drag_over(e) {
    e.preventDefault()
}

function dragLeave() {
    this.className = 'content_img_background'
}

function drag_drop() {
    console.log(this);
    this.append(content_img)
}