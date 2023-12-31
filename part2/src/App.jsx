import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-1234567' }]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    const personExists = persons.find(person => person.name.toLowerCase() === newName.toLowerCase());
    const numberExists = persons.find(person => person.number === newNumber);
    if(personExists !== undefined) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    if(numberExists !== undefined) {
      alert(`${newNumber} is already added to phonebook`);
      return;
    }
    const newPerson = { name: newName, number: newNumber };

    setPersons([...persons, newPerson]);

    setNewName('');
    setNewNumber('');
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input type="text" value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input type="text" value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person.name} {person.number}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
