$(function(f) {
    var element = f('#up');
    f(window).scroll(function() {
        element['fade' + (f(this).scrollTop() > 900 ? 'In' : 'Out')](500);
    });
    $('.thumb').each(function(){
      $(this).css('width',$(this).height());
    })
});
$(window).resize(function(){
  $('.thumb').each(function(){
    $(this).css('width',$(this).height());
  });
});
$(document).ready(function() {

    var menu_selector = ".topmenu_elements"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.

    function onScroll() {
        var scroll_top = $(document).scrollTop() + 100;
        $(menu_selector + " a").each(function() {
            var hash = $(this).attr("href");
            if (hash == "#") return;
            if (hash.substring(0, 3) == "tel") return;
            if (hash.substring(0, 6) == "mailto") return;
            var target = $(hash);
            if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
                $(menu_selector + " a.active").removeClass("active");
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
            if (scroll_top > 100) {
              $('header').removeClass("onBack");
            } else {
              $('header').addClass("onBack");
            }
        });

    }


    $(document).on("scroll", onScroll);

    $(menu_selector + " .menu_element a").click(function(e) {

        e.preventDefault();

        $(document).off("scroll");
        $(menu_selector + " a.active").removeClass("active");

        var hash = $(this).attr("href");
        var target = $(hash);

        $("html, body").animate({
            scrollTop: target.offset().top - 200
        }, 500, function() {
     //       window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });
        $(this).addClass("active");


    });

    $(".topmenu_elements").click(function(e) {
        if (e.target.className != "topmenu_elements") return;
        $(".topmenu_elements").addClass("open");
    });
    $(".menu_closer").click(function(e) {
        $(".topmenu_elements").removeClass("open");
    });
    $(".menu_element a").click(function(e) {
        $(".topmenu_elements").removeClass("open");
    });
    $(".layer").click(function(e) {
        $(this).addClass("hidden")
        .closest(".element")
        .find(".thumb")
        .removeClass("active");
    });
    $(".thumb").click(function(e) {
      $(this).siblings().removeClass("active");
      $(this).addClass("active");
        $(this).closest(".element")
          .find(".layer").removeClass("hidden")
          .find("img").attr("src",$(this).data("full"));
    });

});
