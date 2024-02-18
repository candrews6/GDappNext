// import $ from "jquery";

var didScroll = false;

window.addEventListener('scroll', function () {
    didScroll = true;
});

// interval scroll handler
setInterval(function () {
    if (didScroll) {
        didScroll = false;
        scrolled();
    }
}, 250);

var lastScrollTop = 0;

function scrolled() {
    var scrollStatus = window.pageYOffset;

    if (scrollStatus < lastScrollTop) {
        document.querySelectorAll("header")[0].style.top = "3rem";
    } else if (lastScrollTop >= 0) {
        document.querySelectorAll("header")[0].style.top = "-5rem";
    }
    lastScrollTop = scrollStatus;
}

// var prevScrollpos = window.scrollY;
// window.addEventListener('scroll', function () {
//     {
//         var currentScrollPos = window.scrollY;
//         if (prevScrollpos >= currentScrollPos) {
//             document.querySelectorAll("header")[0].style.top = "3rem";
//         } else {
//             document.querySelectorAll("header")[0].style.top = "-5rem";
//         }
//         prevScrollpos = currentScrollPos;
//     }
// });

