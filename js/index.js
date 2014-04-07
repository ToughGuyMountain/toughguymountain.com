$(document).ready(function() {
   $('.sidebarlink').click(function(event){
      $('.sidebarlink').each(function() {
        $(this).parent().removeClass("active");
      });
      $(this).parent().addClass("active");
      console.log(event.target);
      console.log(event.target.parentNode);
  });
});