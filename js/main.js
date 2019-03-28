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
