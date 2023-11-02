const webCamApp = () => {

    const liveScreen = document.querySelector('.live-screen')
    const mainScreen = document.querySelector('.main-screen')
    const ctx = mainScreen.getContext('2d')
    const strip = document.querySelector('.strip')


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
        console.log(width, height)

        setInterval(() => {
            ctx.drawImage(liveScreen, 0, 0, width, height)
        }, 16)

    }
    

    
    liveScreen.addEventListener('canplay', paintToCanvas)
}
webCamApp()