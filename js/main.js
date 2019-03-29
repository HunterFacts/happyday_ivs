var slova = [
  'Я ща не могу, меня тут чет намотало',
  'Ну это, эээ, я считаю, что важно отметить следующий факт… Во-первых, я предлагаю всем вместе задуматься',
  'Я еще 10 лет назад говорил!',
  'Через шину надо было запускать, через шину…',
  'Чет в этом ГИС не вижу слоя с точками приземления',
  'Игорь, а мы точно хотим без запасок прыгать?'
];
//Тестовый таймер
setInterval(function(){
$('#timer').html(Number($('#timer').text()) + 1);
}, 1000);

// 6 секунда самолета
setTimeout(function(){
$('.human-air-flat').show();
$('.holm').css('width', window.innerWidth);
$('.holm').css('height', window.innerHeight);
}, 6000)

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}
function giveString(num){
  let slovo = slova[num - 1];
  return slovo;
}
// 10 секунда самолета
setTimeout(function(){
  $('.airplane').hide();
  $('.human-air-flat').hide();
}, 10500);

// 11 секунда самолета
setTimeout(function(){
  $('.cloud').addClass('clouds');
}, 11500);

// 13 секунда самолета
setTimeout(function(){
  $('.cloud').hide();
  $('#white-line .line').show();
  $('#parashutist1 .parashutist, #knopka1').show();
}, 12500);

function removeHuman(){
  $('#human-p1').hide();
  $('#human-p2').hide();
  $('#human-p3').hide();
  $('#knopka1').hide();
}

//После нажатия кнопки 1
$('#knopka1').click(function(){
  $('#human-p1').css('-webkit-animation','human-p1-up 4s');
  $('#human-p2').css('-webkit-animation','human-p2-up 4s');
  $('#human-p3').css('-webkit-animation','human-p3-up 4s');
  $('#knopka1').css('-webkit-animation','knopka1-up 4s');
  $('#human-p4').show();
  $('#human-p5').show();
  $('#human-p6').show();
  $('#knopka2').show();
  setTimeout(removeHuman, 3000);
});

function removeHuman2(){
  $('#human-p4').hide();
  $('#human-p5').hide();
  $('#human-p6').hide();
  $('#knopka2').hide();
  $('.holm').show();
}
//После нажатия кнопки 2
$('#knopka2').click(function(){
  $('#human-p4').css('-webkit-animation','human-p4-up 4s');
  $('#human-p5').css('-webkit-animation','human-p5-up 4s');
  $('#human-p6').css('-webkit-animation','human-p6-up 4s');
  $('#knopka2').css('-webkit-animation','knopka1-up 4s');
  setTimeout(removeHuman2, 3000);
});

function reset(i, num){
  i.css("background-image","url('./img/parashutistOtrk"+num+".png')");
  i.html(giveString(num));
}

$('.parashutist').click(function(){
  /*alert($(this).attr('id'));*/
  var num = parseInt($(this).attr("id").replace(/\D+/g,""));
  $(this).css("background-image","url('./img/openparashut"+num+".gif')");
  $(this).css("height","512px");

  setTimeout(reset, 1200,$(this), num);
});
