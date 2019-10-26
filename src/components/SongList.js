import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

    //useEffect is a replacement for Lifecycle methods in react whilst being able to use them in functional Components
const SongList = () => {
    //created state inside a functional Component and destructed to be able to access it songs is array of data
    const [songs, setSongs] = useState([
        { title: 'almost home', id: 1},
        { title: 'memory gospel', id: 2},
        { title: 'this wild darkness', id: 3},
    ]);

    const [age, setAge] = useState(20);
    
    const addSong = (title) => {
        setSongs([...songs, { title, id: uuid()}])
    }
    //this hook will run everytime the Component Renders/Re-renders can limit this to only run when song data updates and not age data.
    //do this by adding second paramater which is an array of data to watch to only run when that data changes eg: songs.
    //can create useEffect as many times as we want.
    useEffect(() => {
        console.log('useEffect Hook Ran', songs);
    }, [songs])
    //separate concerns.
    useEffect(() => {
        console.log('useEffect Hook Ran', age);
    }, [age])
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
            <button onClick={() => setAge(age + 1)}>Add 1 to Age: {age}</button>
        </div>
     );
}
 
export default SongList;
