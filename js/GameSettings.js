'use strict';

(function(){
    var gameSettings = {
        FieldWidth: 80,
        FieldHeight: 30,

        //Начальные координаты объектов
        NumberOfSwarmRows: 2,
        NumberOfSwarmCols: 60, 
        SwarmStartCoordX: 10,
        SwarmStartCoordY: 2,
        SwarmSpeed: 20,

        PlayerShipStartCoordX: 40,
        PlayerShipStartCoordY: 19,

        NumberOfGroundRows: 1,
        NumberOfGroundCols: 80,

        GameSpeed: 100,
    };

    window.gameSettings = gameSettings;
})();