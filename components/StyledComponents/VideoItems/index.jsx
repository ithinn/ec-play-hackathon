import React from "react";
import { Box } from "reflexbox/styled-components"
import VideoPlcHolder from "../../VideoPlcHolder"
import { ItemTitle } from "../Typography";
import {usePageContext} from "../../../context/PageContext"


export const VideoRegular = ( {data} ) => {
   
    return (
        <Box>
            <VideoPlcHolder  color="lightgray" shadow="gray"/>
            <ItemTitle clr="white">{data}</ItemTitle>
        </Box>
    )
}
