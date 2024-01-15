"use strict";

(function () {
	var Scene = function (gameSettings) {
		this.gameSettings = gameSettings;

		//конструктор сцены с игровыми объектами
		var PlayerShipPlace = new window.GameObjectPlace(
			window.gameSettings.PlayerShipStartCoordX,
			window.gameSettings.PlayerShipStartCoordY
		);
		this.playerShip = new window.PlayerShip(PlayerShipPlace);

		this.swarm = new Array(gameSettings.NumberOfSwarmRows * gameSettings.NumberOfSwarmCols)
			.fill("")
			.map((el, idx, arr) => {
				var x = gameSettings.SwarmStartCoordX + (idx % gameSettings.NumberOfSwarmCols);
				var y = gameSettings.SwarmStartCoordY + Math.floor(idx / gameSettings.NumberOfSwarmCols);
				var AlienShipPlace = new window.GameObjectPlace(x, y);
				return new window.AlienShip(AlienShipPlace);
			});

		this.playerShipMissiles = [];

		this.ground = new Array(gameSettings.NumberOfGroundRows * gameSettings.NumberOfGroundCols)
			.fill("")
			.map((el, idx, arr) => {
				var x = idx % gameSettings.NumberOfGroundCols;
				var y = gameSettings.FieldHeight - 1 + Math.floor(idx / gameSettings.NumberOfGroundCols);
				var GroundObjectPlace = new window.GameObjectPlace(x, y);
				return new window.GroundObject(GroundObjectPlace);
			});
	};

	Scene.prototype.PlayerShipShot = function () {
		var misslePlace = new window.GameObjectPlace(this.playerShip.gameObjectPlace.x, this.playerShip.gameObjectPlace.y - 1);
		var missle = new window.PlayerShipMissile(misslePlace);
		this.playerShipMissiles.push(missle);
	};

	window.Scene = Scene;
})();
