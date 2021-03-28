import styled from "styled-components"

export const Ul = styled.ul`
    padding: 0;
    align-items: ${props => props.alignItems};
    margin-left: ${props => props.marginLeft};
    margin-left: ${props => props.marginRight};
    display: flex;
    flex-direction: ${props => props.flexDirection};
`

Ul.defaultProps = {
    marginLeft: "0",
    alignItems: "center",
    flexDirection: "row"  
}

export const InlineLi = styled.li`
    display: inline;
    color: ${props => props.theme.colors.white};
    font-weight: 600;
    cursor: pointer;
    margin-right: 2em;
`

export const Li = styled(InlineLi)`
    display: block;
    color: ${props => props.theme.colors.bckGr};
    margin: 1em;
    text-decoration: underline;
`