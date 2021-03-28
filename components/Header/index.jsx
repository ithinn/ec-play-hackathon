import React, { useState, useEffect } from "react";
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { usePageContext } from "../../context/PageContext";
//------------------------------------------------------------------components
import SelectChord from "../SelectChord";
import PopupMenu from "../Popups/PopupMenu";
import LinkWrapper from "../LinkWrapper";
import { HeaderBase, NavBase } from "../StyledComponents/Bases"
import { MainHeading } from "../StyledComponents/Typography";
import { Box, Flex } from "reflexbox/styled-components";
import { Ul, InlineLi } from "../StyledComponents/Lists";
import { RoundBtn, InstrumentBtn } from "../StyledComponents/Buttons";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import {Overlay} from "../StyledComponents/Overlay"
import { 
    GuitarSymbol, 
    PianoSymbol, 
    UkuleleSymbol, 
    ViolinSymbol, 
    BassSymbol } from "../InstrumentSymbols";


const Header = ({heading, isLink, instrument, isChoice, isChordBtn, theme}) => {

    const [isMenu, setIsMenu] = useState(false);
    const context = usePageContext();
    const router = useRouter();
    
    //Defines the instrument and theme states based on definitions in the Layout component
    useEffect(() => {
        if (instrument) {
            context.changeInstrument(instrument);
        }

        if (theme) {
            context.changeTheme(theme);
        }
    }, [])

    
    //Popupmenu on small screens
    const toggleMenu = () => {
        isMenu ? setIsMenu(false) : setIsMenu(true);
    }


    return (
        <HeaderBase as="header" variant={theme} >

            {isMenu && (
                <>
                <PopupMenu handleClick={toggleMenu}></PopupMenu>
                <Overlay position="fixed" height="100vh"/>
                </>    
            )}
      
            <NavBase>

                <Image
                    src="/logo_stroke.png_2.svg"
                    width={180}
                    height={180}
                />

                {context.windowSize.width > 1000 ? 
                    <Ul>
                        <Link href="/">
                            <InlineLi>Instrumentopplæring</InlineLi>
                        </Link>
                        <Link href="/">
                            <InlineLi>Metodikk og verktøy</InlineLi>
                        </Link>
                        <Link href="/">
                            <InlineLi>Undervisningsopplegg og ressurser</InlineLi>
                        </Link>
                        <Link href="/">
                            <InlineLi>Opplæring</InlineLi>
                        </Link>  
                    </Ul>
                :
                    <RoundBtn 
                        handleClick={() => toggleMenu()}
                        bg="white" 
                        hoverClr="white">
                            <IconContext.Provider value={{size: "2rem"}}>
                                <div>
                                    <GiHamburgerMenu></GiHamburgerMenu>
                                </div>
                            </IconContext.Provider>
                    </RoundBtn>
                }
            </NavBase>
        
            <Flex flexWrap="wrap" p={3}>
                
                <Flex 
                    width="100%"
                    alignItems="center" 
                    flexWrap="wrap" 
                    justifyContent={context.windowSize.width > 1000 ? "space-between" : "center"}>
                    
                    <Flex>
                        {instrument && (
                            <Box height="100px" width="100px" m={3}>
                                {instrument === "guitar" ?
                                    <GuitarSymbol color="#a6498d"/>
                                : instrument === "piano" ?
                                    <PianoSymbol color="#bf5a75"/>
                                : instrument === "ukulele" ?
                                    <UkuleleSymbol color="#2a3659"/>
                                : instrument === "violin" ?
                                    <ViolinSymbol color="#594058"/>
                                : <BassSymbol color="#a68b66"/>
                                }
                            </Box>
                        )}

                        <MainHeading >{heading}</MainHeading>
                    </Flex>
                
                    <Flex flexWrap="wrap" justifyContent="center">
                        {isChordBtn && (
                            <InstrumentBtn
                                handleClick={() => {router.push("/chords")}}
                                height="10vh"  
                                width="fit-content" 
                                id="chordBtn" 
                                backgroundColor="#151826" 
                                border="2px solid white">Akkorder</InstrumentBtn>
                        )}

                        {isChoice && (
                            <SelectChord/>
                        )}

                        {isLink && (
                            <LinkWrapper instrument={instrument}/>
                        )}
                    </Flex>
                </Flex>  
            </Flex>
        </HeaderBase>
    )
}

export default Header;