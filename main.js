$(document).ready(function () {
    let tabsitem =$('.tabs-item');
    tabsitem.on('click', function(event) {
        event.preventDefault();
        let activecontent = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(activecontent).toggleClass('visible');
        $('.tabs-item-activ').toggleClass('tabs-item-activ');
        $(this).toggleClass('tabs-item-activ');
    });
});