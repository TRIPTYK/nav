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
      $('.sub-menu-products').css({'top':'0', 'background-color':'#fff', 'padding':'10px 0 0 165px'});
      $('.sub-menu-products-item').addClass('color-black');
      $('.burger').removeClass('hidden-item').addClass('color-black');
      $('.sub-menu-products').off('mouseleave', hideProductsMenu);
      $('.sub-menu-products-item').on('mouseover', showSubMenu);
      $('.hidden-item').show();
    }

    function showSubMenu(e){
      e.preventDefault();
      $('.sub-menu-products-item').removeClass('active-tab');
      var subMenuTarget = $('.sub-menu-products-'+ $(this).attr('TPK-ID')),
          left = $('.container').width() - subMenuTarget.width();
          left = left/2;
      //console.log(e);
      $('.content-burger').hide();
      $('.sub-sub-menu').hide();
      $('.sub-menu-products-'+ $(this).attr('TPK-ID')).show().css('left', left); 
      $(this).addClass('active-tab');
    }

    function openBurgerMenu(e){
      e.preventDefault();
      $('.sub-sub-menu').hide();
      $('.sub-menu-products a').removeClass('active-tab');
      $('.burger').addClass('active-tab');
      $('.content-burger').show();
    }

    init();
    return {
    };
  }

  w.voo = w.voo || {};
  w.voo.Menu = Menu;

})(jQuery, window);