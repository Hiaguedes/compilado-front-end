import { useEffect, useState } from 'react';
import { MenuContainer, MenuItem } from './menu.styles';
import { useRouter } from 'next/router';
import Link from 'next/link'

interface MenuProps {
    options: string[];
}

const Menu = ({options}: MenuProps) => {
    const router = useRouter();
    const { asPath, pathname } = router;
    const [origin,setOrigin] = useState('');

    useEffect(() => {
        console.log('asPath: ', asPath);
        console.log('hostname: ', window.location.origin);
        setOrigin(window.location.origin)
    })
    return (
        <MenuContainer>
            {options.map((option, index) => 
                (
                <Link href={{
                    pathname: asPath === '/' ? `${origin}/${option}` :`${origin}${asPath}/${option}`
                    //pode mudar o localhost pelo basePath em next.config.js
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
