import Head from 'next/head'
import Header from '../components/header';
import Footer from '../components/footer';
import { fetchAPI } from '../lib/api';
import { getStrapiMedia } from '../lib/media';


export default function header ({accueil, seo}) {

  return (
    <div>
       <Head>
    
    <title>{seo.siteName}</title>
    <meta name="description" content={seo.MetaDescription} />
    <link rel="shortcut icon" href={getStrapiMedia(seo.Favicon)} />
  </Head>
      
        <Header /><div className='relative'>
        <img className='h-[calc(100vh-148px)] object-cover w-screen' src={accueil.Image.url} alt="Image-cover" />
        <h1 className="absolute inset-0 z-10 flex justify-center items-center text-6xl text-white">{accueil.Titre}</h1> 
    </div>

    <Footer />
    </div>
  );
};
export async function getStaticProps() {

  const [accueil, seo] = await Promise.all([
    fetchAPI("/accueil"),
    fetchAPI("/seo"),

  ]);
  return{
    props: {accueil, seo},
  };
}