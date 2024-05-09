import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./pages/About.tsx";

const router = createBrowserRouter([
    {path: '/', element: <Home />},
    {path: '/about', element: <About />},
    {path: '/projects', element: <About />},
    {path: '/contact', element: <About />},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
