/* 
JavaScript Starts Here 
*/
/* index.html */
// Webpages respond to screen sizes
if (window.matchMedia("(max-width: 767px)").matches) {
    // Code to execute if screen width is less than 768px
} else if (window.matchMedia("(min-width: 768px) and (max-width: 991px)").matches) {
    // Code to execute if screen width is between 768px and 991px
} else if (window.matchMedia("(min-width: 992px)").matches) {
    // Code to execute if screen width is 992px or wider
}

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.addEventListener('DOMContentLoaded', function () {
    // Carousell
    const cardCarousel = document.querySelector('.card-carousel');
    const cardContainer = cardCarousel.querySelector('.card-container');
    const cardItems = cardCarousel.querySelectorAll('.card');
    const prevBtn = cardCarousel.querySelector('.prev-btn');
    const nextBtn = cardCarousel.querySelector('.next-btn');

    let currentPosition = 0;
    const cardWidth = cardItems[0].offsetWidth + parseInt(window.getComputedStyle(cardItems[0]).marginRight);
    const totalWidth = cardWidth * cardItems.length;

    let autoSlideInterval; // define variable to hold interval ID

    // Set timer for auto slide
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            currentPosition -= cardWidth;
            if (currentPosition <= -totalWidth + 2 * cardWidth) {
                currentPosition += totalWidth;
            }
            cardContainer.style.transform = `translateX(${currentPosition}px)`;
        }, 3000); // set the interval to 5 seconds 
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    startAutoSlide(); // start auto slide on page load

    // Click Previous Slide
    prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        currentPosition += cardWidth;
        if (currentPosition > cardWidth) {
            currentPosition -= totalWidth;
        }
        cardContainer.style.transform = `translateX(${currentPosition}px)`;
    });

    // Click Next Slide
    nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        currentPosition -= cardWidth;
        if (currentPosition <= -totalWidth + 2 * cardWidth) {
            currentPosition += totalWidth;
        }
        cardContainer.style.transform = `translateX(${currentPosition}px)`;
    });


});

/* showcase.html */

function toggle() {
    var x = document.querySelectorAll(".col-md-4.hidden");
    var btn = document.getElementById("more-button");
    for (var i = 0; i < x.length; i++) {
        if (x[i].style.display === "none") {
            x[i].style.display = "block";
            btn.innerHTML = "Show Less";
        } else {
            x[i].style.display = "none";
            btn.innerHTML = "Show More";
        }
    }
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

// Search box
const searchBox = document.getElementById("searchbar");
const places = document.querySelectorAll(".places");
searchBox.addEventListener("input", () => {
    filterPlaces(searchBox.value);
});

function filterPlaces(searchTerm) {
    places.forEach((place) => {
        const text = place.querySelector(".carousel-text").textContent.toLowerCase();
        if (text.includes(searchTerm.toLowerCase())) {
            place.classList.remove("hidden");
        } else {
            place.classList.add("hidden");
        }
    });
}












