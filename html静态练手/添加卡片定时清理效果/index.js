const but = document.querySelector('.but')
const interface = document.querySelector('.interface')

const card_texts = [{'one':'消息1'},{'two':'消息2'},{'three':'消息3'}]
let num = 0 

but.addEventListener('click',but_click)

function but_click() {
    const card = document.createElement('div')
    if (num ==card_texts.length) {
        num = 0
    }
    let card_class = Object.keys(card_texts[num])[0]
    let card_text = Object.values(card_texts[num])[0]
    card.classList.add('card')
    card.classList.add(card_class)
    card.innerHTML = card_text
    console.log(interface.innerHTML == '');
    if (interface.innerHTML == '') {
        interface.append(card)
    }else{
        const cards = interface.querySelector('.card')
        interface.insertBefore(card,cards[0])
    }
    num++

    setTimeout(() => {
        card.remove()
    }, 3000)
} 