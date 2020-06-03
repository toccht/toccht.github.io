$(document).ready(function(){

	$.ajax({
		type: "GET",
   	 	url: "projects.json",
   	 	dataType: "json",
   	 	success: function(responseData, status){
   	 		var output = "<ul>";
   	 		$.each(responseData.menuItem, function(i, item) {
   	 			output += '<p>' + item.menuName + '</p>';
   	 			output += '<li><a href="' + item.menuURL + '">' + item.menuDesc + '</a></li>';
   	 		});
   	 		output += "</ul>";
   	 		$('#projectsOutput').html(output);
 		}, error: function(msg) {
				// there was a problem
			alert("There was a problem: " + msg.status + " " + msg.statusText);
		}
	});
});
