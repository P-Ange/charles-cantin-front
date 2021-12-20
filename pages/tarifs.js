import Header from '../components/header';
import { fetchAPI } from '../lib/api';
import Images from '../components/image'

export default function Tarif ({global}) {
    return (
        <div>
        <Header/>
        <h2>{}</h2>
        </div>
    )
}
export async function getStaticProps() {

    const [global] = await Promise.all([
      fetchAPI("/global"),
    ]);
    return{
      props: {global},
    };
  }