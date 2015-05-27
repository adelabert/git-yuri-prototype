$(document).ready(function(){
	
	var os4 = $("#sec04").offset();

	console.log(os4);
	$(window).scroll(function(e) {
		// if (e == os4.top) {
		// 	console.log("sdsd");
		// }
		console.log(e);
	});
});