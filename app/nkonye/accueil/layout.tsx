import Navbar from "@/components/navbar";
import '@flaticon/flaticon-uicons/css/all/all.css';

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}

            <div className="w-full fixed bottom-0 left-0 right-0 h-20 flex items-center justify-center">
                <Navbar />
            </div>
        </>
    );
}