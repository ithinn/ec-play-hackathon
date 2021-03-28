import { useEffect } from "react"
import Layout from "../../components/Layout";
import ChordWrapper from "../../components/ChordWrapper"
import { usePageContext } from "../../context/PageContext";


const ChordA = () => {

    const context = usePageContext();

    //Sets the instrument and chord state in PageContext
    useEffect(() => {

        if (context.instrument === null) {
            context.changeInstrument("guitar");
        }

        context.changeChord("A-dur")
    }, []);

    
    return (
        <Layout chordA>
            <ChordWrapper/>
        </Layout>
    )
}

export default ChordA;