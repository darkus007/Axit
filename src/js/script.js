$(document).ready(function(){
    $('ul.tabs__btns').on('click', 'li:not(.tabs__btn_active)', function() {
        $(this)
          .addClass('tabs__btn_active').siblings().removeClass('tabs__btn_active')
          .closest('div.container').find('div.tabs__item').removeClass('tabs__item_active').eq($(this).index()).addClass('tabs__item_active');
      });
});