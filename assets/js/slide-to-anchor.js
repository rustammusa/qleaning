//==============================//
//   	#REGISTRATION USER
//=============================//
$('a[href^="#anchor-toStartPage"]').click(function(){
//Сохраняем значение атрибута href в переменной:
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);
return false;
});