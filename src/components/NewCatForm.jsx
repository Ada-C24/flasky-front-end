import { useState } from 'react';
import PropTypes from 'prop-types';

const kDefaultsFormState = {
  name: '',
  personality: '',
  color: ''
};

const NewCatForm = ({onHandleSubmit}) => {
    const [formData, setFormData] = useState(kDefaultsFormState);


    const handleChange = (event) => {
      const inputValue = event.target.value;
      const inputName = event.target.name;

      setFormData(formData => {
        return {
          ...formData,
          [inputName]: inputValue
        };
      });
    };

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        onHandleSubmit(formData);
        setFormData(kDefaultsFormState);
    };

    const makeControlledInput = (inputName) => {
      return (
        <input
          type="text"
          name={inputName}
          id={`input-${inputName}`}
          value={formData[inputName]}
          onChange={handleChange}
        />
      );
    };

    return (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Cat Name:</label>
            { makeControlledInput('name') }
          </div>
          <div>
            <label htmlFor="color">Color:</label>
            { makeControlledInput('color') }
          </div>
          <div>
            <label htmlFor="personality">Personality:</label>
            { makeControlledInput('personality') }
          </div>
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