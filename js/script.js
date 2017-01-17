    var new_menu = 124;
       $('.navbar-nav a[href*=#]').bind("click", function(e){
          var anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $(anchor.attr('href')).offset().top-new_menu
          }, 1000);
          e.preventDefault();
       });
 
		 
		var owl = $("#owl-demo");
			// Custom Navigation Events
		  $(".next2").click(function(){
		    owl.trigger('owl.next');
		  });
		  $(".prev2").click(function(){
		    owl.trigger('owl.prev');
		  });
  
		$(document).ready(function() {
			
		 $(document).ready(function() {
			$(".fancybox").fancybox();
		});
 
				

		  $("#owl-demo").owlCarousel({
		  	stopOnHover: true,
		    autoPlay : true,
		    stopOnHover : true,
		    navigation: true,
		    navigationText: false,
		    paginationSpeed : 3000,
		    goToFirstSpeed : 2000,
		    singleItem : true,
		    autoHeight : true,
		    transitionStyle:"fade"
		  });	



		  $("#owl-slider2").owlCarousel({
		  	items: 2,
		  	stopOnHover: true,
		    autoPlay : true,
		    stopOnHover : true,
		    navigation: true,
		    navigationText: false,
		    paginationSpeed : 3000,
		    goToFirstSpeed : 2000,
		    singleItem : true,
 		    transitionStyle:"fade"
		  });

 
		 
		var owl = $("#owl-slider2");
			// Custom Navigation Events
		  $(".next").click(function(){
		    owl.trigger('owl.next');
		  });
		  $(".prev").click(function(){
		    owl.trigger('owl.prev');
		  });
  
		  $('#myModal').on('shown.bs.modal', function () {
			  $('#myInput').focus()
		  })


		});






 // Cache selectors
var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight-130;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
});


