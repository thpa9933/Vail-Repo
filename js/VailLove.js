
$('.insidecircle1Active').hide();

setTimeout(function(){
$('.circle3').toggleClass('active');
}, 3600);

setTimeout(function(){
$('.circle2').toggleClass('active');
}, 3900);

setTimeout(function(){
$('.circle4').toggleClass('active');
}, 4200);

setTimeout(function(){
$('.circle1').toggleClass('active');
}, 4500);

setTimeout(function(){
  console.log('it words');
$('.content5').toggleClass('go');
}, 700);

setTimeout(function(){
$('.Links').toggleClass('LinksGo');
}, 5000);

///////////

setTimeout(function(){
$('.goldDot3').toggleClass('blink');
}, 5200);

setTimeout(function(){
$('.goldDot2').toggleClass('blink');
}, 5400);

setTimeout(function(){
$('.goldDot4').toggleClass('blink');
}, 5600);

setTimeout(function(){
$('.goldDot1').toggleClass('blink');
}, 5800);

setTimeout(function(){
$('.goldDot3').css('opacity', '1');
}, 6300);

var i = 0;
function activate(){
  i++;
  console.log(i);
  if((i % 2) == 0){
    $('.insidebox').css('transition','3s');
    $('.insidebox2').css('transition','3s');
    $('.insidebox').css('transform','rotate(405deg)');
    $('.insidebox2').css('transform','rotate(-405deg)');
  }
  else{
    $('.insidebox').css('transition','3s');
    $('.insidebox2').css('transition','3s');
    $('.insidebox').css('transform','rotate(-405deg)');
    $('.insidebox2').css('transform','rotate(405deg)');
  }
}

var current = 0;
function change(x){
  switch(x){
    case 1:
      if(current == 1){
        current = 0;
        $('.content1').css("opacity","0");
        $('.content5').css("opacity","1");
        $('.circle1').css("background-color","black");
        $('.goldDot3').css("opacity","0");
        // $('.insidecircle2').css("transform", "rotate(-315deg)");
        // $('.insidecircle2').css("border-top", "1px solid black");
        // $('.insidecircle2').css("border-left", "1px solid black");
        // $('.insidecircle2').css("border-bottom", "1px solid black");
        // $('.insidecircle2').css("border-right", "1px solid black");

      }
      else{
        current = 1;
        $('.content1').css("opacity","1");
        $('.content2').css("opacity","0");
        $('.content3').css("opacity","0");
        $('.content4').css("opacity","0");
        $('.content5').css("opacity","0");
        $('.circle1').css("background-color","slategrey");
        $('.circle2').css("background-color","black");
        $('.circle3').css("background-color","black");
        $('.circle4').css("background-color","black");
        $('.goldDot3').css("opacity","1");
        $('.goldDot1').css("opacity","0");
        $('.goldDot2').css("opacity","0");
        $('.goldDot4').css("opacity","0");
        // $('.insidecircle2').css("transform", "rotate(314deg)");
        // $('.insidecircle2').css("border-top", "1px solid white");
        // $('.insidecircle2').css("border-left", "1px solid white");
        // $('.insidecircle2').css("border-bottom", "1px solid white");
        // $('.insidecircle2').css("border-right", "1px solid white");
      }
      break;

    case 2:
      if(current == 2){
        current = 0;
        $('.content2').css("opacity","0");
        $('.content5').css("opacity","1");
        $('.circle2').css("background-color","black");
        $('.goldDot4').css("opacity","0");
        // $('.insidecircle2').css("transform", "rotate(-135deg)");
        // $('.insidecircle2').css("border-top", "1px solid black");
        // $('.insidecircle2').css("border-left", "1px solid black");
      }
      else{
        current = 2;
        $('.content1').css("opacity","0");
        $('.content2').css("opacity","1");
        $('.content3').css("opacity","0");
        $('.content4').css("opacity","0");
        $('.content5').css("opacity","0");
        $('.circle2').css("background-color","slategrey");
        $('.circle1').css("background-color","black");
        $('.circle3').css("background-color","black");
        $('.circle4').css("background-color","black");
        $('.goldDot4').css("opacity","1");
        $('.goldDot2').css("opacity","0");
        $('.goldDot1').css("opacity","0");
        $('.goldDot3').css("opacity","0");
        // $('.insidecircle2').css("transform", "rotate(135deg)");
        // $('.insidecircle2').css("border-top", "1px solid white");
        // $('.insidecircle2').css("border-left", "1px solid white");
      }
      break;

    case 3:
      if(current == 3){
        current = 0;
        $('.content3').css("opacity","0");
        $('.content5').css("opacity","1");
        $('.circle3').css("background-color","black");
        $('.goldDot2').css("opacity","0");
        // $('.insidecircle2').css("transform", "rotate(-45deg)");
        // $('.insidecircle2').css("border-top", "1px solid black");
      }
      else{
        current = 3;
        $('.content1').css("opacity","0");
        $('.content2').css("opacity","0");
        $('.content3').css("opacity","1");
        $('.content4').css("opacity","0");
        $('.content5').css("opacity","0");
        $('.circle3').css("background-color","slategrey");
        $('.circle1').css("background-color","black");
        $('.circle2').css("background-color","black");
        $('.circle4').css("background-color","black");
        $('.goldDot2').css("opacity","1");
        $('.goldDot1').css("opacity","0");
        $('.goldDot3').css("opacity","0");
        $('.goldDot4').css("opacity","0");
        // $('.insidecircle2').css("transform", "rotate(45deg)");
        // $('.insidecircle2').css("border-top", "1px solid white");
      }
      break;

    case 4:
      if(current == 4){
        current = 0;
        $('.content4').css("opacity","0");
        $('.content5').css("opacity","1");
        $('.circle4').css("background-color","black");
        $('.goldDot1').css("opacity","0");
        // $('.insidecircle2').css("transform", "rotate(-225deg)");
        // $('.insidecircle2').css("border-top", "1px solid black");
        // $('.insidecircle2').css("border-left", "1px solid black");
        // $('.insidecircle2').css("border-bottom", "1px solid black");
      }
      else{
        current = 4;
        $('.content1').css("opacity","0");
        $('.content2').css("opacity","0");
        $('.content3').css("opacity","0");
        $('.content4').css("opacity","1");
        $('.content5').css("opacity","0");
        $('.circle4').css("background-color","slategrey");
        $('.circle1').css("background-color","black");
        $('.circle2').css("background-color","black");
        $('.circle3').css("background-color","black");
        $('.goldDot1').css("opacity","1");
        $('.goldDot2').css("opacity","0");
        $('.goldDot3').css("opacity","0");
        $('.goldDot4').css("opacity","0");
        // $('.insidecircle2').css("transform", "rotate(225deg)");
        // $('.insidecircle2').css("border-top", "1px solid white");
        // $('.insidecircle2').css("border-left", "1px solid white");
        // $('.insidecircle2').css("border-bottom", "1px solid white");
      }
      break;
  }
}

function spin(){
  $('.insidecircle2').css("animation-name", "spin");
  setTimeout(function(){
    $('.insidecircle2').css("animation-name", "none");
  }, 2000);
}
