/*========================= toggle icon navbar ============================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};


/*========================= scroll section active link ============================*/

let section = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    section.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navlinks.forEach((links) => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            });
        }
    });

    /*========================= sticky navbar ============================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

     /*========================= remove toggle icon navbar when click on navbar link ============================*/
     menuIcon.classList.remove('fa-x');
     navbar.classList.remove('active');


};

/*========================= scroll reveal ============================*/

// ScrollReveal({ 
//     reset: true,
//     distance:'15px',
//     duration:2000,
//     delay:200
//  });


//  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
//  ScrollReveal().reveal('.home-img, .service-container, .project-box, .contact form  ', { origin: 'bottom' });
//  ScrollReveal().reveal('.home-content h1, .about-img  ', { origin: 'left' });
//  ScrollReveal().reveal('.home-content p, .about-content  ', { origin: 'right' });






//  gsap.from(".logo", {
//     y: -100,
//     duration: 1.3,
//     delay: 0.3,
//     opacity:0


// })
// gsap.from("nav", {
//     y: -100,
//     duration: 1.3,
//     delay: 0.3,
//     opacity:0,
//     stagger:0.2


// })
