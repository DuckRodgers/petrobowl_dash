//-------------------------------------------
// TIMER FUNCTIONS RELATED
//-------------------------------------------

var minutes = 8;
var seconds = 0;
var tick = false;
var timeout;

function PlayBox() {
	
	if (minutes >= 0 && seconds >= 0)
	{
		tick = true;
		if (tick == true)
		{
			seconds -= 1;
			if (seconds < 0 && minutes != 0)
			{
				minutes -= 1;
				seconds = 59;
			}
		}
		document.getElementById("play_butt").innerHTML = "Playing";
		document.getElementById("timer_slot").innerHTML = minutes + ":" + seconds;
	}
	tick = false;
}
function time_trigger() {
	timeout = setInterval("PlayBox()", 10);
}

function StopBox() {
	document.getElementById("play_butt").innerHTML = "Play";
	clearInterval(timeout);
}

function ClearBox(){
	document.getElementById("play_butt").innerHTML = "Play";
	minutes = 8;
	seconds = 0;
	clearInterval(timeout);
	document.getElementById("timer_slot").innerHTML = "0" + minutes + ":" + "0" + seconds;
}

//-------------------------------------------
// SCORING FUNCTIONS RELATED
//-------------------------------------------
var t1_points = 0;
var t2_points = 0;

function t1_score_add() {
	t1_points = t1_points + 10;
	document.getElementById("t1_score").innerHTML = t1_points;
}

function t1_score_sub() {
	t1_points = t1_points - 5;
	document.getElementById("t1_score").innerHTML = t1_points;
}

function t2_score_add() {
	t2_points = t2_points + 10;
	document.getElementById("t2_score").innerHTML = t2_points;
}

function t2_score_sub() {
	t2_points = t2_points - 5;
	document.getElementById("t2_score").innerHTML = t2_points;
}

