game.MiniMap = me.Entity.extend({
	//initializes the function
	init: function(x, y, settings) {
		this._super(me.Entity, "init", [x, y, {
			 //makes the image of the brain monster appear
			image: "minimap", 
			//the width of the space created
			width: 279,
			//the height of the space created
			height: 155,
			//width for the brain monster 
			spritewidth: "279",
			//height for the brain monster
			spriteheight: "155",
			 //function of the shape of the screen 
			getShape: function() {
				 //the posiiton of the brain monster
                    //0 , 0 is the origin
				return (new me.Rect(0, 0, 279, 155)).toPolygon();
			}
		}]);
		this.floating = true;
	}
});