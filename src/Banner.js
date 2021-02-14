import axios from './axios';
import React, { useEffect, useState } from 'react';
import './Banner.css';
import requests from './Request';

function Banner() {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals); //import the local axios.js
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
			return request;
		}
		fetchData();
	}, []);

	function truncate(string, n) {
		return string?.length > n ? string.substr(0, n - 1) + '...' : string;
	}


	return (
		<header
			className="banner"
			style={{
				backgroundSize: 'cover', /*how to make picture not duplicate when stretching out the screen (exp: change to bigger screen size) */
				backgroundImage: `url("https://images.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
				backgroundPosition: 'center center',
			}}
		>
			<div className="banner__contents">
				<h1 className="banner__title">
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<div className="banner_buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>
				<h1 className="banner__description">
					{truncate(
						`This is a test description his is a test description his is a test description his is a test description his is a test descriptionhis is a test descriptionhis is a test descriptionhis is a test descriptionhis is a test descriptionhis is a test descriptionhis is a test description`,
						150
					)}
				</h1>
			</div>

			<div className="banner--fadeBottom" />
		</header>
	);
}

export default Banner;
