$("p").each(function(){
  var obj = $(this);
  var html = obj.html().replace(/(\S+\s*)/g, "<span>$1</span>");
  obj.html(html);
});



function speedReader(index){

	var spans = $("p span");

	$("p span").css("color", "#ddd");
	$("p a span").css("color", "#ddd");

	if(index < spans.length){
		spans[index].style.color = paraColor;

	 	index++;

	 	setTimeout(function(){
			speedReader(index);
		}, wordtime);
	}
}


var paraColor = $("p").css("color");


var wpm = 500;
var wordtime = 60000 / wpm;

speedReader(0);