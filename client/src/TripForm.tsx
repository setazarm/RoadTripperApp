import React, { useState, useEffect } from 'react';

interface City {
  id: number;
  name: string;
}

interface DistanceAndCost {
  distance: number;
  cost: number;
}

const TripForm: React.FC = () => {
  const [baseCity, setBaseCity] = useState<number | null>(null);
  const [targetCity, setTargetCity] = useState<number | null>(null);
  const [cities, setCities] = useState<City[]>([]);
  const [result, setResult] = useState<DistanceAndCost | null>(null);

  useEffect(() => {
    // Fetch cities from API
    fetchCities();
  }, []);

  const fetchCities = async () => {
    try {
      const response = await fetch('');
      
      const data = await response.json();
      setCities(data);
      console.log(data)
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };

  const handleBaseCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCityId = parseInt(event.target.value, 10);
    setBaseCity(selectedCityId);
  };

  const handleTargetCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCityId = parseInt(event.target.value, 10);
    setTargetCity(selectedCityId);
  };

  const calculateDistanceAndCost = () => {
    // Calculate distance and cost based on baseCity and targetCity
    if (baseCity !== null && targetCity !== null) {
      // Make API request or perform necessary calculations
      const distance = 100; // Replace with actual calculation or API call
      const cost = 50; // Replace with actual calculation or API call

      setResult({ distance, cost });
    }
  };

  return (
    <div>
      <label htmlFor="baseCity">Base City:</label>
      <select id="baseCity" value={baseCity || ''} onChange={handleBaseCityChange}>
        <option value="">Select Base City</option>
        {/* {cities.map((city) => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))} */}
      </select>

      <label htmlFor="targetCity">Target City:</label>
      <select id="targetCity" value={targetCity || ''} onChange={handleTargetCityChange}>
        <option value="">Select Target City</option>
        {/* {cities.map((city) => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))} */}
      </select>

      <button onClick={calculateDistanceAndCost}>Calculate</button>

      {result && (
        <div>
          <p>Distance: {result.distance} km</p>
          <p>Cost: ${result.cost}</p>
        </div>
      )}
    </div>
  );
};

export default TripForm;
