let btnInspect = document.querySelector('.slide-3-popup-btn')
let popup = document.querySelector('.slide-3-popup')
let brend = document.querySelector('.slide-3-brend')
let btnClose = document.querySelector('.btn-close')

let btnPrev = document.querySelector('.btn-prev')
let btnNext = document.querySelector('.btn-next')
let prevCircle = document.querySelector('.prev-circle')
let NextCircle = document.querySelector('.next-circle')
let blockFirst = document.querySelector('.block-first')
let blockSecond = document.querySelector('.block-second')
let advantage = document.querySelector('.advantage')


btnInspect.onclick = () => {
    popup.classList.toggle('show')
   
    document.querySelector('.slide-3-overlay').style.opacity = '1'
    document.querySelector('.slide-2-sperm-4').style.opacity = '0'
    brend.style.zIndex = '2'
   

}
btnClose.onclick = () => {
    btnInspect.onclick()
    brend.style.zIndex = '0'
    document.querySelector('.slide-3-overlay').style.opacity = '0'
    document.querySelector('.slide-2-sperm-4').style.opacity = '1'
   
} 

btnNext.onclick = () => {
    blockFirst.style.opacity = "0"
    setTimeout(function() {blockSecond.style.opacity = "1"}, 100);
    NextCircle.style.backgroundColor = 'rgb(255, 103, 204)'
    prevCircle.style.backgroundColor = 'white'
    NextCircle.style.border = 'white 0.1px solid'
    prevCircle.style.border = 'black 1px solid'
    NextCircle.style.width = '12px'
    NextCircle.style.height = '12px'
    
    




}

btnPrev.onclick = () => {
    blockSecond.style.opacity = "0"
    setTimeout(function() {blockFirst.style.opacity = "1"}, 100);
    prevCircle.style.backgroundColor = 'rgb(255, 103, 204)'
    NextCircle.style.backgroundColor = 'white'
    prevCircle.style.border = 'white 0.1px solid'
    NextCircle.style.border = 'black 1px solid'
    prevCircle.style.width = '12px'
    prevCircle.style.height = '12px'
  



}

