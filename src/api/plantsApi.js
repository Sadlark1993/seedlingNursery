import rootUri from './rootUri';

// To populate the rows from PlantsBySpecie component
export const getPlantsBySpeciePage = async (page, pageSize, specieId, matrix, seedling, seed) => {
  const plantsPromise = await fetch(
    rootUri +
      '/plant/plants-per-specie-page/' +
      (page - 1) +
      '/page-size/' +
      pageSize +
      '/specie/' +
      specieId +
      '/' +
      matrix +
      '/' +
      seedling +
      '/' +
      seed
  );
  const number = +plantsPromise.headers.get('table-size');
  const plantsObj = await plantsPromise.json();
  return { list: plantsObj, number: number };
};

//gets plant object by id
export const getPlantById = async (id) => {
  const plantPromise = await fetch(rootUri + '/plant/' + id);
  return await plantPromise.json();
};

//gets plant image by id
export const getPlantImage = async (id) => {
  const imagePromise = await fetch(rootUri + '/plant-images/' + id);
  return await imagePromise.json();
};

export const savePlant = async (obj) => {
  //in case that the specie isn't identified in the plant obj
  console.log(obj);
  let matrixSpecie = !obj.submitObj.specie ? 0 : obj.submitObj.specie;
  if (!obj.submitObj.specie && obj.submitObj.originMatrix) {
    const matrix = await getPlantById(obj.submitObj.originMatrix);
    matrixSpecie = await matrix.specie.id;
    console.log('noSpecie: ' + obj);
  }

  obj.submitObj.specie = null;

  fetch(rootUri + '/plant/' + matrixSpecie + '/number/' + obj.amount, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(obj.submitObj)
  })
    .then((response) => {
      return response;
    })
    .catch((rejection) => {
      console.log(rejection);
      return rejection;
    });
};
