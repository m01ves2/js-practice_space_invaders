'use strict';

(function(){
    var GameObject = function(gameObjectPlace){ //абстрактный игровой объект. характеризуется только координатами
        this.gameObjectPlace = gameObjectPlace;
    }

    // GameObject.prototype.Move() = function(){ //TODO ..и видимо, манипуляциями с координатами
    // }

    window.GameObject = GameObject;
})();