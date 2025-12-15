import Cat from './Cat';
import PropTypes from 'prop-types';

const CatList = ({ cats, onPetCat, onUnregisterCat }) => {
  const catComponents = cats.map((cat) => {
    return (
      <Cat
        key={cat.id}
        id={cat.id}
        name={cat.name}
        personality={cat.personality}
        caretaker={cat.caretaker}
        color={cat.color}
        petCount={cat.petCount}
        onPet={onPetCat}
        onUnregister={onUnregisterCat}
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
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        caretaker: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        personality: PropTypes.string.isRequired,
        petCount: PropTypes.number.isRequired,
    })).isRequired,
    onPetCat: PropTypes.func.isRequired,
    onUnregisterCat: PropTypes.func.isRequired,
};


export default CatList;