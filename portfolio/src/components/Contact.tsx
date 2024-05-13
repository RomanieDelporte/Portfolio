import PageLayout from "../Layouts/PageLayout";

const contactInfo: any = [
    {
        title: "Email",
        info: "mailto:romaniedelporte230@gmail.com"
    },
    {
        title: "LinkedIn",
        info: "https://www.linkedin.com/in/romanie-delporte-446981193/"
    },
]
export default function Contact() {
    return (
        <>
            <PageLayout>
                <div className="flex flex-col mt-20 w-full">
                    <h2 className="text-2xl text-rose-500 text-center">Get in touch</h2>
                    <div className="mt-10 text-center">
                        <h3 className="text-xl">Let's have a chat</h3>
                    </div>
                </div>
            </PageLayout>
        </>
    );
}