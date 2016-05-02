namespace Engine.Models {
    import Path = Engine.Common.Path;
     
    export class Player {
        private game: Phaser.Game;
        private playerSprite: Phaser.Sprite;
        private playerAccelaration: number;
        private x: number;
        private y: number;
        private cursors: Phaser.CursorKeys; 
        
        constructor(game: Phaser.Game, playerImage: string, x?: number, y?: number) {
            this.game = game;
            this.game.load.image('player', Path.To.Players + 'Player.png');
            
            if (this.x == null || this.x == undefined) { this.x = 100; }
            if (this.y == null || this.y == undefined) { this.y = 100; }
            
            this.playerAccelaration = 10;
        }
        
        SetCoordinates(x: number, y: number) { this.x = x; this.y = y; }
        
        SetAccelaration(playerAccelaration: number) {
            this.playerAccelaration = playerAccelaration;
        }
        
        InputUpdate() {
            if (this.cursors.up.isDown) {
                this.playerSprite.angle = 0;
            } else if (this.cursors.right.isDown) {
                this.playerSprite.angle = 90;
            } else if (this.cursors.down.isDown) {
                this.playerSprite.angle = 180;
            } else if(this.cursors.left.isDown){
                this.playerSprite.angle = 270;
            }
        }
        
        Load() {
            this.playerSprite = this.game.add.sprite(this.x, this.y, 'player');
            this.playerSprite.anchor.setTo(0.5, 0.5);
            this.cursors = this.game.input.keyboard.createCursorKeys();
        }
    }
}