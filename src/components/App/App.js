import React from 'react';

import AppHeader from '../AppHeader/AppHeader';
import PostAddForm from '../PostAddForm/PostAddForm';
import PostList from '../PostList/PostList';
import PostStatusFilter from '../PostStatusFilter/PostStatusFilter';
import SearchPanel from '../SearchPanel/SearchPanel';

import './App.css';
import styled from 'styled-components';

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

const data = [
    { label: 'Going to learn React', important: true, id: 'ewewfe' },
    { label: 'That is so good!', important: false, id: 'fvregreg' },
    { label: 'I need a break...', important: false, id: 'cascas' }
]

const App = () => {
    return (
        <AppBlock>
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts={data} />
            <PostAddForm />
        </AppBlock>

    )
}

export default App
