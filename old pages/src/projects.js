$(document).ready(function(){

	$.ajax({
		type: "GET",
   	url: "json/projects.json",
   	dataType: "json",

   	success: function(responseData, status){
   	 	output = "";
   	 	$.each(responseData.projectItem, function(i, projectItem) {
            output += "<div class='card bg-light'>";
            output += "<div class='card-body'>";
            output += "<h4 class='card-title'>" + projectItem.projectName + "</h4>";
            output += "<p class='card-text'>" + projectItem.projectDesc + "</p>";
            output += "<a href='" + projectItem.projectURL + "'class='btn btn-dark mr-0' role='button'>" + projectItem.projectBtnName + "</a>"
            output += "</div> </div> <br>"
   	 	});
         
   	 	$('#projectsOutput').html(output);

 		}, error: function(msg) {
				// there was a problem
			alert("There was a problem: " + msg.status + " " + msg.statusText);
		}

	});

});
