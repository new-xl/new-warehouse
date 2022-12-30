const container_text = document.querySelector('.container_text')
const container_number = document.querySelector('.container_number')
const container_progress = document.querySelector('.container_progress')
const container_percentage = document.querySelector('.container_percentage')
const cups = document.querySelectorAll('.cup')
let container  = 2
let num = 12.5
let cup_t = 0

cups.forEach(cup => {
    cup.addEventListener('click',cup_click)
});

function cup_click() {
    let cup_number=this.dataset['index']
    if (cup_number >= 1) {
        if (cup_number>cup_t) {
            cup_t = cup_number
            for (let index = 0; index < cup_t; index++) {
                cups[index].classList.add('ttt')
            }
            percentage()
        }else if(cup_number == cup_t){
            cup_t = cup_number - 1
            this.classList.remove('ttt')
            percentage()
        }else{
            cup_t = cup_number
            cups.forEach(cup => {
                cup.classList.remove('ttt')
            });
            for (let index = 0; index < cup_t; index++) {
                cups[index].classList.add('ttt')
            }
            percentage()
        }
    }
}

function percentage() {
    if(cup_t == 0){
        container_progress.style.visibility='hidden';
        container_text.style.visibility='visible';
    }else{
        if (cup_t == 8) {
            container_progress.style.visibility='visible';
            container_text.style.visibility='hidden';
        }else{
            container_progress.style.visibility='visible';
            container_text.style.visibility='visible';
        }
    }
    container_progress.style.height = cup_t*num +'%'
    container_number.innerHTML = (2-(cup_t*0.25)) +'L'
    container_percentage.innerHTML = cup_t*num +'%'
}