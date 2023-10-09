import React, { useEffect, useState } from 'react';

const AllBooks = () => {


  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/book');
        
        // Parse the JSON data
        const result = await response.json();

        // Update the state with the fetched data
        // console.log(result)
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); 
  if (!data) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      {/* {
        data.map()
      } */}
    </div>
  );
};

export default AllBooks;
