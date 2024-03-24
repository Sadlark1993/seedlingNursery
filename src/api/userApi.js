import rootUri from './rootUri';

export const login = async (cred) => {
  const response = await fetch(rootUri + '/authenticate', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(cred)
  });

  const respObj = await response.json();

  if (response.ok) {
    const token = await response.headers.get('Authorization').replace('Bearer ', '');
    localStorage.setItem('Authorization', token);
    localStorage.setItem('user', respObj.username);
    localStorage.setItem('authority', respObj.authority);
  }

  return await respObj;
};

export const register = async (cred, authority) => {
  if (localStorage.getItem('authority') !== 'ADMIN' || !localStorage.getItem('Authorization')) {
    return 401;
  }

  const response = await fetch(rootUri + '/user/register/' + authority, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('Authorization')
    },
    method: 'POST',
    body: JSON.stringify(cred)
  });

  return await response.json();
};
