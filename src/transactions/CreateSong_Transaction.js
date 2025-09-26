import { jsTPS_Transaction } from "../../node_modules/jstps/index";

export default class CreateSong_Transaction extends jsTPS_Transaction {

    constructor(initApp, initIndex, initSong) {
        super();
        this.app = initApp;
        this.index = initIndex;
        this.song = initSong;
    }

    executeDo() {
        this.app.createSong(this.index, this.song);
    }

    executeUndo() {
        this.app.removeSong(this.index);
    }

}