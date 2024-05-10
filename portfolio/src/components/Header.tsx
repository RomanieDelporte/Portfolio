import { useState } from "react";

interface NavItem {
    title: string;
    url: string;
}

const navItems: NavItem[] = [
    {title: '', url: '/'},
    {title: 'About', url: '/#about'},
    {title: 'Projects', url: '/#projects'},
    {title: 'Contact', url: '/#contact'},
];


export function Header({scrollToSection}: { scrollToSection: any }) {
    const [activeLink, setActiveLink] = useState<number>(0);

    const handleScrollToSection = (url: string, index: number) => {
        const sectionId = url.substring(2);
        console.log(sectionId)
        scrollToSection(sectionId);
        setActiveLink(index);
    };

    return (
        <>
            <div className="flex items-center justify-around w-full fixed bg-secondary-100 p-2">
                <div className="sm:hidden bg-rose-100 rounded-full p-2">
                    <img
                        src="/portfolio-home.png"
                        alt="Romanie logo"
                        className="h-16 w-16 rounded-full"
                    />
                </div>
                <nav className="flex">
                    <ul className="flex space-x-6">
                        {navItems.map((item, index) => (
                            <li key={item.title}>
                                <a
                                    href={item.url}
                                    className={`text-gray-600 hover:text-rose-400 hover:bg-rose-200 p-2 ${activeLink === index ? 'text-rose-400' : 'text-gray-500'}`}
                                    onClick={() => handleScrollToSection(item.url, index)}
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    )
}
