$(document).ready(function(){

	$("form").on("submit", function(event){
		event.preventDefault();

		var activity = $("input#inputActivity").val();
		var date =$("input#inputDate").val();
		var time = $("input#inputTime").val();
		var notes= $("textarea#AddNotes").val();
	$("ul.activities").append(" <div ><li> Activity:" +activity+ "* * * *Date:"+ date +"* * * *Time:"+time+"* * * *Notes:"+notes+" <button id=buttondone class=btn btn-default type=button>Done</button> <button id=buttondelete class=btn btn-default type=button>Delete</button> </li></div>");

			$("button#buttondelete").on("click", function(){
			$(this).closest("li").hide(); 
			})

			$("button#buttondone").on("click", function(){
				$(this).closest("li").addClass("text-muted");
				$(this).closest("#buttondone").hide();
			})
	})
})