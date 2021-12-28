import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import axios from "axios";


export default class Header extends React.Component {
  
  componentDidMount() {
    axios.get(`https://strapi-p-ange.herokuapp.com/informations`)
    .then(res => {
        const informations = res.data
        this.setState({ informations });
    })
}

constructor(props) {
  super(props);
  this.state = {
    isOpen: false,
    informations: [],
  }};
  render () {
  return (
       
    
    <div>
      <nav className="bg-[#47555e] border-b-4 border-white text-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-36">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-15 z-10 ">
               <Link href="/" passHref>
                 <img
                  className="image-header flex"
                  src="https://zupimages.net/up/21/50/ij3h.png"
                  alt="Charles Cantin"
                /></Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-20 flex items-baseline space-x-10 ">
                <div className="bg-[#151119] rounded-full hover:bg-gray-700 text-white px-3 py-2  font-medium"
                  >  <Link
                    href="/"
                    >
                    Accueil
                  </Link></div>
                  <div  className="bg-[#151119] rounded-full hover:bg-gray-700 text-white px-3 py-2  font-medium"
                  >
                  <Link
                    href="galerie"
                   >
                    Galerie
                  </Link></div>
                    <div   className="bg-[#151119] rounded-full hover:bg-gray-700 text-white px-3 py-2  font-medium"
                  >
                  <Link
                    href="tarifs"
                  >
                    Tarifs
                  </Link></div>
                    <div className="bg-[#151119] rounded-full hover:bg-gray-700 text-white px-3 py-2 font-medium"
                  >
                  <Link
                    href="contact"
                    >
                    Contact
                  </Link></div>

          
                  

                  <a passHref
                    target="_blank"
                    rel="noreferrer"
                    href={this.state.informations.Instagram}
                    ><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                  width="16.000000pt" height="16.000000pt" viewBox="0 0 16.000000 16.000000"
                  preserveAspectRatio="xMidYMid meet">
                 
                 <g transform="translate(0.000000,16.000000) scale(0.100000,-0.100000)"
                 fill="#ffffff" stroke="none">
                 <path d="M16 144 c-21 -21 -21 -107 0 -128 21 -21 107 -21 128 0 21 21 21 107
                 0 128 -21 21 -107 21 -128 0z m125 -16 c11 -16 11 -79 1 -94 -11 -18 -51 -26
                 -87 -20 -26 5 -34 12 -39 36 -8 42 3 88 23 94 28 8 93 -2 102 -16z"/>
                 <path d="M115 120 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0 -7
                 -4 -4 -10z"/>
                 <path d="M50 105 c-26 -32 13 -81 48 -59 9 6 18 19 20 28 8 38 -43 61 -68 31z
                 m50 -11 c11 -12 10 -18 -3 -32 -16 -15 -18 -15 -34 0 -13 14 -14 20 -3 32 16
                 20 24 20 40 0z"/>
                 </g>
                 </svg>
                  </a>


                
                  <a passHref
                  target="_blank"
                  rel="noreferrer"
                    href={this.state.informations.Facebook}
                   
                  ><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                  width="16.000000pt" height="16.000000pt" viewBox="0 0 16.000000 16.000000"
                  preserveAspectRatio="xMidYMid meet">
                 
                 <g transform="translate(0.000000,16.000000) scale(0.100000,-0.100000)"
                 fill="#ffffff" stroke="none">
                 <path d="M4 147 c-3 -8 -4 -43 -2 -78 l3 -64 75 0 75 0 0 75 0 75 -73 3 c-55
                 2 -74 -1 -78 -11z m141 -67 c0 -54 -3 -65 -17 -68 -13 -3 -18 3 -18 22 0 14 5
                 28 11 31 6 5 4 12 -7 20 -16 11 -16 13 2 23 19 11 18 11 -1 12 -24 0 -52 -50
                 -34 -61 6 -3 9 -15 7 -25 -2 -14 -12 -19 -38 -19 l-35 0 -3 54 c-5 80 -2 82
                 70 79 l63 -3 0 -65z"/>
                 </g>
                 </svg>
                  </a>


                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => this.setState({isOpen: !this.state.isOpen})}
                type="button"
                className=" bg-[#47555e] inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#47555e] focus:outline-none "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!this.state.isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={this.state.isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
               <div 
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                > <Link
                  href="/">
                  Accueil
                </Link></div>
                <div  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                <Link
                  href="galerie"
                 >
                  Galerie
                </Link></div>
                <div 
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                <Link
                  href="Tarifs">
                  Tarifs
                </Link></div>
                <div 
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                <Link
                  href="contact">
                  Contact
                </Link></div>
                <div 
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                <Link passHref
                  href="http://www.facebook.com">
                 <SocialIcon
                network="facebook"
                bgColor="white"
                style={{ height: 30, width: 30, margin: 5 }}
              />
                </Link></div>
                <div 
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                <Link passHref
                  href="http://www.instagram.com">
                 <SocialIcon
                network="instagram"
                bgColor="white"
                style={{ height: 30, width: 30, margin: 5 }}
              />
                </Link></div>
              </div>
            </div>
          )}
        </Transition>
      </nav>

      </div>
  )};
}
