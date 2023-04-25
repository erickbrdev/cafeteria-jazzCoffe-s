import { Link } from "react-router-dom";
import { Coffee } from "@phosphor-icons/react";
import {
  InstagramLogo,
  WhatsappLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import "../mobile/HeaderMobile.css";

export default function Header() {
  return (
    <header className="flex  items-center bg-white gap-5 justify-between p-2 main-header-mobile">
      <div className="flex items-center">
        <Coffee size={50} weight="fill" color="#a18262" />
        <p className="font-bold italic text-3xl text-coffe text-center">
          Jazz Coffee's
        </p>
      </div>

      <nav className="flex justify-center w-full gap-8 main-nav-mobile">
        <a
          href="#"
          className="flex items-center gap-3 font-semibold text-sm text-coffe hover:border-b-2 border-coffe"
        >
          HOME
        </a>
        <a
          href="#products"
          className="flex items-center gap-3 font-semibold text-sm  text-coffe hover:border-b-2 border-coffe"
        >
          PRODUTOS
        </a>
        <Link
          to="/historia"
          className="flex items-center gap-3 font-semibold text-sm  text-coffe hover:border-b-2 border-coffe"
        >
          HISTÓRIA
        </Link>
        <a
          href="#cicle"
          className="flex items-center gap-3 font-semibold text-sm  text-coffe hover:border-b-2 border-coffe"
        >
          EXCELÊNCIA E SAÚDE
        </a>
      </nav>

      <nav className="flex items-center gap-5 ">
        <Link to="#">
          <InstagramLogo
            size={40}
            weight="fill"
            color="#a18262"
            className="hover:p-1"
          />
        </Link>
        <a href="https://api.whatsapp.com/send?phone=000" target="_blank">
          <WhatsappLogo
            size={40}
            weight="fill"
            color="#a18262"
            className="hover:p-1"
          />
        </a>
        <Link to="#">
          <YoutubeLogo
            size={40}
            weight="fill"
            color="#a18262"
            className="hover:p-1"
          />
        </Link>
      </nav>
    </header>
  );
}
