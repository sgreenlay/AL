/*
 * LD25
 * Scott Greenlay
 * level.js
 */

function LD25Level() {
	this.layout = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 2, 2, 1, 1, 1, 1, 1, 6, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 2, 2, 2, 3, 2, 2, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 2, 2, 1, 1, 1, 1, 1, 6, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	];
	this.w = 40;
	this.h = 30;
	this.block_size = 20;
	this.people = [
		new LD25Person(13, 15, 1, [
			{
				task : 'wait',
				duration : 5000,
				text : 'Computering...'
			},
			{
				task : 'move',
				destination : {
					x : 20,
					y : 14
				}
			},
			{
				task : 'wait',
				duration : 5000,
				text : 'Computering...'
			},
			{
				task : 'move',
				destination : {
					x : 13,
					y : 15
				}
			}
		])
	];
	
	this.is_valid_coordinates = function is_valid_coordinates(x, y) {
		return (x >= 0 && y >= 0 && x < this.w && y < this.h);
	}
	this.is_solid = function is_solid(square_value) {
		return (this.is_wall(square_value) || this.is_door(square_value));
	};
	this.is_wall = function is_wall(square_value) {
		return (square_value == 1) || this.is_computer(square_value);
	};
	this.is_door = function is_door(square_value) {
		return (this.is_door_open(square_value) || this.is_door_closed(square_value));
	};
	this.is_floor = function is_floor(square_value) {
		return (square_value == 2);
	};
	this.is_computer = function is_wall(square_value) {
		return (square_value == 6);
	};
	this.is_door_open = function is_door_open(square_value) {
		return (square_value == 4);
	};
	this.is_door_closed = function is_door_closed(square_value) {
		return (square_value == 3);
	};
	this.open_door = function open_door(x, y) {
		this.layout[y][x] = 4;
	};
	this.close_door = function close_door(x, y) {
		this.layout[y][x] = 3;
	};
	this.person_at = function person_at(x, y) {
		for (var p = 0; p < this.people.length; p++) {
			if (this.people[p].is_at(x, y)) return this.people[p];
		}
		return null;
	};
	this.is_game_over = false;
	this.game_over = function game_over() {
		this.is_game_over = true;
	};
	this.sprite_map = function sprite_map(x, y) {
		var l = (!this.is_valid_coordinates(x - 1, y) || !this.is_solid(this.layout[y][x - 1])) ? 'n' : 'y';
		var u = (!this.is_valid_coordinates(x, y - 1) || !this.is_solid(this.layout[y - 1][x])) ? 'n' : 'y';
		var r = (!this.is_valid_coordinates(x + 1, y) || !this.is_solid(this.layout[y][x + 1])) ? 'n' : 'y';
		var d = (!this.is_valid_coordinates(x, y + 1) || !this.is_solid(this.layout[y + 1][x])) ? 'n' : 'y';
		
		if (l === 'y' && u === 'y' && this.is_valid_coordinates(x - 1, y - 1) && this.is_solid(this.layout[y - 1][x - 1])) {
			l = '1';
			u = '1';
		}
		if ((u === 'y' || u === '1') && r === 'y' && this.is_valid_coordinates(x + 1, y - 1) && this.is_solid(this.layout[y - 1][x + 1])) {
			u = (u === '1') ? '2' : '1';
			r = '1';
		}
		if ((r === 'y' || r === '1') && d === 'y' && this.is_valid_coordinates(x + 1, y + 1) && this.is_solid(this.layout[y + 1][x + 1])) {
			r = (r === '1') ? '2' : '1';
			d = '1';
		}
		if ((d === 'y' || d === '1') && (l === 'y' || l === '1') && this.is_valid_coordinates(x - 1, y + 1) && this.is_solid(this.layout[y + 1][x - 1])) {
			d = (d === '1') ? '2' : '1';
			l = (l === '1') ? '2' : '1';
		}
		
		return l + u + r + d;
	};
	this.logic = function logic(engine, elapsed) {
		var x = Math.floor(engine.mouse.x / this.block_size);
		var y = Math.floor(engine.mouse.y / this.block_size);
		
		if (!this.is_game_over) {
			if (engine.mouse.is_down()) {
				if (engine.mouse['down']) {
					if (!this.person_at(x, y)) {
						if (this.is_door_open(this.layout[y][x])) {
							this.close_door(x, y);
						}
						else if (this.is_door_closed(this.layout[y][x])) {
							this.open_door(x, y);
						}
					}
					engine.mouse['down'] = false;
				}
			}
		
			for (var p = 0; p < this.people.length; p++) {
				this.people[p].logic(engine, elapsed, this);
			}
		}
	}
	this.render = function render(engine) {
		for (var y = 0; y < this.h; y++) {
			for (var x = 0; x < this.w; x++) {
				var x_offset = x * this.block_size;
				var y_offset = y * this.block_size;
				if (this.layout[y][x] == 1) {
					engine.graphics.draw_sprite(this.sprite_map(x, y), x_offset, y_offset, this.block_size, this.block_size);
				}
				else if (this.layout[y][x] == 2) {
					engine.graphics.draw_sprite('floor', x_offset, y_offset, this.block_size, this.block_size);
				}
				else if (this.layout[y][x] == 3) {
					engine.graphics.draw_sprite('close-door-' + this.sprite_map(x, y), x_offset, y_offset, this.block_size, this.block_size);
				}
				else if (this.layout[y][x] == 4) {
					engine.graphics.draw_sprite('open-door-' + this.sprite_map(x, y), x_offset, y_offset, this.block_size, this.block_size);
				}
				else if (this.layout[y][x] == 5) {
					engine.graphics.draw_sprite('solar', x_offset, y_offset, this.block_size, this.block_size);
				}
				else if (this.layout[y][x] == 6) {
					var wall_map = this.sprite_map(x, y);
					engine.graphics.draw_sprite(wall_map, x_offset, y_offset, this.block_size, this.block_size);
					for (var i = 0; i < wall_map.length; i++) {
						if (wall_map.charAt(i) == 'n') {
							switch (i) {
								case 0:
									if (this.is_valid_coordinates(x - 1, y) && this.is_floor(this.layout[y][x - 1])) {
										engine.graphics.draw_sprite('computer-l', x_offset, y_offset, this.block_size, this.block_size);
									}
									break;
								case 1:
									if (this.is_valid_coordinates(x, y - 1) && this.is_floor(this.layout[y - 1][x])) {
										engine.graphics.draw_sprite('computer-u', x_offset, y_offset, this.block_size, this.block_size);
									}
									break;
								case 2:
									if (this.is_valid_coordinates(x + 1, y) && this.is_floor(this.layout[y][x + 1])) {
										engine.graphics.draw_sprite('computer-r', x_offset, y_offset, this.block_size, this.block_size);
									}
									break;
								case 3:
									if (this.is_valid_coordinates(x, y + 1) && this.is_floor(this.layout[y + 1][x])) {
										engine.graphics.draw_sprite('computer-d', x_offset, y_offset, this.block_size, this.block_size);
									}
									break;
							}
						}
					}
				}
			}
		}
		for (var p = 0; p < this.people.length; p++) {
			this.people[p].render(engine, this);
		}
		if (this.is_game_over) {
			engine.graphics.draw_rectangle(0, 0, 800, 600, "rgba(17, 17, 17, 0.8)");
		}
	}
	this.highlight = function highlight(engine, x, y) {
		var x_offset = x * this.block_size;
		var y_offset = y * this.block_size;
		engine.graphics.draw_rectangle(x_offset, y_offset, this.block_size, this.block_size, "rgba(255, 0, 0, 0.8)");
	};
}
