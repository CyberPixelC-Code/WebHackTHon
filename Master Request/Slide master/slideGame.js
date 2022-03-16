const gameTiles = document.querySelectorAll('.tile');
const gameBoard = document.querySelector('#board');
const gameState = [
    [gameTiles[0], gameTiles[1], gameTiles[2]],
    [gameTiles[3], gameTiles[4], gameTiles[5]], 
    [gameTiles[6], gameTiles[7], gameTiles[8]],
];

var count = 0;
var completed = true;
var percent = 0;
var started = false;

function compare()
{
    completed = true;
    var count = 0;
    loop1:
        for(var i = 0; i < 3; i++)
        {
            for(var j = 0; j < 3; j++)
            {
                count++;
                

                if(!(gameState[i][j].innerHTML === String(count)))
                {
                    completed = false;
                    break loop1;
                }
            }
        }
    
    if(completed == true)
    {
        console.log("DONE");
    }
}

function render(gameBoard, gameState)
{
    gameState.forEach((row, rowIndex) =>
    {
        row.forEach((column, columnIndex) =>
        {
            
            column.style.top = `${rowIndex *100}px`;
            column.style.left = `${columnIndex *100}px`;

            column.style['background-position-y'] = `-${rowIndex *100}px`;
            column.style['background-position-x'] = `-${columnIndex *100}px`;
            gameBoard.appendChild(column);
        })
    })
    
}

function moveElement(element1, element2)
{
    
    const tempTop = element1.style.top;
    const tempLeft = element1.style.left;

    element1.style.top = element2.style.top;
    element1.style.left = element2.style.left;

    element2.style.top = tempTop;
    element2.style.left = tempLeft;
}
function buttonRandom()
{
    if (completed === true)
    {
	    	for (let x = 0; x < 1000; x++)
	    	{
	        	randomize();
	    	}
	    	count += 1;
	    	document.getElementById('countme').innerHTML = count;
	    	if (count == 16){
	    		document.getElementById('next').style.display = 'none';
	    		document.getElementById('finish').style.display = 'block';
	    	}
	    	completed = false;
	    	
	    	//percentage calc
	    	var t = 470*16;
	    	percent = ((470 * count ) / t) * 100;
	    	console.log(percent);
    }//End if
}

function startRan(){
for (let x = 0; x < 1000; x++)
	    	{
	        	randomize();
	    	}
	    	document.getElementById('countme').innerHTML = count;
	    	if (count == 16){
	    		document.getElementById('next').style.display = 'none';
	    		document.getElementById('finish').style.display = 'block';
	    	}
	    	completed = false;
	    	
}

function randomize()
{
    let emptyX, emptyY;
    gameState.forEach((row, rowIndex) => {
        row.forEach((column, columnIndex) => {
            if(column.innerText === '1')
            {
                emptyX = rowIndex;
                emptyY = columnIndex;
            }
        });
    });

    x = Math.floor(Math.random() * 3);
    y = Math.floor(Math.random() * 3);
    
    if((y===emptyY && (x+1===emptyX || x -1 === emptyX)) || (x===emptyX && (y+1===emptyY || y - 1 === emptyY)))
    {
        moveElement(gameState[x][y], gameState[emptyX][emptyY]);

        const temp = gameState[x][y];
        gameState[x][y] = gameState[emptyX][emptyY];
        gameState[emptyX][emptyY] = temp;
        console.log("moved");
    }
    
}
render(gameBoard, gameState);

gameBoard.addEventListener('click', (event) =>{
    const target = event.target
    let x, y;
    gameState.forEach((row, rowIndex) => {
        row.forEach((column, columnIndex) => {
            if(column === target)
            {
                x = rowIndex;
                y = columnIndex;
            }
        });
    });
    let emptyX, emptyY;
    gameState.forEach((row, rowIndex) => {
        row.forEach((column, columnIndex) => {
            if(column.innerText === '1')
            {
                emptyX = rowIndex;
                emptyY = columnIndex;
            }
        });
    });
    if((y===emptyY && (x+1===emptyX || x -1 === emptyX)) || (x===emptyX && (y+1===emptyY || y - 1 === emptyY)))
    {
        moveElement(gameState[x][y], gameState[emptyX][emptyY]);

        const temp = gameState[x][y];
        gameState[x][y] = gameState[emptyX][emptyY];
        gameState[emptyX][emptyY] = temp;
        compare();

    }
    
});