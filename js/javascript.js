$(document).ready(function() {
    var ukryj_menu = true;
    $('.top_strony_anchor').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#top_strony_anchor').offset().top 
        }, 700);
        if(ukryj_menu == false) {
            $('#kon_menu').animate({ top: -434 }, 700);
            ukryj_menu = true;
        }
    });
    $('.kon_o_nas_anchor').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#kon_o_nas_anchor').offset().top 
        }, 700);
        if(ukryj_menu == false) {
            $('#kon_menu').animate({ top: -434 }, 700);
            ukryj_menu = true;
        }
    });
    $('.kon_zajecia_anchor').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#kon_zajecia_anchor').offset().top 
        }, 700);
        if(ukryj_menu == false) {
            $('#kon_menu').animate({ top: -434 }, 700);
            ukryj_menu = true;
        }
    });
    $('.kon_cennik_anchor').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#kon_cennik_anchor').offset().top 
        }, 700);
        if(ukryj_menu == false) {
            $('#kon_menu').animate({ top: -434 }, 700);
            ukryj_menu = true;
        }
    });
    $('.kon_kontakt_anchor').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#kon_kontakt_anchor').offset().top 
        }, 700);
        if(ukryj_menu == false) {
            $('#kon_menu').animate({ top: -434 }, 700);
            ukryj_menu = true;
        }
    });
    $('.pokaz_menu').on('click', function(){
        if(ukryj_menu == true) {
            $('#kon_menu').animate({ top: 0 }, 700);
            ukryj_menu = false;
        } else {
            $('#kon_menu').animate({ top: -434 }, 700);
            ukryj_menu = true;
        }
    });
    $(window).resize(function() {
        var szerokosc_okna = $(window).width();
        if(szerokosc_okna > 768) {
            $('#kon_menu').css('top',0);
            ukryj_menu = true;
        } else {
            $('#kon_menu').css('top', -434);
        }
    });
});