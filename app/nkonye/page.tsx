import { colors } from "@/libs/color"
import Image from "next/image"

function page() {
    return (
        <>
            <section className="px-4 pb-30 flex flex-col items-center justify-center h-screen w-full gap-12 relative" style={{ backgroundColor: colors.brand.green }}>
                <Image src="/icons/logo.png" alt="Nkonye Logo" width={70} height={70} />
                <div className="flex flex-col justify-center item-center pb-40">
                    <h2 className="text-center text-white/90" style={{ color: colors.gray[200] }}>Trouve le meilleur</h2>
                    <h1 className="text-center text-white">Prénom pour ton enfant</h1>
                    <div className="flex flex-col justify-center item-center mt-6">
                        <p className="text-center text-white/70">Offrez-lui une histoire, une racine, une identité</p>
                        <p className="text-center text-white/70">Donnez-lui un sens qui le définit et le relie à ses origines.</p>
                    </div>
                </div>

                <div className="w-full flex flex-col justify-center item-center gap-3 absolute bottom-10 px-4">
                    <button className="w-full h-14 rounded-lg flex justify-start items-center gap-8 p-1" style={{ backgroundColor: colors.gray[100] }}>
                        <span className="w-12 h-12 rounded-lg bg-white flex justify-center items-center"><Image src="/icons/google-icon.svg" alt="Google Icon" width={20} height={20} /></span>
                        <span>Continuer avec Google</span>
                    </button>
                    <button className="w-full h-14 rounded-lg flex justify-start items-center gap-8 p-1" style={{ backgroundColor: colors.brand.blue }}>
                        <span className="w-12 h-12 rounded-lg bg-white flex justify-center items-center"><Image src="/icons/facebook-icon.svg" alt="Facebook Icon" width={20} height={20} /></span>
                        <span className="text-white">Continuer avec Facebook</span>
                    </button>
                    <button className="w-full h-14 rounded-lg flex justify-start items-center gap-8 p-1" style={{ backgroundColor: colors.gray[700] }}>
                        <span className="w-12 h-12 rounded-lg bg-white flex justify-center items-center"><Image src="/icons/envelope.svg" alt="Facebook Icon" width={20} height={20} /></span>
                        <span className="text-white">Continuer avec E-mail</span>
                    </button>
                    <p className="text-center text-white/70 mt-4">Vous n'avez pas de compte ? <br /><a href="#" className="text-white underline">Inscrivez-vous</a></p>
                </div>
            </section>
        </>
    )
}

export default page
