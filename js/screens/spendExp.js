game.SpendExp = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {
	//adds and loads the title image	
		me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage('exp-screen')), -10); // TODO
		
		me.game.world.addChild(new (me.Renderable.extend({
			init: function(){
				//changed the x, y, width and height
				this._super(me.Renderable, "init", [10, 10, 300, 50])
				//makes th efont arial and font size 46 and the color white.
				this.font = new me.Font("Arial", 46, "white");
			},
			draw: function(renderer){
				//writes "Awesomenauts" at those specific coordinates
				//changed the position of "Start A New Game"
				this.font.draw(renderer.getContext(), "Press F1-F4 To Buy, F5 To Skip", this.pos.x, this.pos.y);
				this.font.draw(renderer.getContext(), "Current EXP: " + game.data.exp.toString(), this.pos.x + 100, this.pos.y + 50);
				this.font.draw(renderer.getContext(), "F1:INCRESE GOLD PRODUCTION " + game.data.exp.toString(), this.pos.x + 150, this.pos.y + 100);
				this.font.draw(renderer.getContext(), "F2:ADD STARTING GOLD " + game.data.exp.toString(), this.pos.x + 200, this.pos.y + 150);
				this.font.draw(renderer.getContext(), "F3:INCREASE ATTACK DAMAGE " + game.data.exp.toString(), this.pos.x + 300, this.pos.y + 200);
				this.font.draw(renderer.getContext(), "F4: INCREASE STARTING HEALTH" + game.data.exp.toString(), this.pos.x + 400, this.pos.y + 250);
			}
		})));
		},
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		}
});
