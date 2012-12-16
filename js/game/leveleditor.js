/*
 * LD25
 * Scott Greenlay
 * leveleditor.js
 */

function LD25Editor(level) {
	this.level = level;
	this.needs_reset = true;
	this.mode = 0;
	this.keys = [48, 49, 50, 51, 53, 80];
	this.logic = function logic(engine, elapsed) {
		for (var k = 0; k < this.keys.length; k++) {
			if (engine.keyboard.is_key_down(this.keys[k])) {
				if (engine.keyboard[this.keys[k]]) {
					this.mode = this.keys[k];
					engine.keyboard[this.keys[k]] = false;
				}
			}
		}
		if (engine.mouse.is_down()) {
			var x = Math.floor(engine.mouse.x / this.level.block_size);
			var y = Math.floor(engine.mouse.y / this.level.block_size);
			if (this.mode >= 48 && this.mode <= 51) {
				this.level.layout[y][x] = this.mode - 48;
			}
			else if (this.mode === 80) {
				this.level.people.push(new LD25Person(x, y));
				this.mode = 0;
			}
		}
	};
	this.render = function render(engine) {
		engine.graphics.draw_grid(0, 0, 800, 600, this.level.block_size, "rgba(220, 220, 220, 1.0)", "rgba(255, 255, 255, 1.0)");
		
		this.level.render(engine);
		
		var x = Math.floor(engine.mouse.x / this.level.block_size);
		var y = Math.floor(engine.mouse.y / this.level.block_size);
		
		var x_offset = x * this.level.block_size;
		var y_offset = y * this.level.block_size;
		
		var colour = (engine.mouse.is_down() ? "rgba(0, 255, 0, 0.5)" : "rgba(255, 0, 0, 0.5)")
		
		engine.graphics.draw_rectangle(x_offset, y_offset, this.level.block_size, this.level.block_size, colour);
		engine.graphics.draw_speech_bubble(x_offset + this.level.block_size / 2, y_offset, x.toString() + ',' + y.toString(), 14, "rgba(100, 100, 100, 0.8)", "rgba(255, 255, 255, 0.5)", 2);
	}
}