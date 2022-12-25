const title_img = document.querySelector('.title-img')
const conent_h = document.querySelector('.conent-h')
const conent_p = document.querySelector('.conent-p')
const picture = document.querySelector('.picture')
const introduce_h = document.querySelector('.introduce-h')
const introduce_s = document.querySelector('.introduce-s')
const conent_f = document.querySelectorAll('.conent-f')
const conent_v = document.querySelectorAll('.conent-v')
const animated_bg = document.querySelectorAll('.animated-bg')

setTimeout(() => {
    title_img.style.backgroundImage = 'url(/static/背景图-5.jpg)'
    title_img.style.backgroundSize = '100% 100%'
    conent_h.innerHTML = '你好啊'
    conent_p.innerHTML = '什么都好什么都非常棒'
    picture.style.backgroundImage = 'url(/static/backgroud-imgs/背景图-4.jpg)'
    picture.style.backgroundSize = '100% 100%'
    introduce_h.innerHTML = '许许'
    introduce_s.innerHTML = '2020-10-02'
    for (let index = 0; index < conent_f.length; index++) {
        const element = conent_f[index];
        element.style.display = 'block'
    }
    for (let index = 0; index < conent_v.length; index++) {
        const element = conent_v[index];
        element.style.display = 'none'
    }
    for (let index = 0; index < animated_bg.length; index++) {
        const element = animated_bg[index];
        element.classList.remove('animated-bg')
    }
}, 3000);