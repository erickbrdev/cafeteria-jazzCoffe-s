import {
  WhatsappLogo,
  InstagramLogo,
  YoutubeLogo,
  Envelope,
  Buildings,
} from "@phosphor-icons/react";

export default function Contact() {
  return (
    <section className="flex flex-col h-96 contact-hero justify-center">
      <div className="flex items-center justify-around">
        <div>
          <p className="font-bold text-xl text-coffe">MAIS QUE ESPECIAL</p>
          <p className="ml-5 text-[5rem] text-coffe font-semibold">SUBLIME</p>
        </div>

        <div className="flex flex-col gap-5">
          <p className="font-bold flex items-center gap-2 text-white">
            <WhatsappLogo size={30} weight="duotone" color="#25D366"  />
            +55 00 00000-0000
          </p>
          <p className="font-bold flex items-center gap-2 text-white">
            <InstagramLogo size={30} weight="fill" color="#795a80" />
            @jazzcoffee
          </p>
          <p className="font-bold flex items-center gap-2 text-white">
            <YoutubeLogo size={30} weight="fill" color="red" />
            @cofzz
          </p>
          <p className="font-bold flex items-center gap-2 text-white">
            <Envelope size={30} weight="fill" color="gray" />
            loja@jazzcoffe.com.br
          </p>
          <p className="font-bold flex items-center gap-2 text-white">
            <Buildings size={30} weight="fill" color="brown" />
            Sede: Rua Imaginária do Rio Azul 000 Centro Paraíso do Café - 55
          </p>
        </div>
      </div>
    </section>
  );
}
