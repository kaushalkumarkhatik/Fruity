const openNav = document.querySelector('.hem');
const closeNav = document.querySelector('.close');
const nav = document.querySelector('.navList')

openNav.addEventListener("click", ()=> {
  const navLeft = nav.getBoundingClientRect().left
  if (navLeft < 0) {
    nav.style.left = "0";
    document.body.classList.add('active')
  }


})

closeNav.addEventListener('click', ()=> {
  const navLeft = nav.getBoundingClientRect().left
  if (navLeft === 0) {
    nav.style.left = '-40rem';
    document.body.classList.remove('active')
  }


})