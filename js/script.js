//  Burger
document.addEventListener("click", documentClick);

function documentClick(e) {
  const targetItem = e.target;

  if (
    targetItem.closest(".icon-menu") ||
    targetItem.classList.contains("menu__action--text")
  ) {
    document.documentElement.classList.toggle("menu-open");
  } else if (targetItem.classList.contains("menu__action--text-close")) {
    document.documentElement.classList.remove("menu-open");
  }
}

// =============================================================
// pop-up
const popupLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute("href").replace("#", "");
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll(".close-popup");
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener("click", function (e) {
      popupClose(el.closest(".popup"));
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  curentPopup.classList.add("open");
  curentPopup.addEventListener("click", function (e) {
    if (!e.target.closest(".popup__content")) {
      popupClose(e.target.closest(".popup"));
    }
  });
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove("open");
    if (doUnlock) {
      // bodyUnlock();
    }
  }
}
// =============================================================
// Scrolling
window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ============================================================

// ============================================================

// =============================================================
// SWIPER
const swiper = new Swiper(".gallery__slider", {
  // Optional parameters
  // direction: "vertical",

  spaceBetween: 30,
  slidesPerView: 1,
  observer: true,
  autoHeight: true,
  loop: false,
  speed: 800,

  // If we need pagination
  // pagination: {
  //   el: ".reviews__bullets",
  //   clickable: true,
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".gallery__arrow--right",
    prevEl: ".gallery__arrow--left",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});
// =============================================================

// tabs

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".navigation-gallery__title");
  const tabContents = document.querySelectorAll(".content-gallery__body");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((tab) => tab.classList.remove("tab-active"));
      tab.classList.add("tab-active");
      tabContents.forEach((content) => (content.style.display = "none"));
      tabContents[index].style.display = "block";
    });
  });
});
// =============================================================================

$(document).ready(function () {
  function toggleSubmenu() {
    $(".has-submenu").each(function () {
      var $item = $(this);
      var $submenu = $item.find(".submenu");

      if ($(window).width() < 700) {
        $item.on("click", function (event) {
          event.stopPropagation(); // Предотвращаем всплытие события, чтобы оно не срабатывало на родительских элементах
          $submenu.toggle();
          $item.toggleClass("active"); // Добавляем или удаляем класс "active" при клике
        });

        $(document).on("click", function (event) {
          var $target = $(event.target);
          if (!$item.is($target) && !$item.has($target).length) {
            $item.removeClass("active"); // Удаляем класс "active" при клике вне элемента
          }
        });
      } else {
        // Удаляем обработчики событий клика и класс "active" при изменении размеров окна
        $item.off("click");
        $item.removeClass("active");
      }
    });
  }

  toggleSubmenu(); // Вызываем функцию при загрузке страницы

  $(window).resize(function () {
    toggleSubmenu(); // Вызываем функцию при изменении размеров окна
  });
});

// =============================================================================
// animation
const observer = new IntersectionObserver((entires) => {
  entires.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".anim");
hiddenElements.forEach((el) => observer.observe(el));
//
