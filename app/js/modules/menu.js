(function($, w) {
  function Menu(ele) {
    var baseElement = $('.' + ele);
    var log = w.TPK.Logger.getInstance();

    function init() {

      initHandlers();


    }

    function initHandlers() {
      // log.info('initHandlers');
      $('.button-products').on('click', showProductsMenu).on('mouseover', showProductsMenu)
    }

    function showProductsMenu(e) {
      e.preventDefault();
      e.stopPropagation();
      $('.sub-menu-products').fadeIn();
      $('.sub-menu-products').on('mouseleave', hideProductsMenu);
      $('.sub-menu-products-item').on('click',switchSubMenu);
    }


    function hideProductsMenu(e) {
      e.preventDefault();
      $('.sub-menu-products').fadeOut();

    }

    function switchSubMenu(e){
      e.preventDefault();
      console.log(e);
      $('.sub-menu-products').css({'top':'0', 'background-color':'#ccc'});
      $('.sub-menu-products').off('mouseleave', hideProductsMenu);
      $('.sub-menu-products-item').on('mouseover', showSubMenu);
      $('#truc').on('mouseleave', hideSubMenu);
    }

    function showSubMenu(e){
      e.preventDefault();
      //console.log(e);
      if($('.sub-menu-products-'+ $(this).attr('TPK-ID')+':hidden')){
        $('.testtruc').fadeOut();
        $('.sub-menu-products-'+ $(this).attr('TPK-ID')).fadeIn();
      }
      
    }

    function hideSubMenu(e){
      e.preventDefault;
      //$('.sub-menu-products-'+ $(this).attr('TPK-ID')).fadeOut();
      $('.testtruc').fadeOut();
    }

    init();
    return {

    };
  }

  w.voo = w.voo || {};
  w.voo.Menu = Menu;

})(jQuery, window);


//
