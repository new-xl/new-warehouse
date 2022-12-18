const but = document.querySelector('.magic');
const pages = document.querySelectorAll('.page');
let throttle = false

but.addEventListener('click',()=>{
    if (!throttle) {
        for (let index = 0; index < pages.length; index++) {
            const page = pages[index];
            page.style.transform = 'rotateZ(360deg)';
            page.style.marginLeft = 0;
            page.style.marginTop = 0;
        }
        throttle = true
    }else{
        for (let index = 0; index < pages.length; index++) {
            const page = pages[index];
            page.style.transform = 'rotateZ(0deg)';
            page.style.marginLeft = 20+'px';
            page.style.marginTop = 20+'px';
        }
        throttle = false
    }
})