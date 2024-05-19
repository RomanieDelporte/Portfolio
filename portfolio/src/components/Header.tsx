import { useEffect, useState } from "react";

interface NavItem {
    title: string;
    url: string;
}

const navItems: NavItem[] = [
    {title: 'About', url: '/#about'},
    {title: 'Projects', url: '/#projects'},
    {title: 'Contact', url: '/#contact'},
];


export function Header({scrollToSection}: { scrollToSection: any }) {
    const [activeLink, setActiveLink] = useState<number>(0);

    const handleScrollToSection = (url: string, index: number) => {
        const sectionId = url.substring(2);
        scrollToSection(sectionId);
        setActiveLink(index);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const aboutSection = document.getElementById('about').offsetTop;
            const projectsSection = document.getElementById('projects').offsetTop;
            const contactSection = document.getElementById('contact').offsetTop;

            if (scrollPosition < aboutSection) {
                setActiveLink(0);
            } else if (scrollPosition >= aboutSection && scrollPosition < contactSection) {
                setActiveLink(1);
            } else {
                setActiveLink(2);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <>
            <div className="flex items-center justify-center md:fixed bg-secondary-100 p-2 md:w-full md:justify-between lg:justify-between xl:justify-around">
                <div
                    className="hidden sm:flex bg-rose-100 rounded-full p-2 cursor-pointer"
                >
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
                                    className={`text-gray-600 hover:text-rose-400 p-2 ${activeLink === index ? 'text-rose-400 border-b-4 border-rose-500' : 'text-gray-500'}`}
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
