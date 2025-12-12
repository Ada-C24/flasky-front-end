import PropTypes from 'prop-types';
import { useState } from 'react';

const Cat = ({ name, personality, color, caretaker }) => {
  const [petCount, setPetCount] = useState(0);

  const increasePets = () =>{
    setPetCount(prevPetCount => prevPetCount + 1);
  };

	return (
		<li className="cat">
			<h2>{name}</h2>
      <h3>Color: {color}</h3>
      <h3>Personality: {personality}</h3>
      <h3>Caretaker: {caretaker}</h3>
			<p>Meow! I have been pet {petCount} times!</p>
			<button onClick= {(event) => increasePets()}>Pet</button>
		</li>
	);
};

Cat.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    personality: PropTypes.string.isRequired,
    caretaker: PropTypes.string.isRequired
};


export default Cat;