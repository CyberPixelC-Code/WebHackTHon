var toggled = false;

function DayToggle()
{
    if (!toggled)
    {
        document.getElementById("doomsImage").src = "css/images/sun.jpg";
        toggled = true;
    }
    else{
        document.getElementById("doomsImage").src = "css/GameImage.png";
        toggled = false;
    }
}

function NightToggle()
{
    if (!toggled)
    {
        document.getElementById("doomsImage").src = "css/images/moon.jpg";
        toggled = true;
    }
    else{
        document.getElementById("doomsImage").src = "css/GameImage.png";
        toggled = false;
    }
}



function Change(type)
{
    if(type == "Day")
    {
        document.getElementById("doomsImage").src = "css/images/sun.jpg";
    }
    else if(type == "Night")
    {
        document.getElementById("doomsImage").src = "css/images/moon.jpg";
    }
    else if(type == "Wind")
    {
        document.getElementById("doomsImage").src = "css/images/wind-cartoon.jpg";
    }
}