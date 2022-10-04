import './style.css'

var pointerX = -1;
var pointerY = -1;
document.onmousemove = function(event) {
	pointerX = event.pageX;
	pointerY = event.pageY;
}

setInterval(Animation, 500);
function Animation() {
  if (pointerX > 369 && pointerX < 1534) {
    document.querySelector('#first').classList.add('anim')
    document.querySelector('#second').classList.add('anim')
    document.querySelector('#third').classList.add('anim')
    document.querySelector('.header__logo').classList.add('anim')
    document.querySelector('.header__contacts').classList.add('anim')
    document.querySelector('.phone').classList.add('anim')
  } else {
    document.querySelector('#first').classList.remove('anim')
    document.querySelector('#second').classList.remove('anim')
    document.querySelector('#third').classList.remove('anim')
    document.querySelector('.header__logo').classList.remove('anim')
    document.querySelector('.header__contacts').classList.remove('anim')
    document.querySelector('.phone').classList.remove('anim')
  }
}

document.querySelector('.social__fb').addEventListener('mouseover', () => {
  document.querySelector('.social__fb img').src = './assets/fb-white.svg'
})
document.querySelector('.social__fb').addEventListener('mouseout', () => {
  document.querySelector('.social__fb img').src = './assets/fb-small.svg'
})

document.querySelector('.social__ln').addEventListener('mouseover', () => {
  document.querySelector('.social__ln img').src = './assets/ln-white.svg'
})
document.querySelector('.social__ln').addEventListener('mouseout', () => {
  document.querySelector('.social__ln img').src = './assets/ln-small.svg'
})

document.querySelector('.social__address').addEventListener('mouseover', () => {
  document.querySelector('.social__address img').src = './assets/address-white.svg'
})
document.querySelector('.social__address').addEventListener('mouseout', () => {
  document.querySelector('.social__address img').src = './assets/address.svg'
})