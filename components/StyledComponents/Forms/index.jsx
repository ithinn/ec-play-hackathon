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
    color: ${props => props.theme.colors.bckGr};
    border: 1px solid black;
    padding: ${props => props.theme.space[3]};
    margin: ${props => props.theme.space[1]};
    
   &:hover {
       
        color: black;
    }

    &:active {
        background-color: white;
        color: ${props => props.theme.colors.main}
    }
    
`


export const InvisibleCheckbox = styled.input`
    width: .1px;
    height: .1px;
    margin-bottom: 2em;
    
    &:checked ~ label {
        background-color: ${props => props.theme.colors.green};
        color: white;
    }  
`


