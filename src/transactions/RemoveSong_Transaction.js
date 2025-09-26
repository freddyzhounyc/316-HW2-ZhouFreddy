import { jsTPS_Transaction } from "jstps";

export default class RemoveSong_Transaction extends jsTPS_Transaction {

    constructor(initApp, initIndex, initSong) {
        super();
        this.app = initApp;
        this.index = initIndex;
        this.song = initSong;
    }

    executeDo() {
        this.app.removeSong(this.index);
    }

    executeUndo() {
        this.app.createSong(this.index, this.song);
    }

}