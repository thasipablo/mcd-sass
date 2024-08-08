import ButtonsProvider from "@/components/layout-components/ButtonsProvider";
import TypeWriter from "@/components/layout-components/TypeWriter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col gap-2 items-center justify-center">
      <Image width={100} height={100} src="/logo.svg" alt="logo" className="mb-4 object-contain" />
      <h1 className="text-4xl md:text-6xl font-black mb-2 text-center uppercase flex items-center">
        <TypeWriter words={['Bienvenue', 'Welcome', 'Vienvenido', 'Karibu']} />
      </h1>
      <p className="my-2 text-center">
        Merci de nous rejoindre...
      </p>
      <ButtonsProvider />
    </main>
  );
}
