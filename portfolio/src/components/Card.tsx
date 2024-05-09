export default function Card({title, description, imageUrl, technologies}: CardData) {
    return (
        <div className="flex flex-col border-2 border-gray-30 w-[340px] max-w[340px] p-4 bg-white rounded-lg hover:shadow-md hover:ring-black hover:ring-opacity-30">
            <div className="flex items-center justify-center">
                <img
                    src={imageUrl}
                    alt={title}
                    className="h-32 w-32 rounded-full"
                />
            </div>
            <h2 className="text-2xl font-bold my-4">{title}</h2>
            <p className="text-xs">{description}</p>
            <div className="mt-4">
                {technologies.map((technology) => (
                    <span
                        key={technology}
                        className="text-xs bg-gray-100 hover:bg-rose-100 hover:text-rose-500 rounded-full p-2 mr-2"
                    >{technology}</span>
                ))}
            </div>
        </div>
    );
}