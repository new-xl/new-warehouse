const write = document.querySelector('#write')
const display_frame = document.querySelector('.display_frame')

write.addEventListener('keyup',write_input)

let lock = true
function write_input(e) {
    let val = e.target.value
    val_copy(val)
    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.valeu = ''
        },10)

        randomSelect()

    }
}

function val_copy(val) {
    let tars = val.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    display_frame.innerHTML = ''
    tars.forEach(tar => {
        const sub_span = document.createElement('span')
        sub_span.classList.add('label_frame')
        sub_span.innerText = tar
        display_frame.appendChild(sub_span)

    });
}


function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        hightlightTag(randomTag)

        setTimeout(() => {
            unHightlightTag(randomTag)
        },100)
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            hightlightTag(randomTag)
        }, 100)

    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.label_frame')
    return tags[Math.floor(Math.random() * tags.length)]
}

function hightlightTag(tag) {
    tag.classList.add('switch_color')
}

function unHightlightTag(tag) {
    tag.classList.remove('switch_color')
}