var text = document.querySelector('.text');
var number = document.querySelector('.input_number')
var ttt = '一定要加油哇！！！'
var mg = 1
var time = 300/number.value
fu()
function fu() {
    var text_t = ttt.slice(0,mg)
    mg++
    // console.log(mg);
    text.innerHTML = text_t;
    if (mg > ttt.length) {
        mg = 1
    }
    setTimeout(fu,time)

}
number.addEventListener('input',(e)=>{
    time = 300/e.target.value
})