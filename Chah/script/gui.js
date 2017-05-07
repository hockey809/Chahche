function generateFEN(){
	console.log("button clicked\n");;
	var fenStr = $("#fenIn").val();	
	ParseFen(START_FEN);
	PrintBoard();
	SearchPosition();
}
