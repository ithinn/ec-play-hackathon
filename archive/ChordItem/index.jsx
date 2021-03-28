import React from "react";
import { Box } from "reflexbox/styled-components"
import { ItemTitle } from "../../components/StyledComponents/Typography";
import {usePageContext} from "../../context/PageContext";
import PopupChord from "../../components/Popups/PopupChord";
import { InstrumentBtn } from "../../components/StyledComponents/Buttons";


const ChordItem = ( { data, index } ) => {
    const context = usePageContext();

    const handleClick2 = ({target}) => {

        


        console.log(target.id);
        context.togglePopup();
        context.changeChord(target.id);
        window.scrollTo(0, 0);
      }

    return(
        <Box>
            <InstrumentBtn 
                id={data.chord} 
                handleClick={event => handleClick2(event)} 
                justifyContent="center" 
                alignItems="center" 
                variant={data.color} 
                width="250px" 
                height="110px" 
                >
                    <ItemTitle clr="white">{data.chord}</ItemTitle>
            </InstrumentBtn>
           
            {context.showPopup && (<PopupChord data={data} index={index}/>)}
            
        </Box>

    )
}

export default ChordItem;