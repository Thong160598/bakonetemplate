$('.portfolio button').click(function (event) {
    if ($(this).hasClass('active')) {
        return;
    }
    $('button.active').removeClass('active');
    $(this).addClass('active');
    const dataValue = $(this).attr('data');
    // all div: 8 div
    const allDivs = $(`.portfolio .row > div`);
    if (dataValue == 'all') {
        allDivs.show();
        return;
    }
    const shownDivs = $(`.portfolio .row > div[data=${dataValue}]`);
    const hiddenDivs = allDivs.not(shownDivs);
    shownDivs.show(); //hien thi ra
    hiddenDivs.hide(); // ẩn đi

});

$(window).scroll(function (event) {
    // console.log($(window).scrollTop());
    // console.log($('#portfolio').offset().top); 
    if ($(window).scrollTop() >= $('#portfolio').offset().top) {
        $('.navbar').addClass('fixed-top');
        $('.header').addClass('.dummy-padding-top');
    } 
    
    else {
        $('.navbar').removeClass('fixed-top');
        $('.header').addClass('.dummy-padding-top');
    }

});