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

function DeSelectSq(sq) {
	$('.Square').each( function(index) {
		if( (RanksBrd[sq] == 7 - Math.round($(this).position().top/60) ) && 
				FilesBrd[sq] == Math.round($(this).position().left/60) ) {
				$(this).removeClass('SqSelected');
		}
	} );
}

function SetSqSelected(sq) {
	$('.Square').each( function(index) {
		if( (RanksBrd[sq] == 7 - Math.round($(this).position().top/60) ) && 
				FilesBrd[sq] == Math.round($(this).position().left/60) ) {
				$(this).addClass('SqSelected');
		}
	} );
}

function ClickedSquare(pageX, pageY) {
	console.log('ClickedSquare() at ' + pageX + ',' + pageY);
	var position = $('#Board').position();
	
	var workedX = Math.floor(position.left);
	var workedY = Math.floor(position.top);
	
	pageX = Math.floor(pageX);
	pageY = Math.floor(pageY);
	
	var file = Math.floor((pageX-workedX) / 60);
	var rank = 7 - Math.floor((pageY-workedY) / 60);
	
	var sq = FR2SQ(file,rank);
	
	console.log('Clicked sq:' + PrSq(sq));
	
	SetSqSelected(sq);	
	
	return sq;
}

$(document).on('click','.Piece', function (e) {
	console.log('Piece Click');
	
	if(UserMove.from == SQUARES.NO_SQ) {
		UserMove.from = ClickedSquare(e.pageX, e.pageY);
	} else {
		UserMove.to = ClickedSquare(e.pageX, e.pageY);
	}
	
	MakeUserMove();
	
});

$(document).on('click','.Square', function (e) {
	console.log('Square Click');	
	if(UserMove.from != SQUARES.NO_SQ) {
		UserMove.to = ClickedSquare(e.pageX, e.pageY);
		MakeUserMove();
	}

});

function MakeUserMove() {

	if(UserMove.from != SQUARES.NO_SQ && UserMove.to != SQUARES.NO_SQ) {
	
		console.log("User Move:" + PrSq(UserMove.from) + PrSq(UserMove.to));	
		
		var parsed = ParseMove(UserMove.from,UserMove.to);
		
		if(parsed != NOMOVE) {
			MakeMove(parsed);
			PrintBoard();
		}
	
		DeSelectSq(UserMove.from);
		DeSelectSq(UserMove.to);
		
		UserMove.from = SQUARES.NO_SQ;
		UserMove.to = SQUARES.NO_SQ;
	}

}
