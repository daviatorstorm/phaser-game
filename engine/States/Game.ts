/// <reference path="../Common.ts" />

namespace Engine.States {
    import Path = Engine.Common.Path;
    export class Game extends Phaser.State {
        player: Engine.Models.Player;

        preload() {
            this.load.image('player', Path.To.Players + 'Player.png');
            this.player = new Engine.Models.Player(this.game, Path.To.Players + 'Player.png',
            this.game.world.centerX, this.game.world.centerY);
        }

        create() {
            this.game.physics.startSystem(Phaser.Physics.P2JS);
            this.player.Load();
        }

        update() {
            this.player.InputUpdate();
        }

    }
}