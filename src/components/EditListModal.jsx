import React from "react";

export default class EditListModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            titleText: "",
            artistText: "",
            yearText: "",
            youTubeIdText: ""
        }
    }

    // Called every time the props change!
    componentDidUpdate(prevProps) {
        if (!prevProps.songToEditInModal && this.props.songToEditInModal) {
            let song = this.props.songToEditInModal;
            this.setState({
                titleText: song.title,
                artistText: song.artist,
                yearText: song.year,
                youTubeIdText: song.youTubeId
            });
        }
    }

    handleTitleUpdate = (event) => {
        this.setState({
            titleText: event.target.value
        })
    }
    handleArtistUpdate = (event) => {
        this.setState({
            artistText: event.target.value
        })
    }
    handleYearUpdate = (event) => {
        this.setState({
            yearText: event.target.value
        })
    }
    handleYouTubeIdUpdate = (event) => {
        this.setState({
            youTubeIdText: event.target.value
        })
    }
    handleConfirmEditSong = (event) => {
        let newSong = {
            "title": this.state.titleText,
            "artist": this.state.artistText,
            "year": this.state.yearText,
            "youTubeId": this.state.youTubeIdText
        }
        this.props.confrimModalCallback(newSong);
    }

    render() {
        let classesForModal = "modal";
        if (this.props.songToEditInModal)
            classesForModal = "modal is-visible";

        return (
            <div id="edit-song-modal" className={classesForModal} data-animation="slideInOutLeft">
                <div id='edit-song-root' className="modal-root">
                    <div id="edit-song-modal-header" className="modal-north">Edit Song</div>
                    <div id="edit-song-modal-content" className="modal-center">
                        <div id="title-prompt" className="modal-prompt">Title:</div><input id="edit-song-modal-title-textfield" className='modal-textfield' type="text" value={this.state.titleText} onChange={this.handleTitleUpdate} />
                        <div id="artist-prompt" className="modal-prompt">Artist:</div><input id="edit-song-modal-artist-textfield" className='modal-textfield' type="text" value={this.state.artistText} onChange={this.handleArtistUpdate} />
                        <div id="year-prompt" className="modal-prompt">Year:</div><input id="edit-song-modal-year-textfield" className='modal-textfield' type="text" value={this.state.yearText} onChange={this.handleYearUpdate} />
                        <div id="you-tube-id-prompt" className="modal-prompt">You Tube Id:</div><input id="edit-song-modal-youTubeId-textfield" className='modal-textfield' type="text" value={this.state.youTubeIdText} onChange={this.handleYouTubeIdUpdate} />
                    </div>
                    <div className="modal-south">
                        <input type="button" id="edit-song-confirm-button" className="modal-button" value='Confirm' onClick={this.handleConfirmEditSong} />
                        <input type="button" id="edit-song-cancel-button" className="modal-button" value='Cancel' onClick={this.props.closeModalCallback} />
                    </div>
                </div>
            </div>
        )
    }

}