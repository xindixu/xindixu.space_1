
// scroll spy
$(function() {
  var topoffset = 60; //variable for menu height
  //Use smooth scrolling when clicking on navigation
  $('.navbar-nav a').click(function() {
    if (location.pathname.replace(/^\//,'') === 
      this.pathname.replace(/^\//,'') && 
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling
});  

document.addEventListener("scroll", function() {
 if (window.pageYOffset > 60)
document.getElementById('sidebar-menu').style.display = "block";
 else
document.getElementById('sidebar-menu').style.display = "none";
}); 
  