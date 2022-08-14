window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.catalog__painter-tul').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(event) {
   
    const path = event.currentTarget.dataset.path
    document.querySelectorAll(`[data-path]`).forEach(function (tabsBtn) {
    
  
    document.querySelectorAll('.catalog__left').forEach(function(tabContent) {
     tabContent.classList.remove('catalog__tab-content') 
  
    })
  
   
      tabsBtn.classList.remove('btn-active')

     document.querySelector(`[data-target="${path}"]`).classList.add('catalog__tab-content');
     document.querySelector(`[data-path="${path}"]`).classList.add('btn-active');
     

})
})})})