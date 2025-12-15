import PropTypes from 'prop-types';
// import { useState } from 'react';

const Cat = ({
  id,
  name,
  personality,
  color,
  caretaker,
  petCount,
  onPet,
  onUnregister,
}) => {

  const increasePets = () => {
    // console.log(id);
    onPet(id);
  };

  return (
    <li className="cat">
      <h2>{name}</h2>
      <h3>Color: {color}</h3>
      <h3>Personality: {personality}</h3>
      <h3>Caretaker: {caretaker}</h3>
      <p>Meow! I have been pet {petCount} times!</p>
      <button onClick={(event) => increasePets()}>Pet</button>
      <button onClick={(event) => onUnregister(id)}>Unregister</button>
    </li>
  );
};

Cat.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  personality: PropTypes.string.isRequired,
  caretaker: PropTypes.string.isRequired,
  petCount: PropTypes.number.isRequired,
  onPet: PropTypes.func.isRequired,
  onUnregister: PropTypes.func.isRequired,
};


export default Cat;