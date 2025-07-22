/***************************************************************************
 *
 * SCRIPT JS
 *
 ***************************************************************************/
$(document).ready(function () {
    // HAMBEGER BUTTON MENU SP CLICK
    $('.hamburger').click(function () {
        if ($(this).hasClass("open")) {
            $(this).removeClass('open');
            $(this).addClass('close');
        } else {
            $(this).removeClass('close');
            $(this).addClass('open');
        }

        if ($(window).width() <= 768) {
            $('#header .mainMenu').stop().slideToggle();
            $('body').toggleClass('fixed');
        } else {

        }
    });

    // SHOW TAB
    $("body").on("click", ".areaTab .listTab li a", function () {
        let group_name = $(this).attr("href");
        $(this).closest("ul").find("li").removeClass("active");
        $(this).parent().addClass("active");
        $(this).closest(".areaTab").find(".tabBox").removeClass("showTab");
        if (
            group_name != "" &&
            $(this).closest(".areaTab").find(group_name).length > 0
        ) {
            $(this).closest(".areaTab").find(group_name).addClass("showTab");
        }
        return false;
    });

    if ($(window).width() > 768) {
        function fixHeightQuestion(entryNumber = null) {
            var maxHeight = 0;
            var listArr = [];
            const element = $('.titleBox');
            element.attr('style', '');
            element.each(function (index, val) {
                listArr.push($(this));
                if ($(val).outerHeight() > maxHeight) {
                    maxHeight = $(val).outerHeight();
                }
                if (((index + 1) % entryNumber) === 0 || (index + 1) == element.length) {
                    for (i = 0; i < listArr.length; i++) {
                        $(listArr[i]).height(maxHeight);
                    }
                    listArr = [];
                    maxHeight = 0;
                }
            });
        }
    }


    $(window).resize(function (event) {
        fixHeightQuestion();
    });

    $(window).on('load', function (event) {
        fixHeightQuestion();
    });
});
