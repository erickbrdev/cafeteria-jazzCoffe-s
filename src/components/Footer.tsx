import { Coffee } from "@phosphor-icons/react";
import "../mobile/FooterMobile.css";

export default function Footer() {
  return (
    <footer className="flex justify-evenly p-2 items-center footer-mobile">
      <div className="flex items-center justify-center">
        <Coffee size={30} weight="fill" color="#a18262" />
        <p className="font-bold italic text-xl text-coffe text-center w-24">
          {" "}
          Jazz Coffe's
        </p>
      </div>

      <p className="font-sm shadow-lg text-coffe">
        Todos os direitos reservados. Jazz Coffee's Comércio de Café LTDA.
      </p>
    </footer>
  );
}
