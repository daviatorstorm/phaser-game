/// <reference path="../Common.ts" />

namespace Engine.States {
    /**
     * Menu State
     */
    import Path = Engine.Common.Path;
    export class Menu extends Phaser.State {
        
        create() {
            this.game.load.image('startBtn', Path.To.MenuBtns + 'Start.png');
        }
    }
}