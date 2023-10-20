import { useState, useEffect } from 'react';
import ContactList from './components/ContactList';


function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost/api/contacts')
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className='Contact'>
      <ContactList heading='Contactor' contacts={contacts} setContacts={setContacts} />
    </div>
  );
}

export default App;
