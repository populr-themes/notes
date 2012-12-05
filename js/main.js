$(document).on('pop-initialized', function(){

  $('.asset-type-imagegroup').live('initialize', function(e, asset){
  	$(this).find('.slideshow .images').cycle({
				fx: 'fade',
				timeout: Math.floor(Math.random() * 8000) + 3000,
				delay: Math.floor(Math.random() * 6000) + 1000
	    });
  });

  $('.asset').live('initialize', function(e, asset){
		$("a.fancybox").fancybox();
	}).live('destroy', function(e, asset){
		$("a.fancybox").fancybox();
  });


});



