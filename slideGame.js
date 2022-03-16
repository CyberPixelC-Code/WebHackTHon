const gameTiles = document.querySelectorAll('.tile');
const gameBoard = document.querySelector('#board');
const gameState = [
    [gameTiles[0], gameTiles[1], gameTiles[2]],
    [gameTiles[3], gameTiles[4], gameTiles[5]], 
    [gameTiles[6], gameTiles[7], gameTiles[8]],
    
];
var completed = true;
function compare()
{
    completed = true;
    var count = 0;
    loop1:
        for(var i = 0; i < 3; i++)
        {
            for(var j = 0; j < 3; j++)
            {
                console.log(gameState[i][j].innerHTML);
                count++;
                console.log(count)
                

                if(!(gameState[i][j].innerHTML === String(count)))
                {
                    completed = false;
                    break loop1;
                }
                
                console.log(completed);
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
    for (let x = 0; x < 1000; x++)
    {
        randomize();
    }
}
function randomize()
{
    let emptyX, emptyY;
    gameState.forEach((row, rowIndex) => {
        row.forEach((column, columnIndex) => {
            if(column.innerText === '9')
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
            if(column.innerText === '9')
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