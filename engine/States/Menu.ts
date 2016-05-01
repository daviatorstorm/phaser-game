/// <reference path="../Common.ts" />

namespace Engine.States {
    /**
     * Menu State
     */
    import Path = Engine.Common.Path;
    export class Menu extends Phaser.State {

        preload() {
            this.game.load.image('startBtn', Path.To.MenuBtns + 'Start.png');
            this.game.load.image('littleLogo', Path.To.Images + 'little-logo.png');
        }

        create() {
            var littleLogo = this.game.add.sprite(this.game.world.centerX, 10, 'littleLogo');
            var startBtn = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'startBtn');

            littleLogo.anchor.setTo(0.5, 0);
            startBtn.anchor.setTo(0.5, 0.5);
            
            startBtn.inputEnabled = true;
            
            startBtn.events.onInputDown.add(() => {
                this.game.state.start('Game', true);
            }, this);
        }
    }
}