/*
 * LD25
 * Scott Greenlay
 * person.js
 */

function LD25Person(x, y, num, intents) {
	this.number = num;
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
	this.speed = 1.0;
	this.intents = intents;
	this.current_intent = -1;
	this.act_on_intent = function act_on_intent(level, intent) {
		if (typeof intent.preaction != 'undefined') {
			intent.preaction(level);
		}
		if (intent.task === 'move') {
			this.path = find_path(level, this.x, this.y, intent.destination.x, intent.destination.y);
			if (this.path == null) {
				return false;
			}
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
				if (typeof intent.text != 'undefined') {
					self.stop_computer();
				}
				if (typeof intent.say != 'undefined') {
					self.stop_speaking();
				}
				self.act_on_next_intent(level);
			};
			if (typeof intent.text != 'undefined') {
				this.computer(intent.text);
			}
			if (typeof intent.say != 'undefined') {
				this.speak(intent.say);
			}
		}
		else if (intent.task === 'retry') {
			if (this.trying_to_fix_al) {
				var al_opened_door = false;
				for (var i = 0; i < intent.doors.length; i++) {
					if (level.is_door_open(level.layout[intent.doors[i].y][intent.doors[i].x])) {
						al_opened_door = true;
						break;
					}
				}
				if (al_opened_door && this.act_on_intent(level, this.old_intents[this.old_current_intent]))
				{
					this.trying_to_fix_al = false;
					this.current_intent = this.old_current_intent;
					this.intents = this.old_intents;
					this.old_current_intent = -1;
					this.old_intents = null;
				}
			}
		}
		else if (intent.task === 'endgame') {
			level.game_over();
		}
		return true;
	};
	this.act_on_next_intent = function act_on_next_intent(level) {
		if (this.intents && this.intents.length > 0) {
			this.current_intent = (this.current_intent + 1) % this.intents.length;
			return this.act_on_intent(level, this.intents[this.current_intent]);
		}
		return false;
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
	this.computer = function computer(text) {
		this['compute'] = text;
	};
	this.stop_computer = function stop_computer() {
		delete this['compute'];
	};
	this.trying_to_fix_al = false;
	this.try_to_fix_al = function try_to_stop_al(level, x, y) {
		
		if (this.trying_to_fix_al) {
			for (var i = 0; i < this.intents[1].doors.length; i++) {
				if (!level.is_door_open(level.layout[this.intents[1].doors[i].y][this.intents[1].doors[i].x])) {
					level.layout[this.intents[1].doors[i].y][this.intents[1].doors[i].x] = 1;
				}
			}
		}
		
		this.path = find_path_to_goal(level, this.x, this.y, function (x, y) {
			for (var i = 0; i < 4; i++) {
				switch (i) {
					case 0:
						if (level.is_valid_coordinates(x - 1, y) && level.is_computer(level.layout[y][x - 1])) {
							return true;
						}
						break;
					case 1:
						if (level.is_valid_coordinates(x, y - 1) && level.is_computer(level.layout[y - 1][x])) {
							return true;
						}
						break;
					case 2:
						if (level.is_valid_coordinates(x + 1, y) && level.is_computer(level.layout[y][x + 1])) {
							return true;
						}
						break;
					case 3:
						if (level.is_valid_coordinates(x, y + 1) && level.is_computer(level.layout[y + 1][x])) {
							return true;
						}
						break;
				}
			}
			return false;
		});
		
		if (this.path != null) {
			if (this.trying_to_fix_al) {
				var path_to_computer = this.path;
				var can_act_on_intent = this.act_on_intent(level, this.old_intents[this.old_current_intent]);
				
				this.stop_speaking();
				
				for (var i = 0; i < this.intents[1].doors.length; i++) {
					if (level.layout[this.intents[1].doors[i].y][this.intents[1].doors[i].x] == 1) {
						level.layout[this.intents[1].doors[i].y][this.intents[1].doors[i].x] = 3;
					}
				}
				
				if (can_act_on_intent) {
					this.trying_to_fix_al = false;
					this.current_intent = this.old_current_intent;
					this.intents = this.old_intents;
					this.old_current_intent = -1;
					this.old_intents = null;
					return;
				}
				
				this.path = path_to_computer;
				this.intents[1].doors.unshift({
					x : x,
					y : y
				});
				
				this.speak('Stupid computer...');
			}
			else {
				var self = this;
				this.trying_to_fix_al = true;
		
				this.old_intents = this.intents;
				this.old_current_intent = this.current_intent;
				
				this.current_intent = -1;
				
				this.intents = [
					{
						task : 'wait',
						duration : 5000,
						text : 'door -f open',
						preaction : function preaction(level) {
							self.stop_speaking();
						}
					},
					{
						task : 'retry',
						doors : [{
							x : x,
							y : y
						}]
					},
					{
						task : 'wait',
						duration : 3000,
						say : 'Damn it, I\'ll have to restart AL.'
					},
					{
						task : 'wait',
						duration : 3000,
						text : 'killall AL'
					},
					{
						task : 'endgame'
					}
				];
				
				this.speak('Stupid computer...');
			}
		}
		else {
			if (this.trying_to_fix_al) {
				for (var i = 0; i < this.intents[1].doors.length; i++) {
					if (level.layout[this.intents[1].doors[i].y][this.intents[1].doors[i].x] == 1) {
						level.layout[this.intents[1].doors[i].y][this.intents[1].doors[i].x] = 3;
					}
				}
				this.intents[1].doors.unshift({
					x : x,
					y : y
				});
			}
			
			var self = this;
			this.waiting.duration = 1000;
			this.waiting.condition = function can_run(level) {
				return false;
			};
			this.waiting.on_success = function on_success(level) {
				// This should never be called...
			};
			this.waiting.on_failure = function on_failure(level) {
				self.stop_speaking();
				self.try_to_fix_al(level, x, y);
			};
			this.speak("I'm trapped!");
		}
	};
	this.logic = function logic(engine, elapsed, level) {
		if (this.waiting.duration > 0) {
			if (this.waiting.condition(level)) {
				this.waiting.duration = 0;
				if (this.waiting.on_success) {
					this.waiting.on_success(level);
				}
			}
			else {
				this.waiting.duration -= elapsed;
				if (this.waiting.duration <= 0) {
					this.waiting.duration = 0;
					if (this.waiting.on_failure) {
						this.waiting.on_failure(level);
					}
				}
			}
		}
		else if (!this.path && this.current_intent == -1) {
			if (!this.act_on_next_intent(level)) {
				var self = this;
				this.waiting.duration = Infinity;
				this.waiting.condition = function has_intent(level) {
					return (this.intents && this.intents.length > 0);
				};
				this.waiting.on_success = function on_success(level) {
					self.stop_speaking();
					self.act_on_next_intent(level);
				};
				this.waiting.on_failure = function on_failure(level) {
					// This should never be called
				};
				this.speak("I need something to do...");
			}
		}
		else {
			this.offset_x += this.move_x * (level.block_size * this.speed) * (elapsed / 1000.0);
			this.offset_y += this.move_y * (level.block_size * this.speed) * (elapsed / 1000.0);
			
			var overrun_x = Math.abs(this.offset_x);
			var overrun_y = Math.abs(this.offset_y);
			
			if (overrun_x >= level.block_size) {
				overrun_x -= level.block_size;
				this.offset_x = 0;
				this.x += this.move_x;
			}
			if (overrun_y >= level.block_size) {
				overrun_y -= level.block_size;
				this.offset_y = 0;
				this.y += this.move_y;
			}
			
			if (this.offset_x == 0 && this.offset_y == 0) {
				if (!this.path) {
					this.speak("I don't have anywhere to go!");
				}
				else if (this.path.length == 0) {
					this.move_x = 0;
					this.move_y = 0;
					this.act_on_next_intent(level);
				}
				else {				
					var next_point = this.path.shift();
				
					var dx = next_point.x - this.x;
					var dy = next_point.y - this.y;
				
					var x = this.x + dx;
					var y = this.y + dy;
				
					if (level.is_door_closed(level.layout[y][x])) {
						if (this.trying_to_fix_al) {
							var self = this;
							this.waiting.duration = 7500;
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
							
								level.layout[y][x] = 1;
								self.try_to_fix_al(level, x, y);
								level.layout[y][x] = 3;
							};
							this.speak("Come on AL!");
						}
						else {
							var self = this;
							this.waiting.duration = 7500;
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
							
								level.layout[y][x] = 1;
								var can_find_new_path = self.act_on_intent(level, self.intents[self.current_intent]);
							
								self.stop_speaking();
							
								if (!can_find_new_path) {
									self.try_to_fix_al(level, x, y);
								}
								level.layout[y][x] = 3;
							};
							this.speak("Open the door AL!");
						}
					}
					else {
						this.move_x = dx;
						this.offset_x = overrun_x * this.move_x;
						this.move_y = dy;
						this.offset_y = overrun_y * this.move_y;
					}
				}
			}
		}
	};
	this.render = function render(engine, level) {
		var x_offset = Math.floor(this.x * level.block_size + this.offset_x);
		var y_offset = Math.floor(this.y * level.block_size + this.offset_y);
		engine.graphics.front.draw_sprite('person-live', x_offset, y_offset, level.block_size, level.block_size);
		if (typeof this['speech'] != 'undefined') {
			engine.graphics.front.draw_speech_bubble(x_offset + level.block_size / 2, y_offset, this['speech'], 14, "rgba(100, 100, 100, 1.0)", "rgba(255, 255, 255, 1.0)", 2);
		}
		if (typeof this['compute'] != 'undefined') {
			engine.graphics.front.draw_speech_bubble(x_offset + level.block_size / 2, y_offset, this['compute'], 14, "rgba(105, 201, 21, 1.0)", "rgba(0, 0, 0, 1.0)", 2);
		}
	};
};
