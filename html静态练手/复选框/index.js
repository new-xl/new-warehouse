const box =  document.querySelectorAll('.chel')
const ttt = document.querySelectorAll('.ttt')


for (let index = 0; index < box.length; index++) {
    box[index].addEventListener('click',function (e) {
        // this.checked = true
        // console.log(e.target);
        console.log(this.checked); 
        const ttt = this.parentNode.querySelector('.ttt')
        ttt.classList.toggle('kkk')
        ttt.classList.toggle('bbb')
        const che_box = this.parentNode.querySelector('.che_box') 
        che_box.classList.toggle('coler_b') 
        che_box.classList.toggle('coler_w')   
    })
}



