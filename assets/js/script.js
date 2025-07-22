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
    
    $(function () {
      const hash = window.location.hash;
    
      // エリアが1つの場合（areaTabが1セット）の処理
      const $areaTab = $(".areaTab");
    
      if (hash && $(hash).length > 0 && $areaTab.find(hash).length > 0) {
        // 該当のタブ内容が存在するとき（正常パターン）
    
        $areaTab.find(".tabBox").removeClass("showTab");
        $areaTab.find(hash).addClass("showTab");
    
        $areaTab.find(".listTab li").removeClass("active");
        $areaTab.find('.listTab li a[href="' + hash + '"]').parent().addClass("active");
    
      } else {
        // ハッシュが無効なとき → 最初のタブを開く
    
        // 最初のタブリンクのhrefを取得
        const $firstTabLink = $areaTab.find(".listTab li a").first();
        const firstHref = $firstTabLink.attr("href");
    
        if (firstHref && $areaTab.find(firstHref).length > 0) {
          $areaTab.find(".tabBox").removeClass("showTab");
          $areaTab.find(firstHref).addClass("showTab");
    
          $areaTab.find(".listTab li").removeClass("active");
          $firstTabLink.parent().addClass("active");
        }
      }
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
    
   // ページ読み込み時にURLパラメータやハッシュを取得
   window.addEventListener('DOMContentLoaded', function() {
     // 方法A：クエリで渡した場合
     const params = new URLSearchParams(window.location.search);
     const section = params.get('section'); // ?section=access
     if (section) {
       const el = document.getElementById(section);
       if (el) el.classList.add('active');
     }
   
     // 方法B：ハッシュで渡した場合
     const hash = window.location.hash; // #faq
     if (hash) {
       const el = document.querySelector(hash);
       if (el) el.classList.add('active');
     }
   });
});
