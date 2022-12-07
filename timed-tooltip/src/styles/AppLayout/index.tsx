import { FC } from "react";
import S from './styles'

interface AppLayoutProps {
    children: React.ReactNode;
}

const AppLayout : FC<AppLayoutProps> = ({ children })  => {
    return (
        <S.Wrapper>
            {children}
        </S.Wrapper>
    )
}

export default AppLayout;