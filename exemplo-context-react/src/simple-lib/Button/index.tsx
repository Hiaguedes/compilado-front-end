import { ButtonBase } from './button.styles';

interface ButtonProps {
    text: string;
}


const Button = ({text}: ButtonProps) => {
    return (
        <ButtonBase>
            {text}
        </ButtonBase>
    );
}

export default Button;
