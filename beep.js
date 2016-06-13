var wordbox = document.getElementById("word");
var wordarray = [];

var audioCtx = new AudioContext();

//BOTTOM_RANGE = 175
//MAX_RANGE = 5000

function buttonClicked(){
	wordarray = [];
	console.log(wordbox.value);

	for(var i = 0;i<wordbox.value.length;i++){
		wordarray.push(  ( (wordbox.value.charCodeAt(i) - 97) * 185 ) + 175);
	}

	for(var p = 0;p<wordarray.length;p++){
		var oscillator = audioCtx.createOscillator();
		oscillator.connect(audioCtx.destination);
		console.log("changing oscillator to: " + wordarray[p]);
		oscillator.frequency.value = wordarray[p];
		oscillator.start(0);
		pausecomp(500);
		oscillator.stop(0);
	}

	/*(function theLoop (i) {
	  setTimeout(function () {
	    var oscillator = audioCtx.createOscillator();
	    oscillator.connect(audioCtx.destination);
		console.log("changing oscillator to: " + wordarray[Math.abs(i-wordarray.length)]);
		oscillator.frequency.value = wordarray[Math.abs(i-wordarray.length)];
		oscillator.start(0);
	    if (--i) {          // If i > 0, keep going
	      theLoop(i);       // Call the loop again, and pass it the current value of i
	    }
	    else{
	    oscillator.stop(0);

	    }
	  }, 1000);
	})(wordarray.length);
*/
}

function pausecomp(millis)
 {
  var date = new Date();
  var curDate = null;
  do { curDate = new Date(); }
  while(curDate-date < millis);
}