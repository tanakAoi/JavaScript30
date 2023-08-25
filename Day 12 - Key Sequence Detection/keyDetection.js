keyDetectionApp = () => {

    const pressed = []
    const keyword = 'coffee'

    const showImage = (event) => {

        pressed.push(event.key)
        
        pressed.splice( 0, pressed.length - keyword.length )
        
        const word = pressed.join('')

        const image = document.querySelector('.image')
        const photoby = document.querySelector('.photoby')

        if ( word === keyword ) {

            image.classList.add('image--show')
            photoby.classList.add('photoby--show')

        }

    }

    window.addEventListener('keyup', showImage)

}
    
keyDetectionApp()