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
      $('#menu-mobile .btn-burger').on('click', showMenuMobile);
    }

    function showMenuMobile(e) {
      e.preventDefault();
      if($('.btn-burger').hasClass('active')){
        hideMenuMobile();
      }else{
        $('.menu-burger').show();
        $('.btn-burger').addClass('active');
        $('.btn-products').on('click', showSubMenuMobile);
      }
    }

    function hideMenuMobile() {
      $('.btn-burger').removeClass('active');
      $('.detailsProducts, .listProducts').hide();
      $('.menu-burger').hide();
      $('.secondaryNav').removeClass('position-abs').removeAttr('style');
    }

    function showSubMenuMobile(e) {
      e.preventDefault();
      var heightMenu = $('.listProducts').height();
      $('.listProducts').show();
      $('.secondaryNav').addClass('position-abs').css('top', heightMenu+20);
      $('.btn-sub-menu-mobile').on('click', showProductsSubMenuMobile);
      $('.btn-back').on('click', backMenuMobile);
    }
    function backMenuMobile(e) {
      e.preventDefault();
      $('.detailsProducts, .listProducts').hide();
      $('.secondaryNav').removeClass('position-abs').removeAttr('style');
    }

    function showProductsSubMenuMobile(e) {
      e.preventDefault();
      var heightMenu = $(this).next('.detailsProducts').height();
      $(this).next('.detailsProducts').show();
      $('.secondaryNav').addClass('position-abs').css('top', heightMenu+20);
    }

    function showProductsMenu(e) {
      e.preventDefault();
      e.stopPropagation();
      $('.sub-menu-products').show();
      $('.sub-menu-products').on('mouseleave', hideProductsMenu);
      $('.sub-menu-products-item').on('click', switchSubMenu);
    }

    function hideProductsMenu(e) {
      e.preventDefault();
      $('.sub-menu-products').hide();
    }

    function switchSubMenu(e){
      e.preventDefault();
      $('.sub-menu-products').css({'top':'0', 'background-color':'#fff', 'padding':'2px 0 0 165px'});
      $('.sub-menu-products-item').addClass('color-black');
      $('.burger').removeClass('hidden-item').addClass('color-black');
      $('.sub-menu-products').off('mouseleave', hideProductsMenu);
      $('.sub-menu-products-item').on('mouseover', showSubMenu);
      $('.hidden-item').show();
      $('.sub-menu-products .envie-search').css('padding-top', '24px');
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
      if ($(this).attr('TPK-ID') === 'burger') {
        $('.content-burger').show();
      } else {
        $('.sub-menu-products-'+ $(this).attr('TPK-ID')).show().css('left', left);
      }
      $(this).addClass('active-tab');
      $('#nav').on('mouseleave', hideSubMenu);
    }

    function hideSubMenu(e){
      e.preventDefault();
      $('.sub-sub-menu').hide();
      $('.sub-menu-products-item').removeClass('active-tab');
      $('.content-burger').hide();
    }

    function openBurgerMenu(e){
      e.preventDefault();
      $('.sub-sub-menu').hide();
      $('.sub-menu-products a').removeClass('active-tab');
      $('.burger').addClass('active-tab');
      $('.content-burger').show();
      $('.btn-back-products').on('click', backProductsMenu);
    }

    function backProductsMenu(e) {
      console.log(e);
      e.preventDefault();
      $('.sub-sub-menu').hide();
      showProductsMenu();
    }

    init();
    return {
    };
  }

  w.voo = w.voo || {};
  w.voo.Menu = Menu;

})(jQuery, window);