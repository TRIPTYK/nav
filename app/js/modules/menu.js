(function($, w) {
  function Menu(ele) {
    var baseElement = $('.' + ele);;

    function init() {

      initHandlers();
      // var log = w.TPK.Logger.getInstance();
      w.TPK.Logger.getInstance().error("hehehe");
      w.TPK.Logger.getInstance().warn("hehehe");
      w.TPK.Logger.getInstance().debug("hehehe");

    }

    function initHandlers() {
      console.log('initHandlers');
      console.log(baseElement);
      $('a[TPK-MENU="global-menu-button"]').on('click', _clickHandler);
      $('a[TPK-MENU="global-menu-button"]').on('mouseenter', _clickHandler);
      $('a[TPK-MENU="products-menu-button"]').on('click', _clickHandler);

    }


    function _clickHandler(e) {
      e.preventDefault();
      eval('interract_' + $(this).attr('TPK-ID'))();
    }


    function interract_products() {
      $(".nav").hide();
      $(".sub-menu-products").show();
    }

    function interract_packs() {
      $(".sub-menu-products-packs").show();
    }


    init();
    return {

    };
  }

  w.voo = w.voo || {};
  w.voo.Menu = Menu;

})(jQuery, window);
