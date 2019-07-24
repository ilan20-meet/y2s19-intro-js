// var colour = prompt("What's your favourite colour?");
// if (colour == "purple")
// {
// 	alert("very nice");
// }
// else if (colour == "green")
// {
// 	alert("...");
// }
// else
// {
// 	alert("ok");
// }

function checkWin(board)
{
	var win = "";
	// rows
	for(var i = 0; i < 3; i++)
	{
		if (board[i][0] != "-" && board[i][0] == board[i][1] && board[i][0] == board[i][2])
		{
			win = board[i][0];
		}
	}
	// columns
	for(var i = 0; i < 3; i++)
	{
		if (win == "" && board[0][i] != "-" && board[0][i] == board[1][i] && board[0][i] == board[2][i])
		{
			win = board[0][i];
		}
	}
	//diagonal
	if (win == "" && board[0][0] != "-" && board[0][0] == board[1][1] && board[0][0] == board[2][2])
	{
		win = board[0][0];
	}
	else if (win == "" && board[0][2] != "-" && board[0][2] == board[1][1] && board[0][2] == board[2][0])
	{
		win = board[0][2];
	}
	return win;
}

function checkEnd(board)
{
	var win = checkWin(board);
	if(win == "x" || win == "o")
	{
		alert(win + " has won!!!");
		return true;
	}
	else if(!board[0].includes("-") && !board[1].includes("-") && !board[2].includes("-"))
	{
		alert("It's a tie!!!")
		return true;
	}
	else
	{
		return false;
	}
}

function checkInput(board, x, y)
{
	if (board[x][y] == "-")
	{
		return true;
	}
	else
	{
		return false;
	}
}
function printBoard(board)
{
	string = board[0][0] + " " + board[0][1] + " " + board[0][2] + "\n" +
		board[1][0] + " " + board[1][1] + " " + board[1][2] + "\n" +
		board[2][0] + " " + board[2][1] + " " + board[2][2]
	alert(string);
}

var board = [["-","-","-"],["-","-","-"],["-","-","-"]];
var player = "x";
while(!checkEnd(board))
{
	console.log("begining");
	printBoard(board);
	var location = prompt("enter row and column like this: row,column");
	console.log(location);
	var locations = location.split(",");
	console.log(locations)
	var row = parseint(locations[0]) - 1;
	console.log(row)
	var column = parseint(location[1]) - 1;
	console.log(column)
	while(!checkInput(board, row, column))
	{
		location = prompt("location is not empty, try again!");
		locations = location.split(",");
		row = parseint(locations[0]) - 1;
		column = parseint(location[1]) - 1;
	}
	board[row][column] = player;
	if (player == "x")
	{
		player = "o";
	}
	else
	{
		player = "x";
	}
}	