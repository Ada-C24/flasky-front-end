import './App.css';
import DATA from './data';
import CatList from './components/CatList';
import NewCatForm from './components/NewCatForm';
import { useEffect, useState } from 'react';
import axios from 'axios';

const petCat = cat => {
  // cat.petCount += 1;
  // return cat;
  return { ...cat, petCount: cat.petCount + 1 };
};

const countTotalPets = catData => {
  // let total = 0;
  // for (const cat of catData) {
  //   total += cat.petCount;
  // }
  // return total;

  return catData.reduce((acc, cat) => {
    return acc + cat.petCount;
  }, 0);
};

const kbaseURL = 'http://localhost:5000';

const getAllCatsAPI = () => {
  return axios.get(`${kbaseURL}/cats`)
    .then(response => response.data)
    .catch(error => console.log(error));
};

const convertFromAPI = (apiCat) => {
  const newCat = {
    ...apiCat,
    caretaker: apiCat.caretaker ? apiCat.caretaker : 'Unknown',
    caretakerId: apiCat.caretaker_id ? apiCat.caretaker_id : null,
    petCount: apiCat.pet_count 
  };

  delete newCat.pet_count;
  delete newCat.caretaker_id;

  return newCat;
};

const addCatAPI = (newCat) => {
  return axios.post(`${kbaseURL}/cats`, newCat)
    .catch(error => console.log(error));
}
const petCatAPI = id => {
  return axios.patch(`${kbaseURL}/cats/${id}/pet`)
    .catch(error => console.log(error));
};

const removeCatAPI = id => {
  return axios.delete(`${kbaseURL}/cats/${id}`)
    .catch(error => console.log(error));
};



function App() {
  const [catData, setCatData] = useState([]);

  const getAllCats = () => {
    return getAllCatsAPI()
      .then(cats => {
        const newCats = cats.map(convertFromAPI);
        setCatData(newCats);
      });
  };

  
  useEffect(() => {
    getAllCats();
  }, []);

  const handlePetCat = id => {
    return petCatAPI(id)
      .then(() => {
        return setCatData(catData => {
          return catData.map(cat => cat.id === id ? petCat(cat) : cat);
        });
      });
  };

  const handleUnregisterCat = id => {
    return removeCatAPI(id)
      .then(() => {
        return setCatData(catData => {
          return catData.filter(cat => cat.id !== id);
        });
      });
  };

  const onHandleSubmit = (data) =>{
    return addCatAPI(data)
      .then((result) => {
        return setCatData((prevCats) => [convertFromAPI(result.data), ...prevCats]);
      });
  };

  const totalPets = countTotalPets(catData);

  return (
    <>
      <h2>Total Pets: {totalPets}</h2>
      <NewCatForm onHandleSubmit={onHandleSubmit}/>
      <CatList
        cats={catData}
        onPetCat={handlePetCat}
        onUnregisterCat={handleUnregisterCat}
      />
    </>
  );
}

export default App;
