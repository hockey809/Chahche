function generateFEN(){
	console.log("button clicked\n");;
	var fenStr = $("#fenIn").val();	
	NewGame(fenStr);
}

function NewGame(fenStr) {
	ParseFen(fenStr);
	PrintBoard();
	SetInitialBoardPieces();
}

function ClearAllPieces() {
	$(".Piece").remove();
}

function SetInitialBoardPieces() {

	var sq;
	var sq120;
	var file,rank;
	var rankName;
	var fileName;
	var imageString;
	var pieceFileName;
	var pce;
	
	ClearAllPieces();
	
	for(sq = 0; sq < 64; ++sq) {
		sq120 = SQ120(sq);
		pce = GameBoard.pieces[sq120];
		file = FilesBrd[sq120];
		rank = RanksBrd[sq120];
		
		if(pce >= PIECES.wP && pce <= PIECES.bK) {
			rankName = "rank" + (rank+1);
			fileName = "file" + (file+1);
			pieceFileName = "images/" + SideChar[PieceCol[pce]] + PceChar[pce].toUpperCase() + ".png";
			imageString = "<image src=\"" + pieceFileName + "\" class=\"Piece " + rankName + " " + fileName + "\"/>";
			$("#Board").append(imageString);
		}
	}

}
