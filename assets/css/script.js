document.addEventListener("DOMContentLoaded", function () {
    scroll(); 
});

// Header Active
$(window).scroll(function () {
    scroll()
});
// Header Active

function scroll() {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("#header").addClass("active");
    } else {
        $("#header").removeClass("active");
    }
}


AOS.init({
    duration: 1200,  // Slightly longer animation
    easing: 'ease',  // Simpler easing function
    offset: 200,      // Trigger animation slightly earlier for smoother experience
});

