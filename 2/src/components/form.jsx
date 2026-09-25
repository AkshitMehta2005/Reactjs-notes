import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passward, setPassward] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();
    alert("You have submitted: " + name + " " + email + " " + passward);

    // Resetting the form fields
    setName('');
    setEmail('');
    setPassward('');
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div>
          Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          Password: <input type="text" value={passward} onChange={(e) => setPassward(e.target.value)} />
        </div>
        <button type="submit">Click</button>
      </form>
    </div>
  );
};

export default Form;
