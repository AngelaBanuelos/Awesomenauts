game.PlayScreen = me.ScreenObject.extend({
	/**
	 *  action to perform on state change
	 */
	onResetEvent: function() {
		// reset the score
		game.data.score = 0;

		//telling it what to look at as far as maps
		me.levelDirector.loadLevel("level01");
		this.resetPlayer(0, 420);
		
		var gamemanager = me.pool.pull("GameManager", 0, 0, {});
		me.game.world.addChild(gamemanager, 0);

		//moves the player to the right once the right arrow is pushed 
		me.input.bindKey(me.input.KEY.RIGHT, "right");
		me.input.bindKey(me.input.KEY.LEFT, "left");
		me.input.bindKey(me.input.KEY.SPACE, "jump");


		me.input.bindKey(me.input.KEY.A, "attack");
		// add our HUD to the game world
		this.HUD = new game.HUD.Container();
		me.game.world.addChild(this.HUD);
		//this plays the background music
		//me.audio.playTrack("coolKid");
	},


	/**
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		// remove the HUD from the game world
		me.game.world.removeChild(this.HUD);
	},

	resetPlayer: function(x, y){
		// set a value to the variable player.
		 game.data.player = me.pool.pull("player", 0, 420, {});
		//sets the height of where the player appears on the screen.
		me.game.world.addChild(game.data.player, 5); 


	}
});
