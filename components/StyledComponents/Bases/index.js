import styled from "styled-components"
import { Box, } from "reflexbox/styled-components"

export const HeaderBase = styled(Box)`
    width: 100%;
    height: auto;
    background: ${props => props.theme.colors.bckGr};
    margin: 0;
    margin-bottom: 2em;
    color: ${props => props.theme.colors.white};
`


export const NavBase = styled.nav`
    width: 100%;
    height: 10vh;
    background-color: ${props => props.theme.colors.bckGr};
    display: flex;
    justify-content: space-between;
    padding: 10px;
    
`