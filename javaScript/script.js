// TODO================Header Area================>
const headerEl = document.getElementById("header");
const topBtnEl = document.querySelector(".top-btn");
const menuEl = document.querySelector(".hamburgur");
const listItemEl = document.querySelector(".list-item");
headerEl.offsetHeight;
window.pageYOffset;

// * Sticky header add when we scrollY the window:
StickyHeaderAdd();
function StickyHeaderAdd() {
  window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > 3) {
      headerEl.classList.add("sticky-header");
    } else {
      headerEl.classList.remove("sticky-header");
    }
  });
}
// * add remove box-shadow from top-btn
topBtnEl.addEventListener("click", () => {
  topBtnEl.classList.add("box-shadow");
});

// * toggle class when we tapped the menu icon
menuEl.addEventListener("click", () => {
  listItemEl.classList.toggle("toggle-list");
  menuEl.classList.add("box-shadow2");
});
// TODO================Header Area End================>

// TODO================Hero Popup Area Start===========>
const playBtnEl = document.querySelector(".play-btn");
const closeBtnEl = document.querySelector(".close-btn");
const playBtn2 = document.querySelector(".play-btn-2");
const popupContainerEl = document.querySelector(".popup-container");

showPopup();
function showPopup() {
  playBtnEl.addEventListener("click", (e) => {
    popupContainerEl.style.display = "flex";

  });

  closeBtnEl.addEventListener("click", () => {
    popupContainerEl.style.display = "none";
  });

  playBtn2.addEventListener("click", () => {
    popupContainerEl.style.display = "flex";
  });
}

// TODO================Hero Popup Area End===========>

// TODO================Counter Number Start===========>
const counterEl = document.querySelectorAll(".counter");
let intarvalCounter = 20;

counterEl.forEach((counterNum) => {
  const counter = () => {
    const targetNum = parseInt(counterNum.getAttribute("data-number"));
    const initialNum = parseInt(counterNum.textContent);
    const counterDuration = Math.floor(targetNum / intarvalCounter);

    if (initialNum < targetNum) {
      counterNum.textContent = counterDuration + initialNum;
      setTimeout(counter, 10);
    } else {
      counterNum.textContent = targetNum; // Ensure the final value is exactly the targetNum
    }

    // Add a "+" sign after the counter
    counterNum.textContent += "+";
  };

  counter();
});

// TODO================Counter Number End===========>

// TODO================FilterGallery Start===========>
const imgGallery = document.querySelectorAll(".img-gallery");
const filterButton = document.querySelectorAll(".filter-button");

filterButton.forEach(function (button) {
  button.addEventListener("click", function () {
    const filterValue = this.dataset.filter;

    filterButton.forEach((btn) => btn.classList.remove("active"));

    this.classList.add("active");

    imgGallery.forEach((img) => {
      if (filterValue === "all" || img.dataset.catagory === filterValue) {
        img.style.display = "none";
        gsap.to(".img-gallery", {
          y: -30,
          duration: 1,
         });
      } else {
        img.style.display = "block";
      }
      if (filterValue === "all") {
        img.style.display = "block";
      }
    });
  });
});

// TODO================FilterGallery End===========>






// TODO================Testimonial Slider Start===========>
// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });


document.addEventListener('DOMContentLoaded', function () {
  // Get the Swiper container
  let swiperContainer = document.querySelector('.mySwiper');

  // Initialize Swiper
  let swiper = new Swiper(swiperContainer, {
    slidesPerView: 1,
    spaceBetween: 30,
    sliderPerGroup: 1,
  
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      on: {
          slideChange: function () {
              // Remove the 'active' class from all slider-content elements
              let sliderContents = document.querySelectorAll('.slider-content');
              sliderContents.forEach(function (content) {
                  content.classList.remove('active');
              });

              // Add the 'active' class to the current slide's slider-content
              let currentSlide = swiper.slides[swiper.activeIndex];
              let currentContent = currentSlide.querySelector('.slider-content');
              currentContent.classList.add('active');
              // console.log(swiper.el.childNodes[1].children[0]);
          },
      },
  });


  
});

// TODO================Testimonial Slider End===========>
