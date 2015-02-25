(function($,window){
  $(function(){
    setHandlers();

  });


  function setHandlers(){
    $('.high-menu-item').on('mouseenter', mouseEnterHandler);
    $('.sub-menu-item').on('click', clickHandler);
    $('.sub-menu-active .li .a').on('click', clickSubMenuHandler);
  }

  function mouseEnterHandler(event){
  	var link = $(this).attr('href');
    var test = $(this).attr('data-button-menu');
    if(test != undefined){
    	$('.sub-menu-'+link).show();
    }else{
    	$('.high-menu-item').off('mouseenter', mouseEnterHandler);
    }	
  }

  function clickHandler(event){
    var test = $(this).attr('data-button-menu');
    event.preventDefault();
    if(test != undefined){
    	$('.high-menu').hide();
    	$('.logo-sub-menu').show();
    	$('.back-sub-menu').show();
    	// $(this).addClass('sub-menu-active');
    	$('.sub-menu-products').show().addClass('sub-menu-active').css({'top' : '0','background-color' : '#ccc'});
    }
  }

  function clickSubMenuHandler(event){
  	event.preventDefault();
  	alert('Yooooooo');
  }


})(jQuery,window);

    // if(link.indexOf("http://") != -1)window.open(link);