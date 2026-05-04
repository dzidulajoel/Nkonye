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
                    <h3 className="" style={{ color: colors.brand.green }}>Connexion</h3>
                    <p className="text-center text-medium" style={{ color: colors.gray[900] }}>Connecte-toi pour explorer et sauvegarder les prénoms africains</p>
                </div>

                <div className="space-y-6 w-full mt-4">
                    <div>
                        <label htmlFor="email" className="text-md ">Adresse e-mail</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-100 text-gray-900 outline-none  rounded-lg  w-full p-2.5" placeholder="john.doe@exemple.com" />
                    </div>
                    <div className="relative">
                        <label htmlFor="password" className=" ">Mot de passe</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-100 text-gray-900 outline-none rounded-lg block w-full p-2.5" placeholder="••••••••" />
                        <button className="absolute right-3 top-9 text-gray-500" >
                            <Eye size={20} />
                        </button>

                        <div className="flex justify-between items-center ">
                            <div className="flex items-center mt-2">
                                <input type="checkbox" id="remember" className="mr-2 accent-[#207561]" />
                                <label htmlFor="remember" className="text-sm">Se souvenir de moi</label>
                            </div>
                        </div>
                    </div>

                    <button className="mt-12 w-full h-12 rounded-lg flex justify-center text-white  items-center gap-8 p-1 bg-[#207561] hover:bg-[#222222]">Se connecter</button>

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

                    <div className='w-full flex justify-between item-center gap-3'>
                        <a href="#" className="underline" style={{ color: colors.brand.green }}>Mot de passe oublié ?</a>
                        <a href="#" className="underline" style={{ color: colors.brand.green }}>Inscrivez-vous</a>
                    </div>

                </div>
            </section>
        </>
    )
}

export default page
