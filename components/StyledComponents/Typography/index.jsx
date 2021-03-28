import styled from "styled-components"

export const MainHeading = styled.h1`
    font-size: ${props => props.theme.fontSizes.xl};
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.main};
    display: inline-block;
    text-align: center;

    @media (min-width: 64em) {
        font-size: ${props => props.theme.fontSizes.xxl};
    }
`

export const CatHeading = styled.h2`
    font-size: ${props => props.theme.fontSizes.lg};
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.main}; 
`

export const ItemTitle = styled.h3`
    font-size: ${props => props.theme.fontSizes.md};
    color: ${props => props.clr};
    font-family: ${props => props.theme.fonts.main};
`
