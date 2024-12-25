// Search.js
import React from 'react';
import { GoSearch } from 'react-icons/go';
import './Search.scss';

function Search({ searchTerm, setSearchTerm }) {
    return (
        <div className="search">
            <div className="search_input">
                <GoSearch />
                <input
                    type="text"
                    placeholder="Tìm kiếm tại đây..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="search_btn">
                <button>Tìm kiếm</button>
            </div>
        </div>
    );
}

export default Search;
