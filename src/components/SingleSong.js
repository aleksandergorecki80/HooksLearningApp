import React, { useEffect } from 'react';
import useMousePosition from '../hooks/useMousePosition';


const SingleSong = ({ song, deleteSong }) => {


    const position = useMousePosition();


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
            <p>{position.x} , {position.y}</p>
        </div>
        
    )
}


export default SingleSong;