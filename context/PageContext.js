import React, {createContext, useContext, useEffect, useState} from "react"
import { database } from "../data/data.js";


const PageContext = createContext({
    windowSize: {width: undefined, height: undefined},
    instrument: null,
    showPopup: false,
    chord: null,
    userChoice: null,
    theme: null,
    level: 1,
    data: ""
})

export const Page = ({ children }) => {
    const [windowSize, setWindowSize] = useState({width: undefined, height: undefined});
    const [instrument, setInstrument] = useState(null)
    const [showPopup, setShowPopup] = useState(false);
    const [chord, setChord] = useState(null);
    const [userChoice, setUserChoice] = useState(null);
    const [theme, setTheme] = useState(null);
    const [level, setLevel] = useState(1);
    const [data, setData] = useState(database);


    //Creates listener for the viewport size
    useEffect(() => {
        if (typeof window !== "undefined") {
            
            const handleResize = () => {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                })
            }

            window.addEventListener("resize", handleResize);
            handleResize();

            return () => window.removeEventListener("resize", handleResize)
        }
    }, [])
   

    //-----------------------------------------------------
    //Changes state for "instrument, theme, level and chord 
    //-----------------------------------------------------

    const changeInstrument = ( data ) => {
        for ( let item in database) {
            if (database[item].name === data) {
              setInstrument(database[item]);
            }
          }
    }

    const changeTheme = (data) => {
        setTheme(data);
    }

    const changeLevel = (data) => {
        setLevel(data)
    }
    const changeChord = (data) => {
        for (let item in database) {
         
            database[item].videos.chords.forEach(item => {
   
                if (item.chord === data) {
                    console.log(item);
                    setChord(item);
                }
            })
        }
    } 

    //---------------------------------------------------------------------

    //Used in chord-pages. Lets user choose level, instrument etc.
    const addUserChoice = (data) => {
       
        setInstrument(data.instruments)
        
        for (let item in data.level) {
          
            if (data.level[item]) {
                setUserChoice(item);
            }
        }
    }


    const togglePopup = () => {
        showPopup ? setShowPopup(false) : setShowPopup(true);
    }


    //Creates array of all the instrument's videos
    const linkArray = () => {
        const tempArray = [];

        if (instrument !== null) {
            for (let item in instrument.videos) {
                tempArray.push(item);
            }
        }
        
        return tempArray
    }   


    return (
        <PageContext.Provider value={{
            windowSize,
            changeInstrument,
            instrument,
            changeChord,
            chord,
            linkArray,
            togglePopup,
            showPopup,
            userChoice,
            addUserChoice,
            theme,
            changeTheme,
            level,
            changeLevel,
            data
           
        }}>{children}</PageContext.Provider>
    )
}

export const usePageContext = () => {
    return useContext(PageContext);
}