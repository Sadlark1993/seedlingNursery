import rootUri from './rootUri';

export const getAllValves = async () => {
  const valvesPromise = await fetch(rootUri + '/valve/all');
  return await valvesPromise.json();
};

export const getAllSensors = async () => {
  const sensorsPromise = await fetch(rootUri + '/sensor/all');
  return await sensorsPromise.json();
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
    return response.text();
  }
};

export const deleteIrrigationTime = async (id) => {
  await fetch(rootUri + '/irrigation-time/delete/' + id, {
    method: 'DELETE'
  });
};

export const deleteValve = async (id) => {
  await fetch(rootUri + '/valve/delete/' + id, {
    method: 'DELETE'
  });
};

export const saveValve = async (valve) => {
  const response = await fetch(rootUri + '/valve', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(valve)
  });

  if (response.ok) {
    return 'ok';
  } else {
    return response.text();
  }
};

//************************************* Sensors ************************************/

export const getSensor = async (id) => {
  const sensorPromise = await fetch(rootUri + '/sensor/' + id);
  return await sensorPromise.json();
};

export const saveSensor = async (sensor) => {
  const response = await fetch(rootUri + '/sensor', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(sensor)
  });

  if (response.ok) {
    return 'ok';
  } else {
    return response.text();
  }
};
