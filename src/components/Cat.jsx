import PropTypes from 'prop-types';

const Cat = ({ name, personality, color, caretaker }) => {
	return (
		<li className="cat">
			<h2>{name}</h2>
      <h3>Color: {color}</h3>
      <h3>Personality: {personality}</h3>
      <h3>Caretaker: {caretaker}</h3>
			<p>Meow!</p>
			<button>Pet</button>
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