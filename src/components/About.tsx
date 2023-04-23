import { Coffee } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function About() {
  return (
    <main>
      <section className="flex flex-col items-center gap-10 bg-coffe">
        <h1 className="flex justify-center items-center gap-2 text-[3rem] italic border-y-2 border-white  w-full h-[15rem] history font-semibold text-coffe">
          <Coffee />
          Jazz Coffee's
        </h1>   

        <div className="flex gap-2 items-center border-2 border-milk p-2">
          <p className="border-y-2 border-white p-2 w-3/6 text-lg">
            Havia uma pequena cafeteria chamada "Jazz Coffee's" localizada em
            uma charmosa rua movimentada no coração da cidade. O proprietário,
            Kcire, era um verdadeiro amante de café e tinha um sonho de criar um
            lugar onde as pessoas pudessem desfrutar de cafés especiais em um
            ambiente acolhedor e aconchegante. Kcire trabalhou incansavelmente
            para trazer seu sonho à realidade. Ele pesquisou e selecionou os
            melhores grãos de café de diversas regiões do mundo, e contratou
            baristas talentosos e apaixonados por café para sua equipe. Ele
            também cuidou pessoalmente da decoração do café, escolhendo
            cuidadosamente móveis confortáveis, iluminação aconchegante e uma
            atmosfera convidativa com toques de jazz. Assim que o Jazz Coffee's
            abriu suas portas, rapidamente se tornou um local de encontro
            popular para os amantes de café da região. As pessoas vinham de
            perto e de longe para desfrutar de suas bebidas de café artesanais e
            experimentar os diferentes sabores e perfis de café que o café
            oferecia, ao som de uma música de jazz suave ao fundo. A reputação
            do Jazz Coffee's cresceu rapidamente, graças ao compromisso de Kcire
            com a qualidade, atendimento excepcional e ambiente acolhedor com
            uma atmosfera única. Logo, o café estava sempre lotado, com clientes
            regulares e novos visitantes que vinham para experimentar o que o
            café tinha a oferecer. Kcire continuou a inovar e expandir seu
            negócio. Ele introduziu novos itens no menu, como cafés sazonais e
            drinks especiais inspirados na música jazz, e organizou eventos
            especiais, como apresentações de jazz ao vivo e noites temáticas.
            Ele também utilizou as redes sociais e o boca a boca positivo dos
            clientes para promover o Jazz Coffee's como um local único e
            diferenciado. Com o tempo, o Jazz Coffee's se tornou uma cafeteria
            bem estabelecida e próspera, com uma base fiel de clientes e uma
            reputação invejável na comunidade. Kcire está extremamente orgulhoso
            de seu negócio e grato pela oportunidade de compartilhar sua paixão
            pelo café e música jazz com outras pessoas. Ele continua buscando
            aprimorar seu café e proporcionar a melhor experiência possível aos
            seus clientes, mantendo viva a essência do seu sonho de ter uma
            cafeteria de sucesso com uma atmosfera única e envolvente, onde o
            café e o jazz se encontram.
          </p>

          <img
            src="https://gifdb.com/images/high/heart-cafe-latte-art-tuiqovppjqyyh0vh.gif"
            alt="Café expresso"
            className="w-3/6 rounded h-[55rem]"
          />
        </div>

        <Link to="/" className="p-2">
          <button className="opacity-70 border-2 text-xl border-milk text-milk p-3 w-64 hover:opacity-100 hover:text-cappuccino hover:border-cappuccino">
            Inicio
          </button>
        </Link>
      </section>
      <Footer />
    </main>
  );
}
