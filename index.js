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

//cards
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

function handleScrollNext(direction) {
  const cards = document.querySelector(".card-content");
  cards.scrollLeft = cards.scrollLeft +=
    window.innerWidth / 2 > 600
      ? window.innerWidth / 2
      : window.innerWidth - 100;
}

function handleScrollPrev(direction) {
  const cards = document.querySelector(".card-content");
  cards.scrollLeft = cards.scrollLeft -=
    window.innerWidth / 2 > 600
      ? window.innerWidth / 2
      : window.innerWidth - 100;
}

next.addEventListener("click", handleScrollNext);
prev.addEventListener("click", handleScrollPrev);
