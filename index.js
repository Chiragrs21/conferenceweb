//header to change to different color
window.addEventListener("load", function () {
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 500) {
      document.querySelector(".header").classList.add("active");
    } else {
      document.querySelector(".header").classList.remove("active");
    }
  });
});
