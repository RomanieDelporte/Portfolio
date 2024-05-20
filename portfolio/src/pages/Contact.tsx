import PageLayout from "../Layouts/PageLayout.tsx";
import { useRef } from "react";
import emailjs from '@emailjs/browser';


export default function Contact() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, {
                publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        // reset form after submission
        e.target.reset()
    };
    return (
        <>
            <PageLayout>
                <div className="flex flex-col mt-20 w-full mb-16 text-center">
                    <h2 className="text-2xl text-rose-500 text-center">Get in touch</h2>
                    <h3 className="text-xl">Let's have a chat</h3>
                    <div className="mt-10 text-center">
                        <p className="mt-10">Send us a mesage </p>
                        <form
                            className="mt-5 flex flex-col items-center w-full"
                            ref={form}
                            onSubmit={sendEmail}
                        >
                            <input
                                className="w-1/2 p-2 border border-gray-300 rounded-md"
                                type="text"
                                placeholder="Name"
                                name="name"
                                required
                            />
                            <input
                                className="w-1/2 p-2 border border-gray-300 rounded-md mt-5"
                                type="email"
                                placeholder="Email"
                                name="email"
                                required
                            />
                            <textarea
                                className="w-1/2 p-2 border border-gray-300 rounded-md mt-5"
                                name="message"
                                placeholder="Message"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-rose-500 text-white p-2 mt-5 rounded-md"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </PageLayout>
        </>
    );
}