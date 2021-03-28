import Header from "../Header";
import Head from "next/head"

function Layout( {
    children, home, guitar, piano, ukulele, 
    violin, bass, chords, chordE, chordD, 
    chordA, chordCiss, chordFiss, chordB, 
    isLink, isChordBtn, theme } ) {
        
        return(
        <>  
            <Head>
                <title>EC-Play</title>
            </Head>
    
            {home ? 
                <Header heading="Instrumentopplæring" isChordBtn={true}/>
            : 
            piano ?
                <Header 
                heading="Piano" 
                isLink={true} 
                isChordBtn={true} 
                instrument="piano" 
                theme="piano"/>
            :
            guitar ?
                <Header 
                heading="Gitar" 
                isLink={true} 
                isChordBtn={true} 
                instrument="guitar" 
                theme="guitar"/>
            :
            ukulele ?
                <Header 
                heading="Ukulele" 
                isLink={true} 
                isChordBtn={true} 
                instrument="ukulele" 
                theme="ukulele"/>
            :
            bass ?
                <Header 
                heading="Bass" 
                isLink={true} 
                isChordBtn={true} 
                instrument="bass" 
                theme="bass"/>
            :
            violin ?
                <Header 
                heading="Violin" 
                isLink={true} 
                isChordBtn={true} 
                instrument="violin" 
                theme="violin"/>
            :
            chords ?
                <Header heading="Akkorder" isLink={false}/>
            :
            chordE ?
                <Header 
                heading="E-dur og E-moll" 
                isLink={false} 
                theme="yellow" 
                isChoice={true}/>
            :
            chordD ?
                <Header 
                heading="D-dur og D-moll" 
                isLink={false} 
                theme="green" 
                isChoice={true}/>
            :
            chordA?
                <Header 
                heading="A-dur og A-moll" 
                isLink={false} 
                theme="red" 
                isChoice={true}/>
            :
            chordB?
                <Header 
                heading="B-dur og B-moll" 
                isLink={false} 
                theme="darkGreen" 
                isChoice={true}/>
            :
            chordCiss?
                <Header 
                heading="C#-dur og C#-moll" 
                isLink={false} 
                theme="orange" 
                isChoice={true}/>
            :
            chordFiss?
                <Header 
                heading="F#-dur og F#-moll" 
                isLink={false} 
                theme="darkRed" 
                isChoice={true}/>
            :
            null    
            }

            <main>{children}</main>
        </>
    )
}

export default Layout;