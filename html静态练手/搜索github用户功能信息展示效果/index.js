const search = document.querySelector('.search')
const main = document.querySelector('#main')
const form = document.querySelector('.search_interface')

const APIURL = 'https://api.github.com/users/'
let data = null
let re_pos = null

function search_i(name,pi =''){
    const p = new Promise((resolve,reject)=>{
        const XTR = new XMLHttpRequest()
        XTR.open('GET',APIURL+ name +pi)
        XTR.send()
        XTR.onreadystatechange = function () {
            if(XTR.readyState === 4 && XTR.status ===200 ){
                resolve(XTR.responseText)
            }else if(XTR.readyState === 4){
                reject(XTR.status)
            }
        }
    })
    return p

}


form.addEventListener('submit', async(e) => {
    e.preventDefault()
    let search_value = search.value.trim()
    if ( search_value != '') {
        data =await search_i(search_value)
        .then(
            function (value) {
                return value
            }
        )
        .catch(
            function (reason) {
                main.style.display = 'flex'
                createErrorCard(reason) 
            }
        )
        main.style.display = 'flex'
        ttt();
        re_pos = await search_i(search_value,'/repos?sort=created')
        .then(
            function (value) {
                return value
            }
        )
        .catch(
            function (reason) {
                main.style.display = 'flex'
                createErrorCard(reason) 
            }
        )
        kkk()
        search.value = ''
    }else{
        return false
    }
})


function ttt() {
    data = JSON.parse(data)
    main.innerHTML = `
    <div class="user_head_picture">
        <div class="head_picture" style="background-image: url(${data.avatar_url});""></div>
    </div>
    <div class="user_information">
        <h2 class="name">${data.name}</h2>
        <p class="introduction">${data.bio}</p>
        <ul class="warehouse">
            <li>
                ${data.followers}
                <strong>Followers</strong>
            </li>
            <li>
                ${data.following}
                <strong>Following</strong>
            </li>
            <li>
                ${data.public_repos}
                <strong>Repos</strong>
            </li>
        </ul>
        <div class="label">
        </div>
    </div>
    `
}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg} &nbsp; &nbsp; 发生了未知的错误</h1>
        </div>
    `

    main.innerHTML = cardHTML
}
function kkk() {
    re_pos = JSON.parse(re_pos)
    const reposEl = document.querySelector('.label')
    re_pos.slice(0, 12).forEach(repo => {
        const repoEl = document.createElement('a')
        repoEl.href = repo.html_url
        repoEl.innerText = repo.name
        reposEl.appendChild(repoEl)
})
}

