const add = document.querySelector('.add')
const span = add.querySelector('span')
const i = add.querySelector('i')
const note_father = document.querySelector('.note_father')

add.addEventListener('mouseenter',function () {
    span.classList.add('www')
    i.classList.add('ttt')
})

add.addEventListener('mouseleave',function () {
    span.classList.remove('www')
    i.classList.remove('ttt')
})

add.addEventListener('click',add_click)
function add_click() {
    let sub_note = document.createElement('div')
    sub_note.classList.add('sub_note')
    sub_note.innerHTML = `
    <div class="operation">
        <i class="add_note iconfont icon-bianji_edit"></i>
        <i class="delete iconfont icon-huishouzhan"></i>
    </div>
    <div class="subject">
        <textarea name="" id="" maxlength="150" class="subject_textarea"></textarea>
        <div class="subject_text kkk">
                <p class="text"></p>
        </div>
    </div>
    `
    note_father.appendChild(sub_note)
}


note_father.addEventListener('click',note_click)
function note_click(e) {
    let tar = e.target
    const sub_ancestor = tar.parentNode.parentNode
    if (tar.classList.contains('add_note')) {
        const subject_textarea = sub_ancestor.querySelector('.subject_textarea')
        const text = sub_ancestor.querySelector('.text')
        const textarea_value = subject_textarea.value.trim()
        text.innerText = textarea_value
        text.parentNode.classList.remove('kkk')
        subject_textarea.classList.add('kkk')
    }else if(tar.classList.contains('delete')){
        note_father.removeChild(sub_ancestor)
    }else{
        return false
    }
}
