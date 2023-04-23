import {  } from "react-router-dom";
import { useEffect } from "react";
import { Coffee, Confetti } from "@phosphor-icons/react";

export default function Buy() {


  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-coffe">
      <p className="text-bold text-3xl flex items-center justify-center">
        Agradecemos a sua preferência! Bom café{" "}
        <Confetti weight="fill" color="#6b5841" size={30} />
      </p>

      <div className="flex gap-5 mt-5">
        <Coffee size={25} />
        <Coffee size={25} />
        <Coffee size={25} />
        <Coffee size={25} />
        <Coffee size={25} />
        <Coffee size={25} />
        <Coffee size={25} />
      </div>
    </div>
  );
}
