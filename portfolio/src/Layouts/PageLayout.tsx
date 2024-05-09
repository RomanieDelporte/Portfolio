import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer.tsx";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export function Layout({children}: LayoutProps) {


    return (
        <div className="min-h-screen flex flex-col w-full font-mono">
            {/*<Header />*/}

            <main className="container justify-center flex pl-64 font-mono">
                {children}
            </main>

            {/*<Footer />*/}
        </div>
    );
};

export default Layout;