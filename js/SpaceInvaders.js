'use stict';

(function(){
    var gameSettings = window.gameSettings;
    var gameEngine = new window.GameEngine(gameSettings);
    
    gameEngine.Run();
})();