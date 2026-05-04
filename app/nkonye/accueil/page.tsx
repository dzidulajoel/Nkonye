'use client';

import { colors } from "@/libs/color";
import Link from "next/dist/client/link";
import Caroussel from "../../../components/carousel";
import { Bell, MapPinCheck, Search } from "lucide-react";
const page = () => {
        const categories = [
                { name: "Jours", icon: "fi fi-rs-daily-calendar", link: "/categories/filles" },
                { name: "Pays", icon: "fi fi-rr-marker", link: "/categories/togo" },
                { name: "Vie", icon: "fi fi-rr-heart", link: "/categories/vie" },
                { name: "Sagesse", icon: "fi fi-rr-brain", link: "/categories/sagesse" },
                { name: "Espoir", icon: "fi fi-rr-sparkles", link: "/categories/espoir" },
                { name: "Amour", icon: "fi fi-rr-heart", link: "/categories/amour" },
                { name: "Destin", icon: "fi fi-rr-star", link: "/categories/destin" },
        ];
        return (
                <> 
                        <section className='no-scrollbar w-full h-screen  p-2 space-y-4'>

                                <div className="flex justify-between items-center">
                                        <div className="flex items-center ">
                                                <button className="w-10 h-10 rounded-full bg-white flex justify-center items-center"><MapPinCheck color={colors.gray[500]} /> </button>
                                                <div className="flex flex-col leading-none ">
                                                        <span className="text-gray-500 text-sm">Localisation</span>
                                                        <h5 className="text-semibold" style={{ color: colors.gray[600] }}>Lomé, Togo</h5>
                                                </div>
                                        </div>
                                        <div>
                                                <button className="w-10 h-10 rounded-full bg-white flex justify-center items-center"><Bell color={colors.gray[500]} /></button>
                                        </div>
                                </div>

                                <div className="space-y-2">
                                        <h3 className=" " style={{ color: colors.primary.DEFAULT }}>Découvre l’univers des prénoms africains</h3>
                                        <div className="w-full h-12 rounded-lg flex items-center px-4 bg-gray-50 border border-gray-100">
                                                <Search className="text-gray-400" size={24} />
                                                <input type="text" placeholder="Rechercher un prénom"className="text-gray-900 outline-none  rounded-lg  w-full p-2.5" />
                                        </div>
                                </div>

                                <div className="w-full rounded-lg h-30" style={{ backgroundColor: colors.gray[900] }}></div>
                                <div className="space-y-3">
                                        <h4 className="" style={{ color: colors.gray[900] }}>Catégories</h4>
                                        <div className="grid grid-cols-4 gap-2 w-full ">
                                                {categories.map((cat, index) => (
                                                        <Link key={index} href={cat.link} className="group w-20 h-20 rounded-lg box flex flex-col justify-center bg-[#F9FAFB] items-center gap-2 hover:bg-[#207561]" >
                                                                <i className={`${cat.icon} text-xl text-gray-600 group-hover:text-white`}></i>
                                                                <span className="text-[.9rem] text-gray-600 text-center leading-tight group-hover:text-white"> {cat.name}</span>
                                                        </Link>
                                                ))}
                                                <Link href="/categories" className="w-20 h-20 rounded-lg flex flex-col justify-center items-center gap-2 box bg-[#F9FAFB]">
                                                        <i className="fi fi-rr-apps-add text-lg text-gray-600"></i>
                                                        <span className="text-[.9rem] text-gray-600">Voir tous</span>
                                                </Link>

                                        </div>
                                </div>

                                <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                                <h4 className="text-xl " style={{ color: colors.gray[900] }}>Prénoms populaires</h4>
                                    <Link href="" className="flex items-center justify-center gap-1 leading-none px-2 h-6 rounded-lg" style={{ backgroundColor: colors.primary[200] }}>
                                        <span className="text-[.9rem]">Voir tous</span>
                                        <i className="fi fi-rr-angle-small-right text-sm flex items-center"></i>
                                    </Link>
                                        </div>

                                        <div className="overflow-hidden">
                                                <Caroussel />
                                        </div>
                                </div>

                        </section>
                </>
        )
}

export default page
