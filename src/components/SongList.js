import React, { useState } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {
    //created state inside a functional Component and destructed to be able to access it songs is array of data
    const [songs, setSongs] = useState([
        { title: 'almost home', id: 1},
        { title: 'memory gospel', id: 2},
        { title: 'this wild darkness', id: 3},
    ]);
    
    const addSong = (title) => {
        setSongs([...songs, { title, id: uuid()}])
    }

    return ( 
        <div className="song-list">
            <ul>
                {songs.map((song) => {
                    return (
                        <li key={song.id}>{song.title}</li>
                    )
                })}
            </ul>
            <NewSongForm addSong={addSong}/>
        </div>
     );
}
 
export default SongList;
