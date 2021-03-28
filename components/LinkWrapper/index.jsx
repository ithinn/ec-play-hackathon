import { Flex } from "reflexbox/styled-components";
import { usePageContext } from "../../context/PageContext";
import { LinkBtn } from "../StyledComponents/Buttons";

const LinkWrapper = () => {

    const context = usePageContext();
    let videos = context.linkArray();
    let links;

    if (videos !== null) {
        links = videos.map((item, index) => {

            if (item !== "chords") {

                return(
                    <LinkBtn 
                        
                        m={2} 
                        color="white                " 
                        variant={context.instrument.name} 
                        key={"key" + item + index}
                        href={"#" + item}>
                            {item}</LinkBtn>
                )
            }
        });
    }

    return (
        <Flex flexWrap="wrap" alignItems="center">
            {links} 
        </Flex>
    )
}

export default LinkWrapper;