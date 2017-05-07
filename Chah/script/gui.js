function generateFEN(){
	console.log("button clicked\n");;
	var fenStr = $("#fenIn").val();	
	ParseFen(fenStr);
	PrintBoard();
	PerftTest(5);
}
