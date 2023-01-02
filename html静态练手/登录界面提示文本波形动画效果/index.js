const prompts = document.querySelectorAll('.prompt')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

prompts.forEach(event=>{
    event.innerHTML = event.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 20}ms">${letter}</span>`)
    .join('')
})


email.addEventListener('change',input_change)
password.addEventListener('change',input_change)

function input_change() {
    console.log('1111');
    let inp_value = this.value.trim()
    if (inp_value != '') {
        const pro = this.nextElementSibling
        const pro_spans = pro.querySelectorAll('span')
        pro_spans.forEach(pro_span=>{
            pro_span.classList.add('ttt')
        })
    }else{
        const pro = this.nextElementSibling
        const pro_spans = pro.querySelectorAll('span')
        pro_spans.forEach(pro_span=>{
            pro_span.classList.remove('ttt')
        })
    }

}