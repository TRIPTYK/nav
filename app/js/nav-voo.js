(function($,window){
  $(function(){
    setHandlers();

  });


  function setHandlers(){
    $('.high-menu-item').on('click', clickHandler)

  }

  function clickHandler(event)
  {
    var link =$(this).attr('href');
    if(link.indexOf("http://") != -1)window.open(link);
    event.preventDefault();
    $('.high-menu').hide();
    $('.sub-menu-'+link).show();
    return false;
  }


})(jQuery,window);
