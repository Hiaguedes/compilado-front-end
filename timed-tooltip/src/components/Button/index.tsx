import S from './style'
import { ButtonHTMLAttributes, FC } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button : FC<ButtonProps> = ({title, ...rest}) => {
    return (
        <S {...rest}>{title || 'Exemplo'}</S>
    )
}

export default Button;