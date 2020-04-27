//dom elements
const video = document.querySelector("#video")
const play = document.querySelector("#play")
const stop = document.querySelector("#stop")
const progress = document.querySelector("#progress")
const timestamp = document.querySelector("#timestamp")

//play and pause video
const toggleVideoStatus = () => {
    if (video.paused) {
        video.play()
    } else {
        video.pause()
    }
}

//update play/pause icon    
const updatePlayIcon = () => {
    if (video.paused) {
        play.innerHTML = `<i class="fa fa-play fa-2x"></i>`
    } else {
        play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`
    }
}

//update progress & timestamp
const updateProgress = () => {
    return true;
}

//set video time to progress
const setVideoProgress = () => {
    return true;
}

const stopVideo = () => {
    video.currentTime = 0;
    video.pause();
}





//event listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo)

progress.addEventListener("change", setVideoProgress)