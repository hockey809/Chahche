var SearchController = {};

SearchController.nodes;
SearchController.fh;
SearchController.fhf;
SearchController.depth;
SearchController.time;
SearchController.start;
SearchController.stop;
SearchController.best;
SearchController.thinking;

function AlphaBeta(alpha, beta, depth) {

	if(depth <= 0) {
		/* return Evaluate() */
	}
	
	/* Check Time Up */
	
	SearchController.nodes++;
	
	/* Check Rep() Fifty Move Rule */ 
	
	if(GameBoard.ply > MAXDEPTH -1) {
		/* return Evaluate() */
	}
	
	var Score = -INFINITE;
	
	GenerateMoves();
	
	var MoveNum = 0;
	var Legal = 0;
	var OldAlpha = alpha;
	var BestMove = NOMOVE;
	var Move = NOMOVE;
	
	/* Get PvMove */
	/* Order PvMove */	
	
	for(MoveNum = GameBoard.moveListStart[GameBoard.ply]; MoveNum < GameBoard.moveListStart[GameBoard.ply + 1]; ++MoveNum) {
	
		/* Pick Next Best Move */
	
		Move = GameBoard.moveList[MoveNum];	
		if(MakeMove(move) == BOOL.FALSE) {
			continue;
		}		
		Legal++;
		Score = -AlphaBeta( -beta, -alpha, depth-1);
		
		TakeMove();
		
		if(SearchController.stop == BOOL.TRUE) {
			return 0;
		}
		
		if(Score > alpha) {
			if(Score >= beta) {
				if(Legal == 1) {
					SearchController.fhf++;
				}
				SearchController.fh++;				
				/* Update Killer Moves */
				
				return beta;
			}
			alpha = Score;
			BestMove = Move;
			/* Update History Table */
		}		
	}
	
	/* Mate Check */
	
	if(alpha != OldAlpha) {
		/* Store PvMove */
	}
	
	return alpha;
}

function SearchPosition() {

	var bestMove = NOMOVE;
	var bestScore = -INFINITE;
	var currentDepth = 0;
	
	for( currentDepth = 1; currentDepth <= SearchController.depth; ++currentDepth) {
		
		/* AB */
		
		if(SearchController.stop == BOOL.TRUE) {
			break;
		}
		
	}
	
	SearchController.best = bestMove;
	SearchController.thinking = BOOL.FALSE;

}