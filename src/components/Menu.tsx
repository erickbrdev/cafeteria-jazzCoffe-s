/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { coffeeItems } from "../data/coffeesData";

import { ShoppingCart, XCircle, Coffee } from "@phosphor-icons/react";
import Loading from "./Loading";
import { Link } from "react-router-dom";

export default function Menu() {
  const [cart, setCart] = useState<any>([]);

  const addToCart = (product: any) => {
    const itemId = coffeeItems.find((item) => item.id === product.id);
    const itemIndex = cart.findIndex(
      (item: { id: number }) => item.id === product.id
    );

    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // Adiciona o item ao carrinho com quantidade 1
      if (itemId) {
        setCart((prevCart: any) => [{ ...itemId, quantity: 1 }, ...prevCart]);
      }
    }
  };

  const getTotal = () => {
    let total = 0;

    for (const item of cart) {  
      total += item.preco * item.quantity; 
    }

    return total.toFixed(2);
  };

  const removeFromCart = (product: any) => {
    const updatedCart = cart.filter((item: any) => item.id !== product.id);
    setCart(updatedCart);
  };

  return (
    <section className="flex flex-col items-center bg-coffe">
      <Link
        to="/"
        className="text-2xl h-20 bg-milk w-full flex justify-center items-center border-y-2 gap-2"
      >
        <Coffee size={50} weight="fill" color="#a18262" />
        <p className="font-bold italic text-3xl text-coffe text-center">
          Jazz Coffee's
        </p>
      </Link>

      <section className="flex">
        <div className="flex flex-wrap justify-evenly items-start p-2 w-4/6">
          {coffeeItems.map((item, index: number) => {
            return (
              <div
                key={index}
                className="flex-none h-[26rem] w-64 bg-coffe flex flex-col items-center rounded-lg shadow-lg border-2 border-white mb-5"
              >
                <img
                  src={item.imagem}
                  alt={item.nome}
                  className="rounded-t-lg h-[15.5rem] w-full"
                />

                <div className="p-2 flex flex-col gap-3">
                  <p className="border-b-2">{item.nome}</p>
                  <p className="h-16">{item.descricao}</p>
                </div>

                <div className="flex w-full items-center justify-center gap-2 mt-1">
                  <p>{`R$ ${Number(item.preco).toFixed(2)}`}</p>
                  <button onClick={() => addToCart(item)}>
                    <ShoppingCart
                      size={35}
                      weight="fill"
                      color="#a18262"
                      className="p-1 border-2 rounded-full bg-white"
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <h1 className="text-[2rem] text-cappuccino border-b-2 font-semibold">
            Carrinho de compras
          </h1>
          <div className="grid grid-cols-2 gap-10 flex-wrap p-">
            {!cart || cart.length === 0 ? (
              <Loading />
            ) : (
              cart.map((product: any, index: number) => {
                return (
                  <div key={index} className="flex flex-col flex-wrap">
                    <img
                      src={product.imagem}
                      alt={product.name}
                      className="w-20 h-20 rounded-full mt-1"
                    />
                    <p>{product.nome}</p>
                    <p>{`Quantidade: ${product.quantity}`}</p>{" "}
                    {/* Adiciona a quantidade do item */}
                    <div className="flex gap-3">
                      <p>{`R$ ${Number(
                        product.preco * product.quantity
                      ).toFixed(2)}`}</p>{" "}
                      <button onClick={() => removeFromCart(product)}>
                        <XCircle size={20} color="red" />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <p className="text-xl font-semibold mt-4">Total: R$ {getTotal()}</p>
          <div className="flex gap-3">
            <button
              className="border-2 w-44 p-1 border-milk text-white "
              onClick={() => setCart([])}
            >
              Limpar Carrinho
            </button>

            <Link to="/finalizar">
              <button className="border-2 w-44 p-1 border-milk text-white ">
                Finalizar compra
              </button>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
