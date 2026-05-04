"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Carousel() {
        const ref = useRef(null);
        const [width, setWidth] = useState(0);

        useEffect(() => {
                setWidth(ref.current.scrollWidth - ref.current.offsetWidth);
        }, []);

        return (
                <div className="overflow-hidden">
                        <motion.div ref={ref} className="flex gap-4 cursor-grab active:cursor-grabbing " drag="x" dragConstraints={{ left: -width, right: 0 }} whileTap={{ cursor: "grabbing" }}>
                                <div className="w-[300px] h-40 bg-[#222222] box rounded-lg flex-shrink-0 relative">
                                        <button className="absolute top-2 right-4"><i className="fi fi-sr-heart text-gray-500 text-xl"></i></button>
                                </div>
                                <div className="w-[300px] h-40 bg-[#222222] box rounded-lg flex-shrink-0 relative">
                                        <button className="absolute top-2 right-4"><i className="fi fi-sr-heart text-gray-500 text-xl"></i></button>
                                </div>
                                <div className="w-[300px] h-40 bg-[#222222] box rounded-lg flex-shrink-0 relative">
                                        <button className="absolute top-2 right-4"><i className="fi fi-sr-heart text-gray-500 text-xl"></i></button>
                                </div>
                        </motion.div>
                </div>
        );
}