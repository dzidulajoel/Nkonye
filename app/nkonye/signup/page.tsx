'use client';
import '@flaticon/flaticon-uicons/css/all/all.css';
import { colors } from "@/libs/color"
import Image from "next/image"
import Link from "next/link"
import { Eye } from 'lucide-react';

function page() {
    return (
        <>
            <section className="px-4 flex flex-col items-center justify-start pt-8 h-screen w-full gap-2 bg-[#fff]">
                <i className="fi fi-ss-fire-flame-curved text-8xl " style={{ color: colors.brand.green }}></i>
                <div className="w-full flex flex-col justify-center items-center ">
                    <h3 className="" style={{ color: colors.brand.green }}>Inscription</h3>
                    <p className="text-center text-medium" style={{ color: colors.gray[700] }}>Crée ton compte et accède à toutes les fonctionnalités.</p>
                </div>

                <div className="space-y-4 w-full mt-4">
                    <div>
                        <label htmlFor="nom" className="text-md" style={{ color: colors.gray[700] }}>Nom complet</label>
                        <input type="nom" id="nom" className="bg-gray-50 border border-gray-100 text-gray-900 outline-none  rounded-lg  w-full p-2.5" placeholder="Nom complet ..." />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-md" style={{ color: colors.gray[700] }}>Adresse e-mail</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-100 text-gray-900 outline-none  rounded-lg  w-full p-2.5" placeholder="Email ..." />
                    </div>
                    <div className="relative">
                        <label htmlFor="password" className="" style={{ color: colors.gray[700] }}>Mot de passe</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-100 text-gray-900 outline-none rounded-lg block w-full p-2.5" placeholder="••••••••" />
                        <button className="absolute right-3 top-9 text-gray-500" >
                            <Eye size={20} />
                        </button>

                    </div>

                    <button className="w-full h-12 rounded-lg flex justify-center text-white mt-10 items-center gap-8 p-1 bg-[#207561] hover:bg-[#222222]">S'inscrire</button>


                </div>

                <div className="w-full flex flex-col justify-center item-center gap-3">

                    <div className="flex items-center gap-3 my-4">
                        <span className="flex-1 h-px bg-gray-300"></span>
                        <p className="text-sm text-center" style={{ color: colors.gray[400] }}> ou continuez avec</p>
                        <span className="flex-1 h-px bg-gray-300"></span>
                    </div>

                    <div className='w-full flex justify-center item-center gap-3'>
                        <button className="w-1/2 h-12 rounded-lg flex justify-center items-center gap-2 p-1" style={{ backgroundColor: colors.gray[100] }} >
                            <span className="w-12 h-12 rounded-lg flex justify-center items-center"><Image src="/icons/google-icon.svg" alt="Google Icon" width={20} height={20} /></span>
                            <span>Google</span>
                        </button>
                        <button className="w-1/2 h-12 rounded-lg flex justify-center items-center gap-2 p-1" style={{ backgroundColor: colors.gray[100] }}>
                            <span className="w-12 h-12 rounded-lg flex justify-center items-center"><Image src="/icons/facebook-icon.svg" alt="Facebook Icon" width={20} height={20} /></span>
                            <span>Facebook</span>
                        </button>
                    </div>

                    <div className='w-full flex justify-center item-center gap-3'>
                        <p>Vous avez déjà un compte ? <a href="#" className="underline" style={{ color: colors.brand.green }}>Connectez-vous</a></p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default page
