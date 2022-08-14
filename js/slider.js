


let swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  loop: true,
  autoplay: true,
  speed: 400,
 grabCursor: true,
  // пагинация
  a11y: {
    paginationBulletMessage: "Перейти к слайду {{index}}",
  },

  // навигация

});







let gallerySlider = new Swiper(".swiper-container-more", {
 
  paginationClickable: true,


 grabCursor: true,
 keyboard: {
  enabled: true,
  onlyInViewport: true,
 
   
},

     pagination: {
       el: ".swiper-pagination-right",
       type: "fraction"
     },
     navigation: {
       nextEl: ".swiper-btn-next",
       prevEl: ".swiper-btn-prev",
   
     },

     
     breakpoints:{ 

    
      1920: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
       },
       

      1620: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
       },
       1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
       },

       860: {
        slidesPerView: 2,
        slidesPerGroup: 3,
        spaceBetween: 30,
       },
     
       320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30,
       },
      },
    a11y: false,
    keyboard: {
       enabled: true,
       onlyInViewport: true
     }, 
watchSlidesProgress: true,
watchSlidesVisibility: true,
slideVisibleClass: "slide-visible",

on: {
  init: function () {
    this.slides.forEach((slide) => {
      if (!slide.classList.contains("slide-visible")) {
        slide.tabIndex = "-1";
      } else {
        slide.tabIndex = "";
      }
    });
  },
  slideChange: function () {
    this.slides.forEach((slide) => {
      if (!slide.classList.contains("slide-visible")) {
        slide.tabIndex = "-1";
      } else {
        slide.tabIndex = "";
      }
      
    });
    
  }
}
 
    });



    

let eventSliders = new Swiper(".swiper-more-three", {


 grabCursor: true,
 keyboard: {
  enabled: true,
  onlyInViewport: true,
   pageUpDown: true,

},

     pagination: {
       el: ".swiper-pagination",
       clickable: true,
     },
     navigation: {
       nextEl: ".event-btn-next",
       prevEl: ".event-btn-prev",
     },
     breakpoints:{ 

    
      1920: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween:60,
       },
       

      1620: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 30,
       },

       1024: {
        slidesPerView: 3,
        slidesPerGroup: 2,
        spaceBetween: 30,
       },


       768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
       },
     
       620: {
        slidesPerView: 2,
        slidesPerGroup: 3,
        spaceBetween: 20,
       },
      },
     
     a11y: false,
     keyboard: {
       enabled: true,
       onlyInViewport: true
     }, 
watchSlidesProgress: true,
watchSlidesVisibility: true,
slideVisibleClass: "slide-visible",

on: {
  init: function () {
    this.slides.forEach((slide) => {
      if (!slide.classList.contains("slide-visible")) {
        slide.tabIndex = "-1";
      } else {
        slide.tabIndex = "";
      }
    });
  },
  slideChange: function () {
    this.slides.forEach((slide) => {
      if (!slide.classList.contains("slide-visible")) {
        slide.tabIndex = "-1";
      } else {
        slide.tabIndex = "";
      }
      
    });
    
  }
}
 
    });



    let projectsSlider = new Swiper(".swiper-container-event", {
      slidesPerView: 3,
      slidesPerGroup: 3,
    
    
     grabCursor: true,
     keyboard: {
      enabled: true,
      onlyInViewport: true,
       pageUpDown: true,
        
    },
    spaceBetween: 45,
         pagination: {
           el: "",
           type: "fraction"
         },
         navigation: {
           nextEl: ".event-slider-next",
           prevEl: ".event-slider-prev ",
         },
         breakpoints:{ 

          1920: {
            slidesPerView: 3,
            slidesPerGroup: 2,
            spaceBetween: 50,
           },
       
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 40,
           },
           320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 35,
           },
          },
         
       
         a11y: false,
         keyboard: {
           enabled: true,
           onlyInViewport: true
         }, 
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
          
        });
        
      }
    }
     
        });

        

        
       
        window.addEventListener('DOMContentLoaded', function() 
        {
          document.querySelector('#burger').addEventListener('click', function () {
            document.querySelector('#menu').classList.toggle('is-active-btn-burger');
            document.querySelector ('body').classList.toggle('modal-open');
            document.querySelector ('#burger').classList.toggle('is-close-btn-burger'); 
            
           });
           });



          
  
    const btnSearchOpen = document.querySelector ('#searchbtn')
    const btnSearchClose = document.querySelector ('#searchbtnclose')
    const formSearch = document.querySelector ('#searchform')
 
    btnSearchOpen.addEventListener('click', function () {
      btnSearchClose.disabled = false;
      formSearch.classList.add('active')
    })
    btnSearchClose.addEventListener('click', function () {
      formSearch.classList.remove('active')
    });
  