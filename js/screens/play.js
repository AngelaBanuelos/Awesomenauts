game.PlayScreen = me.ScreenObject.extend({
	/**
	 *  action to perform on state change
	 */
	onResetEvent: function() {
		// reset the score
		game.data.score = 0;

		//telling it what to look at as far as maps
		me.levelDirector.loadLevel("level01");
		// add our HUD to the game world

		var player = me.pool.pull("player", 0, 420, {});
		me.game.world.addChild(player, 5); 

		this.HUD = new game.HUD.Container();
		me.game.world.addChild(this.HUD);
	},


	/**
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		// remove the HUD from the game world
		me.game.world.removeChild(this.HUD);
	}
});
