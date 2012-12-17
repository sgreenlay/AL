/*
 * LD25
 * Scott Greenlay
 * game.js
 */

 function LD25 () {
	this.mode = 'play';
	this.init = function init(engine) {
		this.level = new LD25Level();
		this.editor = new LD25Editor(this.level);
		this.sprites = new LD25Sprites();
		engine.graphics.back.load_sprites(this.sprites);
		engine.graphics.front.load_sprites(this.sprites);
		this.level.background_update = true;
	}
	this.logic = function logic(engine, elapsed) {
		if (!this.level.is_game_over && engine.keyboard.is_key_down(69)) { // 'E'
			if (engine.keyboard[69]) {
				if (this.mode === 'editor') {
					this.mode = 'play';
					this.level.background_update = true;
				}
				else {
					this.mode = 'editor';
				}
				engine.keyboard[69] = false;
			}
		}
		if (this.mode === 'editor') {
			this.editor.logic(engine, elapsed);
		}
		else {
			this.level.logic(engine, elapsed);
		}
	}
	this.render = function render(engine) {
		engine.graphics.front.clear();
		if (this.mode === 'editor') {
			engine.graphics.back.clear();
			this.editor.render(engine);
		}
		else {
			if (this.level.background_update) {
				engine.graphics.back.clear();
			}
			this.level.render(engine);
		}
	}
}
