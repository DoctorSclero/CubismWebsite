function scroll_down() {
    window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth"
    });
}

function scroll_up() {
    window.scrollBy({
        top: -window.innerHeight,
        behavior: "smooth"
    });
}

function scroll_top() {
    window.scrollTo(0,0);
}


document.onkeydown = function (event) {
    switch (event.key) {
        case "PageUp":
            scroll_top();
            break;
        case "ArrowDown":
        case "Enter":
            scroll_down();
            break;
        case "ArrowUp":
            scroll_up();
            break;
    }
}