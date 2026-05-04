'use client'
import AddNameForm from "@/components/AddNameForm"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

function page() {
    return (
        <>
            <section className='no-scrollbar w-full h-screen bg-[#f9fafb] space-y-4 py-4 px-2'>

                <div className="w-full rounded-lg flex flex-col justify-start items-center gap-4">
                    <div className="w-full flex justify-start items-center space-x-4">
                        <Link href="/nkonye/accueil" className="w-8 h-8 rounded-full flex justify-center items-center bg-white/10"><ArrowLeft size={20} className="text-gray-500" /></Link>                        
                        <h4 className='uppercase'>Contribuer avec un prénom</h4>
                    </div>
                </div>


                <div className="w-full h-[88vh] rounded-lg space-y-8 overflow-y-scroll no-scrollbar px-4">
                    <p className="font-body text-sm mt-1" > Ajoutez un prénom africain et partagez sa signification avec la communauté.</p>
                    <AddNameForm />
                </div>
            </section>
        </>
    )
}

export default page
