import styled  from 'styled-components';
import colors from '../../utils/colors';

export const InputBase = styled.input`
    width: 100%;
    padding: 1rem 0.5rem;
    border-radius: 5px;
    outline: none;
    border: 1px solid #3f3f3f;

    ::placeholder {
        color: #3f3f3f;
    }

    :focus {
        border: 1px solid ${colors.primary};
    }

`

export const InputContainer = styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;
    flex-direction: row;
    margin: 3rem 0;
`;

export const InputWrapper = styled.div`
    width: 60%;
    position: relative;
`;
