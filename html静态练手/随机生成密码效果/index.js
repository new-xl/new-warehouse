const password_text = document.querySelector('.password_text')
const text = password_text.querySelector('.text')
const iconfont = password_text.querySelector('.iconfont')
const lengths = document.querySelector('#length')
const uppercase = document.querySelector('#uppercase')
const lowercase =document.querySelector('#lowercase')
const numbers = document.querySelector('#numbers')
const characters = document.querySelector('#character')
const but = document.querySelector('.but')
const copy_interface = document.querySelector('.copy_interface')

const randownFun = {
    upper: getupper,
    lower: getlower,
    num: getnum,
    character: getcharecter
}

but.addEventListener('click',get_randown)
function get_randown() {
    const lengt = lengths.value
    const hasUpper = uppercase.checked
    const haslower = lowercase.checked
    const hasnum = numbers.checked
    const haschara = characters.checked
    text.innerHTML = generatePassword(lengt,hasUpper,haslower,hasnum,haschara)
}

function generatePassword(lengt,upper,lower,num,character) {
    let generatedPassword = ''
    const password_option_number = upper + lower + num + character
    const password_option = [{upper},{lower},{num},{character}].filter(itme=>Object.values(itme)[0])
    if(password_option_number === 0){
        return ''
    }
    for(let i = 0; i < lengt; i += password_option_number) {
        password_option.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randownFun[funcName]()
        })
    }
    const new_password = generatedPassword.slice(0,lengt)
    console.log(new_password.length);
    return new_password
}


function getupper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getlower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function getnum() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function getcharecter() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}


iconfont.addEventListener('click',function () {
    const texts = document.querySelector('.text')
    const tex = texts.innerHTML.trim()
    if (tex == '') {
        return false
    }
    copy_interface.classList.remove('kkk')
    const copy_password = document.createElement('span')
    copy_password.classList.add('copy_password')
    copy_password.innerHTML = tex
    copy_interface.appendChild(copy_password)
})