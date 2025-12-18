import { useState } from 'react';
import PropTypes from 'prop-types';

const NewCatForm = ({onHandleSubmit}) => {
    const [name, setName] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        const newCat = {
            name,
            personality: 'festive',
            color: 'Silver and Gold',
            petCount: 0
        };
        onHandleSubmit(newCat);
        setName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Cat Name:</label>
            <input type="text" id="name" name="name" value={name} onChange={handleNameChange}/>
            <div>
                <input type="submit" value="Add a cat" />
            </div>
        </form>
    );
};

NewCatForm.propTypes = {
    onHandleSubmit: PropTypes.func.isRequired,
};

export default NewCatForm;