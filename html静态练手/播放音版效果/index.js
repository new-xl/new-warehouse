const audio = document.querySelector('.audio')
const videos = audio.querySelectorAll('video')
const buttons = document.querySelector('.buttons')

const video_ids = []
videos.forEach(video=>{
    video_ids.push(video.id)
})

video_ids.forEach(video_id=>{
    const but = document.createElement('button')
    but.classList.add('but')
    but.innerHTML = video_id
    buttons.appendChild(but)
})

buttons.addEventListener('click',function (e) {
    const tar = e.target
    const tar_text = tar.innerHTML
    const video_id = document.querySelector(`#${tar_text}`)
    stopSongs()
    video_id.play()
})

function stopSongs() {
    video_ids.forEach(sound => {
        const song  = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}