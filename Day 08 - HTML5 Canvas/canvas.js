const canvasApp = () => {

    const canvas = document.querySelector('#canvas')
    const context = canvas.getContext('2d')
    
    // Canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Line style
    context.lineJoin = 'round';
    context.lineCap = 'round';
    
    // Default setting
    context.lineWidth = 72;
    let isDrawing = false;
    let firstX = 0;
    let firstY = 0;
    let hue = 0;
    let direction = true;

    
    const draw = (event) => {
        
        if ( !isDrawing ) return;

        context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        
        context.beginPath();
        
        // Start from
        context.moveTo(firstX, firstY);
        
        // Go to
        let lastX = event.offsetX
        let lastY = event.offsetY
        context.lineTo(lastX, lastY);

        context.stroke();

        [firstX, firstY] = [lastX, lastY];

        // Rainbow color
        hue++;

        if ( hue >= 360 ) {

            hue = 0;

        };

        // Line width
        if ( context.lineWidth >= 72 || context.lineWidth <= 12 ) {

            direction = !direction;

        }

        if ( direction ) {

            context.lineWidth++;
            
        } else {

            context.lineWidth--;

        }

    }
    
    canvas.addEventListener('mousedown', (event) => {
        
        isDrawing = true;
        
        [firstX, firstY] = [event.offsetX, event.offsetY];

    })
    
    canvas.addEventListener('mousemove', draw)

    canvas.addEventListener('mouseout', () => isDrawing = false)
    canvas.addEventListener('mouseup', () => isDrawing = false)
    
}

canvasApp()