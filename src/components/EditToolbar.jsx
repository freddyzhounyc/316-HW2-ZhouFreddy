import React from "react";

export default class EditToolbar extends React.Component {

    handleAddSongCallback = (event) => {
        event.target.blur();
        let newSong = {
            title: "Untitled",
            artist: "???",
            year: 2000,
            youTubeId: "dQw4w9WgXcQ"
        };
        this.props.addSongCallback(this.props.currentList.songs.length, newSong);
    }
    handleUndoCallback = (event) => {
        event.target.blur();
        this.props.undoCallback();
    }
    handleRedoCallback = (event) => {
        event.target.blur();
        this.props.redoCallback();
    }

    render() {
        const { canAddSong, canUndo, canRedo, canClose, 
                undoCallback, redoCallback, closeCallback} = this.props;
        let addSongClass = "toolbar-button";
        let undoClass = "toolbar-button";
        let redoClass = "toolbar-button";
        let closeClass = "toolbar-button";
        if (canAddSong) addSongClass += " disabled";
        if (canUndo) undoClass += " disabled";
        if (canRedo) redoClass += " disabled";
        if (canClose) closeClass += " disabled";
        return (
            <div id="edit-toolbar">
                <input 
                    type="button" 
                    id='add-song-button' 
                    value="+" 
                    className={addSongClass}
                    onClick={this.handleAddSongCallback}
                    disabled={!canAddSong}
                />
                <input 
                    type="button" 
                    id='undo-button' 
                    value="⟲" 
                    className={undoClass} 
                    onClick={this.handleUndoCallback}
                    disabled={!canUndo}
                />
                <input 
                    type="button" 
                    id='redo-button' 
                    value="⟳" 
                    className={redoClass} 
                    onClick={this.handleRedoCallback}
                    disabled={!canRedo}
                />
                <input 
                    type="button" 
                    id='close-button' 
                    value="&#x2715;" 
                    className={closeClass} 
                    onClick={closeCallback}
                    disabled={!canClose}
                />
            </div>
        )
    }

}