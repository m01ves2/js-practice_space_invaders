'use strict';

(function(){
    var gameSettings = {
        FieldWidth: 30,
        FieldHeight: 30,
        BrickSize: 20, //20px

        //Начальные координаты объектов
        NumberOfSwarmRows: 2,
        NumberOfSwarmCols: 20, 
        SwarmStartCoordX: 5,
        SwarmStartCoordY: 2,
        SwarmSpeed: 20,

        PlayerShipStartCoordX: 14,
        PlayerShipStartCoordY: 25,

        NumberOfGroundRows: 1,
        NumberOfGroundCols: 30,

        GameSpeed: 100,
    };

    window.gameSettings = gameSettings;
})();