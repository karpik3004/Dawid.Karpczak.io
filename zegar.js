/*czas*/

var clockID = null;
var timerRunning = false;

function showtime() 
{		
		var now = new Date();
		var hours = now.getHours();
		var minutes = now.getMinutes();
		var seconds = now.getSeconds();
		var timeValue = "" + ((hours >12) ? hours -12 :hours)
		if (timeValue == "0") timeValue = 12;
		timeValue += ((minutes < 10) ? ":0" : ":") + minutes;
		timeValue += ((seconds < 10) ? ":0" : ":") + seconds;
		timeValue += (hours >= 12) ? " PM" : " AM";
		var clock = document.getElementById("clock");
		clock.value = timeValue;
		clockID = setTimeout("showtime()",1000);
}


/*timer*/
var second = 0;
var mili = 0;
var timerID = null;

function TimerTick() 
{
    if (mili >= 9) 
    {
        mili = 0; second += 1;
    }
    else 
    {
        mili += 1;
    }
    var timerEle = document.getElementById("myTimer");
    timerEle.value = second + '.' + mili;
}

function starttimer()
{
    timerID = setInterval(TimerTick, 100, null);
}

function stoptimer()
{
    if(timerID!=null)
    {
    clearInterval(timerID);
    }
}