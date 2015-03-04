game.TitleScreen = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {
	//adds and loads the title image	
		me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage('title-screen')), -10); // TODO
		
		me.game.world.addChild(new (me.Renderable.extend({
			init: function(){
				//
				this._super(me.Renderable, "init", [270, 240, 300, 50])
				//makes th efont arial and font size 46 and the color white.
				this.font = new me.Font("Arial", 46, "white");
				me.input.registerPointerEvent('pointerdown', this, this.newGame.bind(this), true);
			},
			draw: function(renderer){
				//writes "Awesomenauts" at those specific coordinates
				this.font.draw(renderer.getContext(), "Start A New Game", this.pos.x, this.pos.y);
			},

			update: function(dt){
				return true;
			},
			newGame: function(){
				me.input.releasePointerEvent('pointerdown', this);
				me.save.remove('exp');
				me.save.remove('exp1');
				me.save.remove('exp2');
				me.save.remove('exp3');
				me.save.remove('exp4');
				me.state.change(me.state.PLAY);
			}

		})));
	},
	
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		}
});
