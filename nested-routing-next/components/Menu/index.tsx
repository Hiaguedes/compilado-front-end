import { useEffect } from 'react';
import { MenuContainer, MenuItem } from './menu.styles';
import { useRouter } from 'next/router';
import Link from 'next/link'

interface MenuProps {
    options: string[];
}

const Menu = ({options}: MenuProps) => {
    const router = useRouter();
    const { asPath } = router;

    useEffect(() => {
        console.log('asPath: ', asPath);
    })
    return (
        <MenuContainer>
            {options.map((option, index) => 
                (
                <Link href={{
                    pathname: asPath === '/' ? `http://localhost:3000/${option}` :`http://localhost:3000${asPath}/${option}`
                    }} 
                    key={index}
                    passHref>
                    <MenuItem 
                    >
                        {option}
                    </MenuItem>
                </Link>)
            )}
        </MenuContainer>
    );
}

export default Menu;
