$(document).ready(function () {
	// console.log($(window).width());

$(window).resize(function (){
	console.log($(window).width());
	if ($(window).width() > 740) {
		$('#small-nav').hide();
	}
	
})

	$('#burger').click(function (){
		$('#small-nav').slideToggle();
	})
})
