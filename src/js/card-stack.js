const $ = require('jquery');

const length = $('.card-stacks .card-list .card').length;
var lastCardIndex = length - 1;

$('.next').click(function (e) {
    $('.card-stacks .card-list .card').last().removeClass('transform-prev').addClass('transform-card')
                                        .prev().addClass('active');

    
    setTimeout(function() {
        if ( $('.card').hasClass('active') ) {
            var $slicedCard = $('.card-stacks .card-list .card').slice(lastCardIndex).removeClass('transform-card active');
            $('.card-stacks .card-list').prepend($slicedCard);
        }
    }, 200);
});

$('.prev').click(function (e) {
    $('.card-stacks .card-list .card').removeClass('transform-prev')
                                        .last().addClass('active')
                                        .prevAll().removeClass('active');

    setTimeout(function() {
        if ( $('.card').hasClass('active') ) {
            var $slicedCard = $('.card-stacks .card-list .card').slice(0, 1).addClass('transform-prev');
            console.log($slicedCard);
            $('.card-stacks .card-list').append($slicedCard);
        }
    }, 200);
});