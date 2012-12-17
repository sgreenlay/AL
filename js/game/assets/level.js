/*
 * LD25
 * Scott Greenlay
 * level.js
 */

function LD25Level() {
	
	// TODO: load this from json to allow for multiple levels
	
	this.layout = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 2, 2, 1, 1, 3, 1, 1, 1, 6, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 2, 2, 2, 4, 2, 2, 4, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 2, 2, 1, 1, 3, 1, 1, 1, 6, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
		new LD25Person(16, 14, 1, [
			{
				task : 'wait',
				duration : 5000,
				text : './takesample > sample.log'
			},
			{
				task : 'move',
				destination : {
					x : 24,
					y : 14
				}
			},
			{
				task : 'wait',
				duration : 5000,
				text : 'scp sample.log station1@samples.research.gov'
			},
			{
				task : 'move',
				destination : {
					x : 16,
					y : 14
				}
			}
		])
	];
	this.background_update = false;
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
		return ((square_value == 2) || (square_value == 8));
	};
	this.is_computer = function is_wall(square_value) {
		return (square_value == 6);
	};
	this.is_door_open = function is_door_open(square_value) {
		return ((square_value == 4) || (square_value == 7));
	};
	this.is_door_closed = function is_door_closed(square_value) {
		return (square_value == 3);
	};
	this.is_walkable = function is_walkable(square_value) {
		return (this.is_door(square_value) || this.is_floor(square_value));
	};
	this.is_space = function is_space(square_value) {
		return ((square_value == 0) || (square_value == 5));
	};
	this.is_vacuum = function is_vacuum(square_value) {
		return (this.is_space(square_value) || (square_value == 7) || (square_value == 8));
	};
	this.mark_vacuum = function mark_vacuum(x, y) {
		if (this.layout[y][x] == 4) {
			this.layout[y][x] = 7;
		}
		else if (this.layout[y][x] == 2) {
			this.layout[y][x] = 8;
		}
	};
	this.unmark_vacuum = function unmark_vacuum(x, y) {
		if (this.layout[y][x] == 7) {
			this.layout[y][x] = 4;
		}
		else if (this.layout[y][x] == 8) {
			this.layout[y][x] = 2;
		}
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
	this.game_result = false;
	this.game_over = function game_over(result) {
		this.is_game_over = true;
		this.game_result = result;
	};
	this.map_sprites = function map_sprites(x, y) {
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
	this.check_seals = function check_seals() {
		var squares_touched = generate_array(this.w, this.h, false);
		for (var y = 0; y < this.h; y++) {
			for (var x = 0; x < this.w; x++) {
				if (squares_touched[y][x] == false) {
					if ((this.is_floor(this.layout[y][x]) || this.is_door_open(this.layout[y][x]))) {
						var graph = generate_graph(this, x, y, function (level, x, y) {
							return (level.is_floor(level.layout[y][x]) || level.is_door_open(level.layout[y][x]));
						});
						var is_vacuum = false;
						for (v in graph) {
							var x_n = graph[v].point.x;
							var y_n = graph[v].point.y;
							for (var i = 0; i < 4; i++) {
								switch (i) {
									case 0:
										if (!is_vacuum && this.is_valid_coordinates(x_n - 1, y_n) && this.is_space(this.layout[y_n][x_n - 1])) {
											is_vacuum = true;
										}
										break;
									case 1:
										if (!is_vacuum && this.is_valid_coordinates(x_n, y_n - 1) && this.is_space(this.layout[y_n - 1][x_n])) {
											is_vacuum = true;
										}
										break;
									case 2:
										if (!is_vacuum && this.is_valid_coordinates(x_n + 1, y_n) && this.is_space(this.layout[y_n][x_n + 1])) {
											is_vacuum = true;
										}
										break;
									case 3:
										if (!is_vacuum && this.is_valid_coordinates(x_n, y_n + 1) && this.is_space(this.layout[y_n + 1][x_n])) {
											is_vacuum = true;
										}
										break;
								}
							}
						}
						for (v in graph) {
							var x_n = graph[v].point.x;
							var y_n = graph[v].point.y;
							
							squares_touched[y_n][x_n] = true;
							
							if (is_vacuum) {
								this.mark_vacuum(x_n, y_n);
							}
							else {
								this.unmark_vacuum(x_n, y_n);
							}
						}
					}
					else {
						squares_touched[y][x] = true;
					}
				}
			}
		}
	}
	this.logic = function logic(engine, elapsed) {
		var x = Math.floor(engine.mouse.x / this.block_size);
		var y = Math.floor(engine.mouse.y / this.block_size);
		
		if (!this.is_game_over) {
			if (engine.mouse.is_down()) {
				if (engine.mouse['down']) {
					if (!this.person_at(x, y)) {
						if (this.is_door_open(this.layout[y][x])) {
							this.close_door(x, y);
							this.background_update = true;
						}
						else if (this.is_door_closed(this.layout[y][x])) {
							this.open_door(x, y);
							this.background_update = true;
						}
					}
					engine.mouse['down'] = false;
				}
			}
			
			if (this.background_update) {
				this.check_seals();
			}
			
			var live_count = 0;
			for (var p = 0; p < this.people.length; p++) {
				if (this.people[p].life > 0) {
					this.people[p].logic(engine, elapsed, this);
					live_count++;
				}
			}
			
			if (live_count == 0) {
				this.game_over(true);
			}
		}
	}
	this.render = function render(engine) {
		if (this.background_update) {
			for (var y = 0; y < this.h; y++) {
				for (var x = 0; x < this.w; x++) {
					var x_offset = x * this.block_size;
					var y_offset = y * this.block_size;
					if (this.layout[y][x] == 1) {
						engine.graphics.back.draw_sprite(this.map_sprites(x, y), x_offset, y_offset, this.block_size, this.block_size);
					}
					else if (this.layout[y][x] == 2) {
						engine.graphics.back.draw_sprite('floor', x_offset, y_offset, this.block_size, this.block_size);
					}
					else if (this.layout[y][x] == 3) {
						engine.graphics.back.draw_sprite('close-door-' + this.map_sprites(x, y), x_offset, y_offset, this.block_size, this.block_size);
					}
					else if (this.layout[y][x] == 4) {
						engine.graphics.back.draw_sprite('open-door-' + this.map_sprites(x, y), x_offset, y_offset, this.block_size, this.block_size);
					}
					else if (this.layout[y][x] == 5) {
						engine.graphics.back.draw_sprite('solar', x_offset, y_offset, this.block_size, this.block_size);
					}
					else if (this.layout[y][x] == 6) {
						var wall_map = this.map_sprites(x, y);
						engine.graphics.back.draw_sprite(wall_map, x_offset, y_offset, this.block_size, this.block_size);
						for (var i = 0; i < wall_map.length; i++) {
							if (wall_map.charAt(i) == 'n') {
								switch (i) {
									case 0:
										if (this.is_valid_coordinates(x - 1, y) && this.is_floor(this.layout[y][x - 1])) {
											engine.graphics.back.draw_sprite('computer-l', x_offset, y_offset, this.block_size, this.block_size);
										}
										break;
									case 1:
										if (this.is_valid_coordinates(x, y - 1) && this.is_floor(this.layout[y - 1][x])) {
											engine.graphics.back.draw_sprite('computer-u', x_offset, y_offset, this.block_size, this.block_size);
										}
										break;
									case 2:
										if (this.is_valid_coordinates(x + 1, y) && this.is_floor(this.layout[y][x + 1])) {
											engine.graphics.back.draw_sprite('computer-r', x_offset, y_offset, this.block_size, this.block_size);
										}
										break;
									case 3:
										if (this.is_valid_coordinates(x, y + 1) && this.is_floor(this.layout[y + 1][x])) {
											engine.graphics.back.draw_sprite('computer-d', x_offset, y_offset, this.block_size, this.block_size);
										}
										break;
								}
							}
						}
					}
					else if (this.layout[y][x] == 7) {
						engine.graphics.back.draw_sprite('vacuum-door-' + this.map_sprites(x, y), x_offset, y_offset, this.block_size, this.block_size);
					}
					else if (this.layout[y][x] == 8) {
						engine.graphics.back.draw_sprite('vacuum-floor', x_offset, y_offset, this.block_size, this.block_size);
					}
				}
			}
			this.background_update = false;
		}
		for (var p = 0; p < this.people.length; p++) {
			this.people[p].render(engine, this);
		}
		if (this.is_game_over) {
			engine.graphics.front.draw_rectangle(0, 0, 800, 600, "rgba(17, 17, 17, 0.8)");
			if (this.game_result) {
				engine.graphics.front.draw_title(400, 300, 'You have won.', 56, "rgba(0, 255, 0, 1.0)");
			}
			else {
				engine.graphics.front.draw_title(400, 300, 'You have lost.', 56, "rgba(255, 0, 0, 1.0)");
			}
		}
	}
	this.highlight = function highlight(engine, x, y) {
		var x_offset = x * this.block_size;
		var y_offset = y * this.block_size;
		engine.graphics.back.draw_rectangle(x_offset, y_offset, this.block_size, this.block_size, "rgba(255, 0, 0, 0.8)");
	};
}
