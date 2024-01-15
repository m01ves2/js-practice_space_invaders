'use strict';

(function(){
    var PlayerShipMissile = function(gameObjectPlace){
        window.GameObject.call(this, gameObjectPlace); //наследование - при создании объекта вызываем конструктор родительского класса
        this.gameObjectType = window.gameObjectType.PlayerShipMissile;
    }

    PlayerShipMissile.prototype = Object.create(window.GameObject.prototype); //наследование - настраиваем прототип нового объекта 
                                                        //- в прототип прототипа записываем прототип родительского класса

    window.PlayerShipMissile = PlayerShipMissile;
})();