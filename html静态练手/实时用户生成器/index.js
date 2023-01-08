const search = document.querySelector('.search')
const content_users = document.querySelector('.content_users')
const loding = document.querySelector('.loding')
const loding_strong = loding.querySelector('strong')
const content = document.querySelector('.content')

let loding_text = loding_strong.innerText

let loding_list = loding_text.split('')
loding_strong.innerHTML = ''
let strong_span = ''
loding_list.forEach((text,index)=>{
    strong_span += `<span style="transition-delay:${index * 20}ms">${text}</span>`
})
loding_strong.innerHTML = strong_span

let timing = null

timing = setInterval(function () {
    if (loding_strong.lastElementChild !=null) {
        loding_transition()
        clearInterval(timing)
    }
},1000)

function loding_transition() {
    const loding_span = loding_strong.querySelectorAll('span')
    loding_span.forEach(span=>{
        span.classList.toggle('kkk')
    })
    console.log('1111');
    setTimeout(function () {
        if (loding.classList.contains('ttt')) {
            return false
        }else{
            loding_transition()
        }
    },1000)
}


// async function send_request(num = 8) {
//     let acquire =  num
//     let new_url = n_url+'?results='+acquire 
//     let data = await promise_xhr(new_url)
//     let {results}= JSON.parse(data)
//     loding.classList.add('ttt')
//     results.forEach((user,index)=>{
//         let user_li = document.createElement('div')
//         user_li.className = 'content_user'
//         user_li.dataset['index'] = index
//         user_li.innerHTML = `
//         <div class="user_picture">
//             <span class="picture" style="background-image:url(${user.picture.large});">
//             </span>
//         </div>
//         <div class="user_content">
//             <strong class="name">${user.name.first} ${user.name.last}</strong>
//             <small class="address">${user.location.city}, ${user.location.country}</small>
//         </div>
//         `
//         content_users.appendChild(user_li)
//         console.log(user_li);
//     })
// }
// ?results=80
const n_url= 'https://randomuser.me/api'
// 封装promise的xhr请求
function promise_xhr(new_url) {
    return new Promise(function (resolve,reject) {
        const xhr = new XMLHttpRequest();
    
        xhr.open('GET',new_url)
    
        xhr.send()
    
        xhr.onreadystatechange = function () {
            if (xhr.readyState===4 && xhr.status ===200) {
                resolve(xhr.responseText);
            }
        }
    })
}


let turn_on = true
let lock = true
let data_lest = []
let data_table = []

async function send_request(num = 8,) {
    if (lock) {
        let acquire =  num
        let new_url = n_url+'?results='+acquire 
        let data = await promise_xhr(new_url)
        let {results}= JSON.parse(data)
        results.forEach(resu =>{
            data_table.push(resu.name.first[0])
            // console.log(data_table);
            data_lest.push(resu)
        })
        if (turn_on) {
            turn_on = false
            add_node(results)
            send_request(100)
        }
    }
}
send_request()

let node_num = 0

function add_node(results) {
    node_num = node_num + 8
    loding.classList.add('ttt')
    results.forEach((user,index)=>{
        let user_li = document.createElement('div')
        user_li.className = 'content_user'
        user_li.dataset['index'] = index
        user_li.innerHTML = `
        <div class="user_picture">
            <span class="picture" style="background-image:url(${user.picture.large});">
            </span>
        </div>
        <div class="user_content">
            <strong class="name">${user.name.first} ${user.name.last}</strong>
            <small class="address">${user.location.city}, ${user.location.country}</small>
        </div>
        `
        content_users.appendChild(user_li)
        console.log(user_li);
    })
}

let sce_value = ''
let search_result = []
let pull_lock = true
search.addEventListener('input',function (e) {
    sce_value = this.value
    pull_lock = false
    if (this.value.trim() == '') {
        pull_lock = true
        node_num = 0
        let bk = []
        search_result = []
        for (let index = 0; index < 8; index++) {
            bk.push(data_lest[index])
        }
        content_users.innerHTML = ''
        add_node(bk)
    }else if ( sce_value.length == 1) {
        search_result = []
        let data_index = findall(data_table,sce_value)
        if (data_index.length != 0) {
            for (let index = 0; index < data_index.length; index++) {
                let tt = data_index[index]
                search_result.push(data_lest[tt])
            }
            content_users.innerHTML = ''
            add_node(search_result)
        }else{
            content_users.innerHTML = ''
            content_users.innerHTML = `
            <div class="loding">
                <strong>搜索有误....</strong>
            </div>
            `
        }
    }else if(sce_value.length > 1){
        let ks = []
        for (let index = 0; index < search_result.length; index++) {
            if (search_result[index].name.first.search(sce_value) != -1) {
                ks.push(search_result[index])
            }
        }
        if (ks.length != 0) {
            content_users.innerHTML = ''
            add_node(ks)
        }else{
            content_users.innerHTML = ''
            content_users.innerHTML = `
            <div class="loding">
                <strong>搜索有误....</strong>
            </div>
            `
        }
    }
})


 //在数组中查找所有出现的x，并返回一个包含匹配索引的数组
 function findall(a,x){
    let results=[],
        len=a.length,
        pos=0;
    while(pos<len){
        pos=a.indexOf(x,pos);
        if(pos===-1){//未找到就退出循环完成搜索
        break;
        }
        results.push(pos);//找到就存储索引
        pos+=1;//并从下个位置开始搜索
    }
    return results;
}



//下拉加载更多
window.addEventListener('scroll',function () {
    // console.log( '当前整个页面的高度：'+document.documentElement.scrollHeight);
    // console.log('当前整个页面可视区的高度：'+document.documentElement.clientHeight);
    // console.log('当前整个页面卷曲的高度：'+ document.documentElement.scrollTop);
    let element_scrh = document.documentElement.scrollHeight
    let element_clih = document.documentElement.clientHeight
    let element_scrt = document.documentElement.scrollTop
    if ((element_scrt+element_clih) ==element_scrh) {
        if (pull_lock) {
            if (node_num+16 >data_lest.length) {
                send_request(100)
                let new_data = data_lest.slice(node_num,node_num+8)
                add_node(new_data)
            }else{
                let new_data = data_lest.slice(node_num,node_num+8)
                add_node(new_data)
            }

        }
        
    }
})