import React, { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   // Aquí iría la lógica para registrar el usuario (petición a la API)
  //   console.log('Registrando usuario', { username, password });
  // };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Realiza la solicitud a la API de registro
      const response = await fetch('http://localhost:4000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password
        }),
      });

      // Verifica si la solicitud fue exitosa
      if (response.ok) {
        const data = await response.json();
        console.log('Usuario registrado:', data.message);
        // Aquí puedes agregar lógica adicional, como redirigir al usuario o mostrar un mensaje de éxito
      } else {
        // Maneja el caso en que la solicitud no fue exitosa
        const errorData = await response.json();
        console.error('Error al registrar el usuario:', errorData.message);
        // Muestra un mensaje de error al usuario si es necesario
      }
    } catch (error) {
      console.error('Error durante el registro:', error);
      // Maneja errores de red u otros errores
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Registro de Usuario</h2>
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
      <button type="submit">Registrar</button>
    </form>
  );
};

export default Register;
