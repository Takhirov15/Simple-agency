document.addEventListener("mousemove", paralaks);function paralaks(e) {
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')
        const x = (window.innerWidth = e.pageX*speed)/100
        const y = (window.innerHeight = e.pageY*speed)/100
        layer.style.transform = `translateX(${x}px)  translateY(${y}px)` 
    })
}
function backToTop() {
let button = $('.back-to-top');
$(window).on('scroll', () => {
    if ($(this).scrollTop() >= 50) {
        button.fadeIn();
    } else {
        button.fadeOut();
    }
});
button.on('click', () => {
    e.preventDefault();
    $('html').animate({scrollTop: 0}, 1000);
});
};
backToTop();



