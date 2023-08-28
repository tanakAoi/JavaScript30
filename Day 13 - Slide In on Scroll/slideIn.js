const slideImages = () => {

    const debounce = (func, wait = 20, immediate = true) => {
        var timeout
        return function() {
            var context = this, args = arguments
            var later = function() {
                timeout = null
                if (!immediate) func.apply(context, args)
            }
            var callNow = immediate && !timeout
            clearTimeout(timeout)
            timeout = setTimeout(later, wait)
            if (callNow) func.apply(context, args)
        }
    }

    const sliderImages = document.querySelectorAll('.slide-in')

    const slideIn = () => {
        
        sliderImages.forEach(sliderImage => {
            
            const slideStart = (window.scrollY + window.innerHeight) - sliderImage.height / 2
            const slideEnd = sliderImage.offsetTop + sliderImage.height

            const isHalfShown = slideStart > sliderImage.offsetTop
            const isScrolledPast = window.scrollY > slideEnd

            if ( isHalfShown && !isScrolledPast ) {

                sliderImage.classList.add('slide-in--active')

            } else {

                sliderImage.classList.remove('slide-in--active')

            }
                
        })

    }

    window.addEventListener('scroll', debounce(slideIn))

}

slideImages()