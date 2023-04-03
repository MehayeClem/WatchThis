import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
	const location = useLocation();

	const [showSearchBar, setShowSearchBar] = useState(
		location.pathname !== '/'
	);
	return (
		<>
			<header className="header">
				<h1 className="logo">Watch This</h1>
				<ul className="menu">
					<a href="/">
						<li className="link">Actualitées</li>
					</a>
					<a href="/agents">
						<li className="link">Agents</li>
					</a>
					<a href="/lineups">
						<li className="link">Lineups</li>
					</a>
					<a href="/crosshairs">
						<li className="link">Crosshairs</li>
					</a>
					<a href="/guides">
						<li className="link">Guides</li>
					</a>
					{showSearchBar && (
						<div className="search-bar">
							<input
								type="search"
								placeholder="Rechercher un joueur pseudo#tag"
							/>

							<a className="search-arrow-box" href="/profil">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
									/>
								</svg>
							</a>
						</div>
					)}
				</ul>
			</header>
		</>
	);
};

export default Header;
