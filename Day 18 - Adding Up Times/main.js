const countTime = () => {

    const timeNodes = Array.from(document.querySelectorAll('[data-time]'))

    const seconds = timeNodes
    .map(time => time.dataset.time)
    .map(timeCode => {
        const [mins, secs] = timeCode.split(':').map(parseFloat)
        return (mins * 60) + secs
    })
    .reduce((total, vidSeconds) => total + vidSeconds)
    
    let secondsLeft = seconds
    
    const hours = Math.round(secondsLeft / 3600)
    secondsLeft = secondsLeft % 3600
    
    const mins = Math.round(secondsLeft / 60)
    secondsLeft = secondsLeft % 60

    const secs = secondsLeft

    const description = document.querySelector('.desc')
    description.innerHTML = `
    Total Time of This Course: <span>${hours}:${mins}:${secs}</span>
    `
}
countTime()