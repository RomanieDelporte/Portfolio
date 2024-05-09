import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer.tsx";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export function Layout({children}: LayoutProps) {
    return (
        <div className="min-h-screen bg-rose-50">
            <Header />

            <main className="container mx-auto px-4 py-8">
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;