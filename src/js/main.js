// const swiper = new Swiper(".use-case-swiper", {
//   // Optional parameters
//   effect: "coverflow",
//   centeredSlides: true,
//   loop: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 50,
//     depth: 200,
//     modifier: 1,
//     slideShadows: true,
//   },
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       stretch: 30,
//       depth: 150,
//     },
//     // when window width is >= 480px
//     480: {
//       stretch: 30,
//       depth: 150,
//     },
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

document.addEventListener("scroll", handleScroll);
const scrollToTopBtn = document.querySelector(".scrollToTopBtn");

function handleScroll() {
  const scrollableHeight =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const GOLDEN_RATIO = 0.1;

  if (document.documentElement.scrollTop / scrollableHeight > GOLDEN_RATIO) {
    if (!scrollToTopBtn.classList.contains("showScrollBtn"))
      scrollToTopBtn.classList.add("showScrollBtn");
  } else {
    if (scrollToTopBtn.classList.contains("showScrollBtn"))
      scrollToTopBtn.classList.remove("showScrollBtn");
  }
}

scrollToTopBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

$(document).ready(function () {
  $("#menu-first").click(function () {
    $("#menu-first").toggleClass("show-menu");

    $(".sub-menu").slideToggle("fast");
    $(".sub-menu-second").hide("fast");
    $("#menu-second").removeClass("show-menu");
  });
});

$(document).ready(function () {
  $("#menu-second").click(function () {
    $("#menu-second").toggleClass("show-menu");
    $(".sub-menu-second").slideToggle("fast");
    $(".sub-menu").hide("fast");
    $("#menu-first").removeClass("show-menu");
  });
});

$(document).ready(function () {
  $("#burger").click(function () {
    document.getElementById("mySidenav").style.width = "200px";
  });
});

$(document).ready(function () {
  $("#close").click(function () {
    document.getElementById("mySidenav").style.width = "0";
  });
});

AOS.init();
