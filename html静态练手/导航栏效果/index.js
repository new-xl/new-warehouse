const subject_imgs = document.querySelectorAll('.subject_img')
const lis = document.querySelectorAll('nav ul li')

lis.forEach((li,index)=>{
    li.dataset.index =index
    li.addEventListener('click',function () {
        lis.forEach((li,index)=>{
            li.classList.remove('active')
        })
        li.classList.add('active')
        subject_imgs.forEach(subject_img=>{
            subject_img.classList.remove('show')
        })
        subject_imgs[this.dataset['index']].classList.add('show')
    })
})