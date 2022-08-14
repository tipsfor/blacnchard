document.querySelectorAll(".hero__dropdown-simplebar").forEach((dropdown) => {
  new SimpleBar(dropdown, {

    autoHide: false,
   
    scrollbarMaxSize: 27,
  });
}); 

const ulist = document.querySelectorAll(".hero__dropdown-btn");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassli = "btn__active"; 


ulist.forEach((item) => {
  item.addEventListener("click", function () {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach((el) => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns);
      }
    });
    ulist.forEach((el) => {
      if (el != this) {
        el.classList.remove(activeClassli);
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassli);
    
  });
});


document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".hero__sup")) {
    document.querySelectorAll(".dropdown").forEach(el => {
        el.classList.remove("dropdown__active");
    })
     document.querySelectorAll(".hero__dropdown-btn").forEach(el => {
        el.classList.remove("btn__active");
    });
  }
})
