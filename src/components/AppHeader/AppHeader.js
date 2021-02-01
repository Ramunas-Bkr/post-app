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

const AppHeader = () => {
    return (
        <Header>
            <h1>Vardenis Pavardenis</h1>
            <h2>5 įrašai, iš jų patiko 2 įrašai</h2>
        </Header>
    )
}

export default AppHeader
