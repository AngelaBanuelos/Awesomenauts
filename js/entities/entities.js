game.PlayerEntity = me.Entity.extend({
	//initializes the function
	init: function(x, y, settings){
		this._super(me.Entity, 'init', [x, y, {
			// makes the image of the player appear.
			image: "player", 
			//width of the space created
			width: 64,
			//height of the space created
			height: 64,
			//width for the player
			spritewidth: "64",
			//height for the player
			spriteheight: "64",
			//function of the shape of the screen
			getShape: function(){
				//creates a rectangle by 64 by 64 
				// 0, 0 is the origin
				return(new me.Rect(0, 0, 64, 64)).toPolygon();
			}
		}]);
	},
	// updates the fucntion 
update: function(){

}

});