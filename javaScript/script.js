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




// TODO================Customer Showcase Slider Start===========>
var swiper = new Swiper('.swiper', {
  slidesPerView: 5,
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 5,
    },
    810: {
      slidesPerView: 3,
    },
    360: {
      slidesPerView: 1,
    },
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
  
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 360 ? 'vertical' : 'horizontal';

  return direction;
};
// TODO================Customer Showcase Slider End===========>





// TODO================Scroll To Top Start===========>
// Get the button element
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
scrollToTopBtn.addEventListener("click", function(){
  scrollToTop();
})

// Add a scroll event listener
window.onscroll = function() {
  scrollFunction();

};


// Show or hide the button based on scroll position
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    if (window.innerWidth >= 900) {
      scrollToTopBtn.style.opacity = 1;
    } else {
      scrollToTopBtn.style.opacity = 0;
    }
  } else {
    scrollToTopBtn.style.opacity = 0;
  }
}

// Scroll to the top when the button is clicked
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// TODO================Scroll To Top End===========>




// TODO================Gsap Animation Start===========>
// Header Animation
function headerAnimation() {
  // logo
gsap.from("#header .logo", {
  opacity: 0,
  duration: 2,
});
// navLinks
gsap.from("#header .page-links", {
  opacity: 0,
  duration: 2,
});
}
headerAnimation();

// Hero Animation
let heroTl = gsap.timeline(); 
function heroAnimation() {
  // Left Column Animation
  heroTl.from(".hero-p", {
    opacity: 0,
    y: 80,
    duration: 0.6,
    stagger: 0.8,
    
  });
  heroTl.from(".heading-1", {
    opacity: 0,
    y: 80,
    duration: 0.6,
    stagger: 0.8,
    
  });
  heroTl.from(".highlight-line", {
    opacity: 0,
    x: -30,
    duration: 0.6,
    stagger: 0.8,
    
  });
  heroTl.from(".hero-title p", {
    opacity: 0,
    y: 50,
    duration: 0.6,
    stagger: 0.8,
    
  });
  heroTl.from(".left-column .vedio-btn", {
    opacity: 0,
    y: 50,
    duration: 0.6,
    stagger: 0.8,
    
  });
  // Right Column Animation 
  gsap.from(".right-column", {
    opacity: 0,
    duration: 2,
    
  });
}
heroAnimation();
// sider poster
function sidePosterAnimation() {
  gsap.from(".side-poster", {
    x: -200,
    duration: 1.5,
    scrollTrigger: {
      trigger: ".side-poster",
      scroller: "body"
    },
    
  });
}
sidePosterAnimation();



// Intro Section 
function introAnimation() {
gsap.from(".intro-title h2",{
  y: 70,
  opacity: 0,
  duration: 0.5,
  stagger: 1,
  scrollTrigger: {
    trigger: ".intro-title h2",
    scroller: "body"
  }
});
gsap.from(".intro-title .primary-text",{
  y: 70,
  opacity: 0,
  duration: 0.5,
  stagger: 1,
  scrollTrigger: {
    trigger: ".intro-title .primary-text",
    scroller: "body"
  }
});
gsap.from(".paragraph p",{
  y: 70,
  opacity: 0,
  duration: 0.5,
  stagger: 1,
  scrollTrigger: {
    trigger: ".paragraph p",
    scroller: "body"
  }
});
gsap.from(".counter-row .counter-left",{
  x: -70,
  opacity: 0,
  duration: 0.7,
  scrollTrigger: {
    trigger: ".counter-row .counter-left",
    scroller: "body"
  }
});
gsap.from(".counter-row .counter-right",{
  x: 70,
  opacity: 0,
  duration: 0.7,
  scrollTrigger: {
    trigger: ".counter-row .counter-right",
    scroller: "body"
  }
});
// intro images
gsap.from(".intro-image .intro-image-1",{
  y: 90,
  opacity: 0,
  duration: 1,
  stagger: 1,
  scrollTrigger: {
    trigger: ".intro-image .intro-image-1",
    scroller: "body"
  }
});
gsap.from(".intro-image .intro-image2",{
  y: 200,
  opacity: 0,
  duration: 1,
  stagger: 2,
  scrollTrigger: {
    trigger: ".intro-image .intro-image2",
    scroller: "body"
  }
});
gsap.from(".intro-image .intro-image3",{
  y: 200,
  opacity: 0,
  duration: 1,
  stagger: 3,
  scrollTrigger: {
    trigger: ".intro-image .intro-image3",
    scroller: "body"
  }
});
gsap.from(".extension-image",{
  y: 200,
  opacity: 0,
  duration: 1,
  stagger: 3,
  scrollTrigger: {
    trigger: ".extension-image",
    scroller: "body"
  }
});
// Reason Porto
gsap.from(".dots-image",{
  y: 40,
  duration: 1,
  stagger: 3,
  scrollTrigger: {
    trigger: ".dots-image",
    scroller: "body",
    start: "30% 60%",
    end: "200% 300%",
    pin: true,
    scrub: 4,
  }
});
gsap.from(".number",{
  // y: 50,
  opacity: 0,
  scale: 2,
  duration: 1,
  stagger: 1,
  scrollTrigger: {
    trigger: ".number",
    scroller: "body",
  }
});
gsap.from(".reason",{
  x: -80,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".reason",
    scroller: "body",
  }
});
gsap.from(".choose",{
  x: -90,
  opacity: 0,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: ".choose",
    scroller: "body",
  }
});
gsap.from(".proto",{
  x: -90,
  opacity: 0,
  duration: 1,
  delay: 1.5,
  scrollTrigger: {
    trigger: ".proto",
    scroller: "body",
  }
});
gsap.from(".text-column h3",{
  x: -90,
  opacity: 0,
  duration: 1,
  delay: 1.5,
  scrollTrigger: {
    trigger: ".text-column h3",
    scroller: "body",
  }
});
gsap.from(".text-column p",{
  x: -90,
  opacity: 0,
  duration: 1,
  delay: 2,
  scrollTrigger: {
    trigger: ".text-column p",
    scroller: "body",
  }
});
// template row
gsap.from(".template-column",{
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".template-column",
    scroller: "body",
  }
})
}
introAnimation();

// Demo Import
function demoAnimation() {
  gsap.from(".demo-anim", {
    y: 70,
    opacity: 0,
    duration: 0.7,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".demo-anim",
      scroller: "body",
    }
  })
  gsap.from(".demo-anim-img img", {
    x: 70,
    opacity: 0,
    duration: 0.7,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".demo-anim",
      scroller: "body",
    }
  })
}
// Performance
gsap.from(".performance-anim img", {
  y: 140,
  opacity: 0,
  duration: 0.9,
  delay: 1,
  scrollTrigger: {
    trigger: ".performance-anim",
    scroller: "body",
  }
})
gsap.from(".performance-anim-2", {
  y: 140,
  opacity: 0,
  duration: 0.9,
  delay: 0.5,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".performance-anim-2",
    scroller: "body",
  }
})
gsap.from(".page-score", {
  x: -140,
  opacity: 0,
  duration: 0.9,
  delay: 0.5,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".page-score",
    scroller: "body",
  }
})
// Mobile
gsap.from(".mobile-anim", {
  y: 140,
  opacity: 0,
  duration: 0.9,
  delay: 0.3,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".mobile-anim",
    scroller: "body",
  }
})
gsap.from(".ipad", {
  x: -140,
  opacity: 0,
  duration: 0.9,
  delay: 0.3,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".ipad",
    scroller: "body",
  }
})
gsap.from(".iphone", {
  x: 140,
  opacity: 0,
  duration: 0.9,
  delay: 0.5,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".iphone",
    scroller: "body",
  }
})
demoAnimation();

// Gallery Section
function galleryAnimation() {
  gsap.from(".gallery-anime-1", {
    y: 140,
    opacity: 0,
    duration: 0.9,
    delay: 0.5,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".gallery-anime-1",
      scroller: "body",
    }
  })
  gsap.from(".img-gallery", {
    y: 140,
    opacity: 0,
    duration: 0.9,
    delay: 0.5,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".img-gallery",
      scroller: "body",
    }
  })
}
galleryAnimation();

// Header Builder Section
function headerBuilderAnimation() {
  gsap.from(".header-builder-anim", {
    y: 140,
    opacity: 0,
    duration: 0.9,
    delay: 0.5,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".header-builder-anim",
      scroller: "body",
    }
  })
  gsap.from(".header-builder-anim-1", {
    y: 140,
    opacity: 0,
    duration: 0.9,
    delay: 0.5,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".header-builder-anim-1",
      scroller: "body",
    }
  })
  gsap.from(".header-anim-icon", {
    x: -140,
    opacity: 0,
    duration: 0.9,
    delay: 2.2,
    scrollTrigger: {
      trigger: ".header-anim-icon",
      scroller: "body",
    }
  })
}
headerBuilderAnimation();
//LayOut Section
gsap.from(".lay-out-anim", {
  y: 140,
  opacity: 0,
  duration: 0.5,
  delay: 0.2,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".lay-out-anim",
    scroller: "body",
  }
})

// Testimonial Section
function testimonialAnimation() {
  gsap.from(".testimonial-anim-text", {
    scale: 2.7,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".testimonial-anim-text",
      scroller: "body",
    }
  })
  gsap.from(".testimonial-anim-text-1", {
    y: 140,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".testimonial-anim-text-1",
      scroller: "body",
    }
  })
  gsap.from(".swiper-slide, .buy-button", {
    y: 140,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".swiper-slide",
      scroller: "body",
    }
  })
}
testimonialAnimation();

// Professional Support Section
gsap.from(".support-anim-img", {
  y: 140,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".support-anim-img",
    scroller: "body",
  }
})

// Extenstion Section
gsap.from(".extension-anim-text", {
  y: 140,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".extension-anim-text",
    scroller: "body",
  }
})
gsap.from(".box-anim", {
  y: 140,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".box-anim",
    scroller: "body",
  }
})

// Pricing Section
gsap.from(".pricing-anim-text", {
  y: 140,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".pricing-anim-text",
    scroller: "body",
  }
})
// TODO================Gsap Animation End===========>
