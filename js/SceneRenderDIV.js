"use strict";

//именно этот  модуль выводит всё на экран
//div-визуализация
(function () {
	var colors = ["white", "grey", "blue", "yellow", "green"];

	var SceneRenderDIV = function (gameSettings) {
        window.SceneRender.call(this, gameSettings); //наследование - при создании объекта вызываем конструктор родительского класса. Передаем ему аргумент gameSettings

        //а далее создаём матрицу визуализации
		this.__fieldMatrix = new Array(this.__fieldHeight); // матрица визуализации, хранит div, это если графика кубиками
		var fieldElement = document.querySelector("div.field");
		for (var i = 0; i < this.__fieldHeight; i++) {
			this.__fieldMatrix[i] = new Array(this.__fieldWidth);
			for (var j = 0; j < this.__fieldWidth; j++) {
				var div = document.createElement("div");
				div.setAttribute("id", i + "_" + j);
				div.style.position = "absolute";
				div.style.border = "solid 1px black";

				div.style.width = this.__brickSize + "px";
				div.style.height = this.__brickSize + "px";
				div.style.top = i * this.__brickSize + "px";
				div.style.left = j * this.__brickSize + "px";
				fieldElement.appendChild(div);

				this.__fieldMatrix[i][j] = div;
			}
		}
	};

    SceneRenderDIV.prototype = Object.create(window.SceneRender.prototype); //наследование - настраиваем прототип нового объекта 
                                                                            //- в прототип прототипа записываем прототип родительского
                                                                            //теперь SceneRenderDIV.prototype.__proto__ == window.SceneRender.prototype

	SceneRenderDIV.prototype.clearScreen = function () {
		//просто делаем всё игровое поле белым
		for (var y = 0; y < this.__fieldHeight; y++) {
			for (var x = 0; x < this.__fieldWidth; x++) {
				this.__fieldMatrix[y][x].style.backgroundColor = "white";
			}
		}
	};

	SceneRenderDIV.prototype.AddGameObject = function (gameObject) {
		if (!this.IsOffScreen(gameObject)) {
			var x = gameObject.gameObjectPlace.x;
			var y = gameObject.gameObjectPlace.y;

			this.__fieldMatrix[y][x].style.backgroundColor = colors[gameObject.gameObjectType];
		}
	};

	window.SceneRenderDIV = SceneRenderDIV;
})();
