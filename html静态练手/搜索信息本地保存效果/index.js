const text = document.querySelector('.text')
const informationEl = document.querySelector('.information')
const clearEl = document.querySelector('.clear')

let arrs = null
let Arr = null
function session_get() {
    Arr = localStorage.getItem('information')
    if (Arr != null ) {
        console.log(Arr);
        if (Arr.length>1) {
            arrs = Arr.trim().split(',')
        }else{
            arrs = Arr
        }
    }else{
        informationEl.innerHTML = ''
        return false
    }
    informationEl.innerHTML = ''
    arrs.forEach(arr =>{
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = arr
        informationEl.appendChild(card)
    })
}
session_get()

text.addEventListener('keydown',text_input)

function text_input(e) {
    let text_value = this.value.trim()
    if (e.key == 'Enter') {
        if (Arr == null) {
            localStorage.setItem('information',[text_value])
            session_get()
            this.value = ''
        }else{
            localStorage.setItem('information',[Arr,text_value])
            session_get()
            this.value = ''
        }
    }else{
        return false
    }
}

clearEl.addEventListener('click',function () {
    localStorage.clear()
    session_get()
})