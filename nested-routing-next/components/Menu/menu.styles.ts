import styled from 'styled-components';

export const MenuContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    background-color: #e1e1e1;
    height: 5rem;
`;

export const MenuItem = styled.a`
    width: 15%;
    height: 100%;
    text-transform: uppercase;
    border: 1px solid rgba(0,0,0,0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: inherit;
    text-decoration: none;
`;