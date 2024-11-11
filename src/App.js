import React,{ useEffect,useState } from 'react';

const App = () => {
  const [userId, setUserId] = useState(1);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const json = await response.json();
        setUserData(json)
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [userId]);
  

  const handleIncrease = () => {
    setTimeout(() => setUserId(userId+1));
  };

  const handleDecrease = () => {
    setTimeout(() => setUserId(userId-1));
  };

  return (

    <div style={{ textAlign: 'center', padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h1>User Details</h1>
      <div>
        <strong>UserID:</strong> 
        <button type="button" onClick={handleDecrease} disabled={userId===1} style={{margin: '5px'}} >
          -
        </button>
        {userId}
        <button type="button" onClick={handleIncrease} disabled={userId===10} style={{margin: '5px'}}>
          +
        </button>
      </div>
      
      {userData &&(<div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '20px' }}>
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Website:</strong> {userData.website}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Phone:</strong> {userData.phone}</p>
      </div>)}
    </div>
  );
};

export default App;