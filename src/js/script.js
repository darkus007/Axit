$(document).ready(function(){
    $('ul.tabs__btns').on('click', 'li:not(.tabs__btn_active)', function() {
        $(this)
          .addClass('tabs__btn_active').siblings().removeClass('tabs__btn_active')
          .closest('div.container').find('div.tabs__item').removeClass('tabs__item_active').eq($(this).index()).addClass('tabs__item_active');
    });

    // изменение элемента при наведении на другой элемент
    $('.pricing__item').hover(function() {
        // навели мышь на элемент
        $(this).children('.pricing__subdescr').css('height', '39px');
        $(this).css('transform', 'translateY(-34px)');
    }, function() {
        // убрали мышь с элемента
        $(this).children('.pricing__subdescr').css('height', '5px');
        $(this).css('transform', 'translateY(0px)');
    });
});