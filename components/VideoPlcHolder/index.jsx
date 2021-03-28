import React from "react";
import { Box } from "reflexbox/styled-components"

const VideoPlcHolder = ( {color, shadow, width, height} ) => {
  
  return (
      <Box width={width} height={height} mr={1}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300.8 169.2">
          <path fill={color} d="M301 0H0v169.1L301 8.4z"></path>
          <path fill={shadow} d="M0 169.7v-.3h301V0z"></path>
          <circle cx="150.5" cy="84.6" r="43.9" opacity="0.28"></circle>
          <path d="M179.5 84.6L157 71.7l-22.4-13v51.9l22.4-13z"></path>
        </svg>
      </Box>
  );
}

export default VideoPlcHolder;