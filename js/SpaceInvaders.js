'use stict';

(function(){
    var gameSettings = window.gameSettings;
    // var render = new window.SceneRenderDIV(gameSettings);
    var render = new window.SceneRenderCanvas(gameSettings);
    var gameEngine = new window.GameEngine(gameSettings, render);
    
    gameEngine.Run();
})();