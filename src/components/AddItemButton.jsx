import React from 'react';

const AddItemButton = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default AddItemButton;
