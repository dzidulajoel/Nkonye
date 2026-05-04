'use client'
import { colors } from "@/libs/color"
import { useState } from "react"

const segments = [
    { label: "Happy", color: "" },
    { label: "Helpful", color: "" },
    { label: "Brave", color: "" },
    { label: "Strong", color: "" },
    { label: "Kind", color: "" },
    { label: "Funny", color: "" },
]

export default function SpinWheel() {
    const [rotation, setRotation] = useState(0)
    const [selected, setSelected] = useState(null)

    const spinWheel = () => {
        const rand = Math.floor(Math.random() * segments.length)
        const segmentDegree = 360 / segments.length
        const extraRotations = 3 * 360 // tourne plusieurs fois pour l'effet
        const newRotation = extraRotations + rand * segmentDegree + segmentDegree / 2
        setRotation(newRotation)
        setSelected(rand)
    }


    return (
        <div className="flex flex-col items-center justify-center space-y-6">
            {/* WHEEL */}
            <div className="relative w-64 h-64 rounded-full overflow-hidden transition-transform duration-4000 ease-out" style={{ transform: `rotate(${rotation}deg)` , backgroundColor: colors.brand.green }} >
                    <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: `repeatinglinear-gradient( 45deg, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 2px, transparent 2px, transparent 8px)` }} />
                {segments.map((seg, index) => {
                    const angle = 360 / segments.length
                    return (
                        <div key={index} className="absolute top-0 left-0 w-full h-full origin-bottom-center font-body text-sm text-white"
                            style={{ transform: `rotate(${index * angle}deg)`, clipPath: "polygon(50% 50%, 100% 0, 100% 100%)", backgroundColor: seg.color, display: "flex", justifyContent: "flex-end", alignItems: "center", paddingRight: "10px", fontSize: "0.85rem", color: "#fff", }}>
                            <span className=" h-3 w-20 bg-white rounded-md"></span>
                        </div>
                    )
                })}
                <span className="w-4 h-4 rounded-full bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
            </div>

            {/* BUTTON */}
            <button onClick={spinWheel} className="px-5 py-2 bg-[#207561] text-white rounded-full font-body text-sm hover:bg-[#1a5a48] transition"> Tourner la roue</button>

            {selected !== null && (
            <>
                <div className={`w-full lg:w-110  bg-linear-to-r from-stone-900 to-zinc-900 h-auto rounded relative p-8 mb-24`}>
                    <div className="w-full absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: `repeating-linear-gradient( 45deg, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 2px, transparent 2px, transparent 8px)` }} />
                    <div className="w-full  h-32 flex flex-col justify-center items-center gap-1">
                        <h2 className='font-info text-2xl font-bold text-white'> Dzidula </h2>
                        <span className="w-30 h-[2px]" style={{ backgroundColor: colors.brand.green }}></span>
                        <p className="font-body text-sm text-white">Vainqueur · Winner</p>
                        <div className="mt-8 flex flex-col w-full justify-center items-center gap-4">
                            <button onClick={spinWheel} className="w-full px-5 py-2 bg-[#207561] text-white rounded-full font-body text-sm hover:bg-[#1a5a48] transition"> Tourner a nouveau </button>
                            <button className="w-full px-5 py-2 bg-[#207561] text-white rounded-full font-body text-sm hover:bg-[#1a5a48] transition"> Detail sur le nom </button>
                        </div>
                    </div>
                </div>
            </>
            )}
        </div> 
    )
}

