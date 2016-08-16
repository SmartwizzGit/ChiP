$(window).load(function(){
	$("span").click(function() {
		$class = $(this).attr('class');
		$ht = parseInt($('header').css('height').match(/\d+/));
		$('html, body').animate({
			scrollTop: -$ht + $("DIV#"+$class).offset().top
		}, 200);
		//alert($ht);
	});

	$("input[type='submit']").click(function(){
		$('#formdata').html("");
		$('#formdata').append("Sending Data.<BR/>");
		$serialize = $('form').serialize();
		$.post( "submit.php", $serialize)
		.done(function( data ) {
		$('#formdata').append(data);
		});
		return false;
	});
	
	$('#backtotop').click(function(){
		$('html, body').animate({scrollTop:0},300);
		//alert();
	});

});

$(window).scroll(function(){
	if($(window).scrollTop()!=0){
		$('header').stop().animate({"height":"75px"},100);
		$('header nav span').stop().animate({"line-height":"75px", "font-size":"19px"},100);
		$('header div').stop().animate({"line-height":"75px", "font-size":"40px", "line-height":"80px"},100);
		$('#header1').stop().animate({height: "75px"},100);
		$('#backtotop').fadeIn(100);
	}
	else{
		$('header').stop().animate({"height":"150px"},100);
		$('header nav span').stop().animate({"line-height":"200px", "font-size":"21px"},100);
		$('header div').stop().animate({"line-height":"150px", "font-size":"50px", "line-height":"190px"},100);
		$('#header1').stop().animate({height: "150px"},100);
		$('#backtotop').fadeOut(100);
	}
});
