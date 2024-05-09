import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({children}: LayoutProps) {


    return (
        <div className="flex flex-col w-full font-mono ">
            <main className="container flex font-mono mx-auto px-44 py-8 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                {children}
            </main>
        </div>
    );
};