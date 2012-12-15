/*
 * LD25
 * Scott Greenlay
 * game.js
 */

 function LD25 () {
	this.mode = 'editor';
	this.init = function init(engine) {
		this.level = new LD25Level();
		this.editor = new LD25Editor(this.level);
		engine.graphics.load_sprites(new LD25Sprites());
	}
	this.logic = function logic(engine, elapsed) {
		if (engine.keyboard.is_key_down(69)) { // 'E'
			if (engine.keyboard[69]) {
				if (this.mode === 'editor') {
					this.mode = 'play';
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
	}
	this.render = function render(engine) {
		engine.graphics.clear();
		 
		if (this.mode === 'editor') {
			this.editor.render(engine);
		}
		else {
			this.level.draw(engine);
		}
	}
}
