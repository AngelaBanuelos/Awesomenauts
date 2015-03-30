game.GameTimerManager = Object.extend({
    //initializes the function
    init: function(x, y, settings) {
        //the time that we want to use
        this.now = new Date().getTime();
        //keep track of the last time we made a creep happen
        this.lastCreep = new Date().getTime();
        //doesnt pause the game
        this.paused = false;
        //makes sure it is always updating
        this.alwaysUpdate = true;
    },
    //updates the function
    update: function() {
        //keep track of our timer
        this.now = new Date().getTime();
        this.goldTimerCheck();
        this.creepTimerCheck();

        
        return true;
    },
    goldTimerCheck: function(){
        if (Math.round(this.now / 1000) % 20 === 0 && (this.now - this.lastCreep >= 1000)) {
            //add 1 peice of gold 
           game.data.gold += (game.data.exp1+1);
           //shows the number of gold in the console log
           console.log("Current gold: " + game.data.gold);
        }

    },
    creepTimerCheck: function(){
        if (Math.round(this.now / 1000) % 10 === 0 && (this.now - this.lastCreep >= 1000)) {
            this.lastCreep = this.now;
            //creates a creep
            var creepe = me.pool.pull("EnemyCreep", 1000, 0, {});
            //adds the creep to the world
            me.game.world.addChild(creepe, 5);
             var creepe2 = me.pool.pull("Player2", 200, 0, {});
            //adds the creep to the world
            me.game.world.addChild(creepe2, 5);
        }

    }
});
game.HeroDeathManager = Object.extend({
    init: function(x, y, settings){
        //makes sure it is always updating
        this.alwaysUpdate = true;

    },
    update: function(){
         //keeps track on whether we should be making creeps
        //checks to see if we have a multiple of 10
//if the playaer is dead,
if(game.data.player.dead){
    //remove the player
    me.game.world.removeChild(game.data.player);
    //reset the players life
    me.state.current().resetPlayer(10, 0);
}
    //makes the code run
    return true;
    }
});


game.ExperienceManager = Object.extend({
    init: function(x, y, settings){
        //makes sure it is always updating
        this.alwaysUpdate = true;
        //sets gameOver to false
        this.gameover = false;
    },
    update: function(){
        //if you win the game is not over
        if(game.data.win === true && !this.gameover){
            //sets gameOver to true
           this.gameOver(true);
        //you get no points 
        }else if(game.data.win === false && !this.gameover){
            //it makes the game be over
            this.gameOver(false);
        }
        //makes the code run
        return true;
        }, 
        //made a gameOver function
        gameOver: function(win){
            // if you win,
            if(win){
            //adds 10 points to experience variable
            game.data.exp += 10;
            }
            // if else you gain 1 point
            else{
            //adds 1 point to experience variable
            game.data.exp += 1;  
            }
            // it makes the game be over
            this.gameover = true;
            //saves your experience 
            me.save.exp = game.data.exp;
            console.log("experience " + me.save.exp);
            //For testing purpose only 
            me.save.exp2 = 4;

        }
});

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
me.input.bindKey(me.input.KEY.F1, "F1", true);
me.input.bindKey(me.input.KEY.F1, "F2", true);
me.input.bindKey(me.input.KEY.F1, "F3", true);
me.input.bindKey(me.input.KEY.F1, "F4", true);
me.input.bindKey(me.input.KEY.F1, "F5", true);
me.input.bindKey(me.input.KEY.F1, "F6", true);
this.setBuyText();
},
setBuyText: function(){
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
                //writes "Awesomenauts" at those specific coordinates
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
me.input.unbindKey(me.input.KEY.F1, "F1", true);
me.input.unbindKey(me.input.KEY.F1, "F2", true);
me.input.unbindKey(me.input.KEY.F1, "F3", true);
me.input.unbindKey(me.input.KEY.F1, "F4", true);
me.input.unbindKey(me.input.KEY.F1, "F5", true);
me.input.unbindKey(me.input.KEY.F1, "F6", true);
me.game.world.removeChild(game.data.buytext);
},

checkBuyKeys: function() {
    if(me.input.isKeyPressed("F1")){
         if(this.checkCost(1)){
            this.makePurchase(1);
         }
    }else if(me.input.isKeyPressed("F2")){
        if(this.checkCost(2)){
            this.makePurchase(2);
         }
    }else if(me.input.isKeyPressed("F3")){
        if(this.checkCost(3)){
            this.makePurchase(3);
         }
    }else if(me.input.isKeyPressed("F4")){
        if(this.checkCost(4)){
            this.makePurchase(4);
         }
    }else if(me.input.isKeyPressed("F5")){ 
        if(this.checkCost(5)){
            this.makePurchase(5);
         }
    }else if(me.input.isKeyPressed("F6")){   
        if(this.checkCost(6)){
            this.makePurchase(6);
         }
    }
},

    checkCost: function(skill){
        if(skill===1 && (game.data.gold >= ((game.data.skill1+1)*10))){
            return true;
        }else if(skill===2 && (game.data.gold >= ((game.data.skill2+1)*10))){
            return true;
        }else if(skill===3 && (game.data.gold >= ((game.data.skill3+1)*10))){
            return true;
        }else if(skill===4 && (game.data.gold >= ((game.data.ability1+1)*10))){
            return true;
        }else if(skill===5 && (game.data.gold >= ((game.data.ability2+1)*10))){
            return true;
        }else if(skill===6 && (game.data.gold >= ((game.data.ability3+1)*10))){
            return true;
        }else{
            return false;
        }
},
    makePurchase: function(skill){ 
        if(skil === 1){
        game.data.gold -= ((game.data.skill1 +1)*10);
        game.data.skill1 += 1;
        game.dta.player.attack += 1;
    }else if(skill === 2){
        game.data.gold -= ((game.data.skil2 +1)*10);
        game.data.skill2 += 1;
    }else if(skill === 3){
        game.data.gold -= ((game.data.skill3 +1)*10);
        game.data.skill3 += 1;
    }else if(skill === 4){
        game.data.gold -= ((game.data.ability1 +1)*10);
        game.data.ability1 += 1;
    }else if(skill === 5){
        game.data.gold -= ((game.data.ability2 +1)*10);
        game.data.ability2 += 1;
    }else if(skill === 6){
        game.data.gold -= ((game.data.ability3 +1)*10);
        game.data.ability3 += 1;
    }
}
});

