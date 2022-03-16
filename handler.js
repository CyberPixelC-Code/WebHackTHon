var isDay = false;
var isWindy = false;

function DayToggle()
{
    if (!isDay)
    {
    	//day time
        isDay = true;
        
    }
    else{
    	//day time
        isDay = false;
    }
    StartPointGraph();
}

function WindToggle()
{
    if (!isWindy)
    {
        isWindy = true;
    }
    else{
        isWindy = false;
    }
    StartPointGraph();
}