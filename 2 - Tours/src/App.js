import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTours = (id) => {   {/* if tour id does not match the id, add to newTours if matches delete it*/}
    const newTours = tours.filter((tour) => tour.id !== id);
      setTours(newTours);
  }


  
  const fetchTours = async () => {
    setLoading(true);

    try {
    const response = await fetch(url);
    const tours = await response.json();
    setLoading(false);
    setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTours();
  }, []);


  if (loading) {
  return (
    <main>
      <Loading />
    </main>
  )
  }
  return (
    <main>
      <Tours tours={tours} removeTours={removeTours}/>
    </main>
  )
}

export default App;
