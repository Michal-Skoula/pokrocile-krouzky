function openNavbar() {
  const openBtn = document.getElementById('nav-btn-open');
  const closeBtn = document.getElementById('nav-btn-close');
  const navbar = document.querySelector('.top-navbar'); 

  if(navbar.className === 'top-navbar') {

    openBtn.className += ' hidden';
    closeBtn.className = '.nav-btn';
    navbar.className += ' open' 
  }
  else {
    openBtn.className = '.nav-btn';
    closeBtn.className += ' hidden';
    navbar.className = 'top-navbar'; 
  }
}


let mousePos = undefined;
sideNavbar = document.getElementById('sideNavbar')

// window.addEventListener('mousemove', (event) => {
//   mousePos = event.clientX;
//   if(mousePos > sideNavbar.offsetWidth && sideNavbar.className === 'hidden') {
//     sideNavbar.className = '';
//   }
//   else if {
//     sideNavbar.className = 'hidden';
//   }
// })

