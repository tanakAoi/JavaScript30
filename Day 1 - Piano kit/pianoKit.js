pianoApp = () => {

    const keys = document.querySelectorAll('.key')
    
    const playNote = (event) => {
        
        const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
        const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)

        if ( !audio ) return;
       
        key.classList.add('clicked');
        audio.currentTime = 0;
        audio.play();

    }

    const removeTransition = (event) => {

        if ( event.propertyName !== 'transform' ) return;

        event.target.classList.remove('clicked');

    }

    keys.forEach(key => key.addEventListener('transitionend', removeTransition))
    window.addEventListener('keydown', playNote)

}

pianoApp()