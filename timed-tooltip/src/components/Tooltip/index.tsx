import React, { FC, HTMLAttributes, useEffect, useRef, useState } from 'react'
import { TooltipType } from '../../App';
import S from './styles'

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
    index: number;
    parentKey: number;
    removeTooltip: (element: TooltipType) => void;
    time?: {
        duration?: number;
    }

}

const Tooltip : FC<TooltipProps> = ({index, time = {duration: 5}, removeTooltip, parentKey , ...rest}) => {

    const [_time, setTime] = useState({ duration: time.duration, ended: false });
    const ref = useRef<React.ReactElement>();

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTime(prevValue => ({...prevValue, ended: true}));
            console.log(ref.current, 'ref dentro do componente')
            removeTooltip(ref.current!)
        }, time.duration! * 1000);

        return () => clearTimeout(timeout)
    }, [ref.current])

    return (
        <S.TooltipWrapper 
            ref={ref}
            key={parentKey}
            data-key={parentKey}
            data-ended={_time.ended} 
            index={index} 
            time={_time} 
            {...rest} 
        >
            <S.TimerLine
                time={_time} 
            />
        </S.TooltipWrapper>
    )
}

export default Tooltip
