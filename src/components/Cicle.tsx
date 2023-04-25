import { Star, GitCommit, Tree, Brandy, Grains } from "@phosphor-icons/react";

import "../mobile/CicleMobile.css";

export default function Cicle() {
  return (
    <section className="flex flex-col items-center justify-center bg-coffe border-y-2 border-white gap-10">
      <h1
        className="text-[2rem] text-cappuccino border-b-2 font-semibold"
        id="cicle"
      >
        CICLO PERFEITO
      </h1>

      <div className="flex gap-5 items-center">
        {" "}
        <Star size={50} weight="fill" color="#734b3e" />
        <Star size={50} weight="fill" color="#734b3e" />
        <Star size={50} weight="fill" color="#734b3e" />
        <Star size={50} weight="fill" color="#734b3e" />
        <Star size={50} weight="fill" color="#734b3e" />
      </div>

      <div className="flex gap-20 container-cicle-mobile">
        <p className="font-semibold text-cappuccino hover:text-yellow-950 flex flex-col items-center">
          <Tree size={50} weight="fill" color="#734b3e" />
          CURADORIA
        </p>
        <p className="font-semibold text-cappuccino hover:text-yellow-950 flex flex-col items-center">
          <Grains size={50} weight="fill" color="#734b3e" />
          CUIDADO
        </p>
        <p className="font-semibold text-cappuccino hover:text-yellow-950 flex flex-col items-center">
          <GitCommit size={50} weight="fill" color="#734b3e" />
          COMPROMISSO
        </p>
        <p className="font-semibold text-cappuccino hover:text-yellow-950 flex flex-col items-center">
          <Brandy size={50} weight="fill" color="#734b3e" />
          CELEBRAÇÃO
        </p>
      </div>
    </section>
  );
}
