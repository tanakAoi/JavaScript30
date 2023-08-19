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

        const checkedButton = event.target
        const checkedBox = checkedButton.parentElement

        if ( checkedButton.innerText == 'check_box_outline_blank' ) {
            
            checkedButton.innerText = 'check_box'
            checkedBox.classList.add('todo__box--checked')
            
        } else {
            
            checkedButton.innerText = 'check_box_outline_blank'
            checkedBox.classList.remove('todo__box--checked')
            
        } 

        const checkButtons = document.querySelectorAll('.todo__button--check')
        const checkBoxes = document.querySelectorAll('.todo__box')

        // console.log(checkButtons, checkBoxes)

        let lastChecked
        
        const checkTodos = (event) => {
            
            let checkInBetween = false

            if ( event.shiftKey && event.target.innerText == 'check_box' ) {

                checkButtons.forEach(checkButton => {

                    if ( checkButton === event.target || checkButton === lastChecked ) {

                        checkInBetween = !checkInBetween

                    }

                    if ( checkInBetween ) {

                        checkButton.innerText = 'check_box'
                        checkBoxes.forEach(checkBox => checkBox.classList.add('todo__box--checked'))

                    }
                })
            }
            
            lastChecked = event.target

        }
        

        checkButtons.forEach(checkButton => checkButton.addEventListener('click', checkTodos))

    }

    const removeTodo = (event) => {

        const removeButton = event.target
        const removedBox = removeButton.parentElement

        removedBox.remove()
        
    }

    form.addEventListener('submit', addTodo)

}

checkboxApp()