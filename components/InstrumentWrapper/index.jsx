import { Flex, Box } from "reflexbox/styled-components";
import { InstrumentBtn } from "../StyledComponents/Buttons";
import { ItemTitle } from "../StyledComponents/Typography";
import { 
    PianoSymbol, 
    ViolinSymbol, 
    BassSymbol,
    UkuleleSymbol,  
    GuitarSymbol } from "../InstrumentSymbols";


const InstrumentWrapper = ({handleClick}) => {
    return (
        <Flex width="90%" ml="auto" mr="auto" flexWrap="wrap" justifyContent="center">
            <InstrumentBtn handleClick={handleClick} id="pianoBtn" backgroundColor="#BF5A75">
                <Box width="100px" height="100px"><PianoSymbol color="white"></PianoSymbol></Box>
                <ItemTitle clr="white">Piano</ItemTitle>
            </InstrumentBtn>

            <InstrumentBtn handleClick={handleClick}  id="bassBtn" backgroundColor="#A68B66">
                <Box width="100px" height="100px"><BassSymbol color="white"/></Box>
                <ItemTitle clr="white">Bass</ItemTitle>
            </InstrumentBtn>

            <InstrumentBtn handleClick={handleClick}  id="violinBtn" backgroundColor="#594058">
                <Box width="100px" height="100px"><ViolinSymbol color="white"/></Box>
                <ItemTitle clr="white">Fiolin</ItemTitle>
            </InstrumentBtn>

            <InstrumentBtn handleClick={handleClick}  id="guitarBtn" backgroundColor="#A6498d">
                <Box width="100px" height="100px"><GuitarSymbol color="white"/></Box>
                <ItemTitle clr="white">Gitar</ItemTitle>
            </InstrumentBtn>

            <InstrumentBtn handleClick={handleClick}  id="ukuleleBtn" backgroundColor="#2a3659">
                <Box width="100px" height="100px"><UkuleleSymbol color="white"/></Box>
                <ItemTitle clr="white">Ukulele</ItemTitle>
            </InstrumentBtn>
          
        </Flex>
    )
}

export default InstrumentWrapper