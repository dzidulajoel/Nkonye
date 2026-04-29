import { colors } from "@/libs/color"
import Image from "next/image"
import Link from "next/link"

function page() {
    return (
        <>
            <section className="px-4 pb-60  flex flex-col items-center justify-center h-screen w-full gap-4 relative" style={{ backgroundColor: colors.gray[100] }}>
                <Image src="/icons/icon-192x192.png" alt="Nkonye Logo" width={70} height={70} />
                <div className="w-full flex flex-col justify-start mt-4">
                    <h3 className=" text-white uppercase" style={{ color: colors.brand.green }}>Connexion</h3>
                    <p className=" text-white/70" style={{ color: colors.gray[700] }}>Connectez-vous pour continuer</p>
                </div>

                <div className="space-y-6 w-full mt-4">
                    <div>
                        <label htmlFor="email" className="text-md text-white/70" style={{ color: colors.gray[700] }}>Adresse e-mail</label>
                        <input type="email" id="email" className="bg-gray-50 border-none text-gray-900 outline-none  rounded-lg  w-full p-2.5" placeholder="john.doe@exemple.com" />
                    </div>
                    <div className="relative">
                        <label htmlFor="password" className=" text-white/70" style={{ color: colors.gray[700] }}>Mot de passe</label>
                        <input type="password" id="password" className="bg-gray-50 border-none text-gray-900 outline-none rounded-lg block w-full p-2.5" placeholder="••••••••" />
                        <button className="absolute right-3 top-9 text-gray-500" >
                            <Image src="/icons/eye.svg" alt="Eye Icon" width={18} height={18} />
                        </button>

                        <div className="flex justify-between items-center ">
                            <div className="flex items-center mt-2">
                                <input type="checkbox" id="remember" className="mr-2 accent-[#06923E]" />
                                <label htmlFor="remember" className="text-sm" style={{ color: colors.gray[700] }}>Se souvenir de moi</label>
                            </div>
                            <Link href="#" className="text-sm float-right mt-2 underline"  style={{ color: colors.brand.green }} >Mot de passe oublié ?</Link>
                        </div>
                    </div>

<button className="w-full h-12 rounded-lg flex justify-center text-white mt-10 items-center gap-8 p-1 bg-[#06923E] hover:bg-[#222222]">Se connecter</button>

                </div>

                <div className="w-full flex flex-col justify-center item-center gap-3 absolute bottom-10 px-4">
                    <button className="w-full h-12 rounded-lg flex justify-start items-center gap-8 p-1 bg-white"  >
                        <span className="w-12 h-12 rounded-lg bg-white flex justify-center items-center"><Image src="/icons/google-icon.svg" alt="Google Icon" width={20} height={20} /></span>
                        <span style={{ color: colors.gray[700] }}>Continuer avec Google</span>
                    </button>
                    <button className="w-full h-12 rounded-lg flex justify-start items-center gap-8 p-1 bg-white" >
                        <span className="w-12 h-12 rounded-lg bg-white flex justify-center items-center"><Image src="/icons/facebook-icon.svg" alt="Facebook Icon" width={20} height={20} /></span>
                        <span style={{ color: colors.gray[700] }}>Continuer avec Facebook</span>
                    </button>
                    <p className="text-center mt-4" style={{ color: colors.gray[700] }} >Vous n'avez pas de compte ? <br /><a href="#" className="underline" style={{ color: colors.brand.green }}>Inscrivez-vous</a></p>
                </div>
            </section>
        </>
    )
}

export default page
