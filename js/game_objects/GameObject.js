'use strict';

(function () {
    var GameObject = function (gameObjectPlace) { //абстрактный игровой объект. характеризуется только координатами
        this.gameObjectPlace = gameObjectPlace;
    }

    // GameObject.prototype.Move() = function(){ //манипуляциями с координатами
    //     console.log('in GameObject.prototype.Move');
    // }

    // GameObject.prototype.Say = function(){
    //     console.log('in GameObject.prototype.Say');
    // } 
    window.GameObject = GameObject;
})();   