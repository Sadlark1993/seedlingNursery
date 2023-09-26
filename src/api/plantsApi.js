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
