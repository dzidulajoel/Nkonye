'use client';
import { colors } from '@/libs/color';
import '@flaticon/flaticon-uicons/css/all/all.css';
import Link from 'next/link';
import Caroussel from "../../../components/carousel";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight } from 'lucide-react';

function page() {

    const categories = [
        "Divinité",
        "Vie · Existence",
        "Vertus · Émotions",
        "Bénédictions · Dons",
        "Famille · Identité",
        "Temps · Destin",
        "Actions · Prières",
        "Nature",
        "Événements",
        "Spiritualité · Mystique",
        "Royauté · Prestige",
        "Symboles · Significations",
        "Modernes · Hybrides"
    ];

    const [active, setActive] = useState("Divinité");

    const getId = (cat) =>
        cat.toLowerCase().replace(/[^a-z0-9]/g, "-");

    const ref = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(ref.current.scrollWidth - ref.current.offsetWidth);
    }, []);

    return (

        <>
            <section className='no-scrollbar w-full h-screen bg-[#f9fafb] p-2 space-y-4'>

                <div className="w-full h-12 rounded-lg flex justify-between items-center gap-4">
                    <div className="flex items-center space-x-4">
                        <Link href="/nkonye/accueil" className="w-8 h-8 rounded-full flex justify-center items-center bg-white/10"><ArrowLeft size={20} className="text-gray-500" /></Link>                        
                        <h4 className='uppercase'>Explorer</h4>
                    </div>
                    <div>
                        <button className="w-10 h-10 rounded-full flex justify-center items-center"><i className="text-lg fi fi-rr-search flex justify-center items-center"></i></button>
                    </div>
                </div>

                {/* ✅ AJOUT FILTRE HORIZONTAL */}
                <div className="overflow-x-auto no-scrollbar pl-2">
                    <motion.div ref={ref} className="flex gap-3 cursor-grab active:cursor-grabbing" drag="x" dragConstraints={{ left: -width, right: 0 }} whileTap={{ cursor: "grabbing" }}>
                        {categories.map((cat) => {
                            const isActive = active === cat;

                            return (
                                <motion.button key={cat}
                                    onClick={() => { const id = getId(cat); const el = document.getElementById(id);
                                        if (el) { el.scrollIntoView({ behavior: "smooth", block: "start" }); }
                                        setActive(cat);
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative px-4 py-2 rounded-lg text-[.9rem] font-medium whitespace-nowrap"
                                    style={{
                                        color: isActive ? "#fff" : "#333",
                                        backgroundColor: isActive ? "#207561" : "#f3f4f6"
                                    }}
                                >
                                    {cat}

                                    {isActive && (
                                        <motion.div layoutId="active-pill" className="absolute inset-0 rounded-full -z-10" style={{ backgroundColor: "#207561" }} transition={{ type: "spring", stiffness: 300, damping: 25 }} />
                                    )}
                                </motion.button>
                            );
                        })}
                    </motion.div>
                </div>

                <div className="w-full h-[84vh] rounded-lg space-y-8 overflow-y-scroll no-scrollbar pb-4 ">

                    {categories.map((category, index) => {
                        const id = getId(category); // ✅ AJOUT

                        return (
                            <div id={id} key={index} className="space-y-3 scroll-mt-24"> 

                                <div className="flex justify-between items-center pl-2">
                                    <h4 className="" style={{ color: colors.primary.DEFAULT }}>  {category}</h4>
                                    <Link href={`/prenoms?category=${encodeURIComponent(category)}`} className="flex items-center justify-center gap-1 leading-none px-2 h-6 rounded-lg" style={{ backgroundColor: colors.gray[200] }}>
                                        <span className="text-[.9rem] text-[#207561]">Voir tous</span>
                                        <ChevronRight size={16} style={{ color: colors.primary.DEFAULT }} />
                                    </Link>
                                </div>

                                <div className="overflow-hidden pl-2">
                                    <Caroussel category={category} />
                                </div>

                            </div>
                        );
                    })}

                </div>
            </section>
        </>
    )
}

export default page