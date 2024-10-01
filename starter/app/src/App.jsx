import "./App.css";
import styled from "styled-components";
import NavTop from "./Components/NavTop";
import FoodContainer from "./Components/FoodContainer";
import { useState, useEffect } from "react";

const BASE_URL = 'http://localhost:9000';

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError('Unable to find data');
      } finally {
        setLoading(false);  // Ensure loading is set to false after data or error is handled
      }
    };
    fetchFoodData();
  }, []);  // Fix dependency array

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <Maincontainer>
      <div>
        <NavTop />
      </div>
      <div>
        <FoodContainer data={data} />
      </div>
    </Maincontainer>
  );
};

export default App;

const Maincontainer = styled.div``;
