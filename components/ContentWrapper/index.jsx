import { useState } from "react";
import { usePageContext } from "../../context/PageContext";
import { Box, Flex } from "reflexbox/styled-components";
import { CatHeading, ItemTitle } from "../../components/StyledComponents/Typography";
import VideoPlcHolder from "../VideoPlcHolder";


const ContentWrapper = () => {

    const context = usePageContext();
    const categories = context.linkArray();
    let temp;
  
    const listContent = categories.map((cat, index) => {
    
        temp = context.instrument.videos[cat];

        if (cat !== "chords") {

            return (
                <Flex 
                    as="section"
                    pl={3}
                    pr={3}
                    alignItems={context.windowSize.width > 600 ? "flex-start" : "center"} 
                    flexDirection="column" 
                    flexWrap="wrap">


                    <Box>
                        <CatHeading id={cat}>{cat}</CatHeading>
                    </Box>

                    <Flex 
                        justifyContent={context.windowSize.width > 600 ? "flex-start" : "center"} 
                        flexWrap="wrap" >
                        
                        {temp.map((item, index) => {

                            return(
                                <Box key={item + index}>
                                    <VideoPlcHolder  
                                        color="lightgray" 
                                        shadow="gray" 
                                        width="300px" 
                                        height="160px"/>

                                    <ItemTitle clr="white">{item}</ItemTitle>
                                </Box>
                            )
                        })}
                    </Flex>
                </Flex>
            )
        }
    })  
    

    return (
        <Box height="auto" p={3}>
            {listContent}
        </Box>
    )
}

export default ContentWrapper;