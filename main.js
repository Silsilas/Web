/* The hamburger button */
const headerBtn = document.querySelector('.header_btn');
let menuOpen = false;
headerBtn.addEventListener('click', () => {
  if(!menuOpen) {
    headerBtn.classList.add('open');
    menuOpen = true;
  } else {
    headerBtn.classList.remove('open');
    menuOpen = false;
  }
})

/* Open and hide side menu*/
function toggleSideBar() {
  document.getElementById('fixedNav').classList.toggle('active');
}