"use strict";

//именно этот  модуль выводит всё на экран
//сделаем две реализации, через div-элементы и canvas - два отдельных рендера
(function () {
	var colors = ["white", "grey", "blue", "yellow", "green"];

	var SceneRender = function (gameSettings) {
		this.__screenWidth = gameSettings.FieldWidth;
		this.__screenHeight = gameSettings.FieldHeight;
		this.__brickSize = gameSettings.BrickSize;

		this.__screenMatrix = new Array(this.__screenHeight); // матрица визуализации, хранит div, это если графика кубиками размером в 20px
		var fieldElement = document.querySelector("div.field");
		for (var i = 0; i < this.__screenHeight; i++) {
			this.__screenMatrix[i] = new Array(this.__screenWidth);
			for (var j = 0; j < this.__screenWidth; j++) {
				var div = document.createElement("div");
				div.setAttribute("id", i + "_" + j);
				div.style.position = "absolute";
				div.style.border = "solid 1px black";

				div.style.width = this.__brickSize + "px";
				div.style.height = this.__brickSize + "px";
				div.style.top = i * this.__brickSize + "px";
				div.style.left = j * this.__brickSize + "px";
				fieldElement.appendChild(div);

				this.__screenMatrix[i][j] = div;
			}
		}
	};

	SceneRender.prototype.clearMatrix = function () {
		//просто делаем всё игровое поле белым
		for (var y = 0; y < this.__screenHeight; y++) {
			for (var x = 0; x < this.__screenWidth; x++) {
				this.__screenMatrix[y][x].style.backgroundColor = "white";
			}
		}
	};

	//TODO заполняем игровое поле __screenMatrix, а дальше просто
	SceneRender.prototype.Render = function (scene) {
		this.clearMatrix();

		//TODO проходим по всем объектам сцены и выводим в игровую матрицу через метод AddGameObject - здесь просто закрашиваем клетки div, как нужно
		this.AddGameObject(scene.playerShip);
		this.AddGameObjectArray(scene.swarm);
		this.AddGameObjectArray(scene.playerShipMissiles);
		this.AddGameObjectArray(scene.ground);
	};

	SceneRender.prototype.AddGameObject = function (gameObject) {
		if (!this.IsOffScreen(gameObject)) {
			var x = gameObject.gameObjectPlace.x;
			var y = gameObject.gameObjectPlace.y;

			this.__screenMatrix[y][x].style.backgroundColor =
				colors[gameObject.gameObjectType];
		}
	};

	SceneRender.prototype.AddGameObjectArray = function (gameObjectArray) {
		gameObjectArray.forEach((element) => this.AddGameObject(element));
	};

	SceneRender.prototype.IsOffScreen = function (gameObject) {
		if (
			gameObject.gameObjectPlace.x < 0 ||
			gameObject.gameObjectPlace.x > this.__screenWidth ||
			gameObject.gameObjectPlace.y < 0 ||
			gameObject.gameObjectPlace.x > this.__screenHeight
		) {
			return true;
		}
		return false;
	};

	window.SceneRender = SceneRender;
})();
