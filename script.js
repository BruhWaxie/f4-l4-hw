const sliderInput = document.querySelector('.slider__input')
const sliderImage = document.querySelector('.slider__image')

function debounce(func, delay) {
  let timeoutId
  
  return function (...args) {
    clearTimeout(timeoutId)
    
    timeoutId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

function resizeImage(event) {
  const value = event.target.value
  sliderImage.style.width = `${value}%`
}

const debouncedResize = debounce(resizeImage, 150)

sliderInput.addEventListener('input', debouncedResize)

const box = document.getElementById('box')

window.addEventListener('mousemove', _.throttle((event) => {
  box.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`
}, 16))