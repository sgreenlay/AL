/*
 * LD25
 * Scott Greenlay
 * person.js
 */

function LD25Person(x, y) {
	this.x = x;
	this.y = y;
	this.offset_x = 0;
	this.offset_y = 0;
	this.move_x = 0;
	this.move_y = 0;
	this.speed = 0.5;
	this.logic = function logic(engine, elapsed, level) {
		this.offset_x += this.move_x * (level.block_size * this.speed) * (elapsed / 1000);
		this.offset_y += this.move_y * (level.block_size * this.speed) * (elapsed / 1000);
		
		if (Math.abs(this.offset_x) >= level.block_size) {
			this.offset_x = 0;
			this.x += this.move_x;
		}
		if (Math.abs(this.offset_y) >= level.block_size) {
			this.offset_y = 0;
			this.y += this.move_y;
		}
		if (this.offset_x == 0 && this.offset_y == 0) {
			var x = this.x;
			var dx = 0;
			var y = this.y;
			var dy = 0;
			do {
				var direction = Math.floor((Math.random() * 4));
				dx = 0;
				dy = 0;
				switch (direction) {
					case 0:
						dx = -1;
						break;
					case 1:
						dy = -1;
						break;
					case 2:
						dx = 1;
						break;
					case 3:
						dy = 1;
						break;
				}
				x = this.x + dx;
				y = this.y + dy;
			} while (x >= 0 && y >= 0 && x < level.w && y < level.h && level.is_wall(level.layout[y][x]));
			this.move_x = dx;
			this.move_y = dy;
		}
	};
	this.render = function render(engine, level) {
		var x_offset = this.x * level.block_size + this.offset_x;
		var y_offset = this.y * level.block_size + this.offset_y;
		engine.graphics.draw_sprite('person', x_offset, y_offset, level.block_size, level.block_size);
	};
};
