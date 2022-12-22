const left = document.querySelector('.left')
const right = document.querySelector('.right')
const slider = document.querySelector('.slider')

left.addEventListener('click', () => {
    slider.scrollLeft -= 300
})

right.addEventListener('click', () => {
    slider.scrollLeft += 300
})