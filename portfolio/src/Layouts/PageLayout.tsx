import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({children}: LayoutProps) {


    return (
        <>
            <div className="flex flex-col w-full font-mono items-center justify-center lg:justify-start">
                <main className="xl:container flex font-mono px-4 xl:px-32">
                    {children}
                </main>
            </div>
        </>
    );
};