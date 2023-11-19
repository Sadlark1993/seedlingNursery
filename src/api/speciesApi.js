import rootUri from './rootUri';

//returns a page with 7 specie objects
export const getSpeciesList = async (page) => {
  const speciesPromise = await fetch(rootUri + '/specie/page/' + (page - 1));
  const number = +speciesPromise.headers.get('table-size');
  const speciesObj = await speciesPromise.json();
  return { list: speciesObj, number: number };
};

//saves specie object to database
export const saveSpecie = (specie) => {
  fetch(rootUri + '/specie', {
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

export const getAllSpecies = async () => {
  const speciesPromise = await fetch(rootUri + '/specie/all');
  return await speciesPromise.json();
};
