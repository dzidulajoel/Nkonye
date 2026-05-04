'use client'
import { ArrowLeft, SlidersHorizontal } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"
import SpinWheel from "@/components/ui/SpinWheel"
import { colors } from "@/libs/color"

function page() {
    const [showSearch, setShowSearch] = useState(false)
    const [selectedFilters, setSelectedFilters] = useState([])

    // fermer si click dehors
    useEffect(() => {
        const handleClick = () => setShowSearch(false)

        if (showSearch) {
            window.addEventListener("click", handleClick)
        }

        return () => window.removeEventListener("click", handleClick)
    }, [showSearch])

    const filters = [
        "Féminin",
        "Masculin",
        "Neutre",
        "Rare",
        "Moderne",
        "Court",
    ]

    // toggle
    const toggleFilter = (filter) => {
        setSelectedFilters((prev) =>
            prev.includes(filter)
                ? prev.filter((f) => f !== filter)
                : [...prev, filter]
        )
    }

    return (
        <section className="relative">

            {/* HEADER FIX */}
            <div className="fixed top-0 left-0 w-full bg-white px-4 py-3 z-10">

                {/* TOP BAR */}
                <div className="flex items-center justify-between">
                    <Link href="/nkonye/accueil" className="w-8 h-8 rounded-full flex justify-center items-center" style={{ backgroundColor: colors.gray[100] }}><ArrowLeft size={20} className="text-gray-600" /></Link>
                    <button  onClick={(e) => { e.stopPropagation(); setShowSearch(!showSearch) }} className="w-8 h-8 rounded-full flex justify-center items-center"  style={{ backgroundColor: colors.gray[100] }}>
                        <SlidersHorizontal size={20} className="text-gray-600" />
                    </button>
                </div>

                {/* TITLE */}
                <div className="flex flex-col items-center justify-center text-center">
                    <h2 className="font-info text-2xl font-bold" style={{ color: colors.brand.green }} > Tournez la roue !</h2>
                    <p className="font-body text-sm mt-1" style={{ color: colors.gray[600] }}> Laissez-vous surprendre par un prénom </p>
                </div>

                {/* FILTER PANEL */}
                <div onClick={(e) => e.stopPropagation()} className={`overflow-hidden transition-all duration-300 ${ showSearch ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0" }`}>
                    <div  className="rounded-md px-4 flex flex-wrap gap-2" >
                        {filters.map((filter) => {
                            const isActive = selectedFilters.includes(filter)
                            return (
                                <div key={filter}  onClick={(e) => { e.stopPropagation(); toggleFilter(filter)}} className={`px-5 py-2 rounded-full text-sm font-body cursor-pointer transition-all  ${ isActive ? "text-white border-transparent" : "bg-white text-gray-600 border-gray-200"  }`}
                                    style={{ backgroundColor: isActive ? colors.brand.green  :  colors.gray[100] , }} > {filter}
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>

            {/* CONTENT */}
            <div  className={`${showSearch ? "pt-40" : "pt-36"} transition-all duration-300 space-y-4`}>
                <SpinWheel />
            </div>

        </section>
    )
}

export default page