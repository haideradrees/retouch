// owl-carousel
$('#owl-slider-one').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 10000,
    slideTransition: 'linear',
    autoplaySpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        991: {
            items: 4
        },
        1200: {
            items: 5
        }
    }
});
// owl-carousel


// Header Active
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("#header").addClass("active");
    } else {
        $("#header").removeClass("active");
    }
});
// Header Active

// AOS
AOS.init();
// AOS

// Side Nav
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
// Side Nav

// Component creator
let includes = document.getElementsByTagName('include');
for (var i = 0; i < includes.length; i++) {
    let include = includes[i];
    load_file(includes[i].attributes.src.value, function (text) {
        include.insertAdjacentHTML('afterend', text);
        include.remove();
    });
}
function load_file(filename, callback) {
    fetch(filename).then(response => response.text()).then(text => callback(text));
}
// <include src="header.html"></include>
// Component creator

