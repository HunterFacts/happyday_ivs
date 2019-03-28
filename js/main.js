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
};
}, 10500)
