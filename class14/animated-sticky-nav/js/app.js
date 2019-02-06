$(document).ready(function () {
    $(window).scroll(function (){
        let scrolltop = $(window).scrollTop();
            console.log(scrolltop);
            if (scrolltop > 75) {
                $('header').addClass('small-header')
            }
            else {
                $('header').removeClass('small-header')
            }
        })

    
    })

