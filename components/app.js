import React from 'react';
import SearchForm from './search-form/search-form';
import SearchResults from '../components/search-results/search-results';

const results = [
    {
        full: "https://media1.giphy.com/media/g5KhmX06Q0XBu/100_s.gif?cid=0f230e2f5d184b366344516f733e3dec&rid=100_s.gif",
        thumbnail: "https://media1.giphy.com/media/g5KhmX06Q0XBu/giphy_s.gif?cid=0f230e2f5d184b366344516f733e3dec&rid=giphy_s.gif",
    },
    {
        full: "https://media2.giphy.com/media/uw3fTCTNMbXAk/100_s.gif?cid=0f230e2f5d184b366344516f733e3dec&rid=100_s.gif",
        thumbnail: "https://media2.giphy.com/media/uw3fTCTNMbXAk/giphy_s.gif?cid=0f230e2f5d184b366344516f733e3dec&rid=giphy_s.gif",
    }
];

export default () => {
    return (
        <div>
            <SearchForm onSearchSubmitted={(term) => console.log(term)} />
            <SearchResults results={results} />
        </div>
    )
};