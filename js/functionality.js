$(document).ready(function() {    
    var descriptions = {
      'PANAMAHOLOGRAM' : 'When TGM Executives go on vacation in balmy panama, they are powered by so much leisure they often don’t know what to do with themselves. Using a program called ‘ExecMail’, the executives can outsource their leisure choices to the masses that visit any TGM pop-up office. Office visitors can e-mail Executives their favourite tasks, such as: ‘fire intern’, ‘hang at water cooler’ and ‘count money\'; the Executives perform these tasks right away.<br/><br/>The panama vacation is holo-projected into TGM pop-up offices, to give interns and audience members a glimpse of what life can be atop the Mountain.',
      'CONDOMAXIUM' : 'CONDOMAXIUM is a living experience unlike any other. Designed by the urban lifestyle enthusiasts at Tough Guy Mountain, CONDOMAXIUM will combine luxurious amenities with funky fun and provide an uncompromisingly sophisticated urban experience.<br/><br/>CONDOMAXIUM is observable as a condo showroom. View 3D models of the exterior, and high resolution photographs of the interior of the condo complex of the new millennium. CONDOMAXIUM also gives you a sneak peak into the offices at Tough Guy Mountain, open to the public, located directly behind the condo showroom. Meet the Executives and Interns and witness firsthand their latest hard work. CONDOMAXIUM was shown most recently at OCAD U Student Gallery over the month of November, 2013. ',
      'POPUPOFFICE' : 'Tough Guy Mountain’s “Pop-Up Office/Open House” was on display most recently as part of the Toronto Design Exchange’s Office Design Festival. TGM opened its doors at Narwhal Gallery to allow designers a first-hand glance at the freshest perspectives on office design and office culture.<br /><br/>TGM showed off its "Live/Work Intern Cubicles", "Executive Lounge", "Senior Partners Telepresence Suite", "Gift Shop", "Window Display" and two new pieces of software: “Digital Intern” and “Social Media Audience Processing Booth”. Pop-Up Office/Open House was shown at Narwhal Gallery and as part of AGO\'s First Thursdays in January 2014.',
      'POINTS' : 'POINTS was an installation that ran at OCAD from April 2nd - April 11th, 2014. It was a 16-player game, spanning 4 floors with one terminal and 4 buttons each. Every time you hit a button, your team gets a point, represented as a pixel in your team\'s colour being added to a canvas. POINZE the warthog arrives periodically when the canvas has filled up to clear it and announce the score. It was created in a weekend by TGM for Katie Switzer and Sayyad Glassman\'s Big Ideas project.<br/><br/> Of the four floors that competed at OCAD, (2nd, 4th, 5th, 6th floors), the 5th came out on top in the week and a half long period, scoring 295,090 points. The total for all teams was 682,853. Many buttons were pressed. POINZE is pleased with this result.',
    }
    var id = window.location.hash.substring(1);
    if (id === "") { id = "CONDOMAXIUM"}

    $('.cb-slideshow li:nth-child(1) span').css('background-image', 'url(images/' + id + '/1)');
    $('.cb-slideshow li:nth-child(2) span').css('background-image', 'url(images/' + id + '/2)');
    $('.cb-slideshow li:nth-child(3) span').css('background-image', 'url(images/' + id + '/3)');
    $('.cb-slideshow li:nth-child(4) span').css('background-image', 'url(images/' + id + '/4)');
    $('.cb-slideshow li:nth-child(5) span').css('background-image', 'url(images/' + id + '/5)');
    $('.cb-slideshow li:nth-child(6) span').css('background-image', 'url(images/' + id + '/6)');
    
    $("#desc").html(descriptions[id]);
    $('.sidebarlink').each(function() {
        $(this).parent().removeClass("active");
    });
    $("#" + id).parent().addClass("active");  
    

   $('.sidebarlink').click(function(event){
      $('.sidebarlink').each(function() {
        $(this).parent().removeClass("active");
      });
      $(this).parent().addClass("active");
      $("#desc").html(descriptions[$(this).get(0).id]);
      console.log($(this).get(0).id);
      console.log('url(../images/' + $(this).get(0).id + '/1');
      $('.cb-slideshow li:nth-child(1) span').css('background-image', 'url(images/' + $(this).get(0).id + '/1)');
      $('.cb-slideshow li:nth-child(2) span').css('background-image', 'url(images/' + $(this).get(0).id + '/2)');
      $('.cb-slideshow li:nth-child(3) span').css('background-image', 'url(images/' + $(this).get(0).id + '/3)');
      $('.cb-slideshow li:nth-child(4) span').css('background-image', 'url(images/' + $(this).get(0).id + '/4)');
      $('.cb-slideshow li:nth-child(5) span').css('background-image', 'url(images/' + $(this).get(0).id + '/5)');
      $('.cb-slideshow li:nth-child(6) span').css('background-image', 'url(images/' + $(this).get(0).id + '/6)');
  });
});