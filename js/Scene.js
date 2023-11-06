"use strict";

(function () {
  var Scene = function (gameSettings) {
    this.gameSettings = gameSettings;
    
    //конструктор сцены с игровыми объектами
    var PlayerShipPlace = new window.gameObjectPlace(
      window.gameSettings.PlayerShipStartCoordX,
      window.gameSettings.PlayerShipStartCoordY
    );
    this.PlayerShip = new window.PlayerShip(PlayerShipPlace);

    this.Swarm = new Array(gameSettings.NumberOfSwarmRows * gameSettings.NumberOfSwarmCols)
      .fill("")
      .map((el, idx, arr) => {
        var x = SwarmStartCoordX + (idx % gameSettings.NumberOfSwarmCols);
        var y = SwarmStartCoordY + idx / gameSettings.NumberOfSwarmRows;
        var AlienShipPlace = new window.gameObjectPlace(x, y);
        return new window.AlienShip(AlienShipPlace);
      });

    this.PlayerShipMissiles = [];

    this.GroundObjects = new Array(gameSettings.NumberOfGroundRows * gameSettings.NumberOfGroundCols)
      .fill("")
      .map((el, idx, arr) => {
        var x = idx % gameSettings.NumberOfGroundCols;
        var y = Math.floor(idx / gameSettings.NumberOfGroundRows);
        var AlienShipPlace = new window.gameObjectPlace(x, y);
        return new window.AlienShip(AlienShipPlace);
      });
  };
  window.Scene = Scene;
})();
