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

      // $('.sub-menu-products-item').on('click', )
    }

    function showProductsMenu(e) {
      e.preventDefault();
      e.stopPropagation();
      $('.sub-menu-products').fadeIn();
      $('.sub-menu-products').on('mouseleave', hideProductsMenu);
    }

    function hideProductsMenu(e) {
      e.preventDefault();
      $('.sub-menu-products').fadeOut();
    }

    init();
    return {

    };
  }

  w.voo = w.voo || {};
  w.voo.Menu = Menu;

})(jQuery, window);
