import React, { useState } from 'react'
import './Search.css';

export default function Search({ handleClick }) {
    const [searchInput, setSearchInput] = useState("");

    return (
        <div className="input-group">
            <input type="search" onChange={e => setSearchInput(e.target.value)} className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <button type="button" onClick={e => handleClick(searchInput)} className="btn btn-outline-primary">Search</button>
        </div>
    )
}
