$(document).ready(function(){

    

   

    //set options:
    var speed = 1000; //fade speed
    var autoswitch = false; // auto swich photo
    var autoswitch_speed = 4000;

    //add initial active class:
    $('.slide').first().addClass('active');
    $('.slide').hide(); //hides all slides
    $('.active').show(); //shows the first one(with active class)


    //sets height for slide-copy:
    var h = $('.active').find('img').height(); //gets img height
    h=h-45;
    
    $('.slide-copy').css("top",h); //sets the writings top
    h = (h+50)/2;
    $('#next').css('top',h);
    $('#prev').css('top',h);

    //sets width for slide-copy:
    var w = $('.active').find('img').width(); //gets img width
    $('.slide-copy').css("width",w); //sets the writings width

    //sets height of slider according to img
    h = $('.active').find('img').height();
    h +=3;
    $('#slider').css('height',h);




    //slides next function:
function nextSlide(){

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
}

//slides backwards:
function backSlide(){
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
}

    


    //next is pushed
    $('#next').on('click',nextSlide);

    //prev is pushed
    $('#prev').on('click',backSlide);

    //autoslider:
    if(autoswitch == true){
        setInterval(nextSlide,autoswitch_speed);
    }
});


function resize(){
    //sets height for slide-copy:
    var h = $('.active').find('img').height(); //gets img height
    h=h-45;
    $('.slide-copy').css("top",h); //sets the writings top
    h = (h+50)/2;
    $('#next').css('top',h);
    $('#prev').css('top',h);

    //sets width for slide-copy:
    var w = $('.active').find('img').width(); //gets img width
    $('.slide-copy').css("width",w); //sets the writings width

    //sets height of slider according to img
    h = $('.active').find('img').height();
    h +=3;
    $('#slider').css('height',h);



    
}

