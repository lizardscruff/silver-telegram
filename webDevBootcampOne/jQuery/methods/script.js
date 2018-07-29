$('div').css("background", "purple");
$('.highlight').css('width','200px');
$('#third').css('border', '5px solid orange');


$('div').first().css('color', 'pink');
// alternatively(possible better version):
$('div:first-of-type').css('color', 'pink');
// this works too but it's not native so first-of-type is faster
$('div:first').css('color', 'pink');