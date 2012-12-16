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
	this.intents = [
		{
			task : 'move',
			destination : {
				x : 14,
				y : 13
			}
		},
		{
			task : 'wait',
			duration : 5000,
			text : 'Computering'
		},
		{
			task : 'move',
			destination : {
				x : 20,
				y : 14
			}
		}
	];
	this.current_intent = -1;
	this.act_on_next_intent = function act_on_next_intent(level) {
		if (this.intents.length > 0) {
			this.current_intent = (this.current_intent + 1) % this.intents.length;
			var intent = this.intents[this.current_intent];
			if (intent.task === 'move') {
				/*
				this.path = this.find_path(level, this.x, this.y, intent.x, intent.y);
				if (this.path == null) {
					// TODO
				}
				*/
			}
			else if (intent.task === 'wait') {
				var self = this;
				this.waiting.duration = intent.duration;
				this.waiting.condition = function is_door_open(level) {
					return false;
				};
				this.waiting.on_success = function on_success(level) {
					// should never be called
				};
				this.waiting.on_failure = function on_failure(level) {
					self.stop_speaking();
					self.act_on_next_intent(level);
				};
				this.speak(intent.text);
			}
		}
	};
	this.xy_hash = function xy_hash(x, y) {
		return x.toString() + ',' + y.toString();
	};
	this.generate_graph = function generate_graph(level, x, y) {
		var self = this;
		var graph = new Object();
		var find_neighbours = function find_neighbours(x, y) {
			graph[self.xy_hash(x, y)] = {
				point : {
					x : x,
					y : y
				},
				neighbours : new Array()
			};
			for (var i = 0; i < 4; i++) {
				var x_n = x;
				var y_n = y;
				switch (i) {
					case 0: // l
						x_n = x - 1;
						break;
					case 1: // u
						y_n = y - 1;
						break;
					case 2: // r
						x_n = x + 1
						break;
					case 3: // d
						y_n = y + 1;
						break;
				}
				if (level.is_valid_coordinates(x_n, y_n) && !level.is_wall(level.layout[y_n][x_n])) {
					graph[self.xy_hash(x, y)].neighbours.push(self.xy_hash(x_n, y_n));
					if (typeof graph[self.xy_hash(x_n, y_n)] == 'undefined') {
						find_neighbours(x_n, y_n);
					}
				}
			}
		}
		find_neighbours(x, y);
		return graph;
	};
	this.find_path = function find_path(level, x_i, y_i, x_d, y_d) {
		var graph = this.generate_graph(level, x_i, y_i);
		
		var distances = new Object();
		var Q = new Object();
		
		for (v in graph) {
			distances[v] = Infinity;
			Q[v] = true;
		}
		
		var previous = new Object();
		distances[this.xy_hash(x_i, y_i)] = 0;
		
		while (Object.keys(Q).length > 0) {
			var u = null
			for (v in Q) {
				if (u == null || distances[u] > distances[v]) {
					u = v;
				}
			}
			
			if (u === this.xy_hash(x_d, y_d)) {
				var path = new Array();
				path.push(graph[u].point);
				while (typeof previous[u] != 'undefined') {
					path.unshift(graph[previous[u]].point);
					u = previous[u];
				}
				return path;
			}
			
			delete Q[u];
			if (distances[u] == Infinity) {
				break;
			}
			for (var i = 0; i < graph[u].neighbours.length; i++) {
				var v = graph[u].neighbours[i];
				var alt = distances[u] + 1;
				if (alt < distances[v]) {
					distances[v] = alt;
					previous[v] = u;
				}
			}
		}
		return null;
	};
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
				var intent = intents[this.current_intent];
				if (intent.type === 'move') {
					// 
				}
				else if (intent.type === 'wait') {
					//
				}
				
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
