
const slider = document.querySelector('.slider-container'),
  slides = Array.from(document.querySelectorAll('.slide'))

let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0

 

slides.forEach((slide, index) => {
  const slideImage = slide.querySelector('img')
  slideImage.addEventListener('dragstart', (e) => e.preventDefault())

  // Touch events
  slide.addEventListener('touchstart', touchStart(index))
  slide.addEventListener('touchend', touchEnd)
  slide.addEventListener('touchmove', touchMove)

  // Mouse events
  slide.addEventListener('mousedown', touchStart(index))
  slide.addEventListener('mouseup', touchEnd)
  slide.addEventListener('mouseleave', touchEnd)
  slide.addEventListener('mousemove', touchMove)

  let scrollBlock = document.querySelector('#parent')
  scrollBlock.addEventListener('touchstart', function() {
    slide.removeEventListener('touchstart', touchStart(index))
    slide.removeEventListener('touchend', touchEnd)
    slide.removeEventListener('touchmove', touchMove)
    slide.removeEventListener('mousedown', touchStart(index))
    slide.removeEventListener('mouseup', touchEnd)
    slide.removeEventListener('mouseleave', touchEnd)
    slide.removeEventListener('mousemove', touchMove)
  })
scrollBlock.addEventListener('touchend', function() {
  slide.addEventListener('touchstart', touchStart(index))
  slide.addEventListener('touchend', touchEnd)
  slide.addEventListener('touchmove', touchMove)
  slide.addEventListener('mousedown', touchStart(index))
  slide.addEventListener('mouseup', touchEnd)
  slide.addEventListener('mouseleave', touchEnd)
  slide.addEventListener('mousemove', touchMove)
  })


 

})

// Disable context menu
window.oncontextmenu = function (event) {
  event.preventDefault()
  event.stopPropagation()

  return false

}

function touchStart(index) {
  return function (event) {
    currentIndex = index
    startPos = getPositionX(event)
    isDragging = true

   
    animationID = requestAnimationFrame(animation)
   
    
  }
}

function touchEnd() {
  isDragging = false
  
  cancelAnimationFrame(animationID)

  const movedBy = currentTranslate - prevTranslate

  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1

  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

  setPositionByIndex()

 

  if (currentIndex == 0) {
   
    
    document.querySelector('.slide-2-sperm-1').style.transform = 'translate(100px,  -10px) scale(0.3)'
    document.querySelector('.slide-2-sperm-2').style.transform = 'translate(100px, -10px) scale(0.3)'
    document.querySelector('.slide-2-sperm-3').style.transform = 'translate(100px, -10px) scale(0.4)'
    document.querySelector('.slide-2-sperm-4').style.transform = 'translate(100px, -10px) scale(0.3)'
    document.querySelector('.slide-2-sperm-5').style.transform = 'translate(100px, -10px) scale(0.4)'
    document.querySelector('.slide-2-sperm-1').style.opacity = '0' 
    document.querySelector('.slide-2-sperm-2').style.opacity = '0' 
    document.querySelector('.slide-2-sperm-3').style.opacity = '0' 
    document.querySelector('.slide-2-sperm-4').style.opacity = '0' 
    document.querySelector('.slide-2-sperm-5').style.opacity = '0' 
    document.querySelector('.slide-2-sperm-1').style.transition = '0.01s'
    document.querySelector('.slide-2-sperm-2').style.transition = '0.01s'
    document.querySelector('.slide-2-sperm-3').style.transition = '0.01s'
    document.querySelector('.slide-2-sperm-4').style.transition = '0.01s'
    document.querySelector('.slide-2-sperm-5').style.transition = '0.01s'

    
  } else if (currentIndex == 1){
    document.querySelector('.keka').style.opacity = '1'
    setTimeout(function() { document.querySelector('.slide-2-sperm-1').style.transform = 'translate(-190px, -30px) scale(0.52)' }, 425);
    setTimeout(function() { document.querySelector('.slide-2-sperm-2').style.transform = 'translate(-130px, 0px) scale(0.65)' }, 380);
    setTimeout(function() { document.querySelector('.slide-2-sperm-3').style.transform = 'translate(-165px, -15px) scale(0.85)'  }, 300);
    setTimeout(function() { document.querySelector('.slide-2-sperm-4').style.transform = 'translate(10px, 10px) scale(0.53)' }, 490);
    setTimeout(function() { document.querySelector('.slide-2-sperm-5').style.transform = 'translate(-90px, 12px) scale(0.39)' }, 500);
    setTimeout(function() { document.querySelector('.slide-2-sperm-1').style.opacity = '1' }, 250);
    setTimeout(function() { document.querySelector('.slide-2-sperm-2').style.opacity = '1' }, 250);
    setTimeout(function() { document.querySelector('.slide-2-sperm-3').style.opacity = '1' }, 250);
    setTimeout(function() { document.querySelector('.slide-2-sperm-4').style.opacity = '1' }, 250);
    setTimeout(function() { document.querySelector('.slide-2-sperm-5').style.opacity = '1' }, 250);
    document.querySelector('.slide-2-sperm-1').style.transition = '5.4s'
    document.querySelector('.slide-2-sperm-2').style.transition = '5s'
    document.querySelector('.slide-2-sperm-3').style.transition = '5.2s'
    document.querySelector('.slide-2-sperm-4').style.transition = '4.8s'
    document.querySelector('.slide-2-sperm-5').style.transition = '4.5s'


  }
}

window.onload = function() {
  document.querySelector('.slide-2-sperm-1').style.transform = 'translate(100px,  -10px) scale(0.3)'
  document.querySelector('.slide-2-sperm-2').style.transform = 'translate(100px, -10px) scale(0.3)'
  document.querySelector('.slide-2-sperm-3').style.transform = 'translate(100px, -10px) scale(0.4)'
  document.querySelector('.slide-2-sperm-4').style.transform = 'translate(100px, -10px) scale(0.3)'
  document.querySelector('.slide-2-sperm-5').style.transform = 'translate(100px, -10px) scale(0.4)'
};



function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event)
    currentTranslate = prevTranslate + currentPosition - startPos
  } 


  
}




function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

function animation() {
  setSliderPosition()
  if (isDragging) requestAnimationFrame(animation)
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`
   

}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth
  prevTranslate = currentTranslate
  setSliderPosition()
  
}


