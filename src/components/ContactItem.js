import React from 'react';

export default function ContactItem({ id, name, number, onDeleteContact }) {
  return (
    <li>
      {name}: {number}
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
}
