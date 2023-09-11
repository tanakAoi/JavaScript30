const sort = () => {
    
    const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog']
    
    const strip = (bandName) => {
    
        return bandName.replace(/^(a |an |the )/i, '').trim()
    
    }
    
    const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1)
    
    console.log(sortedBands)
    
    const list = document.querySelector('.list')
    
    list.innerHTML = sortedBands.map(sortedBand => `<li class="list__item">${sortedBand}</li>`).join('')

}
sort()