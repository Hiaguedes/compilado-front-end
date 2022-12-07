import styled from "@emotion/styled";
import { TooltipProps } from '.'

type TooltipTime = { time?: { duration?: number, ended?: boolean } }
type TooltipStyles = TooltipProps & TooltipTime

const TooltipWrapper = styled.div<TooltipStyles>`
    width: 120px;
    height: 50px;
    display: flex;
    position: absolute;

    background-color: red;

    top: ${({ index }) => `calc(${index} * ( 50px + 10px)  + 30px)`};

    right: -120px;
    animation: ${({ time }) => time && Boolean(time.ended) ? 'leftToRight 0.5s ease-in-out forwards' : 'rightToLeft 0.5s ease-in-out forwards'};  

    @keyframes rightToLeft {
    0% {
        right: -120px;
    }
    100% {
        right: 30px;
    }
    }

    @keyframes leftToRight {
    0% {
        right: 30px;
    }
    100% {
        right: -120px;
    }
    }
`

const TimerLine = styled.div<TooltipTime>`
    bottom: 0;
    left: 0;
    height: 3px;
    position: absolute; 

    background-color: blue; 
    animation: barRunningLeft ${({ time }) => time?.duration + 's'} ease-in-out forwards;

    @keyframes barRunningLeft {
    0% {
        width: 120px;
    }
    100% {
        width: 0;
    }
    }
`

const Styles = { TooltipWrapper, TimerLine };

export default Styles