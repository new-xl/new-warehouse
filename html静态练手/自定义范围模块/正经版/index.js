const ran = document.querySelector('#ran')
const lab = document.querySelector('.lab')
const ttt = document.querySelector('.ttt')


ran.addEventListener('input',function (e) {
    const tar = e.target
    const tar_value = tar.value
    const tar_w = getComputedStyle(tar).getPropertyValue('width')
    const lab_w = getComputedStyle(lab).getPropertyValue('width')
    const num_width = +tar_w.substring(0,tar_w .length - 2)
    const num_label_width = +lab_w.substring(0,lab_w .length - 2)
    const max = +tar.max
    const min = +tar.min
    const ratio = num_width / max 
    var ttt_left =  (tar_value*ratio) - (num_label_width/2) +scale(tar_value, min, max, 10, -10)
    ttt.style.left = ttt_left + 'px'
})

//  0,100,10,-10
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    30*-20/100+10
  }