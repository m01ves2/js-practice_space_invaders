"use strict";

//именно этот  модуль выводит всё на экран
// canvas-визуализация
(function () {
	 var colors = ["white", "grey", "blue", "yellow", "green"];

	var SceneRenderCanvas = function (gameSettings) {
        window.SceneRender.call(this, gameSettings); //наследование - при создании объекта вызываем конструктор родительского класса. Передаем ему аргумент gameSettings

        // а далее создаём визуализацию на канвасе
        // create canvas element
        var fieldElement = document.querySelector('.field');
        var canvasElement = document.createElement('canvas');
        canvasElement.setAttribute('id', 'canvas');
        canvasElement.width = this.__fieldWidth * this.__brickSize;
        canvasElement.height = this.__fieldHeight * this.__brickSize;
        canvasElement.style.border = 'solid 1px black';
        fieldElement.appendChild(canvasElement);    

        this.__ctx = canvasElement.getContext('2d');

	};

    SceneRenderCanvas.prototype = Object.create(window.SceneRender.prototype);  //наследование - настраиваем прототип нового объекта 
                                                                                //- в прототип прототипа записываем прототип родительского
                                                                                //теперь SceneRenderDIV.prototype.__proto__ == window.SceneRender.prototype

	SceneRenderCanvas.prototype.clearScreen = function () {
        this.__ctx.clearRect(0, 0, this.__fieldWidth * this.__brickSize, this.__fieldHeight * this.__brickSize);
	};

	SceneRenderCanvas.prototype.AddGameObject = function (gameObject) {
		if (!this.IsOffScreen(gameObject)) {
            var x = gameObject.gameObjectPlace.x * this.__brickSize;
			var y = gameObject.gameObjectPlace.y * this.__brickSize;

            this.__ctx.fillStyle = colors[gameObject.gameObjectType];
            this.__ctx.fillRect(x, y, this.__brickSize, this.__brickSize);
		}
	};

	window.SceneRenderCanvas = SceneRenderCanvas;
})();
