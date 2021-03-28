import { useEffect } from "react"
import { usePageContext } from "../context/PageContext";
import { useRouter } from "next/router";
import { Flex } from "reflexbox"
import Layout from "../components/Layout"
import { InstrumentBtn } from "../components/StyledComponents/Buttons"
import { ItemTitle } from "../components/StyledComponents/Typography"


const Chords = () => {
    const context = usePageContext();
    const router = useRouter();
    let mappedChords;

    //Sets the instrument state if it's not defined before
    useEffect(() => {

        if (context.instrument === null) {
            context.changeInstrument("guitar");
        }

    }, []);

    //Map out all chords
    if (context.instrument !== null) {
        const chords = context.instrument.videos.chords;
        mappedChords = chords.map((item, index) => {
        
        return(
            <InstrumentBtn 
                id={item.chord} 
                handleClick={() => {router.push(item.path)}} 
                justifyContent="center" 
                alignItems="center" 
                variant={item.color} 
                width="250px" 
                height="110px"
                key={item + index} 
                >

                <ItemTitle clr="white">{item.chord}</ItemTitle>

            </InstrumentBtn>)
        }) 
    }
    
    return (
        <Layout chords>
            <Flex flexWrap="wrap" justifyContent="center">
               
                {mappedChords}
            
            </Flex>
        </Layout>
    )
}

export default Chords;
  