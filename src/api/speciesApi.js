import rootUri from './rootUri';

//returns a page with 7 specie objects
export const getSpeciesList = async (page) => {
  const speciesPromise = await fetch(rootUri + '/specie/page/0');
  const speciesObj = await speciesPromise.json();
  return speciesObj;
};

//saves specie object to database
export const saveSpecie = (specie) => {
  fetch(rootUri + '/especie', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(specie)
  });
};

//get specie object by id
export const getSpecie = async (id) => {
  const speciesPromise = await fetch(rootUri + '/specie/' + id);
  return await speciesPromise.json();
};

export const getSpecieImage = async (id) => {
  const imagePromise = await fetch(rootUri + '/specie-images/' + id);
  return await imagePromise.json();
};
