import axios from 'axios';
import React, { useEffect } from 'react';

const Profil = () => {
	return (
		<>
			<section className="profil">
				<div className="profil-banner" id="banner">
					Jesuisuncoucous#EUW
				</div>

				<div className="profil-rank" id="rank">
					<h2>Compétition</h2>
					<div className="rank-act">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="arrow-left"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 19.5L8.25 12l7.5-7.5"
							/>
						</svg>

						<span>E6 - Act 2</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="arrow-right"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M8.25 4.5l7.5 7.5-7.5 7.5"
							/>
						</svg>
					</div>
					<div className="rank-infos">
						<div className="rank-img">
							<h3>Rang</h3>
							<img src="src/assets/radiant-badge.png" alt="Rank image" />
						</div>
						<div className="rank-circle">Cercle</div>
					</div>
				</div>

				<div className="profil-career" id="career">
					<h2>Carrière :</h2>
					<ul className="career-list">
						<li className="career-name">Compétition</li>
						<li className="career-name">Normal</li>
						<li className="career-name">Vélocité</li>
						<li className="career-name">Toutes</li>
					</ul>
				</div>

				<div className="profil-historic" id="historic">
					<h3>Les 20 dernières parties</h3>
					<div className="profil-party">
						<div className="logo-agent">
							<img
								src="src/assets/Sage_icon.png"
								alt="Logo de l'agent"
							/>
						</div>
						<div className="map-name">Split</div>
						<div className="party-kda">
							<span>K / D / A</span>
							<div className="kda-number">
								<span className="kda-kill">13</span>
								<span>/</span>
								<span className="kda-death">09</span>
								<span>/</span>
								<span className="kda-Assist">20</span>
							</div>
						</div>
						<div className="party-result">
							<span className="party-result-name">Victory</span>
							<div className="party-result-numbers">
								<span className="number-left">13 </span>
								<span>:</span>
								<span className="number-right"> 10</span>
							</div>
						</div>
						<div className="party-date">One month ago</div>
					</div>
					<div className="profil-party">
						<div className="logo-agent">
							<img
								src="src/assets/Sage_icon.png"
								alt="Logo de l'agent"
							/>
						</div>
						<div className="map-name">Split</div>
						<div className="party-kda">
							<span>K / D / A</span>
							<div className="kda-number">
								<span className="kda-kill">13</span>
								<span>/</span>
								<span className="kda-death">09</span>
								<span>/</span>
								<span className="kda-Assist">20</span>
							</div>
						</div>
						<div className="party-result">
							<span className="party-result-name">Victory</span>
							<div className="party-result-numbers">
								<span className="number-left">13 </span>
								<span>:</span>
								<span className="number-right"> 10</span>
							</div>
						</div>
						<div className="party-date">One month ago</div>
					</div>
					<div className="profil-party">
						<div className="logo-agent">
							<img
								src="src/assets/Sage_icon.png"
								alt="Logo de l'agent"
							/>
						</div>
						<div className="map-name">Split</div>
						<div className="party-kda">
							<span>K / D / A</span>
							<div className="kda-number">
								<span className="kda-kill">13</span>
								<span>/</span>
								<span className="kda-death">09</span>
								<span>/</span>
								<span className="kda-Assist">20</span>
							</div>
						</div>
						<div className="party-result">
							<span className="party-result-name">Victory</span>
							<div className="party-result-numbers">
								<span className="number-left">13 </span>
								<span>:</span>
								<span className="number-right"> 10</span>
							</div>
						</div>
						<div className="party-date">One month ago</div>
					</div>
				</div>

				<div className="profil-statistiques" id="statistique">
					<h2>Statitiques</h2>
					<ul className="statistique-list">
						<li className="statistique wr">
							Winrate :<span>60%</span>
						</li>
						<li className="statistique kd">
							Ratio tué/mort :<span>1.5</span>
						</li>
						<li className="statistique hs">
							Coup dans la tête :<span>25%</span>
						</li>
						<li className="statistique acc">
							Score de combat :<span>300</span>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
};

export default Profil;
