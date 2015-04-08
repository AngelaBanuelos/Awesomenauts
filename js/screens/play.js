game.PlayScreen = me.ScreenObject.extend({
	/**
	 *  action to perform on state change
	 */
	onResetEvent: function() {
		// reset the score
		game.data.score = 0;

		//telling it what to look at as far as maps
		me.levelDirector.loadLevel("level01");
		console.log(game.data.exp);
		console.log(game.data.exp2);
		//restarts the player at the left of the screen
		this.resetPlayer(0, 420);
		//its not gonna be visible
		var gameTimerManager = me.pool.pull("GameTimerManager", 0, 0, {});
		me.game.world.addChild(gameTimerManager, 0);
		//its not gonna be visible
		var heroDeathManager = me.pool.pull("HeroDeathManager", 0, 0, {});
		me.game.world.addChild(heroDeathManager, 0);
		//its not gonna be visible
		var experienceManager = me.pool.pull("ExperienceManager", 0, 0, {});
		me.game.world.addChild(experienceManager, 0);		
		//its not gonna be visible
		var spendGold = me.pool.pull("SpendGold", 0, 0, {});
		me.game.world.addChild(spendGold, 0);	

		 game.data.minimap = me.pool.pull("minimap", 10, 10, {});
		 me.game.world.addChild(game.data.minimap, 30);	


		me.input.bindKey(me.input.KEY.B, "buy");
		me.input.bindKey(me.input.KEY.Q, "skill");
		me.input.bindKey(me.input.KEY.W, "skill2");
		me.input.bindKey(me.input.KEY.E, "skill3");
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
	//created a reset function
	resetPlayer: function(x, y){
		// set a value to the variable player.
		 game.data.player = me.pool.pull("player", 0, 420, {});
		//sets the height of where the player appears on the screen.
		me.game.world.addChild(game.data.player, 5);
		game.data.miniPlayer = me.pool.pull("miniplayer", 10, 10, {});
		me.game.world.addChild(game.data.miniPlayer, 31);


	}
});
