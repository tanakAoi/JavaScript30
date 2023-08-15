const testApp = () => {

    const p = document.querySelector('p');
    const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
    
    const changeText = () => {
        p.innerText = 'Well done!';
        p.style.color = 'orange';
        p.style.fontSize = '30px';
    }
    
    p.addEventListener('click', changeText)

    // Regular
    console.log('Regular log')

    // Interpolated
    console.log(`5 + 2 = ${5 + 2}`)
    console.log('5 + 2 = %s', 5 + 2)

    // Styled
    console.log('%c Cool text', 'font-size: 20px; font-weight: 600; color: darkturquoise; font-style: italic')

    // warning!
    console.warn('WARNING!')

    // Error :|
    console.error('ERROR!!')

    // Info
    console.info('This is info.')

    // Testing
    console.assert( p.innerText === 'Click here!', 'This text is not correct.' )

    // clearing
    console.clear()

    // Viewing DOM Elements
    console.dir(p)
    
    // Table
    console.table(dogs)

    // Grouping together
    dogs.forEach(dog => {
        console.groupCollapsed(`${dog.name}`)
            console.log(`His name is ${dog.name}.`)
            console.log(`He is ${dog.age} years old,`)
            console.log(`which means ${dog.age * 7} years old if he is a human.`)
        console.groupEnd(`${dog.name}`)
    })

    // counting
    console.count('Counting...')
    console.count('Still counting...')
    console.count('Counting...')
    console.count('Counting...')
    console.count('Counting...')
    console.count('Still counting...')
    console.count('Still counting...')
    console.count('Counting...')
    console.count('Still counting...')
    console.count('Counting...')

    // timing
    console.time('fetching data')

    fetch('https://api.github.com/users/tanakAoi')
    .then(data => data.json())
    .then(data => {
        console.log(data)
        console.timeEnd('fetching data')
    })

}

testApp()