import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About  from "./pages/About.tsx";
import { Header } from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";

const router = createBrowserRouter([
    {path: '/', element: <Home />},
    {path: '/#about', element: <Home />},
    {path: '/#projects', element: <Home />},
    {path: '/#contact', element: <Home />},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Header />
        <RouterProvider router={router} />
        <Footer />
    </React.StrictMode>,
)
