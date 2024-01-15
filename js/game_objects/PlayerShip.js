'use strict';

(function(){
    var PlayerShip = function(gameObjectPlace){
        window.GameObject.call(this, gameObjectPlace); //наследование - при создании объекта вызываем конструктор родительского класса. Передаем ему аргумент gameObjectPlace
        this.gameObjectType = window.gameObjectType.PlayerShip;
    }

    PlayerShip.prototype = Object.create(window.GameObject.prototype); //наследование - настраиваем прототип нового объекта 
                                                        //- в прототип прототипа записываем прототип родительского класса

    // PlayerShip.prototype.Say = function(){
    //     console.log('in PlayerShip.prototype.Say');
    // }

    PlayerShip.prototype.MoveLeft = function(){
        this.gameObjectPlace.x--;
    }
    PlayerShip.prototype.MoveRight = function(){
        this.gameObjectPlace.x++;
    }

    window.PlayerShip = PlayerShip;
})();