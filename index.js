document.addEventListener('DOMContentLoaded', function() {
    const main = document.querySelector('main')
    const modal = document.querySelector("#response")
    const yes = document.querySelector('#yes')
    const no = document.querySelector('#no')
    const positions = main.getBoundingClientRect()
    const close = document.getElementsByClassName("close")[0]

    this.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') alert('Nice try 😁')
    })

    no.addEventListener('mouseover', () => {
        const [randomX, randomY] = randomize(positions)
        no.style.position= 'absolute'        
        no.style.left = `${randomX}px`
        no.style.top = `${randomY}px`
    })
    
    yes.onclick = function() {
        modal.style.display = "block"
    }
    
    close.onclick = function() {
        modal.style.display = "none"
    }
    
    window.onclick = function(event) {
        if(event.target == modal) {
            modal.style.display = "none"
        }
    }

    function randomize(positions) {
        const {left, top, right, bottom} = positions
        const randomX = Math.floor(Math.random() * (right - left)) + left
        const randomY = Math.floor(Math.random() * (bottom - top)) + top
        return [randomX, randomY]
    }
})