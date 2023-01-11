const password = document.querySelector('#password')
const background_img = document.querySelector('.background_img')

// password.addEventListener('input',function () {
//     let inp_value = this.value.split('')
//     let bibi = []
//     let kk =0
//     if (inp_value.length > 6) {
//         inp_value.forEach(val => {
//             let strCode = val.charCodeAt()
//             if(strCode >= 65 && strCode <= 90){
//                 bibi.push(3)
//             }else if(strCode >= 97 && strCode <= 122){
//                 bibi.push(2)
//             }else{
//                 bibi.push(1)
//             }
//         });
//         console.log(bibi);
//         let uppercase =bibi.filter(arr =>{
//             return arr == 3
//         })
//         let Lower = bibi.filter(arr =>{
//             return arr == 2
//         })
//         let other = bibi.filter(arr =>{
//             return arr == 1
//         })
//         console.log(uppercase);
//         if (uppercase.length > 0 &&Lower.length >0&&other.length >0) {
//             kk+=3
//         }else if(Lower.length >0&&uppercase.length||uppercase.length>0&&other.length >0){
//             kk+=2
//         }else{
//             kk++
//         }
//         console.log(kk);
//         if (kk==3) {
//             background_img.style.filter = 'blur(0px)'
//         }else if(kk == 2){
//             background_img.style.filter = 'blur(12px)'
//         }else{
//             background_img.style.filter = 'blur(18px)'
//         }
//     }else{
//         background_img.style.filter = 'blur(25px)'
//     }
// })


password.addEventListener('input',function () {
    let inp_value = this.value.split('')
    let num = 25
    let uppercase = 0
    let Lower = 0
    let other = 0
    let value_length = 0
    inp_value.forEach(val => {
        let strCode = val.charCodeAt()
        if(strCode >= 65 && strCode <= 90){
            uppercase = 10
        }else if(strCode >= 97 && strCode <= 122){
            Lower = 8
        }else{
            other = 5
        }
    });
    if (inp_value.length >= 6) {
        value_length = 2
    }
    num = num - uppercase - Lower - other - value_length
    background_img.style.filter = `blur(${num}px)`
})