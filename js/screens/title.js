game.TitleScreen = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {
	//adds and loads the title image	
		me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage('title-screen')), -10); // TODO
		//when the enter key is pressed 
		me.input.bindKey(me.input.KEY.ENTER, "start");
		//
		me.game.world.addChild(new (me.Renderable.extend({
			init: function(){
				//
				this._super(me.Renderable, "init", [510, 30, me.game.viewport.width, me.game.viewport.height])
				//makes th efont arial and font size 46 and the color white.
				this.font = new me.Font("Arial", 46, "white");

			},
			draw: function(renderer){
				//writes "Awesomenauts" at those specific coordinates
				this.font.draw(renderer.getContext(), "Awesomenauts!", 450, 130);
				//writes out "Pess enter to play" at those specific coordinates
				this.font.draw(renderer.getContext(), "Press Enter To Play", 250, 530);
			}

		})));
		//
		this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge){
			if(action === "start"){
				me.state.change(me.state.PLAY);
			}
		});

	},
	
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		//
		me.input.unbindKey(me.input.KEY.ENTER); // TODO
		//
		me.event.unsubscribe(this.handler);
	}
});
