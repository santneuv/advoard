/*! BuildToolsCookbook v2.0.0 | (c) 2022 onur-guler | MIT License | http://github.com/cferdinandi/build-tools-boilerplate */
(function () {
  'use strict';

  $(document).ready(function () {
    $(".product-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      infinite: true,
      dots: false,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  });

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

  const $menuSub = $(".header-wrapper");

  $(document).mouseup((e) => {
    if (
      !$menuSub.is(e.target) && // if the target of the click isn't the container...
      $menuSub.has(e.target).length === 0
    ) {
      // ... nor a descendant of the container
      $(".sub-menu").hide("fast");
      $(".sub-menu-second").hide("fast");
      $("#menu-first").removeClass("show-menu");
      $("#menu-second").removeClass("show-menu");
    }
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
      document.getElementById("mySidenav").style.width = "270px";
      $(".overlay").addClass("active");
    });
  });

  $(document).ready(function () {
    $("#close").click(function () {
      document.getElementById("mySidenav").style.width = "0";
      $(".overlay").removeClass("active");
    });
  });

  $('[data-fancybox="gallery"]').fancybox({
    toolbar: false,
    smallBtn: true,
    loop: true,
    infobar: false,

    btnTpl: {
      // Arrows
      arrowLeft:
        '<button data-fancybox-prev class="fancybox-button fancy-dnone fancybox-button--arrow_left" title="{{PREV}}">' +
        '<div><svg xmlns="http://www.w3.org/2000/svg" width="11.92" height="18.731" viewBox="0 0 11.92 18.731"><path id="Path_684" data-name="Path 684" d="M1651.474,3822.992l-8.089-8.089,8.089-8.089" transform="translate(-1640.831 -3805.538)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3.612"/></svg></div>' +
        "</button>",

      arrowRight:
        '<button data-fancybox-next class="fancybox-button fancy-dnone fancybox-button--arrow_right" title="{{NEXT}}">' +
        ' <svg xmlns="http://www.w3.org/2000/svg" width="11.92" height="18.731" viewBox="0 0 11.92 18.731"><path id="Path_685" data-name="Path 685" d="M1734.3,3806.815l8.089,8.089-8.089,8.089" transform="translate(-1733.021 -3805.538)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3.612"/></svg>' +
        "</button>",

      // This small close button will be appended to your html/inline/ajax content by default,
      // if "smallBtn" option is not set to false
      smallBtn:
        '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" id="Group_205" data-name="Group 205" width="19.018" height="19.017" viewBox="0 0 19.018 19.017"><rect id="Rectangle_52" data-name="Rectangle 52" width="23.62" height="3.273" transform="translate(2.316) rotate(45)"/><rect id="Rectangle_53" data-name="Rectangle 53" width="23.62" height="3.273" transform="matrix(0.707, -0.707, 0.707, 0.707, 0, 16.701)"/></svg>' +
        "</button>" +
        '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
        '<div><svg xmlns="http://www.w3.org/2000/svg" width="11.92" height="18.731" viewBox="0 0 11.92 18.731"><path id="Path_684" data-name="Path 684" d="M1651.474,3822.992l-8.089-8.089,8.089-8.089" transform="translate(-1640.831 -3805.538)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3.612"/></svg></div>' +
        "</button>" +
        '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
        ' <svg xmlns="http://www.w3.org/2000/svg" width="11.92" height="18.731" viewBox="0 0 11.92 18.731"><path id="Path_685" data-name="Path 685" d="M1734.3,3806.815l8.089,8.089-8.089,8.089" transform="translate(-1733.021 -3805.538)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3.612"/></svg>' +
        "</button>",
    },
  });

  AOS.init();

  const form = document.getElementById("form");
  const username = document.getElementById("fullname");
  const email = document.getElementById("mail");
  const title = document.getElementById("title");
  const companyName = document.getElementById("Companyname");

  const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const titleValue = title.value.trim();
    const companyValue = companyName.value.trim();
    if (emailValue === "") {
      $("#mail").addClass("error");
      $("#mail-label").addClass("error-label");
    } else if (!isValidEmail(emailValue)) {
      $("#mail").addClass("error");
      $("#mail-label").addClass("error-label");
    } else {
      $("#mail").removeClass("error");
      $("#mail-label").removeClass("error-label");
    }
    if (usernameValue === "") {
      $("#fullname").addClass("error");
      $("#fullname-label").addClass("error-label");
    } else {
      $("#fullname").removeClass("error");
      $("#fullname-label").removeClass("error-label");
    }
    if (titleValue === "") {
      $("#title").addClass("error");
      $("#title-label").addClass("error-label");
    } else {
      $("#title").removeClass("error");
      $("#title-label").removeClass("error-label");
    }
    if (companyValue === "") {
      $("#Companyname").addClass("error");
      $("#company-label").addClass("error-label");
    } else {
      $("#Companyname").removeClass("error");
      $("#company-label").removeClass("error-label");
    }
  };

  const isValidEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  $("#form").submit(function (evt) {
    evt.preventDefault();
    validateInputs();
  });

  $(window).scroll(function () {
    const sticky = $(".sticky-menu"),
      scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass("visible");
    else sticky.removeClass("visible");
  });

  $(document).ready(function () {
    $("#submenu-btn").click(function () {
      $("#submenu-hidden").toggleClass("visible-nav");
      $("#first-logo").toggle();
      $("#second-logo").toggle();
    });
  });

  $(document).ready(function () {
    $("#submenu-first").click(function () {
      $("#submenu-first").toggleClass("show-menu");

      $(".sub-menu").slideToggle("fast");
      $(".sub-menu-second").hide("fast");
      $("#submenu-second").removeClass("show-menu");
    });
  });

  $(document).ready(function () {
    $("#submenu-second").click(function () {
      $("#submenu-second").toggleClass("show-menu");
      $(".sub-menu-second").slideToggle("fast");
      $(".sub-menu").hide("fast");
      $("#submenu-first").removeClass("show-menu");
    });
  });

  let scrollpos = window.scrollY;
  const subHeader = document.getElementById("submenu-hidden");
  const header_height = subHeader.offsetHeight;

  const add_class_on_scroll = () => subHeader.classList.remove("visible-nav");
  const remove_class_on_scroll = () => subHeader.classList.add("visible-nav");

  window.addEventListener("scroll", function () {
    scrollpos = window.scrollY;

    if (scrollpos >= header_height) {
      add_class_on_scroll();
      $("#first-logo").show();
      $("#second-logo").hide();
      $("#submenu-first").removeClass("show-menu");
      $("#submenu-second").removeClass("show-menu");
    } else {
      remove_class_on_scroll();
    }
  });

  const $stickyMenuSub = $(".sticky-wrapper");

  $(document).mouseup((e) => {
    if (
      !$stickyMenuSub.is(e.target) && // if the target of the click isn't the container...
      $stickyMenuSub.has(e.target).length === 0
    ) {
      // ... nor a descendant of the container
      $(".sub-menu").hide("fast");
      $(".sub-menu-second").hide("fast");
      $("#submenu-first").removeClass("show-menu");
      $("#submenu-second").removeClass("show-menu");
    }
  });

}());
