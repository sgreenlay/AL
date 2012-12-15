/*
 * LD25
 * Scott Greenlay
 * game.js
 */

 function LD25 () {
	 this.needs_reset = true;
	 this.init = function init(engine) {
		 this.level = new LD25Level();
		 engine.graphics.load_sprites(new LD25Sprites());
	 }
	 this.logic = function logic(engine, elapsed) {
		 if (engine.mouse.is_down) {
			 var x = Math.floor(engine.mouse.x / this.level.block_size);
			 var y = Math.floor(engine.mouse.y / this.level.block_size);
			 
			 if (this.level_squares_touched[y][x] == 0) {
				 if (this.level.layout[y][x] == 1) {
				 	this.level.layout[y][x] = 0;
				 }
				 else {
				 	this.level.layout[y][x] = 1;
				 }
				 this.level_squares_touched[y][x] = 1;
			 }
			 this.needs_reset = true;
		 }
		 else if (this.needs_reset) {
			 this.level_squares_touched = new Array(this.level.h);
			 for (var y = 0; y < this.level.h; y++) {
			 	this.level_squares_touched[y] = new Array(this.level.w);
				for (var x = 0; x < this.level.w; x++) {
					this.level_squares_touched[y][x] = 0;
				}
			 }
			 this.needs_reset = false;
		 }
	 }
	 this.render = function render(engine) {
		 //engine.graphics.draw_rectangle(0, 0, 800, 600, "rgba(255, 255, 255, 1.0)");
		 engine.graphics.draw_grid(0, 0, 800, 600, this.level.block_size, "rgba(220, 220, 220, 1.0)", "rgba(255, 255, 255, 1.0)");
		 
		 this.level.draw(engine);
		 
		 var x_offset = Math.floor(engine.mouse.x / this.level.block_size) * this.level.block_size;
		 var y_offset = Math.floor(engine.mouse.y / this.level.block_size) * this.level.block_size;
		 var colour = (engine.mouse.is_down == 1 ? "rgba(0, 255, 0, 0.5)" : "rgba(255, 0, 0, 0.5)")
		 engine.graphics.draw_rectangle(x_offset, y_offset, this.level.block_size, this.level.block_size, colour);
	 }
}
