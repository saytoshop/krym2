$(function(f) {
    $('.catalogElement__header').click(function() {
        var c = $(this).closest('.catalogElement').find('.catalogElement__contentWrapper');

        $('.catalogMenu').html(c.html());
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


    })
});
