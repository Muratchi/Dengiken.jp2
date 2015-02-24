$(function(){
	var fadeImg = $('.bgImg');
	var bgImg = new Array('images/image.jpg','images/image.jpg','images/image.jpg','images/image.jpg','images/image.jpg','images/image.jpg','images/image.jpg','images/image.jpg','images/image.jpg');
	for(var i = 0;i < 9;i++ ){
		fadeImg.eq(i).css('background-image','bgImg' + i+ 1 + '.jpg');
	}
	var secTopArr = new Array();
	$('div.secContent').each(function (i) {
        secTopArr[i] = $(this).offset().top;
    });
	    $(window).scroll(function () {
        for (var i = secTopArr.length-1; i>=0; i--) {
            if ($(window).scrollTop() > secTopArr[i] - 100) {
                chengeBG(i);
                break;
            }
        }
    });
    function chengeBG(secNum) {
    	console.log(1);
        if (secNum != current) {
            current = secNum;
            fadeImg.stop().fadeOut('fast');
            fadeImg.eq(secNum).stop().fadeOut('fast');
        }
    }
	var particleBG = $('.particleground');
	particleBG.particleground();

});