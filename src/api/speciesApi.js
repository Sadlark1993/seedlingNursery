import rootUri from './rootUri';

//returns a page with 7 specie objects
export const getSpeciesList = async (page) => {
  const speciesPromise = await fetch(rootUri + '/specie/page/' + (page - 1), {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('Authorization')
    }
  });
  if (speciesPromise.status == 401 || speciesPromise.status == 403) {
    window.location.href = '/';
  }
  const number = +speciesPromise.headers.get('table-size');
  const speciesObj = await speciesPromise.json();
  return { list: speciesObj, number: number };
};

//saves specie object to database, with an optional image file
export const saveSpecie = async (specie, image) => {
  const body = new FormData();
  body.append('specie', new Blob([JSON.stringify(specie)], { type: 'application/json' }));
  if (image) body.append('image', image);

  const response = await fetch(rootUri + '/specie', {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('Authorization')
    },
    method: 'POST',
    body
  });

  if (response.status == 401 || response.status == 403) {
    window.location.href = '/';
  }
  return response;
};

//get specie object by id
export const getSpecie = async (id) => {
  const speciesPromise = await fetch(rootUri + '/specie/' + id, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('Authorization')
    }
  });

  if (speciesPromise.status == 401 || speciesPromise.status == 403) {
    window.location.href = '/';
  }

  return await speciesPromise.json();
};

export const getSpecieImage = async (id) => {
  const imagePromise = await fetch(rootUri + '/specie-images/' + id, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('Authorization')
    }
  });

  if (imagePromise.status == 401 || imagePromise.status == 403) {
    window.location.href = '/';
  }

  return await imagePromise.json();
};

export const getAllSpecies = async () => {
  const speciesPromise = await fetch(rootUri + '/specie/all', {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('Authorization')
    }
  });

  if (speciesPromise.status == 401 || speciesPromise.status == 403) {
    window.location.href = '/';
  }

  return await speciesPromise.json();
};
