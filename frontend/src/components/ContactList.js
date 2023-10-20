import React, { useState } from 'react';

function Contact(props) {
  const [phoneNumbers, setPhoneNumbers] = useState([]); // Add phoneNumbers state
  const [newType, setNewType] = useState('');
  const [newNumber, setNewNumber] = useState('');

  // Function to add a phone number to the contact
  function addPhoneNumber() {
    const newPhoneNumber = {
      type: newType,
      number: newNumber,
    };

    setPhoneNumbers([...phoneNumbers, newPhoneNumber]);
    setNewType(''); // Clear the type input field
    setNewNumber(''); // Clear the number input field
  }

  // Function to delete a phone number from the contact
  function deletePhoneNumber(index) {
    const updatedPhoneNumbers = [...phoneNumbers];
    updatedPhoneNumbers.splice(index, 1);
    setPhoneNumbers(updatedPhoneNumbers);
  }

  return (
    <div className="contact-box">
      <h3>{props.name}</h3>
      <button
        type="button"
        onClick={props.deleteContact}
      >
        Delete Contact
      </button>
      <div className="phone-input-row">
        <input
          type="text"
          placeholder="Phone Type"
          value={newType}
          onChange={(event) => setNewType(event.target.value)}
        />
        <input
          type="number"
          placeholder="Phone Number"
          value={newNumber}
          onChange={(event) => setNewNumber(event.target.value)}
        />
        <button
          type="button"
          onClick={addPhoneNumber}
        >
          Add
        </button>
      </div>
      {phoneNumbers.map((phoneNumber, index) => (
        <div key={index} className="phone-number-row">
          <div className="phone-number">
            {phoneNumber.type}{'  '}
            {phoneNumber.number}
          </div>
          <button
            type="button"
            onClick={() => deletePhoneNumber(index)}
          >
            Delete Number
          </button>
        </div>
      ))}
    </div>
  );
}





function ContactList(props) {
  const [newContactName, setNewContactName] = useState('');

  // Function to handle input change
  function onChange(event) {
    setNewContactName(event.target.value);
  }

  // Function to create a new contact
  function onClick() {
    fetch('http://localhost/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: newContactName }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.setContacts((contacts) => [...contacts, data]);
        setNewContactName(''); // Clear the input field
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }




  return (
    <div className="container">
      <h1>Contactor</h1>
      <h2>Contacts</h2>
      <div className="centered">
        <input
          type="text"
          placeholder="Name"
          onChange={onChange}
          value={newContactName}
          className="input"
        />
        <button
          type="button"
          onClick={onClick}
        >
          Create Contact
        </button>
      </div>

      {props.contacts.map((contact) => (
        <Contact
          key={contact.id}
          deleteContact={() =>
            props.setContacts((contacts) =>
              contacts.filter((c) => c.id !== contact.id)
            )
          }
          name={contact.name}
        />
      ))}
    </div>
  );
}

export default ContactList;
