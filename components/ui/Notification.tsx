import { motion, AnimatePresence } from "framer-motion";
import { BellOff } from "lucide-react";
import { COLORS } from "../../constants/colors";

export default function Notification({ isOpen, onClose }) {
        return (
                <AnimatePresence>
                        {isOpen && (
                                <motion.div
                                        initial={{ y: "100%", opacity: 0 }}
                                        animate={{ y: "0%", opacity: 1 }}
                                        exit={{ y: "100%", opacity: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="fixed bottom-0 left-0 w-full h-1/2 bg-gray-100  p-4 z-500 border-t-8 border-white"
                                        style={{backgroundImage: `repeating-linear-gradient( 45deg, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 2px, transparent 2px, transparent 8px)` }}
                                >
                                        <motion.div className="fixed  inset-0  bg-black/5 h-1/2 top-0 z-10" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
                                        <div className="flex justify-between items-center mb-4">
                                                <h2 className="text-[18px] font-bold leading-[24px] text-[#374957] font-body">Notifications</h2>
                                                <button className="cursor-pointer w-8 h-8 rounded-full flex justify-center items-center bg-white" onClick={onClose}>✕</button>
                                        </div>
                                                <div className="p-3 rounded-md bg-white w-full flex flex-col justify-center items-center gap-2">
                                                        <span className="w-10 h-10 rounded-md flex  justify-center items-center" style={{backgroundColor:COLORS.primary.DEFAULT}}><BellOff size={20} color="#fff" /></span>
                                                        <p className="text-sm font-body">Vous n'avez pas de nouvelle notification.</p>
                                                </div>
                                </motion.div>
                        )}
                </AnimatePresence>
        );
}