/*
 * LD25
 * Scott Greenlay
 * game.js
 */

 function LD25 () {
	 this.render = function render(engine) {
		 engine.graphics.draw_rectangle(0, 0, 800, 600, "rgba(255, 255, 255, 1.0)");
		 for (var x = 0; x < 800; x += 20) {
			 for (var y = 0; y < 600; y += 20) {
				 if (y % 40 == 0 && x % 40 == 0) {
					 engine.graphics.draw_rectangle(x, y, 20, 20, "rgba(188, 188, 188, 1.0)");
				 }
				 if (y % 40 != 0 && x % 40 != 0) {
					 engine.graphics.draw_rectangle(x, y, 20, 20, "rgba(188, 188, 188, 1.0)");
				 }
			 }
		 }
		 if (engine.mouse.is_down) {
		 	engine.graphics.draw_rectangle(engine.mouse.x - 10, engine.mouse.y - 10, 20, 20, "rgba(0, 255, 0, 1.0)");
		 }
		 else {
		 	engine.graphics.draw_rectangle(engine.mouse.x - 10, engine.mouse.y - 10, 20, 20, "rgba(255, 0, 0, 1.0)");
		 }
	 }
	 this.logic = function logic(engine, elapsed) {
		 // TODO	
	 }
 }

var canvas = document.getElementById('game');
if (canvas.getContext){
	var game = new GameCore(canvas, new LD25());
	game.run();
}
else {
	// TODO: canvas is not supported
}
