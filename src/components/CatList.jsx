import Cat from './Cat';
import PropTypes from 'prop-types';

const CatList = ({ cats }) => {
  const catComponents = cats.map((cat, i) => {
    return (
      <Cat
        key={i}
        name={cat.name}
        personality={cat.personality}
        caretaker={cat.caretaker}
        color={cat.color}
      />
    );
  });
	return (
			<>
					<h1>Cat List</h1>
					<ul>
						{catComponents}
					</ul>
			</>
	);
};

CatList.propTypes = {
    cats: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        caretaker: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        personality: PropTypes.string.isRequired
    })).isRequired
};


export default CatList;