var myUI,player = 1;

myUI = {
	init: function(){
		setTimeout(function(){myUI.loadout()},1); 
	},
	loadout: function(){
		var table = createEle("table"), playerLabel;

		playerLabel = createEle("p");
		playerLabel.innerHTML = "Player " +player + "'s turn";

		for (var r = 0; r < 3; r++) {
			var tr = createEle("tr"), j = r + 1;

			for (var c = 0; c < 3; c++) {
				var td = createEle("td"),d = c + 1;

				td.innerHTML = "&nbsp;";
				td.onclick = myUI.boxSelect(td,playerLabel);

				tr.append(td);
			}

			table.append(tr);
		}


		body.append(table,playerLabel);
	},
	boxSelect: function(td,playerLabel){
		return function(){

			if(player === 1){
				td.innerHTML = "X";
				td.onclick = null;
				player = 2;
				playerLabel.innerHTML = "Player " +player + "'s turn";
				var tds = bySelAll("td");
			} else if(player === 2){
				td.innerHTML = "O";
				td.onclick = null;
				player = 1;
				playerLabel.innerHTML = "Player " +player + "'s turn";
				var tds = bySelAll("td");
			}
			
			myUI.evalBoard(tds);
		}
	},
	evalBoard: function(tds){
		/* X row wins */
		if (tds[0].innerHTML === "X" && tds[1].innerHTML === "X" && tds[2].innerHTML === "X" ) {
			alert("X's WIN 012");
		}
		if (tds[3].innerHTML === "X" && tds[4].innerHTML === "X" && tds[5].innerHTML === "X" ) {
			alert("X's WIN 345");
		}
		if (tds[6].innerHTML === "X" && tds[7].innerHTML === "X" && tds[8].innerHTML === "X" ) {
			alert("X's WIN 678");
		}

		/* X col wins */
		if (tds[0].innerHTML === "X" && tds[3].innerHTML === "X" && tds[6].innerHTML === "X" ) {
			alert("X's WIN 036");
		}
		if (tds[1].innerHTML === "X" && tds[4].innerHTML === "X" && tds[7].innerHTML === "X" ) {
			alert("X's WIN 147");
		}
		if (tds[2].innerHTML === "X" && tds[5].innerHTML === "X" && tds[8].innerHTML === "X" ) {
			alert("X's WIN 258");
		}

		/* X diag wins */
		if (tds[0].innerHTML === "X" && tds[4].innerHTML === "X" && tds[8].innerHTML === "X" ) {
			alert("X's WIN 048");
		}
		if (tds[2].innerHTML === "X" && tds[4].innerHTML === "X" && tds[6].innerHTML === "X" ) {
			alert("X's WIN 246");
		}

		/* O row wins */
		if (tds[0].innerHTML === "O" && tds[1].innerHTML === "O" && tds[2].innerHTML === "O" ) {
			alert("O's WIN");
		}

		if (tds[3].innerHTML === "O" && tds[4].innerHTML === "O" && tds[5].innerHTML === "O" ) {
			alert("O's WIN");
		}
		if (tds[6].innerHTML === "O" && tds[7].innerHTML === "O" && tds[8].innerHTML === "O" ) {
			alert("O's WIN");
		}

		/* O col wins */
		if (tds[0].innerHTML === "O" && tds[3].innerHTML === "O" && tds[6].innerHTML === "O" ) {
			alert("O's WIN");
		}
		if (tds[1].innerHTML === "O" && tds[4].innerHTML === "O" && tds[7].innerHTML === "O" ) {
			alert("O's WIN");
		}
		if (tds[2].innerHTML === "O" && tds[5].innerHTML === "O" && tds[8].innerHTML === "O" ) {
			alert("O's WIN");
		}

		/* O diag wins */
		if (tds[0].innerHTML === "O" && tds[4].innerHTML === "O" && tds[8].innerHTML === "O" ) {
			alert("O's WIN");
		}
		if (tds[2].innerHTML === "O" && tds[4].innerHTML === "O" && tds[6].innerHTML === "O" ) {
			alert("O's WIN");
		}
	}
};

window.onload = function(){
	myUI.init();
};