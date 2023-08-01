const photoEditingApp = () => {

    const inputs = document.querySelectorAll('.controls input');
    
    const handleUpdate = (event) => {
        
        const suffix = event.target.dataset.suffix || '';

        document.documentElement.style.setProperty(`--${event.target.name}`, event.target.value + suffix)
        console.log(document.documentElement)

    }

    inputs.forEach(input => input.addEventListener('input', handleUpdate));

}
photoEditingApp()