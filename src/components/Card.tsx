import { Link } from "react-router-dom";
import { ICoffee } from "../interfaces/coffee";
import { List } from "@phosphor-icons/react";

export default function Card(props: ICoffee) {
  const { nome, descricao, imagem, disponivel } = props;

  return (
    <div className="flex-none h-[26rem] w-64 bg-coffe flex flex-col items-start gap-2 rounded-lg shadow-lg border-2 border-white">
      <img
        src={imagem}
        alt={nome}
        className="rounded-t-lg h-[15.5rem] w-full"
      />

      <div className="p-2 flex flex-col gap-3">
        <p className="border-b-2 font-semibold">{nome}</p>
        <p className="h-10 overflow-auto">{descricao}</p>
        <Link
          to="/carrinho_de_compras"
          className="text-cappuccino font-semibold flex items-center gap-3 border-2 border-cappuccino justify-center p-1"
        >
          Ver mais <List size={30} weight="fill" color="#734b3e" />
        </Link>
        <p>{disponivel}</p>
      </div>
    </div>
  );
}
