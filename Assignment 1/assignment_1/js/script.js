

/*============= Loader ===================*/

var myVar;

function showLoader() {
    myVar = setTimeout(showPage, 1000);
}

function showPage() {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("main-wrapper").style.display = "block";
}


/*============= carousel ===================*/

$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1024: {
            items: 4
        }
    }
})

/*============= menu bar ===================*/

$('.menu-btn').on('click', function (e) {
    $('body').toggleClass('show-menu');
});

$('.nav-item-color').on('click', function (e) {
    $('body').toggleClass('show-menu');
});

