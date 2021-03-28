import { useEffect } from "react"
import Layout from "../../components/Layout";
import ChordWrapper from "../../components/ChordWrapper"
import { usePageContext } from "../../context/PageContext";


const ChordB = () => {

    const context = usePageContext();

    //Sets the instrument and chord state in PageContext
    useEffect(() => {

        if (context.instrument === null) {
            context.changeInstrument("guitar");
        }

        context.changeChord("B-dur")
    }, []);

    
    return (
        <Layout chordB>
            <ChordWrapper/>
        </Layout>
    )
}

export default ChordB;