'use strict';

(function(){
    var PlayerShipMissile = function(){
        window.GameObject.call(this); //наследование - при создании объекта вызываем конструктор родительского класса
        this.gameObjectType = window.gameObjectType.PlayerShipMissile;

        this.gameObjectPlace = null; //???
    }

    PlayerShipMissile.prototype = Object.create(window.GameObject.prototype); //наследование - настраиваем прототип нового объекта 
                                                        //- в прототип прототипа записываем прототип родительского класса

    window.PlayerShipMissile = PlayerShipMissile;
})();