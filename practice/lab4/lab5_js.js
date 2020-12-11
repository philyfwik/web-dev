setInterval(function(){
			$.ajax({url:"http://worldtimeapi.org/api/ip", success: function(result){
				var ajElem = $("#ajaxElement");
				ajElem.html(result['datetime']);
			}});
		}, 10000);

window.onload = function(){
myVar = $('#refresh');
myVar.click( function(){
	console.log("click");
	$.ajax({url:"http://worldtimeapi.org/api/ip", success: function(result){
		var ajElem = $("#ajaxElement");
		ajElem.html(result['datetime']);
	}});
});
}