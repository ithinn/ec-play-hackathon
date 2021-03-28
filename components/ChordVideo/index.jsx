import { Box } from "reflexbox/styled-components"
import { usePageContext } from "../../context/PageContext";
import VideoPlcHolder from "../VideoPlcHolder";
import { ItemTitle } from "../StyledComponents/Typography"


const ChordVideo = () => {

    const context = usePageContext();
    const chord = context.chord !== null ? context.chord.chord : null;
    const instrument = context.instrument !== null ? context.instrument.name : null;

    return (
        <Box m={1} width="100%" height="100%">

            <ItemTitle clr="white">
                {chord + ", " + instrument + ": " + "Nivå " + context.level}
            </ItemTitle>

            <Box>
                <VideoPlcHolder 
                    width="100%" 
                    height="auto" 
                    color="lightGray" 
                    shadow="gray"/>
            </Box>
            
        </Box>
    )
}

export default ChordVideo;