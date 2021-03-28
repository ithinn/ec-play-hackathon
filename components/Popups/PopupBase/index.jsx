import styled from "styled-components";
import { Flex } from "reflexbox/styled-components";

export const PopupBase = styled(Flex)`
    background-color: white;
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    right: ${props => props.right};
    bottom: ${props => props.bottom};
    z-index: ${props => props.theme.zIndices[3]};
    
` 
PopupBase.defaultProps = {
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
}
