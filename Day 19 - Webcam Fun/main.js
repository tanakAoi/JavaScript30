const webCamApp = () => {

    const liveScreen = document.querySelector('.live-screen')
    const mainScreen = document.querySelector('.main-screen')
    const ctx = mainScreen.getContext('2d')
    const strip = document.querySelector('.strip')
    const takePhotoBtn = document.querySelector('button')
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

            // Take the pixels out
            let pixels = ctx.getImageData(0, 0, width, height)

            /**
             * Edit pixel data in functions
             * Unused functions must be commented out  
             * */ 
            // pixels = redFilter(pixels)
            pixels = RGBSplit(pixels)
            // pixels = greenScreen(pixels)

            // Put pixels back
            ctx.putImageData(pixels, 0, 0)

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

    }
    takePhotoBtn.addEventListener('click', takePhoto)

    const redFilter = (pixels) => {

        for( let i = 0; i < pixels.data.length; i += 4 ) {

            pixels.data[i + 0] = pixels.data[i + 0] + 50 // RED
            pixels.data[i + 1] = pixels.data[i + 1] - 60 // GREEN
            pixels.data[i + 2] = pixels.data[i + 2] - 60 // BLUE

        }
        return pixels

    }

    const RGBSplit = (pixels) => {

        for( let i = 0; i < pixels.data.length; i += 4 ) {

            pixels.data[i - 150] = pixels.data[i + 0] // RED
            pixels.data[i + 100] = pixels.data[i + 1] // GREEN
            pixels.data[i + 200] = pixels.data[i + 2] // BLUE

        }
        return pixels

    }

    const greenScreen = (pixels) => {

        const levels = {}

        document.querySelectorAll('.rgb input').forEach(input => {
            levels[input.name] = input.value
        })

        for( i = 0; i < pixels.data.length; i += 4 ) {

            red = pixels.data[i + 0];
            green = pixels.data[i + 1];
            blue = pixels.data[i + 2];
            alpha = pixels.data[i + 3];

            if (red >= levels.rmin
            && green >= levels.gmin
            && blue >= levels.bmin
            && red <= levels.rmax
            && green <= levels.gmax
            && blue <= levels.bmax) {

                // take it out!
                pixels.data[i + 3] = 0;

            }
        }
        return pixels
    }

    liveScreen.addEventListener('canplay', paintToCanvas)
}
webCamApp()