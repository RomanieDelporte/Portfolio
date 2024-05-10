import PageLayout from "../Layouts/PageLayout.tsx";
import Card from "../components/Card.tsx";
import CardData from "../utils/cardData.ts";
import { useEffect, useState } from "react";

export default function Projects() {
    const [cardData, setCardData] = useState([]);

    const fetchRepos = async (username: string|undefined) => {
        try {
            const response = await fetch(`https://api.github.com/users/${username}/repos`);
            const data  = await response.json();
            setCardData(data);
        } catch (error) {
            console.error('Error fetching repositories:', error);
            throw error;
        }
    };

    const filteredCardData = cardData.filter(repo => repo.name !== "RomanieDelporte");


    useEffect(() => {
        fetchRepos(process.env.REACT_APP_GITHUB_USERNAME);
    }, []);

    return (
        <>
            <PageLayout>
                <div className="flex flex-col mt-40 mb-12 sm:mt-20">
                    <h2 className="text-rose-500 text-2xl shadow-rose-300 font-medium text-center">My Projects</h2>
                    <div className="grid grid-cols-1 gap-12 mt-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-3 xl:gap-16">
                        {filteredCardData.map(card => (
                            <Card
                                key={card.name}
                                title={card.name}
                                description={card.description}
                                topics={card.topics}
                            />
                        ))}
                    </div>
                </div>
            </PageLayout>
        </>
    )

}