$(document).ready(function(){
    //set options:
    var speed = 500; //fade speed
    var autoswitch = true; // auto swich photo
    var autoswitch_speed = 4000;

    //add initial active class:
    $('.slide').first().addClass('active');
    $('.slide').hide(); //hides all slides
    $('.active').show(); //shows the first one(with active class)

    //next is pushed
    $('#next').on('click',function(){
        $('.active').removeClass('active').addClass('oldActive'); //removes the active from the first

        if($('.oldActive').is(':last-child')){ //if its the last slide - go back to the first
            $('.slide').first().addClass('active');
        }
        else{
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');

        $('.slide').fadeOut(speed); //fade out
        $('.active').fadeIn(speed); //fades the active in
    })

    //prev is pushed
    $('#prev').on('click',function(){
        $('.active').removeClass('active').addClass('oldActive'); //removes the active from the first

        if($('.oldActive').is(':first-child')){ //if its the last slide - go back to the first
            $('.slide').last().addClass('active');
        }
        else{
            $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');

        $('.slide').fadeOut(speed); //fade out
        $('.active').fadeIn(speed); //fades the active in
    })
});