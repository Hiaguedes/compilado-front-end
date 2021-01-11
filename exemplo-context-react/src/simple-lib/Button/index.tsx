import { ButtonBase } from './button.styles';

interface ButtonProps {
    text: string;
    onPress: any;
}


const Button = ({text, onPress}: ButtonProps) => {
    return (
        <ButtonBase onClick={onPress}>
            {text}
        </ButtonBase>
    );
}

export default Button;
