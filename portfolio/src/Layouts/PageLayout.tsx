import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({children}: LayoutProps) {


    return (
        <>
            <div className="flex flex-col w-full font-mono sm:h-full">
                <main className="container flex font-mono mx-auto px-44 py-8 sm:px-2 md:px-2r md:justify-center xl:px-20">
                    {children}
                </main>
            </div>
        </>
    );
};