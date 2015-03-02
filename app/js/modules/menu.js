(function($, w) {
  function Menu(ele) {
    var baseElement = $('.' + ele);
    var log = w.TPK.Logger.getInstance();

    function init() {

      initHandlers();

    }

    function initHandlers() {
      // log.info('initHandlers');
      $('.button-products').on('click', showProductsMenu).on('mouseover', showProductsMenu);
      $('.burger').on('mouseover', openBurgerMenu);
    }

    function showProductsMenu(e) {
      e.preventDefault();
      e.stopPropagation();
      $('.sub-menu-products').fadeIn();
      $('.sub-menu-products').on('mouseleave', hideProductsMenu);
      $('.sub-menu-products-item').on('click', switchSubMenu);
    }

    function hideProductsMenu(e) {
      e.preventDefault();
      $('.sub-menu-products').fadeOut();
    }

    function switchSubMenu(e){
      e.preventDefault();
      $('.sub-menu-products').css({'top':'0', 'background-color':'#fff'});
      $('.sub-menu-products-item').css({'color':'black'});
      $('.sub-menu-products').off('mouseleave', hideProductsMenu);
      $('.sub-menu-products-item').on('mouseover', showSubMenu);
      $('.hidden-item').show();
      //$('#nav').on('mouseleave', hideSubMenu);
    }

    function showSubMenu(e){
      e.preventDefault();
      //console.log(e);
      $('.sub-sub-menu').hide();
      $('.sub-menu-products-'+ $(this).attr('TPK-ID')).fadeIn();
    }

    // function hideSubMenu(e){
    //   e.preventDefault();
    //   $('.sub-menu-products-'+ $(this).attr('TPK-ID')).fadeOut();
    // }

    function openBurgerMenu(e){
      e.preventDefault();
      $('.sub-sub-menu').hide();
      $('burger-content').fadeIn();
    }

    init();
    return {

    };
  }

  w.voo = w.voo || {};
  w.voo.Menu = Menu;

})(jQuery, window);


//
