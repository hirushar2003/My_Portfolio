// HEADER-SCROLLING
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('.desktop-header');
    let lastScrollPosition = window.pageYOffset;

    window.addEventListener('scroll', function () {
        let currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition > lastScrollPosition) {
            // User is scrolling down - hide the header
            header.style.transform = 'translateY(-100%)';
        } else {
            // User is scrolling up - show the header
            header.style.transform = 'translateY(0)';
        }

        // Update the last scroll position
        lastScrollPosition = currentScrollPosition;
    });
});

// ASSIGNMENT-SCROLL
document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.assignment-card-container');

    // Function to scroll the container automatically
    function autoScroll() {
        const scrollAmount = 1; // Pixels to scroll each step
        container.scrollLeft += scrollAmount;

        // If scrolled to the right corner, reset to the left
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
            container.scrollLeft = 0; // Loop back to the start
        }
    }

    // Start auto-scroll after page load
    setInterval(autoScroll, 20); // Adjust interval for smoothness
});

// ASSIGNMENT-SCROLL


// SCROLL-REVEAL

ScrollReveal({
   reset:true,
    distance:'60px',
    duration:2500,
    delay:400
});

ScrollReveal().reveal('.logo-letters',{
    origin:'left'
});

ScrollReveal().reveal('.logo img', {
   origin: 'right'
});

ScrollReveal().reveal('.social', {
    origin:'left',
    distance: '60px'
});

ScrollReveal().reveal('.social-inside i', {
   origin:'right',
    distance: '60px',
    interval:200
});

ScrollReveal().reveal('.my-image', {
    origin:'left',
    distance: '60px',
});

ScrollReveal().reveal('.my-image img', {
    origin:'top',
    distance: '300px',
});

ScrollReveal().reveal('.details', {
    origin:'left',
    distance: '300px',
    interval: 200
});


ScrollReveal().reveal('h1', {
    origin:'bottom',
    distance: '60px',
});

ScrollReveal().reveal('.basic-sec-topic h3', {
    origin:'left',
    distance: '60px',
});

ScrollReveal().reveal('.edu-sec-topic h3', {
    origin:'right',
    distance: '60px',
});

ScrollReveal().reveal('.pic-bas', {
    origin:'left',
    distance: '300px',
    delay: 0
});

ScrollReveal().reveal('.pic-bas-boy-pic', {
    origin:'top',
    distance: '300px',
});

ScrollReveal().reveal('.points label , .points ul', {
    origin:'right',
    distance: '300px',
    interval:200
});

ScrollReveal().reveal('.ordinary-level .stage-description label , .ordinary-level .stage-description p, .advanced-level .stage-description label, .advanced-level .stage-description p, .diploma-level .stage-description label, .diploma-level .stage-description p', {
    origin:'right',
    distance: '150px',
    interval:200,
    delay:0
});

ScrollReveal().reveal('.ordinary-level .stage-image', {
    origin:'top',
    distance: '300px',
});

ScrollReveal().reveal('.advanced-level .stage-image', {
    origin:'left',
    distance: '300px',
});

ScrollReveal().reveal('.diploma-level .stage-image', {
    origin:'bottom',
    distance: '300px',
    delay:0
});

ScrollReveal().reveal('.exp-upper-left', {
    origin:'top',
    distance: '300px',
    delay:0
});

ScrollReveal().reveal('.exp-upper-right', {
    origin:'right',
    distance: '300px',
    delay:0
});

ScrollReveal().reveal('.exp-lower-right', {
    origin:'left',
    distance: '300px',
    delay:0
});

ScrollReveal().reveal('.exp-lower-left', {
    origin:'bottom',
    distance: '300px',
    delay:0
});

ScrollReveal().reveal('.exp-desc', {
    origin:'right',
    distance: '300px',
    delay:0
});

ScrollReveal().reveal('.service-top p', {
    origin:'left',
    distance: '300px',
    delay:0
});

ScrollReveal().reveal('.service-pics-main', {
    origin:'bottom',
    distance: '300px',
    delay:0
});

ScrollReveal().reveal('.project-desc p', {
    origin:'right',
    distance: '300px',
    delay:0
});

// ScrollReveal().reveal('.card-1', {
//     origin:'left',
//     distance: '500px',
//     delay:0
// });
//
// ScrollReveal().reveal('.card-5', {
//     origin:'right',
//     distance: '500px',
//     delay:0
// });
//
// ScrollReveal().reveal('.card-2', {
//     origin:'bottom',
//     distance: '500px',
//     delay:0
// });
//
// ScrollReveal().reveal('.card-4', {
//     origin:'top',
//     distance: '500px',
//     delay:0
// });

ScrollReveal().reveal('.assignment-main-desc', {
    origin:'right',
    distance: '300px',
    delay:0
});

ScrollReveal().reveal('.rr-desc', {
    origin:'left',
    distance: '300px',
    delay:0
});