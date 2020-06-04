$(document).ready(function(){

	$.ajax({
		type: "GET",
   	url: "json/projects.json",
   	dataType: "json",

   	success: function(responseData, status){
   	 	output = "";
   	 	$.each(responseData.projectItem, function(i, projectItem) {
            output += "<h3>" + projectItem.projectName + "</h3>";
            output += "<ul>";
   	 		output += "<li>" + projectItem.projectDesc + "</li>";
            output += "<li><b> Skills used: </b>" + projectItem.projectSkills + "</li>";
            output += "</ul>";
   	 	});
         
   	 	$('#projectsOutput').html(output);

 		}, error: function(msg) {
				// there was a problem
			alert("There was a problem: " + msg.status + " " + msg.statusText);
		}

	});

});
