/* eslint-disable @typescript-eslint/no-explicit-any */
import { coffeeItems } from "../data/coffeesData";
import Card from "./Card";


export default function Products() {  

  return (
    <main className="relative overflow-hidden bg-coffe" id="products">
      <section className="flex gap-5 overflow-x-auto overflow-y-hidden p-2">
        {coffeeItems.map((item, index) => (
          <Card
            id={item.id}
            key={index}
            nome={item.nome}
            preco={item.preco}
            descricao={item.descricao}
            imagem={item.imagem}
            disponivel={item.disponivel}          
          />
        ))}
      </section>
    </main>
  );
}
