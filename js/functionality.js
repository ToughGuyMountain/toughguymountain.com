$(document).ready(function() {    
    var descriptions = {
      'CONDOMAXIUM' : 'CONDOMAXIUM is a living experience unlike any other. Designed by the urban lifestyle enthusiasts at Tough Guy Mountain, CONDOMAXIUM will combine luxurious amenities with funky fun and provide an uncompromisingly sophisticated urban experience.<br/><br/>CONDOMAXIUM is observable as a condo showroom. View 3D models of the exterior, and high resolution photographs of the interior of the condo complex of the new millennium. CONDOMAXIUM also gives you a sneak peak into the offices at Tough Guy Mountain, open to the public, located directly behind the condo showroom. Meet the Executives and Interns and witness firsthand their latest hard work. CONDOMAXIUM was shown most recently at OCAD U Student Gallery over the month of November, 2013. ',
      'SPACERACE' : 'SPACERACE is a 4-player, neon-soaked arcade classic in active development. It has so far enjoyed multiple beta previews on two exclusive platforms, the HALIFAXMACHINE 5005 and the <a href="https://vine.co/v/MMMQqYzTVLY">SpaceRaceCase</a>. The SpaceRaceCase is a briefcase containing a projector, the game, and 4 controllers, that was setup wherever a plug could be found around GDC 2014. It is totally available for parties in Toronto.<br /><br/> Keep your eyes peeled for Tough Guy Mountain\'s exclusive SpaceRace HOTDRIVES, which will be sold at <a href="https://bentomiso.com/bit-bazaar-spring-fair-2014">Bit Bazaar</a> on May 10th, 2014.',
      'POPUPOFFICE' : 'Tough Guy Mountain’s “Pop-Up Office/Open House” was on display most recently as part of the Toronto Design Exchange’s Office Design Festival. TGM opened its doors at Narwhal Gallery to allow designers a first-hand glance at the freshest perspectives on office design and office culture.<br /><br/>TGM showed off its "Live/Work Intern Cubicles", "Executive Lounge", "Senior Partners Telepresence Suite", "Gift Shop", "Window Display" and two new pieces of software: “Digital Intern” and “Social Media Audience Processing Booth”. Pop-Up Office/Open House was shown at Narwhal Gallery and as part of AGO\'s First Thursdays in January 2014.',
      'GLITCHWIZARD' : 'GLITCHWIZARD aims to cast databending into the mainstream, combining elements of social media, image texting and glitching into one gamified app. Wizards glitch their images out, to cast them as spells against other wizards, and have them instantly uploaded to the GLITCHFEED.<br/><br/> Unlike other glitching apps currently avaialable on the App Store, which provide glitch-like filters to images that are simple transformations of the data instead of legitimate glitches, glitchwizard will provide true databending capabilities (modifying image information, hacking headers, exploring the intricacies of different image formats, etc), that produce the truly expressive and unpredictable results that are characteristic of the discipline.<br/><br/>Coming May 2014.',
      'WINNITRON' : 'TGM\'s CTO, Allan Lavell, headed up a team of wizards in Halifax that built and released an arcade machine on February 21st 2014, the HALIFAXMACHINE 5005. It is a Winnitron - a free-to-play public machine showcasing indie games. The release party, <a href="https://www.youtube.com/watch?v=48eFGF3MHoQ">#IncomingFax</a> happened at Volta Labs, and the machine is now installed at Dalhousie University.<br /><br/>The Winnitron project achieved international success in 2011, but to date its full vision hasn\'t been realized: the ability to add new games to Winnitrons is conspicuously absent. Allan is now heading a development team consisting of original Winnitron project members as well as new volunteers,  that will re-launch the Winnitron as an open-source platform for free indie arcade game distribution.' ,
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