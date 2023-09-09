const menuApp = () => {

    const menuForm = document.querySelector('.menu__form')
    const menuInput = document.querySelector('.menu__input')
    const menuList = document.querySelector('.menu__list')
    let items = JSON.parse(localStorage.getItem('items')) || []
    
    const addItemToLocalStorage = (event) => {

        event.preventDefault()

        const itemName = menuInput.value

        if ( !itemName ) return

        const itemObject = {
            item: itemName,
            alcoholic: false
        }

        items.push(itemObject)
        addItemToList(items)
        localStorage.setItem('items', JSON.stringify(items))

        menuInput.value = ''

    }

    const addItemToList = (items) => {

        menuList.innerHTML = items.map((item, index) => {

            return `
            <li class="menu__item">
                <input type="checkbox" data-index=${index} id="item${index}" class="check" ${item.alcoholic ? 'checked' : ''} >
                <label for=item${index} index=${index}>${item.item}</label>
            </li>
            `

        }).join('')

    }

    const checkAlcoholic = (event) => {

        if( !event.target.matches('input') ) return

        let el = event.target
        const index = el.dataset.index

        items[index].alcoholic = !items[index].alcoholic

        localStorage.setItem('items', JSON.stringify(items))

        addItemToList(items)

    }

    menuForm.addEventListener('submit', addItemToLocalStorage)
    menuList.addEventListener('click', checkAlcoholic)

    addItemToList(items)
}

menuApp()