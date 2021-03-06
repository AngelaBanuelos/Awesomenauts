game.resources = [

	/* Graphics. 
	 * @example
	 * {name: "example", type:"image", src: "data/img/example.png"},
	 */
	 //added the background images to load on the map
	 {name: "background-tiles", type:"image", src: "data/img/background-tiles.png"},
	 //added the meta tile images to load on the map
	 {name: "meta-tiles", type:"image", src: "data/img/meta-tiles.png"},
	 //added orcspear images to load on the map
	 {name: "player", type:"image", src: "data/img/orcSpear.png"},
	 //added tower image to load on the map.
	 {name: "tower", type:"image", src: "data/img/tower_round.svg.png"},
	 {name: "creep1", type:"image", src: "data/img/brainmonster.png"},
	 // loads second player image
	 {name: "Player2", type:"image", src: "data/img/gloop.png"},
	 //added title image so i can use it 
	{name: "title-screen", type:"image", src: "data/img/title.png"},
	//added exp-sreen image so i can use it 
	{name: "exp-screen", type:"image", src: "data/img/loadpic.png"},
	//added hero image so i can use it 
	{name: "hero", type:"image", src: "data/img/skeletonDagger.png"},
	//added gold-screen image so i can use it 
	{name: "gold-screen", type:"image", src: "data/img/spend.png"},
	//added load-screen image so i can use it 
	{name: "load-screen", type:"image", src: "data/img/loadpic.png"},
	//added new-screen image so i can use it 
	{name: "new-screen", type:"image", src: "data/img/newpic.png"},
	//added spear image so i can use it 
	{name: "spear", type:"image", src: "data/img/spear.png"},
	//added minimap image so i can use it 
	{name: "minimap", type:"image", src: "data/img/minimap.png"},
	/* Atlases 
	 * @example
	 * {name: "example_tps", type: "tps", src: "data/img/example_tps.json"},
	 */
		
	/* Maps. 
	 * @example
	 * {name: "example01", type: "tmx", src: "data/map/example01.tmx"},
	 * {name: "example01", type: "tmx", src: "data/map/example01.json"},
 	 */
 	 //added the map to connect it to the localhost
 	 {name: "level01", type: "tmx", src: "data/map/test.tmx"},
	/* Background music. 
	 * @example
	 * {name: "example_bgm", type: "audio", src: "data/bgm/"},
	 */	
	 //loads background music
	 {name: "coolKid", type: "audio", src: "data/bgm/"},
	/* Sound effects. 
	 * @example
	 * {name: "example_sfx", type: "audio", src: "data/sfx/"}
	 */
	 //loads the sound effect
	 {name: "jump", type: "audio", src: "data/sfx/"}
];
