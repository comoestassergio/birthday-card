const cards = document.querySelectorAll('.card')
const finalScreen = document.querySelector('.final-screen')

const msgSound = new Audio('/assets/msg-sound.mp4')
const fnlScreeSound = new Audio('/assets/fnl-screen-sound.mp4')

const DEFAULT_DELAY = 1000
let multiplier = 1

cards.forEach(card => {
    console.log(multiplier)
    multiplier += multiplier
    let delay = DEFAULT_DELAY * multiplier
    console.log(delay)
    setTimeout(function(){
        makeVisible(card)
        playSound(msgSound)
    }, delay)
})

setTimeout(function(){
    makeVisible(finalScreen)
    playSound(fnlScreeSound)
}, 20000)

function makeVisible(el){
    el.classList.toggle('visible')
}

function playSound(sound){
    sound.muted = false
    sound.play()
}
