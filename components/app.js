import React from 'react';
import SearchForm from './search-form/search-form';

export default () => {
    return (
        <SearchForm onSearchSubmitted={(term) => console.log(term)} />
    )
};