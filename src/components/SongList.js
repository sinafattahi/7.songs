import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";  // beacause we didn't defind it as default we use {}


class SongList extends React.Component {
    
    renderList() {
        return this.props.songs.map( (song) => {
            return(
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        });
    };

    render() {
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

const mapStateToProps = (state) => {    //after any state changes it run
    return { songs : state.songs };
}

export default connect(
    mapStateToProps,
    { selectSong }  //any time we wanted to call an action creator we need to pass it to connect function
    )(SongList);  //{} here is for object not related to what we write top of the page 