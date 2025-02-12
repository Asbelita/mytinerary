import { useState, useEffect } from "react";

interface City {
  id: string;
  name: string;
  image: string;
}

const mapCityData = (data: any[]): City[] => {
  return data.map(city => ({
    id: city._id,
    name: city.name,
    image: city.image,
  }));
};

const useCities = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch("https://mytinerary-server.onrender.com/api/cities");
        const result = await response.json();
        if (result.status === 200) {
          setCities(mapCityData(result.data));
        } else {
          throw new Error("Failed to fetch cities");
        }
      } catch (err) {
        setError("Error fetching cities");
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, []);

  return { cities, loading, error };
};

export default useCities;
