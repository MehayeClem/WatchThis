import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from './pages/App';
import Profil from './pages/Profil';
import Header from './components/Header';
import Lineups from './pages/Lineups';
import Agents from './pages/Agents';
import Crosshairs from './pages/Crosshairs';
import Guides from './pages/Guides';

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
	<Router>
		<Header />
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/profil" element={<Profil />} />
			<Route path="/agents" element={<Agents />} />
			<Route path="/lineups" element={<Lineups />} />
			<Route path="/crosshairs" element={<Crosshairs />} />
			<Route path="/guides" element={<Guides />} />
		</Routes>
	</Router>
);
