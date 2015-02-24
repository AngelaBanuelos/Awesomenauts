
/* Game namespace */
var game = {

	// an object where to store game information
	data : {

		// score
		score : 0,
		//made the following global variables
		enemyBaseHealth: 10,
		playerBaseHealth: 10,
		enemyCreepHealth: 5,
		playerHealth: 10,
		enemyCreepAttack: 1,
		playerAttack: 1,
		// orcBAseDamage: 10,
		// orcBaseHealth: 100,
		// orcBaseSpeed: 3,
		// orcBaseDefense: 0,
		playerAttackTimer: 1000,
		enemyCreepAttackTimer: 1000,
		playerMoveSpeed: 5,
		creepMoveSpeed: 5,
		gameManager: "",
		player: "",
		exp: 0,
		gold: 0, 
		exp1: 0,
		exp2: 0,
		exp3: 0,
		exp4: 0

	},
	
	
	// Run on page load.
	"onload" : function () {
	// Initialize the video.
	//changed the height and width to fit the screen.
	if (!me.video.init("screen",  me.video.CANVAS, 1067, 600, true, '1.0')) {
		alert("Your browser does not support HTML5 canvas.");
		return;
	}

	// add "#debug" to the URL to enable the debug Panel
	if (document.location.hash === "#debug") {
		window.onReady(function () {
			me.plugin.register.defer(this, debugPanel, "debug");
		});
	}

	// Initialize the audio.
	me.audio.init("mp3,ogg");

	// Set a callback to run when loading is complete.
	me.loader.onload = this.loaded.bind(this);

	// Load the resources.
	me.loader.preload(game.resources);

	// Initialize melonJS and display a loading screen.
	me.state.change(me.state.LOADING);
},

	// Run on game resources loaded.
	"loaded" : function () {
		//registered a player entity
		me.pool.register("player", game.PlayerEntity, true);
		//registered a second player
		me.pool.register("Player2", game.Player2, true);

		//registered a playerbase to entity 
		me.pool.register("PlayerBase", game.PlayerBaseEntity);
		//registered a enemybase to entity.
		me.pool.register("EnemyBase", game.EnemyBaseEntity);
		me.pool.register("EnemyCreep", game.EnemyCreep, true);
		me.pool.register("GameManager", game.GameManager);

		me.state.set(me.state.MENU, new game.TitleScreen());
		me.state.set(me.state.PLAY, new game.PlayScreen());

		// Start the game.
		//changed it so it starts on the title screen and not the game
		me.state.change(me.state.MENU);
	}
};
