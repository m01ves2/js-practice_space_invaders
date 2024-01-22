'use strict';

// логика игры. набор вычислений для следующего кадра
(function () {
    var GameEngine = function (gameSettings, render) {
        this.__isGameOver = false;
        this.__isWin = false;
        this.__scene = new window.Scene(gameSettings);
        this.__sceneRender = render;
        this.__id = 0;
        this.__swarmMoveCounter = 0;
        this.__gameSpeed = gameSettings.GameSpeed;

        //отработка нажатий клавиш
        var appl = this;
        document.body.addEventListener('keydown', function (evt) {
            //alert(event.keyCode);
            switch (evt.keyCode) {
                case 37: //left arrow
                    appl.MovePlayerShipLeft();
                    appl.__sceneRender.Render(appl.__scene);
                    break;
                case 39: //right arrow
                    appl.MovePlayerShipRight();
                    appl.__sceneRender.Render(appl.__scene);
                    break;
                case 32: //space
                    appl.PlayerShipShot();
                    appl.__sceneRender.Render(appl.__scene);
                    break;
                default:
                    break;
            }
        });
    }

    GameEngine.prototype.Run = function () {
        //главный цикл игры
        var appl = this;
        // window.clearInterval(this.__id);
        this.__id = window.setInterval(function () {
            appl.NextStep.call(appl);
        }, this.__gameSpeed);
    }

    GameEngine.prototype.NextStep = function () {
        this.MoveMissiles();

        if(++this.__swarmMoveCounter % 10 == 0){
            this.__swarmMoveCounter = 0;
            this.MoveSwarm();
        }

        if (this.__isGameOver) {
            this.doGameOver();
        }
        else if(this.__isWin) {
            this.doWin();
        }
        else {
            this.__sceneRender.Render(this.__scene);
        }
    }

    GameEngine.prototype.doGameOver = function () {
        // game over!
        window.clearInterval(this.__id);
        alert('Game Over!');
    }

    GameEngine.prototype.doWin = function () {
        // you won!
        window.clearInterval(this.__id);
        alert('Gratz! You win!');
    }


    GameEngine.prototype.MovePlayerShipLeft = function () {
		if (this.__scene.playerShip.gameObjectPlace.x > 0) {
			this.__scene.playerShip.MoveLeft();
		}
	};

	GameEngine.prototype.MovePlayerShipRight = function () {
		if (this.__scene.playerShip.gameObjectPlace.x < this.__scene.gameSettings.FieldWidth - 1) {
			this.__scene.playerShip.MoveRight();
		}
	};

	GameEngine.prototype.MoveSwarm = function () {
        if(this.__scene.swarm.length == 0){
            this.__isWin = true;
            return;
        }

        var appl = this;       
		this.__scene.swarm.forEach(el => {
            el.gameObjectPlace.y++;

            if( ( el.gameObjectPlace.x == appl.__scene.playerShip.gameObjectPlace.x && //проверка что swarm не коснулся корабля
                el.gameObjectPlace.y == appl.__scene.playerShip.gameObjectPlace.y ) ||
                (el.gameObjectPlace.y >= appl.__scene.ground[0].gameObjectPlace.y ) ){ //проверка, что swarm не коснулся земли
                    appl.__isGameOver = true;
                }
		});
	}

	GameEngine.prototype.MoveMissiles = function () {

        for(var i = this.__scene.playerShipMissiles.length - 1; i >= 0; i--){
            var missile = this.__scene.playerShipMissiles[i];
            missile.gameObjectPlace.y--;
            
            if(missile.gameObjectPlace.y < 0){
                this.__scene.playerShipMissiles.splice(i, 1);
            }

            //проверка столкновения с каким нибудь пришельцем
            for(var j =  this.__scene.swarm.length - 1; j >= 0; j-- ){
                var alienShip = this.__scene.swarm[j];
                if( alienShip.gameObjectPlace.x == missile.gameObjectPlace.x &&
                    alienShip.gameObjectPlace.y == missile.gameObjectPlace.y){
                    this.__scene.playerShipMissiles.splice(i, 1);
                    this.__scene.swarm.splice(j, 1);
                }
            }            
        }
	};

    GameEngine.prototype.PlayerShipShot = function() {
        this.__scene.PlayerShipShot();
    }

    window.GameEngine = GameEngine;
})();