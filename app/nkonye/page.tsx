import { colors } from "@/libs/color"
import Image from "next/image"
import '@flaticon/flaticon-uicons/css/all/all.css';

function page() {
    return (
        <>
            <section className="px-4 pb-30 flex flex-col items-center justify-center h-screen w-full gap-12 relative" style={{ backgroundColor: colors.brand.green }}>
                <i className="fi fi-ss-fire-flame-curved text-8xl text-white"></i>
                <div className="flex flex-col justify-center item-center ">
                    <h1 className="text-white text-center">Trouve le meilleur prénom pour ton enfant</h1>
                    <div className="flex flex-col justify-center item-center mt-6">
                        <p className="text-center text-white/70">Offrez-lui une histoire, une racine, une identité Donnez-lui un sens qui le définit et le relie à ses origines.</p>
                    </div>
                </div>

                <div className="w-full flex flex-col justify-center item-center gap-3 absolute bottom-10 px-4">
                    <div className="w-full flex justify-center item-center gap-3" >

                        <button className="w-1/3 bg-white flex justify-center items-center p-2 gap-2 rounded-md hover:bg-[#222222] hover:text-white cursor-pointer transition  duration-300" >
                             <Image src="/icons/google-icon.svg" alt="Google Icon" width={20} height={20} />
                             <span>Google</span>
                        </button>

                        <button  className="w-1/3 bg-white flex justify-center items-center p-2 gap-2 rounded-md hover:bg-[#222222] hover:text-white cursor-pointer transition  duration-300" >
                            <Image src="/icons/facebook-icon.svg" alt="Facebook Icon" width={20} height={20} />
                             <span>Facebook</span>
                        </button>

                        <button  className="w-1/3 bg-white flex justify-center items-center p-2 gap-2 rounded-md hover:bg-[#222222] hover:text-white cursor-pointer transition  duration-300">
                            <Image src="/icons/envelope.svg" alt="Facebook Icon" width={20} height={20} />
                             <span>E-mail</span>
                        </button>

                    </div>
                    <p className="text-center text-white/70 mt-4">Vous n'avez pas de compte ? <br /><a href="#" className="text-white underline">Inscrivez-vous</a></p>
                </div>
            </section>
        </>
    )
}

export default page
