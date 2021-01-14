import React from 'react';
import Menu from '../../components/Menu';
import { HomeContainer } from '../../styles/Home.styles';

const A = () => {
    return (
        <HomeContainer>
            <Menu options={['a1', 'a2']}/>
            BAKAMITAI
        </HomeContainer>
    );
}

export default A;
