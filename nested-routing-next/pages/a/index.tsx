import React from 'react';
import Menu from '../../components/Menu';
import { HomeContainer } from '../../styles/Home.styles';

const A = () => {
    return (
        <HomeContainer>
            <Menu options={['a1', 'a2']}/>
            Essa é a página A
        </HomeContainer>
    );
}

export default A;
