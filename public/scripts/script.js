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
    var scrollStatus = window.scrollY;

    if (scrollStatus < lastScrollTop) {
        document.querySelectorAll("header")[0].style.top = "3rem";
    } else if (lastScrollTop >= 0) {
        document.querySelectorAll("header")[0].style.top = "-5rem";
    }
    lastScrollTop = scrollStatus;
}
