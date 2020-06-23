$(document).ready(function(){

	$.ajax({
		type: "GET",
   	url: "json/projects.json",
   	dataType: "json",

   	success: function(responseData, status){
   	 	output = "";
   	 	$.each(responseData.projectItem, function(i, projectItem) {
            output += "<div class='card bg-dark'>";
            output += "<div class='card-body'>";
            output += "<h4 class='card-title'>" + projectItem.projectName + "</h4>";
            output += "<p class='card-text'>" + projectItem.projectDesc + "</p>";
            output += "<a href=" + projectItem.projectURL + "class='btn btn-light mr-0' role='button'>Project Link</a>"
            output += "</div> </div> <br>"
   	 	});
         
   	 	$('#projectsOutput').html(output);

 		}, error: function(msg) {
				// there was a problem
			alert("There was a problem: " + msg.status + " " + msg.statusText);
		}

	});

});
