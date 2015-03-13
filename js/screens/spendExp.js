game.SpendExp = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {
	//adds and loads the title image	
		me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage('exp-screen')), -10); // TODO
		me.input.bindKey(me.input.KEY.F1, "F1");
		me.input.bindKey(me.input.KEY.F2, "F2");
		me.input.bindKey(me.input.KEY.F3, "F3");
		me.input.bindKey(me.input.KEY.F4, "F4");
		me.input.bindKey(me.input.KEY.F5, "F5");
		me.game.world.addChild(new (me.Renderable.extend({
			init: function(){
				//changed the x, y, width and height
				this._super(me.Renderable, "init", [10, 10, 300, 50])
				//makes th efont arial and font size 46 and the color white.
				this.font = new me.Font("Arial", 26, "white");
			},
			draw: function(renderer){
				//writes "Awesomenauts" at those specific coordinates
				//changed the position of "Start A New Game"
				this.font.draw(renderer.getContext(), "Press F1-F4 To Buy, F5 To Skip", this.pos.x, this.pos.y);
				this.font.draw(renderer.getContext(), "Current EXP: " + game.data.exp.toString(), this.pos.x + 100, this.pos.y + 50);
				this.font.draw(renderer.getContext(), "F1:INCRESE GOLD PRODUCTION Current Level" + game.data.exp1.toString() + "Cost:" + ((game.data.exp1 + 1) * 10), this.pos.x + this.pos.y + 100);
				this.font.draw(renderer.getContext(), "F2:ADD STARTING GOLD " + , this.pos.x + this.pos.y + 150);
				this.font.draw(renderer.getContext(), "F3:INCREASE ATTACK DAMAGE " + , this.pos.x + this.pos.y + 200);
				this.font.draw(renderer.getContext(), "F4: INCREASE STARTING HEALTH" + , this.pos.x + this.pos.y + 250);
			}
		})));

this.handler= me.event.sunbscribe(me.evemt.KEYDOWN, function (action, keyCode, edge){
if(action === "F1"){

}else if(action === "F2"){

}else if(action === "F3"){
	
}else if(action === "F4"){
	
}else if(action === "F5"){
	me.state.change(me.state.PLAY);
}
});
	
},
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		me.input.unbindKey(me.input.KEY.F1, "F1");
		me.input.unbindKey(me.input.KEY.F2, "F2");
		me.input.unbindKey(me.input.KEY.F3, "F3");
		me.input.unbindKey(me.input.KEY.F4, "F4");
		me.input.unbindKey(me.input.KEY.F5, "F5");
		me.events.unsubscribe(this.handler);
		}
});
