import Icon from "./Icon.tsx";
import { CardData } from "../types/types.ts";

export default function Card({title, description, topics, url}: CardData) {
    const additionalTopicsCount = topics.length > 3 ? topics.length - 3 : 0;
    const handleClick = () => {
        window.open(url, '_blank');
    }

    return (
        <div className="flex flex-col border-2 border-gray-30 w-[340px] max-w[340px] p-4 bg-white rounded-lg hover:shadow-md hover:ring-black hover:ring-opacity-30">
            <div
                className="flex justify-end cursor-pointer"
                onClick={handleClick}
            >
                <Icon
                    name="Github"
                    color="black"
                    size="24"
                />
            </div>
            <div className="flex items-center justify-center">
                <img
                    src="/portfolio-home.png"
                    alt={title}
                    className="h-32 w-32 rounded-full"
                />
            </div>
            <h2 className="text-2xl font-bold my-4 text-rose-500 first-letter:uppercase">{title}</h2>
            <p className="text-xs">{description}</p>
            <div className="mt-4">
                {topics.slice(0, 3).map((topic) => (
                    <span
                        key={topic}
                        className="text-xs bg-gray-100 hover:bg-rose-100 cursor-pointer hover:text-rose-500 rounded-full p-2 mr-1"
                    >{topic}</span>
                ))}
                {additionalTopicsCount > 0 && (
                    <span className="text-xs bg-gray-100 rounded-full p-2 mr-1">+ {additionalTopicsCount}</span>
                )}
            </div>
        </div>
    );
}