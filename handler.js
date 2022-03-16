var isDay = false;
var isWindy = false;

function DayToggle()
{
    if (!isDay)
    {
        document.getElementById("doomsImage").src = "css/images/moon.jpg";
        isDay = true;
    }
    else{
        document.getElementById("doomsImage").src = "css/images/sun.jpg";
        isDay = false;
    }
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
}