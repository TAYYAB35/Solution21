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

function customScroll() {
    let scrollBlock = document.getElementById("scroll_block");
    let body = document.getElementById("body");
    let screenSize = screen.height - scrollBlock.offsetHeight;
    document.addEventListener("scroll", () => {
        scrollBlock.style.top = (window.pageYOffset / body.offsetHeight * (screenSize + (screenSize * (body.offsetHeight - (body.offsetHeight - screen.height)) / (body.offsetHeight - screen.height)) )) + "px";
    });
    setScroll(scrollBlock, body);
}

function setScroll(scrollBlock, body) {
    let newPos = 0, lastPos = 0;
        scrollBlock.onmousedown = onScrollSet;
        scrollBlock.onselectstart = () => {return false;};

    function onScrollSet(e) {
        e = e || window.event;
        lastPos = e.clientY;
        document.onmouseup = stopScroll;
        document.onmousemove = moveScroll;
        return false;
    }

    function moveScroll(e) {
        e = e || window.event;
        newPos = lastPos - e.clientY;
        lastPos = e.clientY;
        if(scrollBlock.offsetTop - newPos >= 0 && scrollBlock.offsetTop - newPos <= Math.ceil(screen.height - scrollBlock.offsetHeight)) {
            window.scrollBy(0, -newPos / screen.height *  body.offsetHeight);
        }
    }

    function stopScroll() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}