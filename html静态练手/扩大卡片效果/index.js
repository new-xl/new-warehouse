const content_background = document.querySelectorAll('.content_background')

content_background.forEach((content,index)=>{
    content.style.backgroundImage = `url('/static/images/风景${index+1}.webp')`
    content.addEventListener('click',()=>{
        if (content.classList.length = 1) {
            content_background.forEach(con=>{
                con.classList.remove('subject')
            })
            content.classList.add('subject')
        }else{
            return false ;
        }
    })
})