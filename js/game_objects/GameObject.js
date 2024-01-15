'use strict';

(function () {
    var GameObject = function (gameObjectPlace) { //абстрактный игровой объект. характеризуется только координатами
        this.gameObjectPlace = gameObjectPlace;
    }

    // GameObject.prototype.Move() = function(){ //TODO ..и видимо, манипуляциями с координатами
    // }

    // GameObject.prototype.Say = function(){
    //     console.log('in GameObject.prototype.Say');
    // } 
    window.GameObject = GameObject;
})();