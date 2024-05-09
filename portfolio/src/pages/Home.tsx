import '../App.css'
import PageLayout from "../Layouts/PageLayout.tsx";
import About from "./About.tsx";
import Projects from "./Projects.tsx";


function Home() {

    return (
        <>
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
                </div>
            </PageLayout>
        </>
    )
}

export default Home;
