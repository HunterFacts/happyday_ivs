//Тестовый таймер
setInterval(function(){
$('#timer').html(Number($('#timer').text()) + 1);
}, 1000);

// 6 секунда самолета
setTimeout(function(){
$('.human-air-flat').show();
}, 6000)

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
  $('#parashutist1 .parashutist').show();
}, 12500);

function reset(i){
  i.css("background-image","url('./img/parashutistOtrk1.png')");;
}

$('.parashutist').click(function(){
  /*alert($(this).attr('id'));*/
  $(this).css("background-image","url('./img/openparashut1.gif')");
  $(this).css("height","512px");
  var num = parseInt($(this).attr("id").replace(/\D+/g,""));
  setTimeout(reset, 1200,$(this));
});
