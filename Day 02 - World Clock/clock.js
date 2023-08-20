clockApp = () => {
    const secHands = document.querySelectorAll('.clock__hand--sec')
    const minHands = document.querySelectorAll('.clock__hand--min')
    const hourHand = document.querySelectorAll('.clock__hand--hour')
    
    const setDate = () => {
        
        const now = new Date();
        
        // Seconds
        const seconds = now.getSeconds();
        const secondsDegree = (seconds / 60) * 360 - 90;
        secHands.forEach(secHand => {
            secHand.style.transform = `rotate(${secondsDegree}deg)`;
        })
        
        // Mins
        const mins = now.getMinutes();
        const minsDegree = ((mins / 60) * 360) + ((seconds / 60) * 6) - 90; // 6deg/min 
        minHands.forEach(minHand => {
            minHand.style.transform = `rotate(${minsDegree}deg)`;
        })
        
        // Hours
        const hours = now.getHours();
        const hoursDegree = ((hours / 12) * 360) + ((mins / 60) * 30) - 90; // 30deg/h
        
            // Stockholm
            const hourHandStockholm = hourHand[0];
            hourHandStockholm.style.transform = `rotate(${hoursDegree}deg)`;
            
            // Tokyo
            const hourHandTokyo = hourHand[1];
            const hoursDegreeTokyo = hoursDegree + 210; // + 7h = 210deg
            hourHandTokyo.style.transform = `rotate(${hoursDegreeTokyo}deg)`;
            
            // New York
            const hourHandNy = hourHand[2];
            const hoursDegreeNy = hoursDegree - 180; // - 6h = 180deg
            hourHandNy.style.transform = `rotate(${hoursDegreeNy}deg)`;

    }

    setInterval(setDate, 1000)

}

clockApp()