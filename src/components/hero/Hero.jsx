import Guests from "./Guests";
import Location from "./Location";
import DateComponent from "./Date";
import SearchResults from "./searchResults";
import "./Hero.css";
import { useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

const Hero = () => {
	const [options, setOptions] = useState({
		adult: 1,
		children: 0,
		room: 1,
	});
	const [cityId, setCityId] = useState(null);
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const url = `${API_URL}/city`;
	const params = {
		pagination: "0",
		cur: "USD",
		api_key: API_KEY,
	};

	const [searchResults, setSearchResults] = useState([]);

	const handleSearch = async () => {
		params.cityid = cityId;
		params.checkin = startDate.toISOString().split("T")[0];
		params.checkout = endDate.toISOString().split("T")[0];
		params.rooms = options.room;
		params.adults = options.adult;
		params.children = options.children;
		console.log(params);
		const response = await axios.get(url, { params });
		console.log(response.data);
		setSearchResults(response.data.slice(0,-1));
	};


	const validate = () => {
		const f =!(cityId && startDate > (new Date()) && endDate > startDate);
		console.log(f);
		 
		return f
	}

	return (
		<div className="hero">
			<div className="hero-container">
				<h1>start your journey with us</h1>
				<p>Find what makes you happy anytime anywhere</p>
				<div className="hero-search-container">
					<div className="hero-search">
						<div className="hero-wrapper">
							<Location cityId={cityId} setCityId={setCityId} />
							<Guests options={options} setOptions={setOptions} />
							<DateComponent
								startDate={startDate}
								setStartDate={setStartDate}
								endDate={endDate}
								setEndDate={setEndDate}
							/>
							<div className="search-button">
								<button disabled={validate()} onClick={handleSearch}>Search</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<SearchResults results={searchResults} />
		</div>
	);
};

export default Hero;
