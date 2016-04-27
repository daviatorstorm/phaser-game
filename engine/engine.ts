namespace Engine {
    /**
    * Game
    */
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
            this.game.load.image('logo', 'content/images/logo.png');
        }

        Create() {
            // create smth
            var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
            logo.anchor.setTo(0.5, 0.5);
        }
    }
}