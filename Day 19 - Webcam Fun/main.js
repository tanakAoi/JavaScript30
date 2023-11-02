const webCamApp = () => {

    const liveScreen = document.querySelector('.live-screen')
    const mainScreen = document.querySelector('.main-screen')
    const ctx = mainScreen.getContext('2d')
    const strip = document.querySelector('.strip')
    const takePhotoBtn = document.querySelector('.btn__take-photo')
    const audio = document.querySelector('audio')


    const getVideo = () => {

        navigator.mediaDevices.getUserMedia({ video: true, audio: false })

        .then(localMediaStream => {
            liveScreen.srcObject = localMediaStream
            liveScreen.play()
        })

        .catch((error) => {
            console.error(error)
        })
    }
    getVideo()
    
    const paintToCanvas = () => {

        const width = liveScreen.videoWidth
        const height = liveScreen.videoHeight
        mainScreen.width = width
        mainScreen.height = height

        setInterval(() => {
            ctx.drawImage(liveScreen, 0, 0, width, height)
        }, 16)

    }
    
    const takePhoto = () => {

        audio.currentTime = 0
        audio.play()

        const data = mainScreen.toDataURL('img/jpeg')

        const link = document.createElement('a')
        link.href = data
        link.setAttribute('download', 'snapshot')
        link.innerHTML = `<img src=${data} alt="snapshot">`
        strip.insertBefore(link, strip.firstChild)

        console.log(link)

    }
    takePhotoBtn.addEventListener('click', takePhoto)
    
    liveScreen.addEventListener('canplay', paintToCanvas)
}
webCamApp()