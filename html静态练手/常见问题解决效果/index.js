const problem_fathers = document.querySelectorAll('.problem_father')

problem_fathers.forEach(problem_father=>{
    problem_father.addEventListener('click',problem_click)
})

function problem_click(e) {
    tar = e.target
    // 判断元素中是否包含了某个类名，返回的是布尔值
    if (tar.classList.contains('label')) {
        const faq_father = this.querySelector('.faq_father')
        const logo = this.querySelector('.logo')
        faq_father.classList.toggle('ttt')
        tar.classList.toggle('icon-xia_down')
        tar.classList.toggle('icon-guanbi_close')
        logo.classList.toggle('ttt')
    }
}