namespace Engine.Common {
    export interface IPath {
        To: IPathConfig
    }
    
    export interface IPathConfig {
        BaseContentPath: string;
        Images: string;
        Players: string;
        MenuBtns: string;
    }

    export var Path = {
        To: {
            BaseContentPath: 'content/',
            Images: 'content/images/',
            Players: 'content/images/Players',
            MenuBtns: 'content/images/Menu Buttons/'
        }
    };
}