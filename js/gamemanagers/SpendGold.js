game.SpendGold = Object.extend({
init: function(x, y, settings){
        //the time that we want to use
        this.now = new Date().getTime();
        //keep track of the last time we made a creep happen
        this.lastBuy = new Date().getTime();
        //doesnt pause the game
        this.paused = false;
        //makes sure it is always updating
        this.alwaysUpdate = true;
        this.updateWhenPaused = true;
        this.buying = false;
},

update: function(){
    //the time that we want to use
        this.now = new Date().getTime();
    if(me.input.isKeyPressed("buy") && this.now-this.lastBuy >=1000){ 
        this.lastBuy = this.now;
        if(!this.buying){
            this.startBuying();
        }else{
            this.stopBuying();
        }
    }

    this.checkBuyKeys();

    return true;
},
startBuying: function(){
this.buying = true;
me.state.pause(me.state.PLAY);
game.data.pausePos = me.game.viewport.localToWorld(0, 0);
game.data.buyscreen = new me.Sprite(game.data.pausePos.x, game.data.pausePos.y, me.loader.getImage('gold-screen'));
game.data.buyscreen.updateWhenPaused = true;
game.data.buyscreen.setOpacity(0.8);
me.game.world.addChild(game.data.buyscreen, 34);
game.data.player.body.setVelocity(0, 0);
//bind the key to F1
me.input.bindKey(me.input.KEY.F1, "F1", true);
//bind the key to F2
me.input.bindKey(me.input.KEY.F1, "F2", true);
//bind the key to F3
me.input.bindKey(me.input.KEY.F1, "F3", true);
//bind the key to F4
me.input.bindKey(me.input.KEY.F1, "F4", true);
//bind the key to F5
me.input.bindKey(me.input.KEY.F1, "F5", true);
//bind the key to F6
me.input.bindKey(me.input.KEY.F1, "F6", true);
this.setBuyText();
},
setBuyText: function(){
    //creates setbuytext function right after
   game.data.buytext = new (me.Renderable.extend({
            init: function(){
                //changed the x, y, width and height
                this._super(me.Renderable, "init", [game.data.pausePos.x, game.data.pausePos.y, 300, 50]);
                //makes th efont arial and font size 46 and the color white.
                this.font = new me.Font("Arial", 26, "white");
                this.updateWhenPaused = true;
                this.alwaysUpdate = true;
            },
            draw: function(renderer){
                //writes "Press F1-F6 To Buy, B TO EXIT. Current Gold" at those specific coordinates
                //writes out something drifferent for all 6
                //changed the position of "Start A New Game" 
                this.font.draw(renderer.getContext(), "Press F1-F6 To Buy, B TO EXIT. Current Gold: "+ game.data.gold , this.pos.x, this.pos.y + 40);
                this.font.draw(renderer.getContext(), "Skill 1: Increase Damage. Current Level: " + game.data.skill1 + " Cost: " + ((game.data.skill1+1)*10),this.pos.x, this.pos.y + 80);
                this.font.draw(renderer.getContext(), "Skill 2: Run Faster! Current Level: " + game.data.skill2 + " Cost: " + ((game.data.skill2+1)*10) , this.pos.x, this.pos.y + 120);
                this.font.draw(renderer.getContext(), "Skill 3: Increase health. Current Level: " + game.data.skill3 + " Cost: " + ((game.data.skill3+1)*10), this.pos.x, this.pos.y + 160);
                this.font.draw(renderer.getContext(), "Skill 4: Q Ability: Speed Burst. Current Level:   " + game.data.ability1 + " Cost: " + ((game.data.ability1+1)*10), this.pos.x, this.pos.y + 200);
                this.font.draw(renderer.getContext(), "Skill 5: W Ability: Eat Your Creep For Health: " + game.data.ability2 + " Cost: " + ((game.data.ability2+1)*10), this.pos.x, this.pos.y + 240);
                this.font.draw(renderer.getContext(), "Skill 6: E Ability: Throw Your Spear: " + game.data.ability3 + " Cost: " + ((game.data.ability3+1)*10), this.pos.x, this.pos.y + 280);
            }
        }));
me.game.world.addChild(game.data.buytext, 35);
},

stopBuying: function(){
this.buying = false;
me.state.resume(me.state.PLAY);
game.data.player.body.setVelocity(game.data.playerMoveSpeed, 20);
me.game.world.removeChild(game.data.buyscreen);
//unbind all 6keys
me.input.unbindKey(me.input.KEY.F1, "F1", true);
me.input.unbindKey(me.input.KEY.F2, "F2", true);
me.input.unbindKey(me.input.KEY.F3, "F3", true);
me.input.unbindKey(me.input.KEY.F4, "F4", true);
me.input.unbindKey(me.input.KEY.F5, "F5", true);
me.input.unbindKey(me.input.KEY.F6, "F6", true);
me.game.world.removeChild(game.data.buytext);
},

checkBuyKeys: function() {
    //if F1 is pressed check the sot and buy 
    if(me.input.isKeyPressed("F1")){
         if(this.checkCost(1)){
            this.makePurchase(1);
         }
         //if F2 is pressed check cost and purchase
    }else if(me.input.isKeyPressed("F2")){
        if(this.checkCost(2)){
            this.makePurchase(2);
         }
         //if F3 is pressed check cost and purchase
    }else if(me.input.isKeyPressed("F3")){
        if(this.checkCost(3)){
            this.makePurchase(3);
         }
          //if F4 is pressed check cost and purchase
    }else if(me.input.isKeyPressed("F4")){
        if(this.checkCost(4)){
            this.makePurchase(4);
         }
          //if F5 is pressed check cost and purchase
    }else if(me.input.isKeyPressed("F5")){ 
        if(this.checkCost(5)){
            this.makePurchase(5);
         }
          //if F6 is pressed check cost and purchase
    }else if(me.input.isKeyPressed("F6")){   
        if(this.checkCost(6)){
            this.makePurchase(6);
         }
    }
},
//this function checks/updates the cost of an item
    checkCost: function(skill){
        //checks the cost
        if(skill===1 && (game.data.gold >= ((game.data.skill1+1)*10))){
            return true;
            //checks the cost
        }else if(skill===2 && (game.data.gold >= ((game.data.skill2+1)*10))){
            return true;
            //checks the cost
        }else if(skill===3 && (game.data.gold >= ((game.data.skill3+1)*10))){
            return true;
            //checks the cost
        }else if(skill===4 && (game.data.gold >= ((game.data.ability1+1)*10))){
            return true;
            //checks the cost
        }else if(skill===5 && (game.data.gold >= ((game.data.ability2+1)*10))){
            return true;
            //checks the cost
        }else if(skill===6 && (game.data.gold >= ((game.data.ability3+1)*10))){
            return true;
            //checks the cost
        }else{
            return false;
        }
},
//this function makes the purchase once the cost is checked
    makePurchase: function(skill){ 
        //makes purchase
        if(skil === 1){
        game.data.gold -= ((game.data.skill1 +1)*10);
        game.data.skill1 += 1;
        game.dta.player.attack += 1;
         //makes purchase
    }else if(skill === 2){
        game.data.gold -= ((game.data.skil2 +1)*10);
        game.data.skill2 += 1;
         //makes purchase
    }else if(skill === 3){
        game.data.gold -= ((game.data.skill3 +1)*10);
        game.data.skill3 += 1;
         //makes purchase
    }else if(skill === 4){
        game.data.gold -= ((game.data.ability1 +1)*10);
        game.data.ability1 += 1;
         //makes purchase
    }else if(skill === 5){
        game.data.gold -= ((game.data.ability2 +1)*10);
        game.data.ability2 += 1;
         //makes purchase
    }else if(skill === 6){
        game.data.gold -= ((game.data.ability3 +1)*10);
        game.data.ability3 += 1;
    }
}
});