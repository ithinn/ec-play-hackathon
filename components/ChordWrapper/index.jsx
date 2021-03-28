import {Box, Flex} from "reflexbox/styled-components";
import ChoiceBox from "../ChoiceBox";
import ChordVideo from "../ChordVideo"

const ChordWrapper = () => {

    return(
        <Flex 
            m={1} 
            as="section" 
            width="96%" 
            ml="auto" 
            mr="auto" 
            flexDirection="column">

            <Box width="100%">
                <ChoiceBox/>
            </Box>
            
            <Box width="100%">
            <ChordVideo/>
            </Box>

        </Flex>
    )
}

export default ChordWrapper;