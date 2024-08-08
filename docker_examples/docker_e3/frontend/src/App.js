import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Notes from './components/Notes';
import AsyncStorage from '@react-native-async-storage/async-storage';


const App = () => {
  const [user, setUser] = useState(null);

  // const handleLogout = () => {
  //   setUser(null);
  // };
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token'); // Elimina el token
      setUser(null); // Limpia el estado del usuario
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };


  return (
    <div>
      {!user ? (
        <>
          <Register />
          <Login setUser={setUser} />
        </>
      ) : (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <Notes user={user} />
        </div>
      )}
    </div>
  );
};

export default App;
