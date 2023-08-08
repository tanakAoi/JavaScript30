galleryApp = () => {

    
    const panels = document.querySelectorAll('.panel')
    
    const openPanel = (event) => {
        
        const panelElement = event.target.parentElement;

        panelElement.classList.add('open');

    }

    const closePanel = (event) => {

        const panelElement = event.target.parentElement;

        panelElement.classList.remove('open');
    }

    panels.forEach(panel => panel.addEventListener('mouseover', openPanel))
    panels.forEach(panel => panel.addEventListener('mouseout', closePanel))

}

galleryApp()