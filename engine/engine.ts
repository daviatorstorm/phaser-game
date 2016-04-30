/// <reference path="Common.ts" />

namespace Engine {
    /**
    * Game
    */
    import Path = Engine.Common.Path;
    export class Game {
        game: Phaser.Game;
        gameConfig: any;

        constructor(mainElement: HTMLElement) {
            this.gameConfig = {
                width: 800,
                height: 600,
                renderer: Phaser.AUTO,
                parent: mainElement.id,
                state: {
                    preload: this.Preload,
                    create: this.Create
                }
            };
        }

        Start() {
            this.game = new Phaser.Game(this.gameConfig);
        }

        Preload() {
            // preload smth
            this.game.load.image('logo', Path.To.Images + 'logo.png');
            this.game.state.add('Menu', Engine.States.Menu);
        }

        Create() {
            // create smth
            var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
            logo.anchor.setTo(0.5, 0.5);
            setTimeout(() => {
                this.game.state.start('Menu', true);
            }, 2000);
        }
    }
}