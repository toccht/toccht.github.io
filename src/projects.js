$(document).ready(function(){

	$.ajax({
		type: "GET",
   	url: "json/projects.json",
   	dataType: "json",

   	success: function(responseData, status){
   	 	output = "<ul>";
   	 	$.each(responseData.menuItem, function(i, menuItem) {
   	 		output += '<li>' + menuItem.menuName + '</li>';
   	 		//output += '<li>' + menuItem.menuDesc + '</li>';
   	 	});

   	 	output += "</ul>";
   	 	$('#projectsOutput').html(output);

 		}, error: function(msg) {
				// there was a problem
			alert("There was a problem: " + msg.status + " " + msg.statusText);
		}

	});

});
