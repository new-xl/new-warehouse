const title = document.querySelector('.title')
const content_p = document.querySelector('.content_p')
const but = document.querySelector('.but')
var number = 0

const title_text= '太阳给草打电话'

var content_text = '太阳：喂，草? 我日啊。/n草：我草，你谁啊? /n太阳：我日啊/n草：我草，你到底是谁啊/n日: 我日啊!草!/n这时候太阳妈妈过来接过电话:喂~草!我日他妈啊,草你妈好吗?'

var content_new_text =  content_text.split('/n')

function con_text(number,bet = null) {
    console.log(bet);
    if(bet){
        content_p.innerHTML = bet
    }else{
        content_p.innerHTML = content_new_text[number]
    }
}

title.innerHTML = title_text
con_text(number)

but.addEventListener('click',()=>{
    number++
    if (number == content_new_text.length) {
        con_text(number,'完结撒花！！！！')
    }else if(number>content_new_text.length){
        number = 0
        con_text(number)
    }else{
        con_text(number)
    }
})