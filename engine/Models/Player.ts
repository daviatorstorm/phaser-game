namespace Engine.Models {
    import Path = Engine.Common.Path;
     
    export class Player {
        private game: Phaser.Game;
        private playerSprite: Phaser.Sprite;
        private playerAccelaration: number;
        private x: number;
        private y: number;
        
        constructor(game: Phaser.Game, playerImage: Phaser.Image, x?: number, y?: number) {
            this.game = game;
            this.game.load.image('player', Path.To.Players + 'Player.png');
            
            if (x == null || x == undefined) { x = 0; }
            if (y == null || y == undefined) { y = 0; }
            
            this.playerAccelaration = 10;
        }
        
        SetCoordinates(x: number, y: number) { this.x = x; this.y = y; }
        
        SetAccelaration(playerAccelaration: number) {
            this.playerAccelaration = playerAccelaration;
        }
        
        
        
        Load() {
            this.game.add.sprite(this.x, this.y, 'player');
        }
    }
}