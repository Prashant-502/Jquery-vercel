// get current year
(function () {
    var year = new Date().getFullYear();
    document.querySelector("#currentYear").innerHTML = year;
})();
var slideWrapper = $(".main-slider");
slideWrapper.slick({
    // fade:true,
    autoplay: false,
    autoplaySpeed: 3000,
    autoplaySpeed: 1000,
    lazyLoad: "progressive",
    speed: 600,
    arrows: false,
    dots: true,
    cssEase: "cubic-bezier(0.87, 0.03, 0.41, 0.9)"
});