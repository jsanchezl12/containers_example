import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   // Aquí iría la lógica para ingresar el usuario (petición a la API)
  //   console.log('Ingresando usuario', { username, password });
  //   setUser({ username });
  // };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Aquí iría la lógica para hacer la solicitud a la API y obtener el token
      const response = await fetch('http://localhost:4000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password
        }),
      });

      const data = await response.json();
      if (response.ok) {
        await AsyncStorage.setItem('token', data.token); // Guarda el token
        setUser({ username }); // Actualiza el estado del usuario
      } else {
        // Maneja errores de login
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Ingreso de Usuario</h2>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Ingresar</button>
    </form>
  );
};

export default Login;
