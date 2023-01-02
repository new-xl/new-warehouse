const feedback = document.querySelector('.feedback')
const thank = document.querySelector('.thank')
const boxs = feedback.querySelectorAll('.box')
const feedback_but = feedback.querySelector('.feedback_but')
const thank_feedback_text = thank.querySelector('.thank_feedback_text')

let text = ''
boxs.forEach(box=>{
    box.addEventListener('click',box_click)
})

function box_click() {
    boxs.forEach(box=>{
        box.classList.remove('shadow')
    })
    this.classList.add('shadow')
    const box_span = this.querySelector('span')
    text = box_span.innerText
}

feedback_but.addEventListener('click',but_click)

function but_click() {
    feedback.style.display = 'none'
    thank.style.display = 'flex'
    thank_feedback_text.innerText = text
}