import styled from "styled-components"
import { Flex } from "reflexbox/styled-components"
import { InstrumentBtn } from "../Buttons";

export const SubmitBtnBase = styled(Flex)`
    width: 100%;
    height: auto;
    background-color: ${props => props.theme.colors.bckGr};
    border: 4px solid white;
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.main};
    margin: ${props => props.theme.space[1]};
    padding:  ${props => props.theme.space[3]};
    justify-content: center;
    text-transform: uppercase;

    &:hover {
        background-color: ${props => props.theme.colors.white};
        box-shadow: ${props => props.theme.shadows.hover};
        color: ${props => props.theme.colors.bckGr};
       
    }
`
SubmitBtnBase.defaultProps = {
    as: "button"
}

export const SubmitBtn = ( {type, children} ) => {
    return (
        <SubmitBtnBase type="type">
            {children}
        </SubmitBtnBase>
    )
}

export const Select = styled.select`
    font-family: ${props => props.theme.fonts.main};
    font-size: 2rem;
    background-color: ${props => props.bg};
    margin: ${props => props.theme.space[1]};
    width: 100%;
    
`

export const LabelAsButton = styled.label`
    font-size: 1rem;
    color: white;
    border: 2px solid white;
    padding: ${props => props.theme.space[2]};
    margin-bottom: 5em;
    
   &:hover {
        box-shadow: ${props => props.theme.shadows.hover};
        color: black;
    }

    &:active {
        background-color: white;
        color: ${props => props.theme.colors.main}
    }
    
`


export const InvisibleInput = styled.input`
    width: .1px;
    height: .1px;
    margin-bottom: 2em;
 
    
    &:checked ~ label {
        background-color: white;
        color: black;
        box-shadow: ${props => props.theme.shadows.hover};
    }  
`


