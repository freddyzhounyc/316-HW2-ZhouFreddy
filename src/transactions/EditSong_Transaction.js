import { jsTPS_Transaction } from "jstps";

export default class EditSong_Transaction extends jsTPS_Transaction {

    constructor(initApp, initOldSong, initNewSong) {
        super();
        this.app = initApp;
        this.oldSong = initOldSong;
        this.newSong = initNewSong;
    }

    executeDo() {
        let toBeNewSongIndex = this.app.getSongIndexFromCurrentList(this.oldSong);
        this.app.editSong(toBeNewSongIndex, this.newSong);
        this.newSongIndex = toBeNewSongIndex;
    }

    executeUndo() {
        this.app.editSong(this.newSongIndex, this.oldSong);
    }

}