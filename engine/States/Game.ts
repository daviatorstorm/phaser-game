/// <reference path="../Common.ts" />

namespace Engine.States {
    import Path = Engine.Common.Path;
    export class Game extends Phaser.State{
        
         preload() {
             this.load.image('player', Path.To.Players + 'Player.png');
         }
         
         create() {
             var test = {};
         }
    }
}