import { ServiceLayout } from "@/components/services";
import { Header, HeaderSticky } from "@/components/ui";
import Image from "next/image";


export default function Home() {





  return (
    <div className="relative">
     <HeaderSticky />
      
    <div id="hero" className="relative min-h-screen  text-white">
      <div className="absolute inset-0">
        <Image 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29udGFiaWxpZGFkfGVufDB8fDB8fHww"
          alt="Background contabilidad"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
          />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
    <div className="relative z-10">
      {/* HEADER */}
      
     <Header />

      {/* HERO CONTENT */}
      <section className="flex flex-col justify-center items-center text-center h-[calc(100vh-80px)] px-4">
        <h2 className="text-5xl font-extrabold leading-tight mb-4">
          Contabilidad a tu alcance
        </h2>
        <p className="text-xl max-w-2xl">
          Gestiona tus finanzas de forma eficiente y con el respaldo de expertos.
        </p>
      </section>
    </div>
    </div>
    <ServiceLayout />
    </div>
  );
}
