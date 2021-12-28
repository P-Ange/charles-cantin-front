import Header from "../components/header";
import Head from "next/head";
import Footer from "../components/footer";
import { fetchAPI } from "../lib/api";
import Images from "../components/image";
import { getStrapiMedia } from "../lib/media";

export default function Tarif({ seo, tarifs }) {
  return (
  
    <div>  <Head>
    
    <title>{seo.siteName}</title>
    <meta name="description" content={seo.MetaDescription} />
    <link rel="shortcut icon" href={getStrapiMedia(seo.Favicon)} />
  </Head>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
        {tarifs.map((tarif) => (
          <>
            <div className="bg-gray-700 text-white Flex justify-center border border-black">
              <h2 className="rounded-lg text-center m-2 border border-gray-500 bg-white text-black">
                {" "}
                {tarif.Titre}
              </h2>
              <div className="px-3">
                <Images image={tarif.Illustration[0]} />
              </div>
              <h2 className="bg-gray-700 text-white  text-center px-2"> {tarif.Descriptifs}</h2>
              <div className="text-center py-4">
                <button className="bg-[#151119] hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded  ">
                  {tarif.Prix}
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
      <Footer />
    </div>
  );
}
export async function getStaticProps() {
  const [seo, tarifs] = await Promise.all([
    fetchAPI("/seo"),
    fetchAPI("/tarif-solos"),
  ]);
  return {
    props: { seo, tarifs },
  };
}
