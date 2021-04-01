import {Box, Flex} from "reflexbox/styled-components"
import { useForm } from "react-hook-form" 
import { usePageContext } from "../../context/PageContext";
import { Select, SubmitBtn, LabelAsButton, InvisibleInput } from "../StyledComponents/Forms";
import { 
    PianoSymbol,  
    ViolinSymbol, 
    BassSymbol,
    UkuleleSymbol, 
    GuitarSymbol } from "../InstrumentSymbols";


const ChoiceBox = () => {
    
    const context = usePageContext();
    const instrument = context.instrument !== null ? context.instrument.name : null
    const { register, handleSubmit} = useForm()

    const onSubmit = async (data) => {

        //translates and formats data
        const translated = data.minMaj === "major" ? "dur" : "moll"
   
        const chordLetter = context.chord.chord[0] === "F" || context.chord.chord[0] === "C" ? 
        context.chord.chord[0] + context.chord.chord[1] : context.chord.chord[0];
        
        const newChord = chordLetter + "-" + translated;

        context.changeLevel(data.levels);
        context.changeChord(newChord);
        context.changeInstrument(data.instruments);
    }  

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Flex 
                variant={context.theme} 
                width="100%" flexWrap="wrap" 
                flexDirection="row" 
                alignItems="flex-start" 
                justifyContent="center"
                p={3}>
                
                <Box alignSelf="center" m={3} height="100px" width="100px">
                                    {instrument === "guitar" ?
                                        <GuitarSymbol color="white"/>
                                    : instrument === "piano" ?
                                        <PianoSymbol color="white"/>
                                    : instrument === "ukulele" ?
                                        <UkuleleSymbol color="white"/>
                                    : instrument === "violin" ?
                                        <ViolinSymbol color="white"/>
                                    : <BassSymbol color="white"/>
                                    }
                </Box>

                <Box m={3} p={3}justifyContent="center" flexDirection="column">
                    
                        <h3>Velg instrument</h3>
                        <Select name="instruments" ref={register}>
                            <option value="guitar">Gitar</option>
                            <option value="bass">Bass</option>
                            <option value="violin">Violin</option>
                            <option value="piano">Piano</option>
                            <option value="ukulele">Ukulele</option>
                        </Select>
              
                </Box>

                <Flex flexWrap="wrap" justifyContent="center">
                                 
                    <Box m={3} p={3}>
                        <h3>Velg dur/moll</h3>  
                        <Flex>
                            <div>
                                <InvisibleInput type="radio" value="major" name="minMaj" ref={register} id="major" />
                                <LabelAsButton htmlFor="major">Dur</LabelAsButton>
                            </div>

                            <div>
                                <InvisibleInput type="radio" value="minor" name="minMaj" ref={register} id="minor" />
                                <LabelAsButton htmlFor="minor">Moll</LabelAsButton>
                            </div>
                        </Flex>
                    </Box>

                    <Box m={3} p={3} >
                        <h3>Velg nivå</h3> 
                        
                        <Flex flexWrap="wrap" maxWidth="10em">
                        <div>
                        <InvisibleInput type="radio" value={1} name="levels" ref={register}id="level1" />
                        <LabelAsButton htmlFor="level1">Nivå 1</LabelAsButton>
                        </div>

                        <div>
                        <InvisibleInput type="radio" value={2} name="levels" ref={register} id="level2" />
                        <LabelAsButton htmlFor="level2">Nivå 2</LabelAsButton>
                        </div>

                        <div>
                        <InvisibleInput type="radio" value={3} name="levels" ref={register} id="level3" />
                        <LabelAsButton htmlFor="level3">Nivå 3</LabelAsButton>
                        </div>

                        <div>
                        <InvisibleInput type="radio" value={4} name="levels" ref={register} id="level4" />
                        <LabelAsButton htmlFor="level4">Nivå 4</LabelAsButton>
                        </div>

                        <div>                
                        <InvisibleInput type="radio" value={5} name="levels" ref={register} id="level5" />
                        <LabelAsButton htmlFor="level5">Nivå 5</LabelAsButton>
                        </div>

                        <div>
                        <InvisibleInput type="radio" value={6} name="levels" ref={register} id="level6" />
                        <LabelAsButton htmlFor="level6">Nivå 6</LabelAsButton>
                        </div>
                        </Flex>
                    
                    </Box>

                    <Box m={3} p={3} alignSelf="center">
                        <SubmitBtn>Se video</SubmitBtn>                        
                    </Box>

                </Flex>
            </Flex>
        </form>
    )
}

export default ChoiceBox;