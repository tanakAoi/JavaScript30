checkboxApp = () => {

    const form = document.querySelector('.todo__form')
    const input = document.querySelector('.todo__input')
    const list = document.querySelector('.todo__list')
    
    const addTodo = (event) => {
        
        event.preventDefault()
        
        const inputValue = input.value
        
        if ( !inputValue ) return
        
        const newBox = document.createElement('div')
        newBox.classList.add('todo__box')

        newBox.innerHTML = `
        <button class="todo__button todo__button--check material-symbols-outlined">check_box_outline_blank</button>
        <li class="todo__item">${inputValue}</li>
        <button class="todo__button todo__button--remove material-symbols-outlined">delete</button>
        `

        list.append(newBox)

        input.value = ''

        // Check todo
        const checkButtons = document.querySelectorAll('.todo__button--check')
        checkButtons.forEach(checkButton => checkButton.addEventListener('click', checkTodo))

        // Remove todo
        const removeButtons = document.querySelectorAll('.todo__button--remove')
        removeButtons.forEach(removeButton => removeButton.addEventListener('click', removeTodo))
    }

    const checkTodo = (event) => {

        const checkButton = event.target
        const checkedBox = checkButton.parentElement

        if ( checkButton.innerText == 'check_box_outline_blank' ) {
                
            checkButton.innerText = 'check_box'
            checkedBox.classList.add('todo__box--checked')

        } else {

            checkButton.innerText = 'check_box_outline_blank'
            checkedBox.classList.remove('todo__box--checked')
            
        }

    }

    const removeTodo = (event) => {

        const removeButton = event.target
        const removedBox = removeButton.parentElement

        removedBox.remove()
        
    }

    form.addEventListener('submit', addTodo)

}

checkboxApp()