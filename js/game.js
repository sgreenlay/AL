/*
 * LD25
 * Scott Greenlay
 * game.js
 */

function LD25 () {
   this.render = function render() {
	   // TODO
   }
   this.logic = function logic(elapsed) {
	   // TODO	
   }
}

var canvas = document.getElementById('game');
if (canvas.getContext){
	var game = new GameCore(canvas.getContext('2d'), new LD25());
	game.run();
}
else {
	// TODO: canvas is not supported
}
