import Header from '../components/Header';

import '../styles/styles.scss';

const App = () => {
	return (
		<>
			<Header />
			<div className="search-box">
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

				<div className="search-text">
					<span>Pas de compte Riot ?</span>
					<a
						href="https://auth.riotgames.com/login#client_id=prod-xsso-playvalorant&code_challenge=pgSzXsy6cIXO-NXfgT281JYmO4h9ZE82KgwZ57TSqYY&code_challenge_method=S256&redirect_uri=https%3A%2F%2Fxsso.playvalorant.com%2Fredirect&response_type=code&scope=openid%20account%20email&state=9e73fbe6629e71c76ce632b5d5&uri=https%3A%2F%2Fplayvalorant.com%2Ffr-fr%2F"
						target="_blank"
					>
						Créer en un
					</a>
				</div>
			</div>
			<div>Hello world !</div>
		</>
	);
};

export default App;
