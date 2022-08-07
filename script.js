const cards = document.querySelectorAll('.card')
const finalScreen = document.querySelector('.final-screen')
const startBtn = document.querySelector('.start-btn')
const video = document.querySelector('#vid')
const videoBckgr = document.querySelector('#bckgr-vid')

const msgSound = new Audio('assets/msg-sound.m4a')
const fnlScreeSound = new Audio('assets/fnl-screen-sound.m4a')

const DEFAULT_DELAY = 800
let multiplier = 1

startBtn.addEventListener('click', function(){
    startBtn.classList.add('clicked')
    startBtn.addEventListener('animationend', function(){
        startBtn.style.display = 'none'

        video.play()
        videoBckgr.play()
        let delay
        cards.forEach(card => {
            multiplier += multiplier
            delay = DEFAULT_DELAY * multiplier
            setTimeout(function(){
                makeVisible(card)
                playSound(msgSound)
            }, delay)
        })

        setTimeout(function(){
            cards.forEach(card => {
                card.classList.add('hidden')
            })
        }, delay + 2000)

        setTimeout(function(){
            makeVisible(finalScreen)
            playSound(fnlScreeSound)
        }, delay + 3000)
    })
})



function makeVisible(el){
    el.classList.toggle('visible')
}

function playSound(sound){
    sound.muted = false
    sound.play()
}
