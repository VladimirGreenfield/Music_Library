import React from 'react';
import {useState} from 'react';


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className='searchBar'>
            <input type='text' placeholder='Search' onChange={event => {setSearchTerm(event.target.value)}}/>
            <i className='search-icon'></i>
        </div>
    )
}


export default SearchBar;