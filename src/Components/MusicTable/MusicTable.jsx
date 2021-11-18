import React from 'react';
import "./MusicTable.css";



const MusicTable = (props) => {
    let MusicData = props.data.map((music) => {
        return(
            <tr>
                <td>{music.artist}</td>
                <td>{music.title}</td>
                <td>{music.album}</td>
                <td>{music.genre}</td>
                <td>{music.releaseDate}</td>
            </tr>   
        )
    });
    return (
        <table className='music-table'>
            <tr>
                <th>Artist</th>
                <th>Song Title</th>
                <th>Album</th>
                <th>Genre</th>
                <th>Release Date</th>
            </tr>
           {MusicData} 
        </table>
    );

};



export default MusicTable;