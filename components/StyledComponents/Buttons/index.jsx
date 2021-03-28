import styled from "styled-components"
import { Flex } from "reflexbox/styled-components"


const InstrumentBtnBase = styled(Flex)`
    font-size: ${props => props.theme.fontSizes.md};
    color: white;
    border: ${props => props.border};
    box-shadow: ${props => props.theme.shadows.blackCard};
    
    &:hover {
        background-color: ${props => props.theme.colors.hover};
        box-shadow: ${props => props.theme.shadows.hover};
       
    }
`

InstrumentBtnBase.defaultProps = {
    as: "button",
    justifyContent: "space-around",
    alignItems: "center",
    width: "350px",
    height: "200px",
    p: 2,
    pl: 4,
    pr: 4,
    m: 4,
    border: "none"
}


export const InstrumentBtn = ({backgroundImage, id, type, handleClick, children, ...rest}) => {
    return (

        <InstrumentBtnBase id={id} onClick={handleClick} type={type} {...rest}>
            {children}
        </InstrumentBtnBase>
    )
}

const RoundBtnBase = styled(Flex)`
    border-radius: ${props => props.theme.radii.round};
    border: ${props => props.theme.borders.roundBtn};
    color: #151826;
    position: ${props => props.position};
    right: ${props => props.right};
    top: ${props => props.top};
    &:hover {
        background-color: ${props => props.theme.colors.hover};
        color: ${props => props.hoverClr};
        border: ${props => props.theme.borders.roundBtn};
    }
`

RoundBtnBase.defaultProps = {
    width: "50px",
    height: "50px",
    justifyContent: "center",
    alignItems: "center",
    p: 4,
    as: "button",
    position: "none",
    right: "10px",
    top: "10px"
}


export const RoundBtn = ({handleClick, id, children, ...rest}) => {
    return (
        <RoundBtnBase 
            onClick={handleClick}
            id={id}
            {...rest}>
                {children}
        </RoundBtnBase>
    )
}

const LinkBtnBase = styled(Flex)`
    border: ${props => props.border};

    &:hover {
            background-color: ${props => props.theme.colors.hover};
            box-shadow: ${props => props.theme.shadows.hover};
            border: ${props => props.theme.borders.roundBtn};
            justify-content: center;
            align-items: center;
            color: ${props => props.hoverClr};
        }
`
LinkBtnBase.defaultProps = {
    p: 3,
    as: "a",
    m: 3,
    height: "fit-content",
    hoverClr: "white",
    border: "2px solid white"
}

export const LinkBtn = ({href, id, children, ...rest}) => {
    return (
        <LinkBtnBase
            href={href} 
            id={id}
            {...rest}>
                {children}
        </LinkBtnBase> 
    )
}
