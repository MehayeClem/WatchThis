import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './pages/App';
import Profil from './pages/Profil';

const container = document.getElementById('root');

const root = createRoot(container!);

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />
	},
	{
		path: '/profil',
		element: <Profil />
	}
]);

root.render(<RouterProvider router={router} />);
