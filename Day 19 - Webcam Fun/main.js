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
            console.log(liveScreen)
        })

        .catch((error) => {
            console.error(error)
        })
    }
    getVideo() 

}
webCamApp()