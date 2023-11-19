import rootUri from './rootUri';

export const getAllValves = async () => {
  const valvesPromise = await fetch(rootUri + '/valve/all');
  return await valvesPromise.json();
};

export const getValve = async (id) => {
  const valvePromise = await fetch(rootUri + '/valve/' + id);
  return await valvePromise.json();
};

export const getIrrigationTime = async (id) => {
  const valvePromise = await fetch(rootUri + '/irrigation-time/valve/' + id);
  return await valvePromise.json();
};

export const submitIrrigationTime = async (irrigationTime, valve) => {
  const response = await fetch(rootUri + '/irrigation-time/valve/' + valve, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(irrigationTime)
  });

  if (response.ok) {
    return 'ok';
  } else {
    return response.text;
  }
};

export const deleteIrrigationTime = async (id) => {
  const respose = await fetch(rootUri + '/irrigation-time/delete/' + id, {
    method: 'DELETE'
  });
};
