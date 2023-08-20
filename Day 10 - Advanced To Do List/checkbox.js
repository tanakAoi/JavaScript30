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
        <input class="todo__checkbox" type="checkbox">
        <li class="todo__item">${inputValue}</li>
        <button class="todo__button todo__button--remove material-symbols-outlined">delete</button>
        `

        list.append(newBox)

        input.value = ''

        // Check todo
        const checkBoxes = document.querySelectorAll('.todo__checkbox')
        checkBoxes.forEach(checkBox => checkBox.addEventListener('click', checkTodo))

        // Remove todo
        const removeButtons = document.querySelectorAll('.todo__button--remove')
        removeButtons.forEach(removeButton => removeButton.addEventListener('click', removeTodo))
    }

    let lastChecked

    const checkTodo = (event) => {

        const checkBoxes = document.querySelectorAll('.todo__checkbox')
        const box = event.target.parentElement
        
        let inBetween = false
        
        if ( event.shiftKey && event.target.checked ) {
            
            checkBoxes.forEach(checkBox => {
                
                if ( checkBox === event.target || checkBox === lastChecked ) {

                    inBetween = !inBetween

                }

                if ( inBetween ) {

                    checkBox.checked = true
                    
                }
            })

        }

        if ( event.shiftKey && !event.target.checked) {

            checkBoxes.forEach(checkBox => {
                
                if ( checkBox === event.target || checkBox === lastChecked ) {

                    inBetween = !inBetween

                }

                if ( inBetween ) {

                    checkBox.checked = false
                    
                }
            })

        }

        lastChecked = event.target

    }


    const removeTodo = (event) => {

        const removeButton = event.target
        const removedBox = removeButton.parentElement

        removedBox.remove()
        
    }

    form.addEventListener('submit', addTodo)

}

checkboxApp()