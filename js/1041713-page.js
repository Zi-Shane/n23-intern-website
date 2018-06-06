$('#list-title a').on('click', function(event) {
    // $(this).parent().find('a').removeClass('active-item');
    $('#list-title a').removeClass('active-item');
    $(this).addClass('active-item');

});

$(window).on('scroll', function() {
    $('.target').each(function() {
        if($(window).scrollTop() >= $(this).offset().top) {
            let id = $(this).attr('id');
            let id_p = $(this).parent('div').attr('id');
            $('#list-title a').removeClass('active-item');
            $('#list-title a[href="#'+ id +'"]').addClass('active-item');
            $('#list-title a[href="#'+ id_p +'"]').addClass('active-item');
        }
    });

    // console.log($(window).scrollTop() + ': ' + $('#about-work').offset().top);
    // $('#sect').height() + $(window).height() * 0.06

    if ($(window).scrollTop() >= $('#about-work').offset().top) {
        $('#list-title').removeClass('fixed-sidebar-top');
        $('#list-title').addClass('fixed-sidebar');
    } else {
        $('#list-title').removeClass('fixed-sidebar');
        $('#list-title').addClass('fixed-sidebar-top');
    }

    // let content = $('.blog-content').offset().top + $('.blog-content').height();
    let content = $('#hri').offset().top;
    let categ = $('#list-title').offset().top + $('#list-title').height();
    if (content <= categ) {
        $('#list-title').removeClass('fixed-sidebar');
        $('#list-title').addClass('fixed-sidebar-top');

        // $('#list-title').css('position', 'relative');
        // $('#list-title').offset({left:500});
    } 



});



