import Head from 'next/head'
import Header from '../components/header';
import Footer from '../components/footer';
import Images from '../components/image';
import { fetchAPI } from '../lib/api';
import React, { useState } from "react";
import { getStrapiMedia } from '../lib/media';

export default function Galerie ({galeries, categories, seo}) {
   const [selectedRadio, setSelectedRadio] = useState("");
  return (
    <div>
    <Head>
    
    <title>{seo.siteName}</title>
    <meta name="description" content={seo.MetaDescription} />
    <link rel="shortcut icon" href={getStrapiMedia(seo.Favicon)} />
  </Head>
       <Header />
       <div className=" flex justify-center">
                <ul className='rounded-lg
                bg-slate-600 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 px-4 gap-4 m-4' >

          {categories.map((categorie) => (
    
              <li className="m-auto py-5 " key={categorie.Categorie}>
                <input
                  type="radio"
                  value={categorie.Categorie}
                  id={categorie.Categorie}
                  checked={categorie.Categorie === selectedRadio}
                  onChange={(e) => setSelectedRadio(e.target.value)}
                />
                <label htmlFor={categorie.Categorie}>{categorie.Categorie}</label>
              </li>
          ))}
        </ul>
                <div className="cancel bg-white">
        {selectedRadio && (
          <h5 className="flex justify-center " onClick={() => setSelectedRadio("")}>Annuler recherche</h5>
        )}
      </div> </div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4'> 
      {galeries
        .filter((galerie) => galerie.categorie_galerie.Categorie.includes(selectedRadio))
        .map((galerie) => (
            <>
            <Images image={galerie.Image[0]} key={galerie.id}/>
            </>
        ))}
        </div>
    <Footer />
    </div>
  );
};

export async function getStaticProps() {

  const [seo, galeries, categories] = await Promise.all([
    fetchAPI("/seo"),
    fetchAPI("/galeries"),
    fetchAPI("/categorie-galeries"),
  ]);
  return{
    props: {seo, galeries, categories},
  };
}
