const  f_numbers = document.querySelectorAll('.f_number')
let ttt = 0


f_numbers.forEach(f_number=>{
    f_number.innerHTML = '0'
    function f_increment() {
        ttt = f_number.dataset['index']
        const c = +f_number.innerHTML
        const increment = ttt / 200
        if(c<ttt){
            f_number.innerText = `${Math.ceil(c + increment)}`
            setTimeout(() => {
                f_increment()
            }, 10);
        }else{
            f_number.innerText = ttt
        }
    }
    f_increment()
})