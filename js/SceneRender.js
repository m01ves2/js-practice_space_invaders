"use strict";

//именно этот  модуль выводит всё на экран
//сделаем две реализации, через div-элементы и canvas - два отдельных рендера
(function () {
	var SceneRender = function (gameSettings) {
		this.__fieldWidth = gameSettings.FieldWidth;
		this.__fieldHeight = gameSettings.FieldHeight;
		this.__brickSize = gameSettings.BrickSize;
	};

	SceneRender.prototype.clearScreen = function () {
		//просто очищаем игровое поле для нового кадра
		//abstract method
	};

	//заполняем игровое поле __screenMatrix
	SceneRender.prototype.Render = function (scene) {
		this.clearScreen();

		//проходим по всем объектам сцены и выводим в игровую матрицу через метод AddGameObject - здесь просто закрашиваем клетки div, как нужно
		this.AddGameObject(scene.playerShip);
		this.AddGameObjectArray(scene.swarm);
		this.AddGameObjectArray(scene.playerShipMissiles);
		this.AddGameObjectArray(scene.ground);
	};


	SceneRender.prototype.AddGameObject = function (gameObject) {
		//добавление объекта для прорисовки на игровое поле
		//abstract method
	};

	SceneRender.prototype.AddGameObjectArray = function (gameObjectArray) {
		gameObjectArray.forEach((element) => this.AddGameObject(element));
	};

	SceneRender.prototype.IsOffScreen = function (gameObject) {
		if (
			gameObject.gameObjectPlace.x < 0 ||
			gameObject.gameObjectPlace.x > this.__fieldWidth ||
			gameObject.gameObjectPlace.y < 0 ||
			gameObject.gameObjectPlace.x > this.__fieldHeight
		) {
			return true;
		}
		return false;
	};

	window.SceneRender = SceneRender;
})();
