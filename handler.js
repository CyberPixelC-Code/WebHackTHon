var isDay = false;
var isWindy = false;

function DayToggle()
{
    if (!isDay)
    {
    	//day time
    	document.getElementById("doomsImage").src = "css/images/moon.jpg";
        isDay = true;
        
    }
    else{
    	//day time
        document.getElementById("doomsImage").src = "css/images/sun.jpg";
        isDay = false;
    }
    StartPointGraph();
}

function WindToggle()
{
    if (!isWindy)
    {
        document.getElementById("doomsImage").src = "css/images/wind-cartoon.jpg";
        isWindy = true;
    }
    else{
        document.getElementById("doomsImage").src = "css/wind-cartoon.png";
        isWindy = false;
    }
    StartPointGraph();
}