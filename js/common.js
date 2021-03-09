$(function(){
    $('.container').css('min-height', $(window).height() - $('.topWrap').outerHeight() - $('.footer').outerHeight());

    $('.hamburger').click(function(){
        console.log('click')
        $(this).toggleClass('on');
        $('.sitemap').slideToggle(200);
    })

    $('.tabs').find('a').click(function(e){
        e.preventDefault();
        $(this).parent('li').siblings().removeClass('on');
        $(this).parent('li').addClass('on');
        $('.tab-contents').removeClass('on');
        var tabID = $(this).attr('href');
        console.log(tabID);
        $(tabID).addClass('on');
    });
})
