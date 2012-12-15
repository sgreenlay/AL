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
	this.is_at = function is_at(x, y) {
		if (this.x == x && this.y == y) return true;
		if ((Math.abs(this.offset_x) > 0) || (Math.abs(this.offset_y) > 0)) {
			return ((this.x + this.move_x) == x && (this.y + this.move_y) == y);
		}
		return false;
	};
	this.speed = 0.5;
	this.waiting = {
		duration : 0,
		on_success : null,
		on_failure : null,
		condition : null
	};
	this.waiting_task = null;
	this.speak = function say(text) {
		this['speech'] = text;
	};
	this.stop_speaking = function stop_speaking() {
		delete this['speech'];
	};
	this.logic = function logic(engine, elapsed, level) {
		if (this.waiting.duration > 0) {
			if (this.waiting.condition(level)) {
				this.waiting.duration = 0;
				if (this.waiting.on_success) {
					this.waiting.on_success(level);
				}
			}
			this.waiting.duration -= elapsed;
			if (this.waiting.duration <= 0) {
				this.waiting.duration = 0;
				if (this.waiting.on_failure) {
					this.waiting.on_failure(level);
				}
			}
		}
		else {
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
				var dx = this.move_x;
				var dy = this.move_y;
				
				var x = this.x + dx;
				var y = this.y + dy;
			
				while ((dx == 0 && dy == 0) || !level.is_valid_coordinates(x, y) || level.is_wall(level.layout[y][x])) {
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
				}
				
				if (level.is_door_closed(level.layout[y][x])) {
					var self = this;
					this.waiting.duration = 4000;
					this.waiting.condition = function is_door_open(level) {
						return level.is_door_open(level.layout[y][x]);
					};
					this.waiting.on_success = function on_success(level) {
						self.move_x = dx;
						self.move_y = dy;
						self.stop_speaking();
					};
					this.waiting.on_failure = function on_failure(level) {
						self.move_x = 0;
						self.move_y = 0;
						self.stop_speaking();
					};
					this.speak("Open the door AL!");
				}
				else {
					this.move_x = dx;
					this.move_y = dy;
				}
			}
		}
	};
	this.render = function render(engine, level) {
		var x_offset = this.x * level.block_size + this.offset_x;
		var y_offset = this.y * level.block_size + this.offset_y;
		engine.graphics.draw_sprite('person-live', x_offset, y_offset, level.block_size, level.block_size);
		if (typeof this['speech'] != 'undefined') {
			engine.graphics.draw_speech_bubble(x_offset + level.block_size / 2, y_offset, this['speech'], 14, "rgba(100, 100, 100, 1.0)", "rgba(255, 255, 255, 1.0)", 2);
		}
	};
};
