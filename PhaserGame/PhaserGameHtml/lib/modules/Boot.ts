module Castlevania {
    export class Boot extends Phaser.State {

        preload() {
            this.load.image('preloadBar', 'images/loader.png');
        }

        create() {
            this.input.maxPointers = 1;

            this.stage.disableVisibilityChange = true;

            this.game.state.start('Preloader', true, false);

            if (this.game.device.desktop) {
                this.scale.pageAlignHorizontally = true;
            } else {
                this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.scale.minWidth = 480;
                this.scale.minHeight = 260;
                this.scale.maxWidth = 1024;
                this.scale.maxHeight = 768;
                this.scale.forceLandscape = true;
                this.scale.pageAlignHorizontally = true;
            }

            this.game.state.start('Preloader', true, false);
        }
    }
}