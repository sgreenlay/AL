/*
 * LD25
 * Scott Greenlay
 * leveleditor.js
 */

function LD25Editor(level) {
	this.level = level;
	this.needs_reset = true;
	this.mode = 0;
	this.logic = function logic(engine, elapsed) {
		for (var keyCode = 48; keyCode < 48 + 10; keyCode++) {
			if (engine.keyboard.is_key_down(keyCode)) {
				if (engine.keyboard[keyCode]) {
					this.mode = keyCode - 48;
					engine.keyboard[keyCode] = false;
				}
			}
		}
		if (engine.mouse.is_down) {
			var x = Math.floor(engine.mouse.x / this.level.block_size);
			var y = Math.floor(engine.mouse.y / this.level.block_size);
			this.level.layout[y][x] = this.mode;
		}
	};
	this.render = function render(engine) {
		engine.graphics.draw_grid(0, 0, 800, 600, this.level.block_size, "rgba(220, 220, 220, 1.0)", "rgba(255, 255, 255, 1.0)");
		
		this.level.draw(engine);
		
		var x_offset = Math.floor(engine.mouse.x / this.level.block_size) * this.level.block_size;
		var y_offset = Math.floor(engine.mouse.y / this.level.block_size) * this.level.block_size;
		var colour = (engine.mouse.is_down == 1 ? "rgba(0, 255, 0, 0.5)" : "rgba(255, 0, 0, 0.5)")
		engine.graphics.draw_rectangle(x_offset, y_offset, this.level.block_size, this.level.block_size, colour);
	}
}