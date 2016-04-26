namespace Engine {
    /**
    * Game
    */
    export class Game {
        game: Phaser.Game;
        gameConfig: Phaser.IGameConfig;

        constructor(mainElement: HTMLElement) {
            this.gameConfig = {
                width: 800,
                height: 600,
                renderer: Phaser.AUTO,
                parent: mainElement.id
            };
            this.gameConfig.state.preload = this.Preload;
            this.gameConfig.state.create = this.Create;

        }

        Start() {
            this.game = new Phaser.Game(this.gameConfig);
        }

        Preload() {
            // preload smth
            this.game.load.image('logo', '/content/logo.png');
        }

        Create() {
            // create smth
            var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY);
            logo.anchor.setTo(0.5, 0.5);
        }
    }
}