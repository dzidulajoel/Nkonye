'use client'

import { ArrowDownToLine, ArrowLeft, Forward, Heart, MessageCircle } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { colors } from "@/libs/color"
import Comments from "@/components/ui/Comments"
import Link from "next/link"


function page() {
        const [open, setOpen] = useState(false);
        const [likes, setLikes] = useState(12)
        const [isLiked, setIsLiked] = useState(false)

        const handleLike = (e) => {
                e.preventDefault() // Empêche le Link de se déclencher
                e.stopPropagation()
                setIsLiked(!isLiked)
                setLikes(isLiked ? likes - 1 : likes + 1)
        }

        return (
                <section className="relative px-4 mb-4 ">
                        {/* HEADER FIX */}

                        <div className="fixed top-0 left-0 w-full h-auto bg-white py-3 z-10 px-4 ">
                                <div className="flex items-center justify-between">
                                        {/* BACK */}
                                        <Link href="/nkonye/accueil" className="w-8 h-8 rounded-full flex justify-center items-center"><ArrowLeft size={20} className="text-gray-600" /></Link>
                                        {/* SEARCH BTN */}
                                        <div className="flex justify-center items-center gap-4">
                                                <motion.button onClick={handleLike} whileTap={{ scale: 0.85 }} className='cursor-pointer w-8 h-8 rounded-full flex justify-center items-center'>
                                                        <motion.div animate={{ scale: isLiked ? [1, 1.3, 1] : 1, }} transition={{ duration: 0.3 }} className="flex justify-center items-center">
                                                                <Heart size={20} className="text-gray-600" fill={isLiked ? colors.red[600] : "none"} strokeWidth={isLiked ? 0 : 2} />
                                                        </motion.div>
                                                </motion.button>
                                                <button onClick={() => setOpen(true)} className="w-8 h-8 rounded-full flex justify-center items-center"><MessageCircle size={18} className="text-gray-600" /> </button>
                                                <button className="w-8 h-8 rounded-full flex justify-center items-center"><Forward size={20} className="text-gray-600" /> </button>
                                        </div>
                                </div>
                        </div>

                        <div className=" mt-16">
                                <div className={`w-full h-60 rounded-md bg-linear-to-r from-stone-900 to-zinc-900 relative flex flex-col justify-between`}>
                                        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: `repeating-linear-gradient( 45deg, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 2px, transparent 2px, transparent 8px)` }} />
                                        <div className='w-full h-10 flex justify-between items-center px-4'>
                                                
                                        </div>
                                        <div className="w-full h-40 space-y-3 p-4 flex flex-col justify-start items-center">
                                                <h2 className='font-body text-2xl font-bold' style={{ color: colors.white.DEFAULT }}> Dzidula <span className='text-white font-normal text-sm'>· Vainqueur · Winner</span></h2>
                                                <p className='text-white text-sm leading-relaxed mt-2 font-body'> Dzidula — le vainqueur. Pas celui qu'on couronne à l'arrivée, mais celui qui a choisi de continuer quand les autres ont abandonné.</p>
                                        </div>
                                </div>

                                <button className="w-full h-12 p-2 rounded-md mt-4 flex justify-center items-center gap-2 font-body text-sm hover:bg-linear-to-r from-stone-900 to-zinc-900 cursor-pointer transition  duration-300" style={{ backgroundColor: colors.primary.DEFAULT, color: colors.white.DEFAULT }}>
                                        <ArrowDownToLine size={20} className="text-white" />
                                        Télécharger cette carte
                                </button>

                        </div>

                        <div className="border-t border-gray-100 py-4">
                                <h2 className="text-[18px] font-bold text-[#374957] font-body uppercase" style={{ color: colors.primary.DEFAULT }}>Signification</h2>
                                <p className='text-[#374957] text-sm leading-relaxed mt-2 font-body'>Afia désigne une femme née un vendredi selon la tradition Akan et Éwé. Ce prénom porte une signification profonde de grâce, de douceur et de bénédiction divine.</p>
                        </div>

                        <div className="border-t border-gray-100 py-4">
                                <h2 className="text-[18px] font-bold text-[#374957] font-body uppercase" style={{ color: colors.primary.DEFAULT }}>Origine</h2>
                                <p className='text-[#374957] text-sm leading-relaxed mt-2 font-body'>Peuple Éwé · Afrique de l'Ouest (Togo, Ghana, Bénin)</p>
                        </div>

                        <div className="border-t border-gray-100 py-4">
                                <h2 className="text-[18px] font-bold text-[#374957] font-body uppercase" style={{ color: colors.primary.DEFAULT }}>Prononciation</h2>
                                <span className=' w-auto h-auto py-1 px-3 rounded-full text-sm font-body' style={{ backgroundColor: colors.primary[100], color: colors.primary[700] }}>A · fi · a</span>
                        </div>

                        <div className="border-t border-gray-100 py-4">
                                <h2 className="text-[18px] font-bold text-[#374957] font-body uppercase" style={{ color: colors.primary.DEFAULT }}>Variantes</h2>
                                <div className='space-x-3'>
                                        <span className=' w-auto h-auto py-1 px-3 rounded-full text-sm font-body' style={{ backgroundColor: colors.primary[100], color: colors.gray[600] }}>Afia</span>
                                        <span className=' w-auto h-auto py-1 px-3 rounded-full text-sm font-body' style={{ backgroundColor: colors.primary[100], color: colors.gray[600] }}>Afua</span>
                                        <span className=' w-auto h-auto py-1 px-3 rounded-full text-sm font-body' style={{ backgroundColor: colors.primary[100], color: colors.gray[600] }}>Efua</span>
                                </div>
                        </div>

                        <div className="border-t border-gray-100 py-4">
                                <h2 className="text-[18px] font-bold text-[#374957] font-body uppercase" style={{ color: colors.primary.DEFAULT }}>Categories</h2>
                                <div className='space-x-3'>
                                        <span className=' w-auto h-auto py-1 px-3 rounded-full text-xs font-body' style={{ backgroundColor: colors.primary[200], color: colors.primary[700] }}>Ewe</span>
                                        <span className=' w-auto h-auto py-1 px-3 rounded-full text-xs font-body' style={{ backgroundColor: colors.primary[200], color: colors.primary[700] }}>Neutre</span>
                                </div>
                        </div>

                        <div className="border-t border-gray-100 py-4">
                                <h2 className="text-[18px] font-bold text-[#374957] font-body uppercase" style={{ color: colors.primary.DEFAULT }}>Statistiques</h2>
                                <div className="w-[90%] lg:w-1/3 h-auto rounded-md mt-8 flex justify-between items-center">

                                        <div className="flex flex-col gap-1 justify-center items-center bg-gray-50 w-30 p-4 rounded-md">
                                                <span className="text-xl font-body font-bold" style={{ color: colors.primary.DEFAULT }} >12 K</span>
                                                <span className="text-xs font-body text-gray-500">Favoris</span>
                                        </div>

                                        <div className="flex flex-col gap-1 justify-center items-center bg-gray-50 w-30 p-4 rounded-md">
                                                <span className="text-xl font-body font-bold" style={{ color: colors.primary.DEFAULT }} >23.2 M</span>
                                                <span className="text-xs font-body text-gray-500">Téléch</span>
                                        </div>

                                        <div className="flex flex-col gap-1 justify-center items-center bg-gray-50 w-30 p-4 rounded-md">
                                                <span className="text-xl font-body font-bold" style={{ color: colors.primary.DEFAULT }} >08</span>
                                                <span className="text-xs font-body text-gray-500">Partages</span>
                                        </div>

                                </div>
                        </div>

                        <button className="w-full h-12 p-2 rounded-md mt-4 flex justify-center items-center gap-2 font-body text-sm hover:bg-linear-to-r from-stone-900 to-zinc-900 cursor-pointer transition  duration-300" style={{ backgroundColor: colors.primary.DEFAULT, color: colors.white.DEFAULT }}>
                                <Forward size={20} className="text-white" />
                                Partager ce prénom
                        </button>

                        <Comments isOpen={open} onClose={() => setOpen(false)} />
                </section>
        )
}

export default page
