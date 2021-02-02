import React from 'react';

import './AppHeader.css';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        :hover {
            color: blue;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

const AppHeader = ({ liked, allPosts }) => {
    return (
        <Header>
            <h1>Vardenis Pavardenis</h1>
            <h2>{allPosts} {allPosts === 1 || allPosts % 1 === 1 ? `įrašas` : allPosts > 9 && allPosts < 21 ? `įrašų` : `įrašai`},
                iš jų patiko {liked} {liked === 1 || liked % 1 === 1 ? `įrašas` : liked > 9 && liked < 21 ? `įrašų` : `įrašai`}</h2>
        </Header>
    )
}

export default AppHeader
