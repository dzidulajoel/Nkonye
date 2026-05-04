"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const icons = {
  home: ["fi fi-rr-house-blank", "fi fi-sr-house-blank"],
  search: ["fi fi-br-search", "fi fi-br-search"],
  add: ["fi fi-br-plus", "fi fi-br-plus"],
  profile: ["fi fi-rs-settings", "fi fi-rs-settings"],
};

const liens = {
  home: "/nkonye/accueil",
  search: "/nkonye/explorer",
  add: "/nkonye/contribution",
  profile: "/nkonye/parametre",
};

export default function Navbar() {
  const [active, setActive] = useState<string | null>("home");

  return (
    <div className="w-[90%] h-12 rounded-lg flex justify-center items-center gap-4">
      
      {/* Bloc principal */}
      <div className="h-12 w-[70%] bg-[#F9FAFB]  rounded-lg flex justify-around items-center box border border-gray-100">
        {Object.entries(icons).map(([key, value]) => {
          const isActive = active === key;

          return (
            <Link key={key} href={liens[key]}>
              <motion.div
                onClick={() => setActive(key)}
                className="flex items-center justify-center cursor-pointer"
                whileTap={{ scale: 0.9 }}
              >
                <motion.i
                  className={`${
                    isActive ? value[1] : value[0]
                  } text-xl flex items-center justify-center`}
                  animate={{
                    color: isActive ? "#207561" : "#222222",
                    scale: isActive ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* Bouton central 🔥 */}
      <div className="h-12 w-12 bg-[#207561] rounded-lg flex justify-center items-center">
        <Link href="/nkonye/choisir">
          <motion.i
            onClick={() => setActive(null)}
            className="fi fi-ss-flame text-white text-2xl"
            whileTap={{ scale: 0.9 }}
          />
        </Link>
      </div>
    </div>
  );
}