import React from "react";

export default class SongCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDragging: false,
            draggedTo: false
        }
    }
    handleDragStart = (event) => {
        event.dataTransfer.setData("song", event.target.id);
        this.setState(prevState => ({
            isDragging: true,
            draggedTo: prevState.draggedTo
        }));
    }
    handleDragOver = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragEnter = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragLeave = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: false
        }));
    }
    handleDrop = (event) => {
        event.preventDefault();
        let target = event.target;
        let targetId = target.id;
        targetId = targetId.substring(target.id.indexOf("-") + 1);
        let sourceId = event.dataTransfer.getData("song");
        sourceId = sourceId.substring(sourceId.indexOf("-") + 1);
        
        this.setState(prevState => ({
            isDragging: false,
            draggedTo: false
        }));

        // ASK THE MODEL TO MOVE THE DATA
        this.props.moveCallback(sourceId, targetId);
    }
    handleDragEnd = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: false,
            draggedTo: false
        }));
    }
    handleEditSong = (event) => {
        if (event.detail === 2) {
            this.props.showEditSongModalCallback(this.props.song);
        }
    }
    handleRemoveSong = (event) => {
        event.stopPropagation();
        event.target.blur();
        this.props.removeSongCallback(this.getItemNum() - 1, this.props.song);
    }
    handleDuplicateSong = (event) => {
        event.stopPropagation();
        event.target.blur();
        this.props.duplicateSongCallback(this.getItemNum(), this.props.song);
    }

    getItemNum = () => {
        return this.props.id.substring("song-card-".length);
    }

    render() {
        const { song } = this.props;
        let num = this.getItemNum();
        // console.log("num: " + num);
        let itemClass = "song-card unselected-song-card";
        if (this.state.draggedTo) {
            itemClass = "song-card unselected-song-card song-card-dragged-to";
        }
        if (this.state.isDragging) {
            itemClass = "song-card unselected-song-card is-dragging"
        }
        return (
            <div
                id={'song-' + num}
                className={itemClass}
                onDragStart={this.handleDragStart}
                onDragOver={this.handleDragOver}
                onDragEnter={this.handleDragEnter}
                onDragLeave={this.handleDragLeave}
                onDragEnd={this.handleDragEnd}
                onDrop={this.handleDrop}
                onClick={this.handleEditSong}
                draggable="true"
            >
                <span id={"song-card-number-" + num}
                    className="song-card-bulletNum">{num + ". "}</span>
                <a id={"song-card-link-" + num} 
                    className="song-card-title" href={"https://www.youtube.com/watch?v=" + song.youTubeId}
                    target="1">{song.title}</a>
                <span id={"song-card-yearPublished-" + num} 
                    className="song-card-year">{" (" + song.year + ")"}</span>
                <span id={"song-card-byWord-" + num}
                    className="song-card-by">{" by "}</span>
                <span id={"song-card-artistName-" + num}
                    className="song-card-artist">{song.artist}</span>
                <input type="button" id={"remove-song-" + num}
                    className="song-card-button" value="✕" onClick={this.handleRemoveSong} />
                <input id={"duplicate-song-button-" + num}
                    type="button" className="song-card-button duplicate-song-button"
                    value="⎘" onClick={this.handleDuplicateSong} />
            </div>
        )
    }
}