import { Star } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <div className="w-full h-[50rem] flex flex-col items-center justify-center hero gap-20 border-2 border-coffe">
      <h1 className="text-[2rem] text-coffe">POR MAIS EXPERIÊNCIAS SUBLIMES</h1>

      <div className="flex gap-5">
        <Star size={50} weight="fill" color="#a18262" />
        <Star size={50} weight="fill" color="#a18262" />
        <Star size={50} weight="fill" color="#a18262" />
        <Star size={50} weight="fill" color="#a18262" />
        <Star size={50} weight="fill" color="#a18262" />
        <Star size={50} weight="fill" color="#a18262" />
        <Star size={50} weight="fill" color="#a18262" />
        <Star size={50} weight="fill" color="#a18262" />
        <Star size={50} weight="fill" color="#a18262" />
        <Star size={50} weight="fill" color="#a18262" />
      </div>

      <button className="relative z-10 border-2 p-5 border-coffe text-coffe w-64 font-xl hover:bg-coffe hover:text-white">
        EXPERIMENTAR
      </button>
    </div>
  );
}
