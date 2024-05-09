import PageLayout from "../Layouts/PageLayout.tsx";
import Card from "../components/Card.tsx";
import CardData from "../utils/cardData.ts";

export default function Projects() {
    const cardData = CardData()
    return (
        <>
            <PageLayout>
                <div className="flex flex-col mt-40">
                    <h2 className="text-rose-500 text-2xl shadow-rose-300 font-medium text-center">My Projects</h2>
                    <div className="grid grid-cols-3 gap-16 mt-4">
                        {cardData.map((card) => (
                            <Card
                                key={card.title}
                                title={card.title}
                                description={card.description}
                                technologies={card.technologies}
                                imageUrl={card.imageUrl}
                            />
                        ))}
                    </div>
                </div>
            </PageLayout>
        </>
    )

}