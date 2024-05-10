import PageLayout from "../Layouts/PageLayout.tsx";
import { useEffect, useState } from "react";

export default function About({text}: { text: string }) {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            setDisplayText(() => {
                if (currentIndex === text.length) {
                    clearInterval(intervalId);
                    return text;
                }
                currentIndex++;
                return text.substring(0, currentIndex);
            });
        }, 100);
        return () => clearInterval(intervalId);
    }, [text]);

    interface SocialMediaLink {
        name: string;
        url: string;
    }

    const socialMediaLinks: SocialMediaLink[] = [
        {name: 'GitHub', url: 'https://github.com/RomanieDelporte'},
        {name: 'LinkedIn', url: 'https://www.linkedin.com/in/romanie-delporte-446981193/'},
        {name: 'Email', url: 'mailto:romaniedelporte230@gmail.com'}
    ]
    return (
        <>
            <PageLayout>
                <div className="flex flex-col mt-20 items-center md:flex-row">
                    <div className="flex flex-col justify-center text-center md:w-6/12 md:text-start">
                        <h2 className="text-4xl font-medium text-rose-500">{displayText}</h2>
                        <h3 className="text-2xl font-medium flex flex-col truncate line-clamp-2 whitespace-pre-wrap">
                            Creative Frontend Developer that
                            makes websites and apps
                        </h3>
                        <div className="mt-8">
                            {socialMediaLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target={"_blank"}
                                    className="text-rose-500 hover:text-rose-400 border rounded mr-4 border-rose-500 p-2 hover:bg-rose-50"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="mt-4 md:ml-auto">
                        <img
                            src="/portfolio-home.png"
                            alt="Romanie logo"
                            className="h-72 w-72 rounded-full"
                        />
                    </div>
                </div>
            </PageLayout>
        </>
    )
}