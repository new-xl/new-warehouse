const content = document.querySelector('.content')
const oldUrl = 'https://source.unsplash.com/random/'
let numBer = 30
let numt = []
let bibi = 0

// function pull_down(num) {
//     return new Promise((resolve,reject)=>{
//         const xhr = new XMLHttpRequest()
//         xhr.open('GET',`${oldUrl}${num}`)
//         console.log(`${oldUrl}${num}`);
//         xhr.send()
//         xhr.onreadystatechange = function () {
//             if (xhr.readystate ===4) {
//                 if (xhr.status>=200 && xhr.status<300) {
//                     resolve(xhr.responseText)
//                 }else{
//                     reject(xhr.status)
//                 }
//             }
//         }
//     })
// }

function random() {
    return Math.floor(Math.random() * 30) + 300
}

function  refresh() {
    for (let index = 0; index < numBer; index++) {
        numt.push(`${oldUrl}${random()}`)
    }
}
refresh()

function render() {
    for (let index = 0; index < 15; index++) {
        const sub_interface = document.createElement('div')
        sub_interface.classList.add('sub_interface')
        sub_interface.style.backgroundImage = `url(${numt[bibi]})`
        content.appendChild(sub_interface)
        bibi++
    }
}

render()


