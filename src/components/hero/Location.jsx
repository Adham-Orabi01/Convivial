import { useState, useEffect } from "react";
import axios from "axios";
import { CiLocationOn } from "react-icons/ci";

const API_KEY = import.meta.env.VITE_API_KEY
const API_URL = import.meta.env.VITE_API_URL

const Location = ({cityId, setCityId}) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState(false); // New state to track selection

  const url = `${API_URL}/mapping`;

  useEffect(() => {
    if (query.length < 2 || selected) {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }

    const fetchCities = async () => {
      if (selected) { 
        setSuggestions([]);
        setShowDropdown(false);       
      }
      try {
        const response = await axios.get(url, {
          params: { api_key: API_KEY, name: query },
        });

        const cities = response.data
          .filter((item) => item.type === "GEO")
          .map((item) => ({
            id: item.document_id,
            name: item.name,
          }));

        setSuggestions(cities);
        setShowDropdown(true);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    const timeoutId = setTimeout(fetchCities, 1000); // Debounce API call
    return () => clearTimeout(timeoutId);
  }, [query, selected]); // Depend on `selected`

  const handleSelectCity = (city) => {
    setQuery(city.name);
    setSelected(true); // Prevent API calls after selection
    setSuggestions([]);
    setShowDropdown(false);
    setCityId(city.id)
  };

  return (
    <div className="location">
      <div className="location-container">
        <div>
          <CiLocationOn className="location-icon" />
        </div>
        <div className="location-content">
          <label>Location</label>
          <input
            placeholder="Where are you going?"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelected(false); // Reset selection so search works again
            }}
            onFocus={() => query.length > 1 && setShowDropdown(true)}
          />
          {showDropdown && suggestions.length > 0 && (
            <ul className="suggestions">
              {suggestions.map((city) => (
                <li key={city.id} onClick={() => handleSelectCity(city)}>
                  {city.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Location;
