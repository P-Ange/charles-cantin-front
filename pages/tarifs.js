import Header from "../components/header";
import Footer from "../components/footer";
import { fetchAPI } from "../lib/api";
import Images from "../components/image";

export default function Tarif({ global, tarifs }) {
  return (
    <div>
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
                <button class="bg-[#151119] hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded  ">
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
  const [global, tarifs] = await Promise.all([
    fetchAPI("/global"),
    fetchAPI("/tarif-solos"),
  ]);
  return {
    props: { global, tarifs },
  };
}
