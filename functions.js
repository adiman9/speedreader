var wpm = 250;
var wordtime = 60000 / wpm;

var wordindex = 0;

var breakval = false; 

var displayWords = function(words, index){
	
	if(breakval == true){
		return;
	}

	$('.displayWordBox').html("").append(words[index]);

	wordindex = index + 2;

	if(wordindex > words.length){
		breakval = true;
		$(".stop").addClass("start").removeClass("stop");
	}

	if(words[index].match(/\.|\?|\!|\;|\:/)){
		waittime = wordtime * 2;
	}else if(words[index].match(/\,/)){
		waittime = wordtime * 1.5;
	}else{
		waittime = wordtime;
	}

	setTimeout(function(){
		displayWords(words, wordindex);
	}, waittime);
}

var splitPara = function(){
	var text = document.forms["startform"]["texttoread"].value;

	var split = text.split(/(\S+\s+)/);

	$('.displayWordBox').html("").append(split[1]);

	wordindex = 3;

	return split;
}

var speed = function(){
	wpm = document.forms["wpmform"]["wpm"].value;
	wordtime = 60000 / wpm;

	speedTitleString = "You are reading at " + wpm + " Words Per Minute."

	$(".speedtitle").html(speedTitleString);
}


$(document).ready(function(){

	$(".button").click(function(){

		if($(this).hasClass("start")){
			breakval = false;

			$(this).addClass("stop").removeClass("start");
			displayWords(splitParaArray, wordindex);
		}else{
			breakval = true;
			$(this).addClass("start").removeClass("stop");
		}

	});

});

/*
	- Testing for line breaks.
	- Add a slight pause after full stops
	- remove filler words
*/