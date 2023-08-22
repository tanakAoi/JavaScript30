const videoApp = () => {

    const player = document.querySelector('.player')
    const video = player.querySelector('.player__video')
    const controls = player.querySelector('.player__controls')
    const playButton = player.querySelector('.toggle-play')
    const fullscreenButton = player.querySelector('.fullscreen')
    const sliders = player.querySelectorAll('input[type=range]')
    const skipButtons = player.querySelectorAll('[data-skip]')
    const progress = player.querySelector('.player__progress')
    const progressBar = player.querySelector('.player__progress--filled')
    

    const togglePlay = () => {
        
        if ( video.paused ) {

            video.play()
            playButton.innerText = 'pause'

        } else {

            video.pause()
            playButton.innerText = 'play_arrow'

        }

    }

    const skip = (event) => {

        let seconds = event.target.dataset.skip

        video.currentTime += parseFloat(seconds)

    }

    const handleRangeUpdate = (event) => {


        let sliderName = event.target.name
        let sliderValue = event.target.value
        
        video[sliderName] = sliderValue
        
    }
    
    const handleProgress = (event) => {
        
        
        const percent = ( video.currentTime / video.duration ) * 100
        
        
        progressBar.style.flexBasis = `${percent}%`
        
    }
    
    const scrub = (event) => {
        
        const clickPoint = event.offsetX
        const wholeLength = progress.offsetWidth

        const scrubTime =  ( clickPoint / wholeLength ) * video.duration

        video.currentTime = scrubTime

    }
    
    const openFullscreen = () => {

        if (video.requestFullscreen) {

            video.requestFullscreen()

        } 

    }


    // Events
    video.addEventListener('click', togglePlay)
    video.addEventListener('timeupdate', handleProgress) 

    playButton.addEventListener('click', togglePlay)
    
    skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip))

    fullscreenButton.addEventListener('click', openFullscreen)

    sliders.forEach(slider => slider.addEventListener('change', handleRangeUpdate))
    sliders.forEach(slider => slider.addEventListener('mousemove', handleRangeUpdate))

    let mousedown = false
    progress.addEventListener('click', scrub)
    progress.addEventListener('mousedown', () => mousedown = true)
    progress.addEventListener('mouseup', () => mousedown = false)
    progress.addEventListener('mousemove', (event) => mousedown && scrub(event))

}

videoApp()