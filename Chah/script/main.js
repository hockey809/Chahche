$(function() {
	init();
	console.log("Main Init Called");

	/*
		unique?
		Piece on Sq 
		Side
		Castle
		EnPas
		
		posKey ^= RandNum for all pces on sq
		posKey ^= RandNum side.. and so on
	*/
	
	var piece1 = RAND_32();
	var piece2 = RAND_32();
	var piece3 = RAND_32();
	var piece4 = RAND_32();
	
	var key = 0;
	key ^= piece1;
	key ^= piece2;
	key ^= piece3;
	key ^= piece4;
	console.log("key:" + key.toString(16));	
	var key = 0;
	key ^= piece4;
	key ^= piece2;
	key ^= piece1;
	key ^= piece3;
	console.log("key:" + key.toString(16));
});

function InitFilesRanksBrd() {
	
	var index = 0;
	var file = FILES.FILE_A;
	var rank = RANKS.RANK_1;
	var sq = SQUARES.A1;
	
	for(index = 0; index < BRD_SQ_NUM; ++index) {
		FilesBrd[index] = SQUARES.OFFBOARD;
		RanksBrd[index] = SQUARES.OFFBOARD;
	}
	
	for(rank = RANKS.RANK_1; rank <= RANKS.RANK_8; ++rank) {
		for(file = FILES.FILE_A; file <= FILES.FILE_H; ++file) {
			sq = FR2SQ(file,rank);
			FilesBrd[sq] = file;
			RanksBrd[sq] = rank;
		}
	}
	
	console.log("FilesBrd[0]:" + FilesBrd[0] + " RanksBrd[0]:" + RanksBrd[0]);
	console.log("FilesBrd[SQUARES.A1]:" + FilesBrd[SQUARES.A1] + " RanksBrd[SQUARES.A1]:" + RanksBrd[SQUARES.A1]);
	console.log("FilesBrd[SQUARES.E8]:" + FilesBrd[SQUARES.E8] + " RanksBrd[SQUARES.E8]:" + RanksBrd[SQUARES.E8]);

}

function InitHashKeys() {
    var index = 0;
	
	for(index = 0; index < 14 * 120; ++index) {				
		PieceKeys[index] = RAND_32();
	}
	
	SideKey = RAND_32();
	
	for(index = 0; index < 16; ++index) {
		CastleKeys[index] = RAND_32();
	}
}

function init() {
	console.log("init() called");
	InitFilesRanksBrd();
	InitHashKeys();
}