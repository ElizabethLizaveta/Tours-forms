$(document).ready (function () {
  

    $('div.main').on('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('contact')|| $('a[href="#sheldure"]') || $('a[href="#tour"]')) {
            $('.overlay').fadeToggle('slow');
            $('.modal').slideDown(700);
        }
    });

    $('.modal button').on('click', function() {
        $('.overlay').fadeToggle('slow');
        $('.modal').slideUp(700);
    });

});

 