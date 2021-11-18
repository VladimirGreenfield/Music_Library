import React from 'react';
import {useState} from 'react';
import './Searchbar.css';



const SearchBar = (props) => {
    
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className='searchBar'>
            <input type='text' placeholder='Search . . .' onChange={event => {setSearchTerm(event.target.value)}}/>
            {/* {props.data.filter((val) => {
                if(searchTerm== "") {
                    return val
                } else if (val.artist.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
            }).map((val, key) => {
                return(
                    <div className="music" key={key}>
                        <p> 
                            {val.artist}
                            {val.title}
                            {val.album}
                            {val.genre}
                            {val.releaseDate}
                        </p>

                    </div>
                )
            })} */}
        </div>
    )
}


export default SearchBar;