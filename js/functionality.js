$(document).ready(function() {
   $('.sidebarlink').click(function(event){
      $('.sidebarlink').each(function() {
        $(this).parent().removeClass("active");
      });
      $(this).parent().addClass("active");
      console.log($(this).get(0).id);
      console.log('url(../images/' + $(this).get(0).id + '/1.jpg');
      $('.cb-slideshow li:nth-child(1) span').css('background-image', 'url(images/' + $(this).get(0).id + '/1.jpg)');
      $('.cb-slideshow li:nth-child(2) span').css('background-image', 'url(images/' + $(this).get(0).id + '/2.jpg)');
      $('.cb-slideshow li:nth-child(3) span').css('background-image', 'url(images/' + $(this).get(0).id + '/3.jpg)');
      $('.cb-slideshow li:nth-child(4) span').css('background-image', 'url(images/' + $(this).get(0).id + '/4.jpg)');
      $('.cb-slideshow li:nth-child(5) span').css('background-image', 'url(images/' + $(this).get(0).id + '/5.jpg)');
      $('.cb-slideshow li:nth-child(6) span').css('background-image', 'url(images/' + $(this).get(0).id + '/6.jpg)');
  });
});