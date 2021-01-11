import React, { memo } from 'react';
import { InputBase, InputContainer, InputWrapper } from './input.styles';
import Button from '../Button' 

interface InputProps {
    placeholder: string;
    addButton: boolean;
}

const Input = ({placeholder}: InputProps) => {
    return (
        <InputContainer>
            <InputWrapper>
                <InputBase placeholder={placeholder} />
                <div style={{position: 'absolute', top: 0, right: 0,height: '100%', zIndex: 10, display: 'flex', justifyContent: 'center',alignItems: 'center'}}>
                <Button text="+"/>
                </div>
            </InputWrapper>
        </InputContainer>
    );
}

export default memo(Input);
