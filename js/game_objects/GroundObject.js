'use strict';

(function(){
    var GroundObject = function(){
        window.GameObject.call(this); //наследование - при создании объекта вызываем конструктор родительского класса
        this.gameObjectType = window.gameObjectType.GroundObject;

        this.gameObjectPlace = null; //???
    }

    GroundObject.prototype = Object.create(window.GameObject.prototype); //наследование - настраиваем прототип нового объекта 
                                                        //- в прототип прототипа записываем прототип родительского класса

    window.GroundObject = GroundObject;
})();