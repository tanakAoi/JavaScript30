const searchApp = () => {

    const form = document.querySelector('form')
    const input = document.querySelector('input')
    const result = document.querySelector('.result')

    
    const findAddress = async (postalCode) => {
        
        if ( !postalCode ) return
        
        const API_URL = `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postalCode}`;

        const response = await fetch(API_URL)

        const address = await response.json()

        showAddress(address)

    }
    
    const showAddress = (address) => {

        const addressResults = address.results
        
        if ( addressResults === null ) {
            
            result.innerText = "この郵便番号は存在しません。"

        } else {
            
            addressResults.forEach(addressEl => {

                const template = `
                <div class="card">
                    <li class="address address-1">
                        <span>${addressEl.kana1}</span>
                        <p>${addressEl.address1}</p>
                    </li>
                    <li class="address address-2">
                        <span>${addressEl.kana2}</span>
                        <p>${addressEl.address2}</p>
                    </li>
                    <li class="address address-3">
                        <span>${addressEl.kana3}</span>
                        <p>${addressEl.address3}</p>
                    </li>
                </div>
                `

                result.innerHTML = template

            })

        }; 
        
    }
    
    const handleSubmit = (event) => {
        
        const inputValue = input.value
        
        event.preventDefault()
        
        if ( inputValue.length != 7 ) return
        
        findAddress(inputValue)
    } 

    form.addEventListener('input', handleSubmit)

}

searchApp()
