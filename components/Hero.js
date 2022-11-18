import Image from "next/image";
import Lead from "./Lead";
import heroImage from '/public/black_friday.png'

export default function Hero() {

    return (
        <div className="mx-auto max-w-6xl">
            <div className="flex md:flex-row flex-col-reverse gap-8 md:gap-18 text-[#f8f8ff] justify-center items-center">
                <div className="md:w-1/2 w-full self-center pb-10 md:pb-0">
                    {/*<h1 className="text-5xl font-bold md:w-96 md:text-left text-center text-[#FBED04]">Aposte cada vez mais no digital </h1>
                    <h2 className="text-2xl italic font-light pt-2 md:w-96 md:text-left text-center">
                        <span className="font-bold">Promote your business in print and digital! </span>
                            With the Yellow Connect package.</h2>
                    <div className="pt-8 md:w-96">
                        <p className="leading-relaxed md:text-left text-center">
                            Para quem quer reivindicar uma share deste mercado em constante mudança, 
                            a YELLOW CONNECT é peça importante da estratégia de aumentar a sua visibilidade. 
                        </p><br/>
                        <p className="leading-relaxed md:text-left text-center">
                            Com uma boa estratégia digital será possível que seu negócio esteja em 
                            vários canais de comunicação on-line ao mesmo tempo, facilitando a sua comunicação 
                            com o seu público e obtendo maior alcance.
                        </p>
                </div>*/}
                    <Lead />
                </div>
                <div className="md:w-1/2 w-full self-center">
                    <Image src={heroImage}  alt="Lista telefónica" className="object-contain" layout="responsive" priority/>
                </div>
             </div>
        </div>
    );
}