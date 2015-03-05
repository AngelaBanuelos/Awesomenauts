game.TitleScreen = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {
	//adds and loads the title image	
		me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage('title-screen')), -10); // TODO
		
		me.game.world.addChild(new (me.Renderable.extend({
			init: function(){
				//changed the x, y, width and height
				this._super(me.Renderable, "init", [270, 240, 300, 50])
				//makes th efont arial and font size 46 and the color white.
				this.font = new me.Font("Arial", 46, "white");
				//registered the pointer to start new game
				me.input.registerPointerEvent('pointerdown', this, this.newGame.bind(this), true);
			},
			draw: function(renderer){
				//writes "Awesomenauts" at those specific coordinates
				//changed the position of "Start A New Game"
				this.font.draw(renderer.getContext(), "Start A New Game", this.pos.x, this.pos.y);
			},
			//listens for the mouse
			update: function(dt){
				return true;
			},
			//funciton to start a new game
			newGame: function(){
				//calls the pointerdown registered input
				me.input.releasePointerEvent('pointerdown', this);
				//this removes the past experience points and saves the new one
				me.save.remove('exp');
				//this removes the past experience points and saves the new one
				me.save.remove('exp1');
				//this removes the past experience points and saves the new one
				me.save.remove('exp2');
				//this removes the past experience points and saves the new one
				me.save.remove('exp3');
				//this removes the past experience points and saves the new one
				me.save.remove('exp4');
				me.state.change(me.state.PLAY);
			}

		})));
		
		me.game.world.addChild(new (me.Renderable.extend({
			init: function(){
				//changed the x, y, width and height
				this._super(me.Renderable, "init", [380, 340, 250, 50])
				//makes th efont arial and font size 46 and the color white.
				this.font = new me.Font("Arial", 46, "white");
			//registered the pointer to start new game
				me.input.registerPointerEvent('pointerdown', this, this.newGame.bind(this), true);
			},
			draw: function(renderer){
				//writes "Awesomenauts" at those specific coordinates
				//changed the position of "CONTINUE"
				this.font.draw(renderer.getContext(), "CONTINUE", this.pos.x, this.pos.y);
			},
			//listens for the mouse
			update: function(dt){
				return true;
			},
			//funciton to start a new game
			newGame: function(){
				game.data.exp = me.save.exp;
				game.data.exp1 = me.save.exp1;
				game.data.exp2 = me.save.exp2;
				game.data.exp3 = me.save.exp3;
				game.data.exp4 = me.save.exp4;
				//calls the pointerdown registered input
				me.input.releasePointerEvent('pointerdown', this);
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
