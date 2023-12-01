import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

import App from './App.jsx';
import Portfolio from './components/pages/Portfolio';
import ContactForm from './components/pages/ContactForm'

const router = createBrowserRouter ([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true, 
                element: <Portfolio />
            },
            {
                path: '/contactform',
                element: <ContactForm />
            },
        ],
    },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)