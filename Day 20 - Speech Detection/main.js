const speechDetection = () => {

    window.speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

    const recognition = new speechRecognition();
    recognition.interimResults = true;

    let p = document.createElement('p');    
    const container = document.querySelector('.container');
    container.append(p);
     
    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')

        p.textContent = transcript

        if(e.results[0].isFinal) {
            p = document.createElement('p')
            container.appendChild(p)
        }

        console.log(transcript)
    })
    recognition.addEventListener('end', recognition.start);

    recognition.start();
}
speechDetection() 