const content = document.querySelector('.content')

window.addEventListener('keydown',(e)=>{
    content.innerHTML = `
    <div class="key">
                <small class="text">这是键</small>
                <div class="key_content">
                    <span>${e.key === ' ' ? 'Space' : e.key}</span>
                </div>
    </div>
    <div class="key">
                <small class="text">这是键的键值</small>
                <div class="key_content">
                    <span>${e.keyCode}</span>
                </div>
    </div>
    <div class="key">
                <small class="text">这是触发的键</small>
                <div class="key_content">
                    <span>${e.code}</span>
                </div>
    </div>
    `
})