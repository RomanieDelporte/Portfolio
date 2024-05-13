import '../App.css'
import PageLayout from "../Layouts/PageLayout.tsx";
import About from "./About.tsx";
import Projects from "./Projects.tsx";
import { Footer } from "../components/Footer.tsx";
import { Header } from "../components/Header.tsx";
import Contact from "../components/Contact.tsx";


function Home() {

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView();
        }
    };


    return (
        <>
            <Header scrollToSection={scrollToSection} />
            <PageLayout>
                <div className="flex-col flex">
                    <div
                        id={"about"}
                        className="mt-20"
                    >
                        <About text="Hi I'm Romanie" />
                    </div>
                    <div id={"projects"}>
                        <Projects />
                    </div>
                    <div id={"contact"}>
                        <Contact />
                    </div>
                </div>
            </PageLayout>
            <Footer />

        </>
    )
}

export default Home;
