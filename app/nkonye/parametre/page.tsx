'use client';

import { ArrowLeft, Bell, ChevronRight, FileQuestionMark, Info, Languages, LogOut, Pen } from "lucide-react"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { colors } from "@/libs/color";
import Link from "next/link";
function page() {
    const [open, setOpen] = useState(false);

    const inputs = [
        {
            type: "text",
            name: "fullName",
            placeholder: "Nom complet",
        },
        {
            type: "email",
            name: "email",
            placeholder: "Adresse email",
        },
        {
            type: "text",
            name: "country",
            placeholder: "Pays",
        },
        {
            type: "select",
            name: "gender",
            placeholder: "Sexe",
            options: ["Homme", "Femme", "Autre"],
        },
        {
            type: "date",
            name: "birthDate",
            placeholder: "Date de naissance",
        }
    ];

    const [formData, setFormData] = useState({
        fullName: "",          // Nom complet
        email: "",             // Adresse email
        country: "",           // Pays
        gender: "",            // Sexe : "Homme" / "Femme" / "Autre"
        birthDate: ""
    });
    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };


    return (
        <>
            <section className="relative">
                {/* HEADER FIX */}
                <div className="fixed top-0 left-0 w-full h-auto bg-white py-4 px-2 z-10 " style={{ backgroundColor: colors.brand.green }}>

                    <div className="flex items-center justify-between">
                        {/* BACK */}
                        <Link href="/nkonye/accueil" className="w-8 h-8 rounded-full flex justify-center items-center "><ArrowLeft size={20} className="text-white" /></Link>
                        {/* SEARCH BTN */}
                        <Link href="/nkonye/login" className="w-8 h-8 rounded-full flex justify-center items-center "><LogOut size={20} className="text-white" /> </Link>
                    </div>

                    {/* CATEGORIES */}
                    <div className="mt-8 flex justify-center items-center flex-col">
                        <span className="w-20 h-20 rounded-full bg-white flex justify-center items-center font-info text-2xl font-bold" style={{ color: colors.brand.green }}>K</span>
                        <div className="w-full  flex justify-center items-center flex-col">
                            <h2 className="font-info text-2xl font-bold text-white mt-4">Koffi Mensah</h2>
                            <p className="text-white font-body">koffi.mensah@example.com</p>
                        </div>
                        <button onClick={() => setOpen(true)} className="px-5 py-2 bg-white text-[#207561] rounded-lg font-body hover:bg-[#1a5a48] transition mt-4 cursor-pointer hover:text-white"> Modifier le profil </button>
                    </div>

                </div>

                <div className="w-full flex justify-center items-center mt-68">
                    <div className="w-[90%] lg:w-1/3 px-8 h-auto p-4 bg-gray-50 rounded-md mt-8 flex justify-between items-center gap-8">

                        <div className="flex flex-col gap-1 justify-center items-center">
                            <span className="text-xl font-body font-bold" style={{ color: colors.brand.green }} >12</span>
                            <span className=" font-body text-gray-500">Favoris</span>
                        </div>

                        <div className="flex flex-col gap-1 justify-center items-center">
                            <span className="text-xl font-body font-bold" style={{ color: colors.brand.green }} >23</span>
                            <span className=" font-body text-gray-500">Téléch</span>
                        </div>

                        <div className="flex flex-col gap-1 justify-center items-center">
                            <span className="text-xl font-body font-bold" style={{ color: colors.brand.green }} >08</span>
                            <span className=" font-body text-gray-500">Partages</span>
                        </div>

                    </div>
                </div>

                <div className=" mt-8  w-full flex flex-col gap-6 justify-center items-center px-4">

                    <div className="w-full lg:w-1/3 flex justify-between items-center border-b border-gray-200 pb-4">
                        <div className="flex justify-start items-center gap-2">
                            <Languages size={20} className="text-gray-600" />
                            <span className="font-body">Langues</span>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                            <span className="font-body">Français</span>
                            <ChevronRight size={20} className="text-gray-600" />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3 flex justify-between items-center border-b border-gray-200 pb-4">
                        <div className="flex justify-start items-center gap-2">
                            <Bell size={20} className="text-gray-600" />
                            <span className="font-body">Notifications</span>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                            <input type="checkbox" name="notifications" id="notifications" className="accent-[#207561] border border-gray-300" />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3 flex justify-between items-center border-b border-gray-200 pb-4">
                        <div className="flex justify-start items-center gap-2">
                            <Info size={20} className="text-gray-600" />
                            <span className="font-body">Version</span>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                            <span className="font-body">1.0.0</span>
                            <ChevronRight size={20} className="text-gray-600" />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3 flex justify-between items-center border-b border-gray-200 pb-4">
                        <div className="flex justify-start items-center gap-2">
                            <FileQuestionMark size={20} className="text-gray-600" />
                            <span className="font-body">Aide · Support</span>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                            <ChevronRight size={20} className="text-gray-600" />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3 flex justify-between items-center border-b border-gray-200 pb-4">
                        <div className="flex justify-start items-center gap-2">
                            <LogOut size={20} className="text-red-600" />
                            <span className="font-body text-red-600">Déconnexion</span>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3 flex justify-center items-center">
                        <span className=" font-body text-gray-500">izina v1.0.0 · © 2026</span>
                    </div>
                </div>

            </section>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        exit={{ y: "100%", opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed bottom-0 left-0 w-full h-1/2 bg-gray-100  p-4 z-500 border-t-8 border-white"
                        style={{ backgroundImage: `repeating-linear-gradient( 45deg, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 2px, transparent 2px, transparent 8px)` }}
                    >
                        <motion.div className="fixed  inset-0  bg-transparent h-1/2 top-0 z-10" onClick={() => setOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-[18px] font-bold leading-[24px] text-[#374957] font-body flex justify-start items-center gap-2">Modifier votre profil <Pen size={16} className="text-gray-500" /></h2>
                            <button className="cursor-pointer w-8 h-8 rounded-full flex justify-center items-center bg-white" onClick={() => setOpen(false)}>✕</button>
                        </div>
                        <form action="" className="space-y-3">
                            {/* Inputs */}
                            {inputs.map((input, index) => (
                                <input
                                    key={index}
                                    type={input.type}
                                    name={input.name}
                                    placeholder={input.placeholder}
                                    value={formData[input.name]}
                                    onChange={handleChange}
                                    required
                                    minLength={input.type === "password" ? 8 : undefined}
                                    className="w-full bg-white rounded-md outline-none font-body placeholder:text-gray-400 border border-gray-300 p-2"
                                />
                            ))}
                            <div className="w-full flex justify-center items-center gap-4">
                                <button className="w-1/2 h-10 rounded-md p-2 hover:bg-linear-to-r from-stone-900 to-zinc-900 cursor-pointer transition  duration-300 flex justify-center items-center font-body" style={{ backgroundColor: colors.brand.green, color: colors.white.DEFAULT }} >Sauvegarder</button>
                                <button className="w-1/2 h-10 rounded-md p-2 hover:bg-linear-to-r from-stone-900 to-zinc-900 cursor-pointer transition  duration-300 flex justify-center items-center font-body" style={{ backgroundColor: colors.brand.red, color: colors.white.DEFAULT }} >Supprimer le compte</button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default page
