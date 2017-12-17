$(function(f) {

    $(document).on('click', '.menu__element', function(e) {
        e.preventDefault();
        var c = $('.ajaxData').html();

        $('.catalogText').html(c).removeClass('hidden');
        var scroll_el = $('.catalogText');
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top - 50
        }, 500);
    });


    $(document).on('click', '.elementHover__button', function(e) {
        e.preventDefault();
        var c = $('.ajaxDataPortfolio').html();

        $('.portfolioMore').html(c).removeClass('hidden');
        $('.portfolioMoreContent__slider').fotorama({
            loop: true,
            nav:false,
            loop:true

        });
        var scroll_el = $('.portfolioMore');
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 500);
    });
    $('.catalogElement__header').click(function() {
        var c = $(this).closest('.catalogElement').find('.catalogElement__contentWrapper');

        $('.catalogMenu').html(c.html());
        var scroll_el = $('.catalogMenu');
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top - 50
        }, 500);
    });
    $('.input__phone').keyup(function() {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });
    $('.pd-chkbx').change(function() {
        $(this).closest(".pd").next(".input").find("a").toggleClass('disabled');
    });
    $('input').focus(function() {
        $(this).removeClass('error');
    });
    $('.send').click(function(e) {
        e.preventDefault();
        if ($(this).hasClass("disabled")) return false;
        form = $(this).closest('form');
        phone = form.find('[name="tel"]');
        fname = form.find('[name="name"]');
        femail = form.find('[name="email"]');
        comment = form.find('[name="comment"]');
        if (fname.length > 0) {
            if (fname.val().length < 3) {
                fname.addClass('error');
                return false;
            }
        }
        if (phone.length > 0) {
            if (phone.val().length < 5) {
                phone.addClass('error');
                return false;
            }
        }
        if (femail.length > 0) {
            if (femail.val().length < 5) {
                femail.addClass('error');
                return false;
            }
        }
        if (comment.length > 0) {
            if (comment.val().length < 5) {
                comment.addClass('error');
                return false;
            }
        }
        var datastring = form.serialize();
        $.ajax({
            type: "POST",
            url: "send.php",
            data: datastring,
            success: function(data) {
                form.closest('.order_wrap').css("visibility", "hidden");
                form.closest('.order_wrap').next('.order_result').show();
            }
        });


    });

    $('.clients__slider').owlCarousel({
        loop: true,
        margin: 50,
        items:5,
        nav:true,
        navText:''
    });
    $('.slider').owlCarousel({
        loop: true,
        items:1,
        dots:true,
        navText:''
    });


});
