import { useEffect } from "react"
import Layout from "../../components/Layout";
import ChordWrapper from "../../components/ChordWrapper"
import { usePageContext } from "../../context/PageContext";


const ChordFiss = () => {

    const context = usePageContext();

    //Sets the instrument and chord state in PageContext
    useEffect(() => {

        if (context.instrument === null) {
            context.changeInstrument("guitar");
        }

        context.changeChord("F#-dur")
    }, []);

    
    return (
        <Layout chordFiss>
            <ChordWrapper/>
        </Layout>
    )
}

export default ChordFiss;