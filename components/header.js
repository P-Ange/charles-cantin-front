import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { SocialIcon } from "react-social-icons";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
       
    
    <div>

      <nav className="bg-[#47555e] border-b-4 border-white text-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-36">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-15 z-10 ">
                <img
                  className="image-header flex"
                  src="https://zupimages.net/up/21/50/ij3h.png"
                  alt="Charles Cantin"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-20 flex items-baseline space-x-4 ">
                  <a
                    href="/"
                    className="bg-[#151119] rounded-full hover:bg-gray-700 text-white px-3 py-2  font-medium"
                  >
                    Accueil
                  </a>

                  <a
                    href="galerie"
                    className="bg-[#151119] rounded-full hover:bg-gray-700 text-white px-3 py-2  font-medium"
                  >
                    Galerie
                  </a>

                  <a
                    href="/tarifs"
                    className="bg-[#151119] rounded-full hover:bg-gray-700 text-white px-3 py-2  font-medium"
                  >
                    Tarifs & Prestations
                  </a>

                  <a
                    href="#"
                    className="bg-[#151119] rounded-full hover:bg-gray-700 text-white px-3 py-2 font-medium"
                  >
                    Contact
                  </a>

                  <a
                    href="#"
                    className="bg-[#151119] rounded-full hover:bg-gray-700 text-white font-medium"
                  >
                <SocialIcon
                network="facebook"
                bgColor="white"
                style={{ height: 30, width: 30, margin: 5 }}
              />
                  </a>

                  <a
                    href="#"
                    className="bg-[#151119] rounded-full hover:bg-gray-700 text-white text-sm font-medium"
                  >
                     <SocialIcon
                network="instagram"
                bgColor="white"
                style={{ height: 30, width: 30, margin: 5 }}
              />
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" bg-[#47555e] inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#47555e] focus:outline-none "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
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
          show={isOpen}
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
                <a
                  href="/"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Accueil
                </a>

                <a
                  href="galerie"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Galerie
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Tarifs & Prestations
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                 <SocialIcon
                network="facebook"
                bgColor="white"
                style={{ height: 30, width: 30, margin: 5 }}
              />
                </a>
                
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                 <SocialIcon
                network="facebook"
                bgColor="white"
                style={{ height: 30, width: 30, margin: 5 }}
              />
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>

      </div>
  );
}

export default Header;
