const hero = document.querySelector('.hero')
const title = document.querySelector('.title')
const walk = 100 // 100px

const shadow = (event) => {

    const width = hero.offsetWidth
    const height = hero.offsetHeight

    let x = event.clientX
    let y = event.clientY

    const xWalk = Math.round(( x / width * walk ) - ( walk / 2 ))
    const yWalk = Math.round(( y / height * walk ) - ( walk / 2 ))
    
    title.style.textShadow = `${xWalk}px ${yWalk}px 10px rgba(0, 0, 0, 0.5)`
}

hero.addEventListener('mousemove', shadow)
