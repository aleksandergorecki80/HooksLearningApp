import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from './NewSongForm';


const SongList = () => {
    // const [songs, setSongs] = useState([
    //     { title: 'Tancowała igła z nitką', id: 1},
    //     { title: 'Lokomotywa', id: 2},
    //     { title: 'Reksio', id: 3},
    // ]);
    
    
    const addSong = (title) => {
         setSongs( [ ...songs, { title: title, id: uuidv4() } ] );
    };

    const deleteSong = (id) => {
        setSongs(
            songs.filter((song) => {
                return song.id !== id;
            })
        )
    }
     
    const [songs, setSongs] = useState([]);
    useEffect(() => {
        const defaultValue = localStorage.getItem('songs') ? JSON.parse(localStorage.getItem('songs')) : [];
        setSongs(defaultValue);
    }, []);

   
    useEffect(() => {
        console.log('useEffect hook ran - songs', songs);
        localStorage.setItem('songs', JSON.stringify(songs));
    }, [songs]);

    return ( 
        <div className="song-list">
            <ul>
                {songs.map((song) => {
                    // return (
                    //     <li key={song.id}>{song.title}</li>
                    return <SingleSong song={song} key={song.id} deleteSong={deleteSong}/>
                    // )
                })}
            </ul>
            <NewSongForm addSong={addSong}/>
        </div>
     );
}
 
const SingleSong = ({ song, deleteSong }) => {
    useEffect(() => {
        console.log('Single song use effect');
        return () => {
            console.log('Cleaning up effect');
        }
    },[])
    return (
        <div>
            <li key={song.id}>{song.title}</li>
            <button onClick={ ()=> {deleteSong(song.id)}}>Delete</button>
        </div>
        
    )
}


export default SongList;