const search = document.querySelector('#search')
const but = document.querySelector('#but')
const label = document.querySelector('.label')

let lock = true
label.addEventListener('click',label_click)

function label_click() {
    if (lock) {
        if (search.value.trim() == '') {
            lock = false
            search.classList.toggle('ttt')
            if (search.classList.contains('ttt')) {
                search.focus()
            }
        }else{
            label.setAttribute('for',but.id)
            search.value = ''
        }
    }else{
        return false
    }
}

but.addEventListener('click',()=>{
    alert('已经进行页面搜索')
    if (search.value.trim() == '') {
        label.setAttribute('for','')
        label.click()
    }
})

search.addEventListener('transitionend',()=>{
    lock = true
})