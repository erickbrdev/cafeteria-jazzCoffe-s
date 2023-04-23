/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useState } from "react";
import { allCoffees } from ".";
import { ICoffee } from "../interfaces/coffee";

type Children = {
  children: ReactNode;
};

export default function Provider({ children }: Children) {
  const [coffees, setCoffees] = useState<ICoffee[]>([]);

  const value = { coffees, setCoffees };

  return <allCoffees.Provider value={value}>{children}</allCoffees.Provider>;
}
