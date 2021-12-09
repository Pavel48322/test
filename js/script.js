(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.getElementById('services_slider').scrollLeft -= (delta * 40); // Multiplied by 40
        e.preventDefault();
    }
    if (document.getElementById('services_slider').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('services_slider').addEventListener('mousewheel', scrollHorizontally, false);
        // Firefox
        document.getElementById('services_slider').addEventListener('DOMMouseScroll', scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementById('services_slider').attachEvent('onmousewheel', scrollHorizontally);
    }
})();