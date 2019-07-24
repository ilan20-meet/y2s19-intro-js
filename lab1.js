function palindrome(string, first, last)
{
	console.log(string[first] + " " + string[last])
	if (first >= last)
	{
		return true;
	}
	else if (string[first] != string[last])
	{
		return false;
	}	
	else
	{
		return palindrome(string, first++, last--);
	}
}
var colour = prompt("What's your favourite colour?");
if (colour == "purple")
{
	alert("very nice");
}
else if (colour == "green")
{
	alert("...");
}
else
{
	alert("ok");
}

board = [[0,0,0][0,0,0][0,0,0]]
function checkWin(board)
{
	win = "";
	// rows
	for(var i = 0; i < 3; i++)
	{
		if (board[i][0] != 0 && board[i][0] == board[i][1] && board[i][0] == board[i][2])
		{
			win = board[i][0];
		}
	}
	// columns
	for(var i = 0; i < 3; i++)
	{
		if (win == "" && board[0][i] != 0 && board[0][i] == board[1][i] && board[0][i] == board[2][i])
		{
			win = board[0][i];
		}
	}
	//diagonal
	if (win == "" && board[0][0] != 0 && board[0][0] == board[1][1] && board[0][0] == board[2][2])
	{
		win = board[0][0];
	}
	else if (win == "" && oard[0][2] != 0 && board[0][2] == board[1][1] && board[0][2] == board[2][0])
	{
		win = board[0][2];
	}
}

function checkEnd(board)
{
	win = checkWin(board);
	if(win == "x" || win == "o")
	{
		alert(win + " has won!!!");
		return true;
	}
	else if(!(0 in board))
	{
		alert("It's a tie!!!")
		return true;
	}
	else
	{
		return false;
	}
}