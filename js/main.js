

// grab header and desktop header
// insert our content into our desktop header
function main() {

  // var inView = document.createElement('inView')
  // inView.src = 'js/in-view.js'
  // document.head.appendChild(inView)

  const header = document.querySelector('.header')
  const desktopHeader = document.querySelector('.header-desktop')
  
  desktopHeader.innerHTML = header.innerHTML


  
  // when header enters the viewport, hide the desktop header(remove the visible class)
  // when the header leaves, show it(by add visible class)
  
  inView('.header')
    .on('enter', () => desktopHeader.classList.remove('visible'))
    .on('exit', () => desktopHeader.classList.add('visible'))

}



window.addEventListener('DOMContentLoaded', main)