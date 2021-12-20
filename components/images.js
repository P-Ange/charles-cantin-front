import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { SocialIcon } from "react-social-icons";

const images = () => {
    return (
        <div className="flex justify-center row py-10 col-12">
             <div className="text-white rounded-lg flex justify-center row py-5 px-5 bg-[#47555e]">
            <div className="flex justify-center 0 col-3 px-5 py-5 items-center"> <input type="radio"/><ul>
           <li>Grossesse</li></ul></div><div className=" flex justify-centercol-3 px-5 py-5 items-center"><input type="radio"/><ul><li>Bébé</li></ul>
               </div>
                <div className="flex justify-center  col-3 px-5 py-5 items-center"> <input type="radio"/><ul>
                <li>Baptême</li></ul></div> <div className="flex justify-center col-3 px-5 py-5 items-center"> <input type="radio"/><ul> <li>Couple</li>
                </ul> </div><div className="flex justify-center col-3 px-5 py-5 items-center"><input type="radio"/> <ul>
                <li>Mariage</li></ul></div><div className="flex justify-center  col-3 px-5 py-5 items-center"> <input type="radio"/><ul> <li>Portrait</li>
                </ul> </div><div className="flex justify-center  col-3 px-5 py-5 items-center"><input type="radio"/> <ul>
                <li>Famille</li>
                </ul> </div></div>
            
        </div>
    );
};

export default images;