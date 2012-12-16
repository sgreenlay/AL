/*
 * LD25
 * Scott Greenlay
 * leveleditor.js
 */

function LD25Editor(level) {
	this.level = level;
	this.needs_reset = true;
	this.mode = 0;
	this.keys = [48, 49, 50, 51, 52, 53, 54, 80];
	this.logic = function logic(engine, elapsed) {
		this.level.background_update = true;
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
			if (this.mode === 80) {
				if (engine.mouse['down']) {
					var person = level.person_at(x, y);
					if (person == null) {
						if (this.person != null) {
							this.person = null;
						}
						else if (this.level.is_floor(this.level.layout[y][x])) {
							this.person = new LD25Person(x, y, this.level.people.length + 1);
							this.level.people.push(this.person);
						}
					}
					else {
						this.person = person;
					}
					engine.mouse['down'] = false;
				}
			}
			else {
				this.level.layout[y][x] = this.mode - 48;
			}
		}
		
		// TODO: add intents editor...
		
	};
	this.render = function render(engine) {
		engine.graphics.back.draw_grid(0, 0, 800, 600, this.level.block_size, "rgba(220, 220, 220, 1.0)", "rgba(255, 255, 255, 1.0)");
		
		this.level.render(engine);
		
		var x = Math.floor(engine.mouse.x / this.level.block_size);
		var y = Math.floor(engine.mouse.y / this.level.block_size);
		
		var x_offset = x * this.level.block_size;
		var y_offset = y * this.level.block_size;
		
		if (this.mode === 80) {
			var person = this.person;
			if (person == null) {
				person = level.person_at(x, y);
			}
			if (person != null) {
				x_offset = person.x * this.level.block_size + person.offset_x;
				y_offset = person.y * this.level.block_size + person.offset_y;
			
				engine.graphics.front.draw_speech_bubble(x_offset + this.level.block_size / 2, y_offset, 'Person ' + person.number.toString(), 14, "rgba(100, 100, 100, 0.8)", "rgba(255, 255, 255, 0.5)", 2);
			}
			else {
				if (this.level.is_floor(this.level.layout[y][x])) {
					engine.graphics.front.draw_sprite('person-live', x_offset, y_offset, this.level.block_size, this.level.block_size, 0.5);
				}
				else {
					engine.graphics.front.draw_sprite('person-dead', x_offset, y_offset, this.level.block_size, this.level.block_size, 0.5);
				}
			}
		}
		else {
			var colour = (engine.mouse.is_down() ? "rgba(0, 255, 0, 0.5)" : "rgba(255, 0, 0, 0.5)");
			
			engine.graphics.front.draw_rectangle(x_offset, y_offset, this.level.block_size, this.level.block_size, colour);
			engine.graphics.front.draw_speech_bubble(x_offset + this.level.block_size / 2, y_offset, x.toString() + ',' + y.toString(), 14, "rgba(100, 100, 100, 0.8)", "rgba(255, 255, 255, 0.5)", 2);
		}
	}
}