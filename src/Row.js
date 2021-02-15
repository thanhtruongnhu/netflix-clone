import axios from './axios';
import React, { useEffect, useState } from 'react';
import './Row.css';
import PropTypes from 'prop-types';

function Row({ title, fetchUrl, isLargeRow = false }) {
	const [movies, setMovies] = useState([]);

	const base_url = 'https://images.tmdb.org/t/p/original/';

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl]);

	console.log(movies);

	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="row__posters">
				{movies.map(
					(movie) =>
                    // These two conditions prevent empty img path get rendered
						((isLargeRow && movie.poster_path) ||
							(!isLargeRow && movie.backdrop_path)) && (
							<img
								className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
								key={movie.id}
								src={`${base_url}${
									isLargeRow ? movie.poster_path : movie.backdrop_path
								}`}
								alt={movie.name}
							/>
						)
				)}
			</div>
		</div>
	);
}

Row.propTypes = {
	title: PropTypes.string.isRequired,
	fetchUrl: PropTypes.string.isRequired,
	isLargeRow: PropTypes.bool.isRequired,
};

export default Row;
