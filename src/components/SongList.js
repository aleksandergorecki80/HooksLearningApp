import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'Tancowała igła z nitką', id: 1},
        { title: 'Lokomotywa', id: 2},
        { title: 'Reksio', id: 3},
    ]);
    const addSong = () => {
         setSongs( [ ...songs, { title: 'Bonifacy i Filemon', id: uuidv4() } ] );
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
            <button onClick={addSong}>Add a song</button>
        </div>
     );
}
 
export default SongList;