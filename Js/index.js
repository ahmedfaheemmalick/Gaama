let mySong = document.getElementById("my-song")
let icon = document.getElementById("icon")

icon.onclick = function () {
    if (mySong.paused) {
        mySong.play()
        icon.src = "./Assets/pause.png"
    } else {
        mySong.pause()
        icon.src = "./Assets/play.png"
    }
}