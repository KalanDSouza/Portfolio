const navToggle = document.querySelector('.nav-toggle');
//  searches HTML for .nav-toggle, returns it and holds it in navToggle var
const navLinks = document.querySelectorAll('.nav__link')

 navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
    // listens for when .navToggle is clicked then adds or removes the class nav-open
 });

 navLinks.forEach(link => {
    link.addEventListener('click', () =>{
        document.body.classList.remove('nav-open');
    })
 })