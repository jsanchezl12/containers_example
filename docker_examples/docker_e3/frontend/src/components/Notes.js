import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';




const Notes = ({ user }) => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  // const handleAddNote = () => {
  //   setNotes([...notes, newNote]);
  //   setNewNote('');
  // };

  const fetchNotes = async () => {
    try {
      const token = await AsyncStorage.getItem('token'); // Recupera el token
      const response = await fetch('http://localhost:4000/api/notes/', {
        headers: {
          'Authorization': `${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Error al obtener las notas');
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      const notes = data.map((note) => note.content);
      setNotes(notes);
      setNewNote('');
    } catch (error) {
      console.error('Error al obtener las notas:', error);
    }
  };


  const handleAddNote = async () => {
    try {
      const token = await AsyncStorage.getItem('token'); // Recupera el token
      console.log('Token:', token);
      console.log('Nueva nota:', newNote);
      const response = await fetch('http://localhost:4000/api/notes/', {
        method: 'POST',
        headers: {
          'Authorization': `${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: newNote }),
      });

      if (!response.ok) {
        throw new Error('Error al agregar la nota');
      }

      const data = await response.json();
      //setNotes([...notes, data]);
      //setNewNote('');
      fetchNotes();
    } catch (error) {
      console.error('Error al agregar la nota:', error);
    }
  };


  useEffect(() => {
    fetchNotes();
  }, []);



  return (
    <div>
      <h2>Notas de {user.username}</h2>
      <input
        type="text"
        placeholder="Nueva Nota"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      />
      <button onClick={handleAddNote}>Añadir Nota</button>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
