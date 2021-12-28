import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import Script from "next/script";
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";


export default function contact({informations, seo}) {
  return (
    <div>
    <Head>
    
    <title>{seo.siteName}</title>
    <meta name="description" content={seo.MetaDescription} />
    <link rel="shortcut icon" href={getStrapiMedia(seo.Favicon)} />
  </Head>

      <Header />
      <div className="relative">
        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="relative bg-white shadow-xl">
              <h2 className="sr-only">Contact us</h2>

              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Contact information */}
                <div className="relative overflow-hidden py-10 px-6 bg-[#47555e] sm:px-10 xl:p-12 rounded-lg ">
                  <div
                    className="absolute inset-0 pointer-events-none sm:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={343}
                      height={388}
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={359}
                      height={339}
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                        fill="url(#linear2)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear2"
                          x1="192.553"
                          y1="28.553"
                          x2="899.66"
                          y2="735.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={160}
                      height={678}
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white">
                   Informations
                  </h3>
                  <p className="mt-6 text-base text-white max-w-3xl">
                   Pour toute demande spéciale, n&apos;hésitez pas à me contacter
                  </p>
                  <dl className="mt-8 space-y-6">
                    <dt>
                      <span className="sr-only">Numero de telephone</span>
                    </dt>
                    <dd className="flex text-base text-white">
                      <PhoneIcon
                        className="flex-shrink-0 w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                      <span className="ml-3">{informations.Telephone}</span>
                    </dd>
                    <dt>
                      <span className="sr-only">E-mail</span>
                    </dt>
                    <dd className="flex text-base text-white">
                      <MailIcon
                        className="flex-shrink-0 w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                      <span className="ml-3">{informations.email}</span>
                    </dd>
                  </dl>
                  <ul role="list" className="mt-8 flex space-x-12">
                    <li>
                      <a
                        className="text-indigo-200 hover:text-indigo-100"
                        href={informations.Facebook}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="sr-only">Facebook</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" role="img" aria-labelledby="facebook-icon">
        <title id="facebook-icon">Facebook</title>
        <path fill="#E5E5E5" d="M18.896 20.12h1.758v-1.708c0-.753.02-1.915.566-2.635.576-.762 1.368-1.28 2.73-1.28 2.218 0 3.15.316 3.15.316l-.438 2.605s-.73-.212-1.417-.212c-.684 0-1.296.245-1.296.93v1.985h2.803l-.194 2.547h-2.61v8.84h-3.297v-8.84h-1.758V20.12z"/>
        <path className="button--svg__border" fill="#E5E5E5" d="M23 3c11.027 0 20 8.972 20 20 0 11.027-8.973 20-20 20-11.028 0-20-8.973-20-20C3 11.972 11.972 3 23 3m0-2C10.85 1 1 10.85 1 23s9.85 22 22 22 22-9.85 22-22S35.15 1 23 1z"/>
      </svg>
                      </a>
                    </li>
                   
                    <li>
                      <a
                        className="text-indigo-200 hover:text-indigo-100"
                        href={informations.Instagram}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="sr-only">Instagram</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" role="img" aria-labelledby="instagram-icon">
        <title id="instagram-icon">Instagram</title>
        <path className="button--svg__border" fill="#E5E5E5" d="M23 3c11.028 0 20 8.972 20 20s-8.972 20-20 20S3 34.028 3 23 11.972 3 23 3m0-2C10.85 1 1 10.85 1 23s9.85 22 22 22 22-9.85 22-22S35.15 1 23 1z"/>
        <path fill="#E5E5E5" d="M29.76 29.03v-7.373h-1.537c.152.48.23.975.23 1.49 0 .958-.243 1.838-.73 2.647-.485.807-1.146 1.447-1.98 1.918-.834.47-1.744.705-2.73.705-1.495 0-2.773-.514-3.835-1.543-1.062-1.027-1.593-2.27-1.593-3.726 0-.517.076-1.013.228-1.49H16.21v7.373c0 .2.065.37.2.5.13.14.296.2.494.2H29.07c.188 0 .352-.06.488-.2s.202-.3.202-.49zm-3.233-6.064c0-.94-.343-1.743-1.03-2.406-.686-.664-1.515-.996-2.486-.996-.96 0-1.78.332-2.47.996-.68.663-1.03 1.466-1.03 2.406 0 .942.35 1.743 1.03 2.407s1.51.996 2.48.996c.975 0 1.8-.34 2.49-1s1.03-1.47 1.03-2.41zm3.233-4.097v-1.88c0-.22-.076-.4-.23-.56-.15-.158-.336-.235-.556-.235h-1.98c-.22 0-.406.08-.558.233-.15.155-.228.34-.228.552v1.876c0 .22.076.404.228.556s.337.23.558.23h1.98c.22 0 .406-.078.557-.23.16-.15.23-.338.23-.558zm1.98-2.37v12.99c0 .61-.22 1.14-.66 1.58-.44.44-.967.66-1.582.66H16.502c-.614 0-1.142-.22-1.582-.66-.44-.44-.66-.97-.66-1.586V16.5c0-.614.22-1.142.66-1.582.44-.44.967-.66 1.582-.66h12.996c.615 0 1.14.22 1.582.66.44.44.66.967.66 1.58z"/>
      </svg>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact form */}
                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                  <h3 className="text-lg font-medium text-gray-900">
                    Nous écrire
                  </h3>
                  <form
                    action="https://formspree.io/f/mayvnqvy"
                    method="POST"
                    className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                  >
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Prénom *
                      </label>
                      <div className="mt-1">
                        <input 
                         required
                         type="text"
                          name="Prénom"
                          id="first-name"
                          autoComplete="given-name"
                          className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                         />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Nom *
                      </label>
                      <div className="mt-1">
                        <input
                        required
                          type="text"
                          name="Nom"
                          id="last-name"
                          autoComplete="family-name"
                          className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-900"
                      >
                        E-mail *
                      </label>
                      <div className="mt-1">
                        <input
                        required
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-900"
                        >
                          Téléphone *
                        </label>
                        <span
                          id="phone-optional"
                          className="text-sm text-gray-500"
                        >
                        </span>
                      </div>
                      <div className="mt-1">
                        <input
                        required
                          type="text"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                          aria-describedby="phone-optional"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Sujet *
                      </label>
                      <div className="mt-1">
                        <input
                        required
                          type="text"
                          name="subject"
                          id="subject"
                          className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-900"
                        >
                          Message *
                        </label>
                        <span
                          id="message-max"
                          className="text-sm text-gray-500"
                        >
                          Max. 500 caractères
                        </span>
                      </div>
                      <div className="mt-1">
                        <textarea
                        required
                          id="message"
                          name="message"
                          rows={4}
                          className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                          aria-describedby="message-max"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                      <button
                        type="submit"
                        className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto"
                      >
                        Envoyer
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Script id="1">
      {`window.onbeforeunload = () => {
        for (const form of document.getElementsByTagName('form')) {
        form.reset();}}`}
      </Script>
      {/* fin du script  */}
    </div>
  );
}
export async function getStaticProps() {

  const [informations, seo] = await Promise.all([
    fetchAPI("/informations"),
    fetchAPI("/seo"),

  ]);
  return{
    props: {informations, seo},
  };
}