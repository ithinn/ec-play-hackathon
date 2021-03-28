import Layout from "../components/Layout"
import InstrumentWrapper from "../components/InstrumentWrapper";
import { usePageContext } from "../context/PageContext";
import { useRouter } from "next/router";


export default function Home() {

  const context = usePageContext();
  const router = useRouter();

  const handleClick = ({target}) => {
    let string = target.id;
    let id = string.substring(0, string.length-3);
    let path = "/instruments/"+ id
   
    context.changeInstrument(id);
    router.push(path);
  }


  return (
    <Layout home>
        <InstrumentWrapper handleClick={handleClick}/>
    </Layout>
  )
}
