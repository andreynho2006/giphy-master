import React from 'react';
import PropTypes from 'prop-types';
import * as CustomTypes from '../../lib/custom-types';

export default function SearchResults ({ results }) {
    return (
        <div>

        </div>
    );
}

SearchResults.propTypes = {
    results: PropTypes.arrayOf(CustomTypes.SearchResult),
};